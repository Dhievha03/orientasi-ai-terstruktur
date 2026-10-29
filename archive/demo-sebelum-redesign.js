/* Arsip demo teknis lama. Versi aktif tidak menggunakan kode atau pengujian fungsi. */
(() => {
  'use strict';
  const spec = window.TEFA_DECK.demo;
  const escape = value => String(value).replace(/[&<>"']/g,char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[char]);
  const modes = {
    before: { label: 'Fungsi awal', description: 'Hanya menghitung jumlah karakter. Spasi saja masih dianggap nama.' },
    fixed: { label: 'Hasil perbaikan', description: 'Hasil trim disimpan, diperiksa, dan dipakai sebagai nama.' },
    ignored: { label: 'Hasil trim diabaikan', description: 'trim dipanggil, tetapi pemeriksaan masih memakai raw yang lama.' },
    handler: { label: 'Hasil ok diabaikan', description: 'Fungsi sudah benar, tetapi alur kirim tetap menampilkan pesan berhasil.' }
  };
  const validators = {
    before(raw) {
      if (raw.length === 0) return {ok:false,error:'Nama belum diisi'};
      return {ok:true,name:raw};
    },
    fixed(raw) {
      const name = raw.trim();
      if (name.length === 0) return {ok:false,error:'Nama belum diisi'};
      return {ok:true,name};
    },
    ignored(raw) {
      raw.trim();
      if (raw.length === 0) return {ok:false,error:'Nama belum diisi'};
      return {ok:true,name:raw};
    }
  };
  let root = null;
  const state = {
    mode: 'before', name: '', kelas: spec.defaultClass, result: null,
    feedback: 'Belum ada percobaan.', status: 'idle', instructions: '',
    records: {}, enterCheck: null, enterPressed: false
  };
  const $ = selector => root?.querySelector(selector);
  const idleRecord = () => ({status:'belum diuji',actual:'Belum dijalankan.',observations:[]});
  const record = id => state.records[id] || idleRecord();
  const browserName = () => {
    const ua = navigator.userAgent;
    const edge = ua.match(/Edg\/([\d.]+)/);
    const firefox = ua.match(/Firefox\/([\d.]+)/);
    const chrome = ua.match(/Chrome\/([\d.]+)/);
    if (edge) return `Microsoft Edge ${edge[1]}`;
    if (firefox) return `Firefox ${firefox[1]}`;
    if (chrome) return `Chrome ${chrome[1]}`;
    return ua;
  };

  function template(variant = 'intro') {
    return `<div class="demo-lab demo-simple" data-demo-lab data-variant="${escape(variant)}">
      <div class="demo-modebar" role="group" aria-label="Pilih contoh kode"><button type="button" data-demo-mode="before" aria-pressed="${state.mode==='before'}">Awal</button><button type="button" data-demo-mode="fixed" aria-pressed="${state.mode==='fixed'}">Perbaikan</button></div>
      <p class="demo-mode-description" data-demo-mode-description${['before','fixed'].includes(state.mode)?' hidden':''}>Contoh: ${escape(modes[state.mode].label)}</p>
      <form id="tefa-demo-form" class="demo-form" action="#" novalidate autocomplete="off">
          <span class="demo-section-label">FORMULIR CONTOH / PEMATERI</span>
          <label for="demo-name">Nama</label><input id="demo-name" name="nama" type="text" value="${escape(state.name)}" autocomplete="off" spellcheck="false">
          <label for="demo-class">Kelas contoh</label><input id="demo-class" name="kelas" type="text" value="${escape(state.kelas)}" autocomplete="off" spellcheck="false">
          <div class="demo-form-actions"><button type="submit">Daftar</button><button type="reset">Reset</button></div>
          <div class="demo-feedback" data-demo-feedback data-status="${state.status}" role="status" aria-live="polite">${escape(state.feedback)}</div>
          <p class="demo-local-note">Contoh lokal. Tidak mengirim data.</p>
      </form>
      <div class="demo-simple-actions"><button type="button" data-demo-show-code>Lihat kode</button><button type="button" data-demo-report>Catatan tes</button><details class="demo-preset-details"><summary>Siapkan isian</summary><div class="demo-presets" role="group" aria-label="Siapkan contoh isian"><button type="button" data-demo-preset="normal">Rina</button><button type="button" data-demo-preset="empty">Kosong</button><button type="button" data-demo-preset="spaces">Tiga spasi</button></div></details></div>
      <p class="demo-instructions" data-demo-instructions role="status" aria-live="polite">${escape(state.instructions)}</p>
    </div>`;
  }

  function setValues(name,kelas = spec.defaultClass) {
    state.name = name;
    state.kelas = kelas;
    if ($('#demo-name')) $('#demo-name').value = name;
    if ($('#demo-class')) $('#demo-class').value = kelas;
  }

  function paint() {
    if (!root?.isConnected) return;
    root.dataset.mode = state.mode;
    root.querySelectorAll('[data-demo-mode]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.demoMode === state.mode)));
    $('[data-demo-mode-description]').textContent = `Contoh: ${modes[state.mode].label}`;
    $('[data-demo-mode-description]').hidden = ['before','fixed'].includes(state.mode);
    $('[data-demo-feedback]').textContent = state.feedback;
    $('[data-demo-feedback]').dataset.status = state.status;
    $('[data-demo-instructions]').textContent = state.instructions;
    root.querySelectorAll('[data-demo-test]').forEach(label => {
      const result = record(label.dataset.demoTest);
      label.textContent = result.status;
      label.dataset.status = result.status;
    });
  }

  function snapshot() {
    return {
      nama: $('#demo-name')?.value ?? state.name,
      kelas: $('#demo-class')?.value ?? state.kelas,
      status: $('[data-demo-feedback]')?.dataset.status ?? state.status,
      pesan: $('[data-demo-feedback]')?.textContent ?? state.feedback,
      hasil: state.result ? {...state.result} : null
    };
  }

  function submit(entered) {
    state.name = $('#demo-name').value;
    state.kelas = $('#demo-class').value;
    const validator = validators[state.mode === 'handler' ? 'fixed' : state.mode];
    state.result = validator(state.name);
    const success = state.mode === 'handler' || state.result.ok;
    state.status = success ? 'success' : 'error';
    state.feedback = success ? 'Pendaftaran berhasil' : state.result.error;
    paint();
    if (entered && state.enterCheck) finishEnterStep(snapshot());
  }

  function resetForm() {
    setValues('',spec.defaultClass);
    state.result = null;
    state.status = 'idle';
    state.feedback = 'Belum ada percobaan.';
    state.enterPressed = false;
    paint();
  }

  function mount(element) {
    root = element;
    if (!root) return;
    root.dataset.mode = state.mode;
    $('#tefa-demo-form').addEventListener('submit',event => {
      event.preventDefault();
      const entered = state.enterPressed;
      state.enterPressed = false;
      submit(entered);
    });
    $('#tefa-demo-form').addEventListener('reset',event => { event.preventDefault(); resetForm(); });
    $('#tefa-demo-form').addEventListener('keydown',event => {
      if (event.key !== 'Enter' || !event.target.matches('input')) return;
      if (event.repeat) { event.preventDefault(); return; }
      state.enterPressed = event.isTrusted;
    });
    $('#demo-name').addEventListener('input',event => { state.name = event.target.value; });
    $('#demo-class').addEventListener('input',event => { state.kelas = event.target.value; });
    root.addEventListener('click',event => {
      const button = event.target.closest('button');
      if (!button) return;
      if (button.dataset.demoMode) changeMode(button.dataset.demoMode);
      else if (button.dataset.demoPreset) {
        const values = {normal:'Rina',empty:'',spaces:'   '};
        setValues(values[button.dataset.demoPreset]);
        state.instructions = button.dataset.demoPreset === 'spaces' ? 'Nama berisi tiga spasi. Klik Daftar untuk melihat hasilnya.' : 'Isian sudah disiapkan. Klik Daftar untuk melihat hasilnya.';
        paint();
        button.closest('details')?.removeAttribute('open');
        $('#demo-name').focus({preventScroll:true});
      } else if (button.hasAttribute('data-demo-run-all')) runAll();
      else if (button.hasAttribute('data-demo-enter')) startEnterTest();
      else if (button.hasAttribute('data-demo-report')) showDialog('report');
      else if (button.hasAttribute('data-demo-show-code')) showDialog('code');
    });
    paint();
  }

  function changeMode(mode) {
    if (!modes[mode] || mode === state.mode) return;
    state.mode = mode;
    state.records = {};
    state.enterCheck = null;
    state.enterPressed = false;
    state.result = null;
    state.status = 'idle';
    state.feedback = 'Belum ada percobaan.';
    state.instructions = 'Kode diganti. Catatan tes dikosongkan; coba kembali.';
    paint();
  }

  function attempt(name,kelas = spec.defaultClass) {
    setValues(name,kelas);
    state.enterPressed = false;
    $('button[type="submit"]').click();
    return snapshot();
  }

  function hasShape(result,key) {
    return Boolean(result) && typeof result.ok === 'boolean' && Object.keys(result).sort().join(',') === [key,'ok'].sort().join(',');
  }

  function runTest(id) {
    if (!root?.isConnected) return;
    let observations = [];
    let passed = false;
    if (id === 'T1') {
      const actual = attempt('Rina'); observations = [actual];
      passed = actual.status === 'success' && actual.pesan === 'Pendaftaran berhasil' && actual.hasil?.name === 'Rina' && actual.hasil.ok === true && hasShape(actual.hasil,'name');
    } else if (id === 'T2' || id === 'T3') {
      const actual = attempt(id === 'T2' ? '' : '   '); observations = [actual];
      passed = actual.status === 'error' && actual.pesan === 'Nama belum diisi' && actual.hasil?.ok === false && hasShape(actual.hasil,'error');
    } else if (id === 'T4') {
      const actual = attempt('  Rina  '); observations = [actual];
      passed = actual.status === 'success' && actual.hasil?.name === 'Rina';
    } else if (id === 'T5') {
      const actual = attempt('Rina  Putri'); observations = [actual];
      passed = actual.status === 'success' && actual.hasil?.name === 'Rina  Putri';
    } else if (id === 'T6') {
      const first = attempt(''); const second = attempt('Rina'); observations = [first,second];
      passed = first.status === 'error' && first.pesan === 'Nama belum diisi' && second.status === 'success' && second.pesan === 'Pendaftaran berhasil';
    } else if (id === 'T7') {
      setValues('Rina','XI PPLG B');
      $('button[type="reset"]').click();
      const actual = snapshot(); observations = [actual];
      passed = actual.nama === '' && actual.kelas === spec.defaultClass && actual.status === 'idle' && actual.hasil === null;
    }
    state.records[id] = { status:passed ? 'lulus' : 'gagal',actual:JSON.stringify(observations,null,2),observations,mode:state.mode };
    paint();
  }

  function runAll() {
    state.enterCheck = null;
    for (const test of spec.tests.filter(test => test.id !== 'T8')) runTest(test.id);
    state.instructions = 'T1–T7 sudah dicoba. Hasilnya tersedia pada Catatan tes.';
    paint();
  }

  function startEnterTest() {
    if (!root?.isConnected) return;
    state.records.T8 = {status:'belum diuji',actual:'Menunggu penekanan Enter untuk nama biasa dan spasi saja.',observations:[]};
    state.enterCheck = {stage:1,first:null};
    resetForm();
    setValues('Rina');
    state.instructions = 'T8 · Langkah 1: Nama berisi “Rina”. Tekan Enter di kolom Nama.';
    paint();
    $('#demo-name').focus({preventScroll:true});
  }

  function finishEnterStep(actual) {
    if (state.enterCheck.stage === 1) {
      state.enterCheck = {stage:2,first:actual};
      setValues('   ');
      state.result = null;
      state.status = 'idle';
      state.feedback = 'Belum ada percobaan.';
      state.instructions = 'T8 · Langkah 2: Nama kini berisi tiga spasi. Tekan Enter sekali lagi.';
      paint();
      $('#demo-name').focus({preventScroll:true});
      return;
    }
    const first = state.enterCheck.first;
    const passed = first.status === 'success' && first.hasil?.name === 'Rina' && actual.status === 'error' && actual.pesan === 'Nama belum diisi';
    const observations = [first,actual];
    state.records.T8 = {status:passed ? 'lulus' : 'gagal',actual:JSON.stringify(observations,null,2),observations,mode:state.mode};
    state.enterCheck = null;
    state.instructions = `T8 ${passed ? 'lulus' : 'gagal'} berdasarkan dua pengiriman dengan Enter yang baru dilakukan.`;
    paint();
  }

  function reportText() {
    const lines = ['CATATAN DEMO LOKAL',`Mode kode: ${modes[state.mode].label}`,`Browser: ${browserName()}`,'Ini hasil percobaan halaman ini, bukan hasil pekerjaan agent atau layanan pendaftaran.',''];
    for (const test of spec.tests) {
      const result = record(test.id);
      lines.push(`${test.id} / ${test.ac} — ${result.status}`,`Langkah: ${test.steps}`,`Diharapkan: ${test.expected}`,`Hasil yang dicatat: ${result.actual}`,'');
    }
    return lines.join('\n');
  }

  function showDialog(panel = 'report',codeKey) {
    const dialog = document.querySelector('#demo-dialog');
    if (!dialog) return;
    dialog.dataset.panel = panel;
    dialog.querySelectorAll('[data-demo-panel]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.demoPanel === panel)));
    const body = dialog.querySelector('#demo-dialog-content');
    if (panel === 'code') {
      const preview=modes[codeKey]?codeKey:state.mode;
      body.innerHTML = `<div class="demo-code-choices" role="group" aria-label="Lihat contoh kode">${Object.entries(modes).map(([id,mode])=>`<button type="button" data-preview-code="${id}" aria-pressed="${id===preview}">${escape(mode.label)}</button>`).join('')}</div><p class="demo-dialog-summary"><strong>${escape(modes[preview].label)}</strong><br>${escape(modes[preview].description)}</p><pre class="code-block"><code>${escape(spec.code[preview])}</code></pre>${root?.isConnected?'<button type="button" class="inline-action" data-demo-apply>Gunakan pada formulir</button>':''}${preview===state.mode?`<div class="demo-return-detail"><h3>Nilai hasil fungsi pada demo</h3><pre class="demo-result" data-demo-result>${state.result?escape(JSON.stringify(state.result,null,2)):'Belum ada hasil fungsi.'}</pre></div>`:''}<p class="modal-foot">${root?.isConnected?'Pilih Gunakan pada formulir untuk mengganti mode demo secara manual.':'Kode lengkap dari contoh yang dipilih. Mode demo tidak berubah saat melihat kode.'}</p>`;
      body.querySelectorAll('[data-preview-code]').forEach(button=>button.addEventListener('click',()=>showDialog('code',button.dataset.previewCode)));
      body.querySelector('[data-demo-apply]')?.addEventListener('click',()=>{changeMode(preview);dialog.close();$('#demo-name')?.focus({preventScroll:true});});
    } else {
      body.innerHTML = `<p class="demo-dialog-summary"><strong>Mode: ${escape(modes[state.mode].label)}</strong><br>Browser: ${escape(browserName())}</p>${root?.isConnected?'<div class="demo-report-controls"><button type="button" class="inline-action" data-demo-run-all>Jalankan T1–T7</button><button type="button" class="text-action" data-demo-enter>Uji Enter · T8</button></div>':''}<p class="demo-dialog-note">Hasil percobaan lokal. Buka nama tes untuk melihat langkah dan hasil yang dicatat.</p>${spec.tests.map(test => {
        const result = record(test.id);
        return `<details class="demo-test-record"><summary>${test.id} · ${escape(test.label)} <span class="demo-record-status" data-demo-test="${test.id}" data-status="${result.status}">${result.status}</span></summary><div><p><strong>${escape(test.ac)} · Langkah:</strong> ${escape(test.steps)}</p><p><strong>Diharapkan:</strong> ${escape(test.expected)}</p><pre>${escape(result.actual)}</pre></div></details>`;
      }).join('')}<button type="button" class="inline-action" data-demo-clear>Hapus catatan tes lokal</button>`;
      body.querySelector('[data-demo-run-all]')?.addEventListener('click',()=>{dialog.close();runAll();showDialog('report');});
      body.querySelector('[data-demo-enter]')?.addEventListener('click',()=>{dialog.close();startEnterTest();});
      body.querySelector('[data-demo-clear]').addEventListener('click',() => {
        state.records = {}; state.enterCheck = null;
        state.instructions = 'Catatan tes lokal dikosongkan. Semua tes kembali berstatus belum diuji.';
        paint(); showDialog('report');
      });
    }
    if (!dialog.open) dialog.showModal();
  }

  window.TEFA_DEMO = {
    template, mount,
    unmount() { root = null; state.enterPressed = false; },
    showDialog, reportText,
    getState() { return {mode:state.mode,records:structuredClone(state.records),result:state.result ? {...state.result} : null}; }
  };
})();
