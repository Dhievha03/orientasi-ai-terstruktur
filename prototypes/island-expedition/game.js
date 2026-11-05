(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const canvas = $('#world');
  const ctx = canvas.getContext('2d');
  const guides = window.ISLAND_GUIDES;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const tile = 48;
  const warehouse = {x: 15, y: 6};
  const woodLocations = [[5, 3], [7, 4], [6, 7], [4, 6], [8, 6], [7, 8]];
  const trees = [[3, 2], [5, 2], [7, 2], [2, 4], [4, 4], [6, 5], [3, 7], [4, 8], [8, 3], [17, 3], [17, 8]];
  let state;
  let previousTime = 0;
  let hudSignature;
  let notebook;
  const distance = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

  function freshWorld() {
    return {
      robot: {x: 11, y: 8, drawnX: 11, drawnY: 8, carrying: false},
      wood: woodLocations.map(([x, y]) => ({x, y, available: true, regrow: 0})),
      stored: 0, running: false, paused: false, won: false, program: null,
      index: 0, cycle: 1, delay: 0, stepDone: false, target: null, lastReport: -1,
      tone: 'idle', label: 'MULAI DARI BUKU DI SAMPING',
      message: 'Susun cara bekerja robot, lalu tekan Jalankan.'
    };
  }
  function report(label, message, tone = 'idle') {
    state.label = label;
    state.message = message;
    state.tone = tone;
    renderHud();
  }
  function stop(label, message, tone = 'idle') {
    state.running = false;
    state.paused = false;
    state.target = null;
    notebook.highlight(-1);
    report(label, message, tone);
  }
  function start() {
    const program = notebook.read();
    const error = guides.validate(program);
    notebook.error(error);
    if (error) return;
    state = freshWorld();
    state.program = program;
    state.running = true;
    notebook.highlight(0);
    report('ROBOT MULAI BEKERJA', 'Robot mencoba langkah pertama pada panduanmu.');
    $('.play-area').scrollIntoView({block: 'start', behavior: 'instant'});
  }
  function authorChanged() {
    if (state.running) stop('PANDUAN DIUBAH', 'Robot dihentikan. Tekan Jalankan untuk menguji panduan barumu dari awal.');
    else if (state.won) {
      state.won = false;
      report('SIAP MENCOBA LAGI', 'Panduan sudah berubah. Tekan Jalankan untuk menguji dari awal.');
    }
  }
  function walkable(x, y) {
    return x >= 1 && x <= 18 && y >= 1 && y <= 10 && !trees.some(([tx, ty]) => tx === x && ty === y) && !(x >= 14 && x <= 16 && y >= 4 && y <= 6);
  }
  function findPath(target) {
    const robot = state.robot;
    const queue = [{x: robot.x, y: robot.y, path: []}];
    const seen = new Set([`${robot.x},${robot.y}`]);
    for (let at = 0; at < queue.length; at++) {
      const node = queue[at];
      if (distance(node, target) <= 1) return node.path;
      for (const [dx, dy] of [[1, 0], [0, -1], [-1, 0], [0, 1]]) {
        const next = {x: node.x + dx, y: node.y + dy};
        const key = `${next.x},${next.y}`;
        if (!seen.has(key) && walkable(next.x, next.y)) {
          seen.add(key);
          queue.push({...next, path: [...node.path, next]});
        }
      }
    }
    return null;
  }
  function moveToward(target) {
    const path = findPath(target);
    if (path === null) {
      stop('JALUR TERTUTUP', 'Robot tidak menemukan jalan ke tujuan. Tekan Jalankan untuk mencoba lagi.', 'error');
      return false;
    }
    if (!path.length) return true;
    state.robot.x = path[0].x;
    state.robot.y = path[0].y;
    return false;
  }
  function fail(message) {
    const number = state.index + 1;
    stop(`PERIKSA LANGKAH ${number}`, message, 'error');
    notebook.highlight(state.index);
  }
  function perform(action) {
    const robot = state.robot;
    if (action === 'take') {
      if (robot.carrying) {
        fail('Robot masih membawa kayu. Kayu itu perlu dibawa ke gudang dan disimpan sebelum mengambil lagi.');
        return false;
      }
      if (!state.target?.available) {
        const choices = state.wood.filter(item => item.available).map(item => ({item, path: findPath(item)})).filter(item => item.path !== null).sort((a, b) => a.path.length - b.path.length);
        state.target = choices[0]?.item || null;
      }
      if (!state.target) {
        report('MENUNGGU KAYU', 'Kayu sedang habis. Robot menunggu kayu tumbang muncul kembali.');
        return false;
      }
      if (!moveToward(state.target)) return false;
      state.target.available = false;
      state.target.regrow = 14;
      state.target = null;
      robot.carrying = true;
      report('KAYU SUDAH DIAMBIL', 'Robot membawa satu kayu. Langkah berikutnya mengikuti panduanmu.');
      return true;
    }
    if (action === 'carry') {
      if (!robot.carrying) {
        fail('Robot belum membawa kayu. Periksa apa yang perlu dilakukan sebelum menuju gudang.');
        return false;
      }
      if (!moveToward(warehouse)) return false;
      report('ROBOT TIBA DI GUDANG', 'Kayu masih dibawa robot. Sampai di gudang belum berarti kayu sudah disimpan.');
      return true;
    }
    if (action === 'store') {
      if (!robot.carrying) {
        fail('Tidak ada kayu yang bisa disimpan. Robot perlu mengambil kayu terlebih dahulu.');
        return false;
      }
      if (distance(robot, warehouse) > 1) {
        fail('Robot belum sampai di gudang. Tambahkan atau perbaiki langkah untuk membawanya ke sana.');
        return false;
      }
      state.stored++;
      robot.carrying = false;
      report('KAYU TERSIMPAN', `${state.stored} kayu sudah masuk gudang. Robot memeriksa aturan sebelum melanjutkan.`);
      return true;
    }
    return false;
  }
  function applyRule() {
    const effect = guides.checkRule(state.program.rule, state.stored);
    if (effect === 'stop') {
      state.won = state.stored === 3;
      if (state.won) stop('BERHASIL · SKILL DAN RULE BEKERJA', 'Tepat 3 kayu tersimpan dan robot berhenti sendiri. Langkah kerja dan batas yang kamu buat sudah sesuai misi.', 'success');
      else stop('ROBOT MENGIKUTI ATURANMU', `Robot berhenti pada ${state.stored} kayu sesuai batas yang kamu buat. Misinya tepat 3 kayu. Perbaiki jumlah pada aturan, lalu coba lagi.`, 'error');
      return true;
    }
    if (effect === 'report' && state.lastReport !== state.stored) {
      state.lastReport = state.stored;
      report('ROBOT MELAPOR, TETAPI TETAP BEKERJA', `Batas ${state.program.rule.count} kayu sudah tercapai. Aturanmu meminta robot melapor dan tetap bekerja, bukan berhenti.`);
      state.delay = .9;
      return true;
    }
    return false;
  }
  function tick() {
    if (applyRule()) return;
    if (state.stepDone) {
      state.stepDone = false;
      state.index++;
      state.target = null;
      if (state.index >= state.program.steps.length) {
        state.index = 0;
        state.cycle++;
        report('ROBOT MENGULANG CARA KERJA', state.stored >= 3 && !state.program.rule ? 'Kayu sudah cukup, tetapi belum ada aturan berhenti. Robot akan terus mengulang pekerjaan.' : `Urutan selesai. Robot kembali ke langkah pertama untuk putaran ${state.cycle}.`);
        state.delay = .65;
      }
      notebook.highlight(state.index);
      renderHud();
      return;
    }
    const action = state.program.steps[state.index];
    if (perform(action)) {
      state.stepDone = true;
      state.delay = .65;
    } else if (state.running && (state.target || action === 'carry')) {
      report(`LANGKAH ${state.index + 1} · ${guides.actions[action].toUpperCase()}`, action === 'take' ? 'Robot berjalan ke kayu terdekat yang masih tersedia.' : 'Robot membawa kayu menuju gudang.');
    }
  }
  function renderHud() {
    const signature = JSON.stringify([state.stored, state.running, state.paused, state.index, state.cycle, state.label, state.message, state.robot.carrying, state.tone]);
    if (signature === hudSignature) return;
    hudSignature = signature;
    $('#wood-count').textContent = state.stored;
    $('#report-label').textContent = state.label;
    $('#robot-status').textContent = state.message;
    $('#cargo-status').textContent = state.robot.carrying ? 'Bawaan robot: 1 kayu, belum disimpan.' : 'Bawaan robot: kosong.';
    $('.field-report').dataset.tone = state.tone;
    $('#pause-button').disabled = !state.running;
    $('#pause-button').textContent = state.paused ? 'Lanjutkan' : 'Jeda';
    $('#pause-button').setAttribute('aria-pressed', String(state.paused));
    $('#stop-button').disabled = !state.running;
    $('#pause-overlay').hidden = !state.paused;
    $('#step-caption').textContent = state.running ? `Putaran ${state.cycle} · Langkah ${state.index + 1} sedang dikerjakan.` : 'Langkah yang sedang dikerjakan akan ditandai saat robot berjalan.';
  }
  function update(dt) {
    if (!state.running || state.paused || document.hidden || $('#help-dialog').open) return;
    for (const item of state.wood) if (!item.available) {
      item.regrow -= dt;
      if (item.regrow <= 0) item.available = true;
    }
    state.delay -= dt;
    if (state.delay <= 0) {
      state.delay = .12;
      tick();
    }
    const mix = reducedMotion.matches ? 1 : Math.min(1, dt * 24);
    state.robot.drawnX += (state.robot.x - state.robot.drawnX) * mix;
    state.robot.drawnY += (state.robot.y - state.robot.drawnY) * mix;
    renderHud();
  }
  function rect(x, y, w, h, fill) {
    ctx.fillStyle = fill;
    ctx.fillRect(Math.round(x), Math.round(y), w, h);
  }
  function circle(x, y, radius, fill) {
    ctx.fillStyle = fill;
    ctx.beginPath();ctx.arc(x, y, radius, 0, Math.PI * 2);ctx.fill();
  }
  function label(text, x, y) {
    ctx.font = 'bold 15px "Trebuchet MS", sans-serif';
    const size = ctx.measureText(text).width;
    rect(x - size / 2 - 9, y - 18, size + 18, 26, '#163b35');
    ctx.fillStyle = '#f5f0dd';ctx.textAlign = 'center';ctx.fillText(text, x, y);
  }
  function drawTree(x, y) {
    const px = x * tile + 24;
    const py = y * tile + 24;
    circle(px + 4, py + 12, 21, '#557e57');
    rect(px - 5, py, 10, 31, '#7e623c');
    circle(px - 10, py - 5, 18, '#2b5c44');
    circle(px + 11, py - 7, 18, '#2b5c44');
    circle(px, py - 21, 19, '#3b6d4c');
    rect(px - 9, py - 26, 6, 5, '#71925a');
  }
  function draw() {
    rect(0, 0, canvas.width, canvas.height, '#316d69');
    for (let y = 0; y < 12; y++) for (let x = 0; x < 20; x++) {
      if (x < 1 || x > 18 || y < 1 || y > 10) {
        if ((x + y * 3) % 3 === 0) rect(x * tile + 12, y * tile + 26, 23, 2, '#639a8a');
        continue;
      }
      const shore = x === 1 || x === 18 || y === 1 || y === 10;
      rect(x * tile, y * tile, tile, tile, shore ? '#e5d59d' : (x * 5 + y * 3) % 4 ? '#91aa70' : '#8ba26a');
      if (!shore && (x + y) % 3 === 0) {
        rect(x * tile + 9, y * tile + 13, 3, 4, '#72915f');
        rect(x * tile + 31, y * tile + 33, 4, 2, '#72915f');
      }
    }
    for (let x = 5; x <= 15; x++) rect(x * tile, 8 * tile + 8, tile, 28, '#c9bd89');
    for (let y = 6; y <= 8; y++) rect(15 * tile + 8, y * tile, 28, tile, '#c9bd89');
    for (const item of state.wood) if (item.available) {
      const x = item.x * tile + 24;
      const y = item.y * tile + 24;
      rect(x - 18, y - 6, 36, 15, '#82613a');
      rect(x - 18, y - 8, 36, 4, '#b18a51');
      circle(x + 17, y + 1, 9, '#dbb477');
      circle(x + 17, y + 1, 4, '#9a7542');
    }
    const wx = warehouse.x * tile + 24;
    const wy = warehouse.y * tile;
    rect(wx - 62, wy - 76, 124, 93, '#bf9e61');
    rect(wx - 68, wy - 85, 136, 18, '#795a36');
    ctx.fillStyle = '#916841';ctx.beginPath();ctx.moveTo(wx - 77, wy - 85);ctx.lineTo(wx, wy - 125);ctx.lineTo(wx + 77, wy - 85);ctx.fill();
    rect(wx - 23, wy - 44, 46, 61, '#5b593a');
    rect(wx - 17, wy - 40, 34, 57, '#434b35');
    rect(wx - 51, wy - 52, 18, 20, '#e8d7a1');
    rect(wx + 33, wy - 52, 18, 20, '#e8d7a1');
    label(`GUDANG · ${state.stored} KAYU`, wx, wy - 142);
    for (let at = 0; at < Math.min(state.stored, 9); at++) {
      const x = wx + 47 + at % 3 * 9;
      const y = wy + 35 - Math.floor(at / 3) * 13;
      rect(x - 14, y - 4, 26, 9, '#846139');
      circle(x + 11, y, 5, '#ddb477');
    }
    const robot = state.robot;
    const objects = [...trees.map(([x, y]) => ({x, y, tree: true})), {x: robot.drawnX, y: robot.drawnY, tree: false}].sort((a, b) => a.y - b.y);
    for (const object of objects) {
      if (object.tree) { drawTree(object.x, object.y); continue; }
      const x = object.x * tile + 24;
      const y = object.y * tile + 24;
      ctx.fillStyle = '#163b3540';ctx.beginPath();ctx.ellipse(x, y + 20, 19, 7, 0, 0, Math.PI * 2);ctx.fill();
      rect(x - 12, y + 5, 8, 16, '#344e39');
      rect(x + 4, y + 5, 8, 16, '#344e39');
      rect(x - 16, y - 15, 32, 26, '#cf9f3d');
      rect(x - 13, y - 23, 26, 20, '#f3cf78');
      rect(x - 9, y - 17, 18, 8, '#163b35');
      rect(x - 5, y - 15, 3, 3, '#f5f0dd');
      rect(x + 3, y - 15, 3, 3, '#f5f0dd');
      rect(x - 21, y - 7, 6, 17, '#b58733');
      rect(x + 15, y - 7, 6, 17, '#b58733');
      rect(x - 2, y - 32, 4, 9, '#163b35');
      if (robot.carrying) {
        rect(x - 20, y - 1, 40, 12, '#86633b');
        circle(x + 18, y + 5, 7, '#dbb477');
      }
    }
    label('KAYU TUMBANG', 6 * tile, 2 * tile - 29);
    label('ROBOT', robot.drawnX * tile + 24, robot.drawnY * tile - 22);
    ctx.fillStyle = '#f5f0dd';ctx.font = '12px "Trebuchet MS", sans-serif';ctx.textAlign = 'left';ctx.fillText('PULAU TEMU / TEMPAT LATIHAN', 18, 29);
  }
  function pause() {
    if (!state.running) return;
    state.paused = !state.paused;
    renderHud();
  }
  $('#run-button').addEventListener('click', start);
  $('#pause-button').addEventListener('click', pause);
  $('#stop-button').addEventListener('click', () => stop('ROBOT DIHENTIKAN OLEH PEMAIN', 'Robot berhenti karena tombol ditekan. Agar misi selesai, buat aturan yang membuat robot berhenti sendiri.'));
  $('#help-button').addEventListener('click', () => $('#help-dialog').showModal());
  $('#close-help').addEventListener('click', () => $('#help-dialog').close());
  document.addEventListener('keydown', event => {
    if (event.target.matches('input,select,button') || $('#help-dialog').open || event.ctrlKey || event.metaKey || event.altKey) return;
    if ((event.key.toLowerCase() === 'p' || event.key === ' ') && !event.repeat) { event.preventDefault(); pause(); }
  });
  state = freshWorld();
  notebook = window.createIslandNotebook(authorChanged);
  renderHud();
  draw();
  function frame(time) {
    const dt = Math.min(.05, (time - (previousTime || time)) / 1000);
    previousTime = time;
    update(dt);
    draw();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
