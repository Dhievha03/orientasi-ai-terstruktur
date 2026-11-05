(() => {
  'use strict';
  const fields=['nama','nis','kelas','ekstrakurikuler'];
  function normalize(input){
    return Object.fromEntries(fields.map(key=>[key,typeof input?.[key]==='string'?input[key].slice(0,120):'']));
  }
  function backend(input){
    const data={nama:String(input.nama||'').trim(),nis:String(input.nis||'').trim(),kelas:String(input.kelas||''),ekstrakurikuler:String(input.ekstrakurikuler||'')};
    const errors={};
    if(!data.nama)errors.nama='Nama wajib diisi, bukan hanya spasi.';
    if(!/^\d+$/.test(data.nis))errors.nis='NIS wajib diisi dengan angka.';
    if(!['XI A','XI B','XI C'].includes(data.kelas))errors.kelas='Pilih kelas yang tersedia.';
    if(!['Pramuka','Paskibra','PMR','Basket','Futsal','Musik'].includes(data.ekstrakurikuler))errors.ekstrakurikuler='Pilih ekstrakurikuler yang tersedia.';
    return Object.keys(errors).length?{status:422,body:{success:false,message:'Data pendaftaran belum lengkap atau belum sesuai.',data:null,errors}}:{status:200,body:{success:true,message:'Pendaftaran berhasil.',data,errors:{}}};
  }
  const initial=()=>({created:false,checkResponse:false,fieldErrors:false,keepValues:false,simplified:false,slowScript:true,design:'plain',filesAvailable:true,dataLost:false,nuclear:false,deployed:false,resumeDesign:false,records:[]});
  function markup(state){
    const error=name=>state.fieldErrors?`\n    <p id="error-${name}" class="field-error" aria-live="polite"></p>`:'';
    const described=name=>state.fieldErrors?` aria-describedby="error-${name}"`:'';
    const choices=state.simplified?'':`  <div class="field">
    <label for="kelas">Kelas</label>
    <select id="kelas" name="kelas"${described('kelas')}>
      <option value="">Pilih kelas</option>
      <option>XI A</option>
      <option>XI B</option>
      <option>XI C</option>
    </select>${error('kelas')}
  </div>
  <div class="field">
    <label for="ekstrakurikuler">Ekstrakurikuler</label>
    <select id="ekstrakurikuler" name="ekstrakurikuler"${described('ekstrakurikuler')}>
      <option value="">Pilih ekstrakurikuler</option>
      <option>Pramuka</option>
      <option>Paskibra</option>
      <option>PMR</option>
      <option>Basket</option>
      <option>Futsal</option>
      <option>Musik</option>
    </select>${error('ekstrakurikuler')}
  </div>
`;
    return `<h1>Pendaftaran Ekstrakurikuler</h1>
<form id="registration" novalidate>
  <div class="field">
    <label for="nama">Nama lengkap</label>
    <input id="nama" name="nama" maxlength="120"${described('nama')}>${error('nama')}
  </div>
  <div class="field">
    <label for="nis">NIS</label>
    <input id="nis" name="nis" inputmode="numeric" maxlength="120"${described('nis')}>${error('nis')}
  </div>
${choices}
  <button type="submit">Daftar Ekstrakurikuler</button>
  <p id="result" role="status"></p>
</form>`;
  }
  function designSource(design){
    if(design==='plain')return '';
    if(design==='bad')return `#registration {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2px;
  padding: 8px;
  background: #182d77;
  color: #fff;
}

h1 {
  font: 900 58px/.95 Arial, sans-serif;
  text-transform: uppercase;
}

.field {
  min-width: 0;
  margin: 0;
}

label {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  font: 10px Arial, sans-serif;
}

input,
select {
  width: 100%;
  min-height: 20px;
  padding: 0;
  font-size: 10px;
}

button {
  grid-column: 1 / -1;
  width: 100%;
  margin-top: 4px;
  font-size: 27px;
  background: #2755f2;
  color: #fff;
}

.field-error {
  margin: 0;
  font-size: 10px;
  color: #ffe27c;
}

#result {
  grid-column: 1 / -1;
}`;
    return `h1 {
  margin: 0 0 24px;
  font: 700 30px/1.2 Arial, sans-serif;
}

#registration {
  color: #142849;
  font: 18px/1.5 Arial, sans-serif;
}

.field {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  min-height: 48px;
  padding: 10px;
  font: inherit;
  border: 2px solid #7087a3;
}

button {
  width: 100%;
  min-height: 50px;
  padding: 12px;
  background: #163ab6;
  color: #fff;
  border: 0;
  font: inherit;
  cursor: pointer;
}

button:hover {
  background: #0d286e;
}

:focus-visible {
  outline: 3px solid #127390;
  outline-offset: 3px;
}

.field-error {
  margin: 6px 0 0;
  color: #a02036;
  font-size: 16px;
}

.field-error:empty {
  display: none;
}

#result {
  margin-top: 20px;
}`;
  }
  function sources(state){
    if(!state.created)return {html:'',css:'',js:''};
    const handling=state.checkResponse?`  const accepted = response.ok && result.success === true;
  message.textContent = accepted ? "Pendaftaran berhasil." : result.message;
  message.dataset.state = accepted ? "success" : "error";`:`  message.textContent = "Pendaftaran berhasil.";
  message.dataset.state = "success";`;
    const errors=state.fieldErrors?`
function showFieldErrors(errors) {
  for (const fieldName of ["nama", "nis", "kelas", "ekstrakurikuler"]) {
    const fieldMessage = document.querySelector("#error-" + fieldName);
    if (fieldMessage) {
      fieldMessage.textContent = errors[fieldName] || "";
    }
  }
}
`:'';
    const reset=state.keepValues?`  if (response.ok && result.success === true) {
    form.reset();
  }`:'  form.reset();';
    const extraChecks=state.slowScript?`
async function prepareRegistrationData(data) {
  const fieldNames = ["nama", "nis", "kelas", "ekstrakurikuler"];
  const checks = [];

  for (const fieldName of fieldNames) {
    const validation = await validateRegistrationField(fieldName, data);
    checks.push(validation);
  }

  return checks;
}
`:'';
    const js=`const form = document.querySelector("#registration");
const message = document.querySelector("#result");
const submitButton = form.querySelector('button[type="submit"]');
const defaultButtonText = submitButton.textContent;
let isSubmitting = false;
${extraChecks}
function readFormData() {
  const formData = new FormData(form);
  return Object.fromEntries(formData);
}

function setSubmitting(submitting) {
  isSubmitting = submitting;
  submitButton.disabled = submitting;
  submitButton.textContent = submitting ? "Mengirim..." : defaultButtonText;
  form.setAttribute("aria-busy", String(submitting));
}

function clearMessages() {
  delete message.dataset.state;
  message.textContent = "";

  for (const fieldMessage of form.querySelectorAll(".field-error")) {
    fieldMessage.textContent = "";
  }
}

function showResult(response, result) {
${handling}
}
${errors}
function resetForm(response, result) {
${reset}
}

async function submitRegistration(data) {
  const response = await sendRegistration(data);
  const result = await response.json();

  return { response, result };
}

form.addEventListener("submit", async event => {
  event.preventDefault();

  if (isSubmitting) {
    return;
  }

  const data = readFormData();
  clearMessages();
  setSubmitting(true);

  try {
${state.slowScript?'    await prepareRegistrationData(data);\n':''}    const { response, result } = await submitRegistration(data);

    showResult(response, result);
${state.fieldErrors?'    showFieldErrors(result.errors);\n':''}    resetForm(response, result);
  } catch (error) {
    message.textContent = "Pendaftaran belum dapat dikirim. Coba lagi.";
    message.dataset.state = "error";
  } finally {
    setSubmitting(false);
  }
});`;
    return {html:state.filesAvailable?markup(state):'',css:designSource(state.design),js};
  }
  const shellCss=`* { box-sizing: border-box; }
body { margin: 0; background: #eaf2f7; }
.preview-layout { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 24px; padding: 24px; }
.preview-form { min-width: 0; padding: 24px; background: #fff; }
.response-panel { min-width: 0; padding: 24px; background: #111c42; color: #edfaff; font: 18px/1.5 Arial,sans-serif; }
.response-panel h2 { margin: 0 0 14px; font-size: 24px; }
.response-panel p { margin: 0 0 16px; }
.response-panel pre { padding: 16px; overflow: auto; background: #09112d; font: 15px/1.6 Consolas,monospace; white-space: pre; }
.response-panel pre { scrollbar-width: thin; scrollbar-color: #ecfbff #12245c; }
.response-panel pre::-webkit-scrollbar { width: 8px; height: 8px; }
.response-panel pre::-webkit-scrollbar-track { background: #12245c; }
.response-panel pre::-webkit-scrollbar-thumb { background: #ecfbff; border-left: 2px solid #7ce8ff; }
.response-panel pre::-webkit-scrollbar-button { display: none; width: 0; height: 0; }
.json-key { color: #89edff; } .json-string { color: #f7db91; } .json-value { color: #c4baff; }
.response-panel .records-title { margin-top: 26px; }
.preview-empty { padding: 32px; font: 20px/1.5 Arial,sans-serif; color: #142849; }
@supports selector(::-webkit-scrollbar) { .response-panel pre { scrollbar-width: auto; scrollbar-color: auto; } }
@media(max-width:720px) { .preview-layout { grid-template-columns: minmax(0,1fr); gap: 16px; padding: 12px; } .preview-form,.response-panel { padding: 20px; } }
`;
  const safeJson=value=>JSON.stringify(value).replace(/</g,'\\u003c');
  const shortcuts='document.addEventListener("keydown",event=>{if(event.altKey||event.ctrlKey||event.metaKey||event.target.closest("input,textarea,select,[contenteditable=true]"))return;if(["1","2","3"].includes(event.key)){event.preventDefault();postToHost({type:"registration-shortcut",key:event.key});}});';
  const reportRuntimeErrors=`
function reportPreviewError(error){
  registrationFailed=true;
  const message=String(error&&error.message||error||"Kesalahan JavaScript").slice(0,500);
  document.querySelector("#response-status").textContent="Kode Apps tidak dapat dijalankan.";
  document.querySelector("#response-json").textContent=JSON.stringify({runtimeError:message},null,2);
  postToHost({type:"registration-runtime-error",message});
}
window.addEventListener("error",event=>reportPreviewError(event.error||event.message));
window.addEventListener("unhandledrejection",event=>reportPreviewError(event.reason));
`;
  function documentSource(state,values,last,revision=0){
    const start='<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Pendaftaran ekstrakurikuler</title>';
    const notifier=`let registrationFailed=false;function postToHost(message){parent.postMessage({...message,revision:${safeJson(revision)}},"*");}`;
    if(!state.created)return `${start}<style>${shellCss}</style></head><body><main class="preview-empty"><h1>Formulir belum dibuat</h1><p>Lanjutkan percakapan sampai AI membuat halaman pendaftaran.</p></main><script>${notifier}\n${shortcuts}<\/script></body></html>`;
    const source=sources(state);
    const form=state.filesAvailable?source.html:'<h1>Halaman tidak ditemukan</h1><p>Berkas halaman formulir sudah terhapus.</p>';
    const service=String.raw`
const backend = ${backend.toString()};
let pendingRegistration=null;
const simulatedApiLatencyMs=250;
const simulateApiLatency=()=>new Promise(resolve=>setTimeout(resolve,simulatedApiLatencyMs));
async function validateRegistrationField(fieldName,data){
  await simulateApiLatency();
  const result=backend(data);
  return {field:fieldName,error:result.body.errors[fieldName]||null};
}
function renderResponse(result) {
  const panel=document.querySelector("#response-json");
  panel.replaceChildren();
  const json=JSON.stringify(result,null,2);
  const pattern=/("(?:\\.|[^"\\])*"\s*:|"(?:\\.|[^"\\])*"|\btrue\b|\bfalse\b|\bnull\b|\b\d+\b)/g;
  let offset=0;
  for(const part of json.matchAll(pattern)){
    panel.append(document.createTextNode(json.slice(offset,part.index)));
    const token=document.createElement("span");
    token.className=part[0].endsWith(":")?"json-key":part[0].startsWith('"')?"json-string":"json-value";
    token.textContent=part[0];panel.append(token);offset=part.index+part[0].length;
  }
  panel.append(document.createTextNode(json.slice(offset)));
}
async function sendRegistration(data){
  await simulateApiLatency();
  const result=backend(data);
  registrationFailed=false;
  pendingRegistration=data;
  document.querySelector("#response-status").textContent="Status response: "+result.status;
  renderResponse(result.body);
  return new Response(JSON.stringify(result.body),{status:result.status,headers:{"Content-Type":"application/json"}});
}
`;
    const bridge=`
const formElement=document.querySelector("#registration");
if(formElement){
  let submissionStarted=0;
  formElement.addEventListener('submit',()=>{if(!formElement.querySelector('button[type="submit"]').disabled)submissionStarted=performance.now();},{capture:true});
  for(const [fieldName,value] of Object.entries(${safeJson(normalize(values))}))if(formElement.elements[fieldName])formElement.elements[fieldName].value=value;
  const reportInput=()=>postToHost({type:"registration-input",input:Object.fromEntries(new FormData(formElement))});
  formElement.addEventListener("input",reportInput);formElement.addEventListener("change",reportInput);
  new MutationObserver(()=>{
    if(!pendingRegistration||registrationFailed||!['success','error'].includes(document.querySelector('#result').dataset.state))return;
    const input=pendingRegistration;pendingRegistration=null;
    const valuesAfter=Object.fromEntries(new FormData(formElement));
    postToHost({type:"registration-result",input,valuesAfter,durationMs:Math.max(0,performance.now()-submissionStarted),flags:${safeJson({checkResponse:state.checkResponse,fieldErrors:state.fieldErrors,keepValues:state.keepValues,simplified:state.simplified,slowScript:state.slowScript})}});
    postToHost({type:"registration-input",input:valuesAfter});
  }).observe(document.querySelector("#result"),{childList:true,subtree:true,characterData:true});
}
${shortcuts}
const previousResponse=${safeJson(last||null)};
if(previousResponse){document.querySelector("#response-status").textContent="Status response: "+previousResponse.status;renderResponse(previousResponse.body);}
window.addEventListener("message",event=>{if(event.source!==parent||event.data?.type!=="registration-records")return;const records=event.data.records;document.querySelector("#accepted-records").textContent=records.length?JSON.stringify(records,null,2):"Belum ada pendaftaran yang diterima.";});
postToHost({type:"registration-ready"});
`;
    const panel='<section class="response-panel"><h2>Response backend</h2><p id="response-status" role="status">Belum ada response.</p><pre id="response-json" tabindex="0">Kirim formulir untuk melihat response.</pre><h2 class="records-title">Pendaftaran diterima</h2><pre id="accepted-records" tabindex="0">Belum ada pendaftaran yang diterima.</pre></section>';
    return `${start}<style>${shellCss}\n${source.css}</style></head><body><main class="preview-layout"><section class="preview-form">${form}</section>${panel}</main><script>${notifier}\n${reportRuntimeErrors}<\/script><script>${service}\n${state.filesAvailable?source.js:''}\n${bridge}<\/script></body></html>`;
  }
  function problems(state){
    if(!state.filesAvailable)return 'missing';
    if(state.dataLost)return 'data';
    if(state.simplified)return 'difficult';
    if(!state.checkResponse)return 'false-success';
    if(!state.fieldErrors||!state.keepValues)return 'difficult';
    if(state.design==='bad')return 'design';
    return 'ready';
  }
  function sourceKey(state,file){
    const keys=file==='html'?['created','filesAvailable','fieldErrors','simplified']:file==='css'?['created','design']:['created','checkResponse','fieldErrors','keepValues','slowScript'];
    return JSON.stringify(keys.map(key=>state[key]));
  }
  function codeSections(state,file){
    const source=sources(state)[file];
    if(!source)return [];
    const lines=source.split('\n');
    const section=(id,label,start,end)=>({id,label,start:Math.max(0,start),end:Math.max(start,end)});
    if(file==='css')return [section('design','Susunan dan ukuran formulir',0,lines.length-1)];
    if(file==='html')return [section('fields','Label dan isian formulir',0,lines.length-1),...(state.simplified?[]:[section('choices','Pilihan kelas dan ekstrakurikuler',lines.findIndex(line=>line.includes('for="kelas"')),lines.map(line=>line.includes('</select>')).lastIndexOf(true))])];
    const response=lines.findIndex(line=>line.includes('function showResult'));
    const reset=lines.findIndex(line=>line.includes('form.reset'));
    const list=[section('response','Penanganan hasil response',response,lines.findIndex((line,index)=>index>=response&&line.includes('message.dataset.state'))),section('reset','Reset setelah pengiriman',reset,reset)];
    const errorFunction=lines.findIndex(line=>line.includes('function showFieldErrors'));
    const error=errorFunction<0?-1:lines.findIndex((line,index)=>index>=errorFunction&&line.includes('for (const fieldName'));
    if(error>=0)list.push(section('errors','Pesan kesalahan per isian',error,error+6));
    const performance=lines.findIndex(line=>line.includes('async function prepareRegistrationData'));
    if(performance>=0)list.push(section('performance','Pemeriksaan data berulang',performance,lines.findIndex((line,index)=>index>performance&&line==='}')));
    return list;
  }
  function codeSelection(state,file,start,end=start){
    const source=sources(state)[file];
    if(!source)return null;
    const lines=source.split('\n');
    if(!Number.isInteger(start)||!Number.isInteger(end)||start<0||end<start||end>=lines.length)return null;
    const text=lines.slice(start,end+1).join('\n');
    let id='general';
    if(file==='js'){
      const performance=state.slowScript?codeSections(state,'js').find(section=>section.id==='performance'):null;
      if(performance&&(start>=performance.start&&end<=performance.end||/prepareRegistrationData|validateRegistrationField|\bchecks\b|\bvalidation\b/.test(text)))id='performance';
      else if(/form\.reset\(|resetForm\(/.test(text))id='reset';
      else if(/result\.errors|#error-|showFieldErrors\(|for \(const fieldName/.test(text))id='errors';
      else if(/const accepted|showResult\(|message\.textContent\s*=\s*(?:"Pendaftaran berhasil\."|accepted)|message\.dataset\.state\s*=\s*(?:"success"|accepted)/.test(text))id='response';
    }else if(file==='html'){
      if(/<form\b/.test(text)&&/<\/form>/.test(text)||/class="field"/.test(text)&&/<input\b/.test(text)||/class="field-error"/.test(text))id='fields';
      else if(/<\/?select\b|<option\b/.test(text))id='choices';
    }else if(file==='css'&&/\b(font(?:-size)?|padding|margin(?:-bottom|-top)?|min-height)\s*:/.test(text))id='design';
    return {id,start,end};
  }
  function describeCode(state,item){
    const topic=item.topic;
    if(topic==='performance')return {next:'performance-discussion',parts:[
      'Fungsi prepareRegistrationData meminta validasi untuk empat isian melalui validateRegistrationField. Setiap request ditunggu sampai selesai sebelum isian berikutnya diperiksa.',
      'Array checks dikembalikan, tetapi hasilnya tidak digunakan. Form tetap dikirim melalui sendRegistration dan backend memvalidasi data lagi. Jadi ada empat request tambahan sebelum satu request pendaftaran.',
      'Karena hasil validasi awal tidak dipakai dan backend tetap memvalidasi saat pendaftaran, tahap tambahan ini bisa dihapus. Pertahankan pemeriksaan response.ok, success, errors, dan reset. Bandingkan hasil serta waktu kirim setelah perubahan.'
    ]};
    if(state.simplified&&item.file==='html'&&['fields','choices'].includes(topic))return {next:'structure-discussion',parts:[
      'Formulir ini sekarang hanya menyediakan nama dan NIS. Isian kelas dan pilihan ekstrakurikuler dihapus saat permintaan menyederhanakan tampilan.',
      'Backend masih membutuhkan kelas dan ekstrakurikuler. Peserta tidak dapat melengkapinya melalui formulir ini.',
      'Kedua isian perlu dikembalikan. Menyederhanakan susunan tidak berarti menghapus kebutuhan pendaftaran.'
    ]};
    if(topic==='response')return {next:state.checkResponse?'idle':'response-discussion',parts:[
      'Bagian ini membaca response pendaftaran dan mengatur pesan yang terlihat pada formulir.',
      state.checkResponse?'Status response dan success sudah diperiksa sebelum pesan berhasil ditampilkan. Bagian ini sudah sesuai dan tidak perlu diperbaiki.':'Saat ini pesan berhasil tetap dijalankan setiap response datang, termasuk ketika backend menolak pendaftaran.',
      state.checkResponse?'Percobaan Apps dapat dipakai untuk membandingkan pesan dengan hasil pendaftaran.':'Bisa diperbaiki dengan membaca response.ok dan success, lalu menampilkan pesan penolakan jika pendaftaran tidak diterima.'
    ]};
    if(topic==='fields'||topic==='errors')return {next:state.fieldErrors?'idle':'error-discussion',parts:[
      item.file==='html'?'Bagian HTML ini menyusun label, isian, dan tempat peserta memasukkan data pendaftaran.':'Bagian ini memasangkan rincian errors dari response dengan pesan pada masing-masing isian.',
      state.fieldErrors?'Tempat pesan dan pembacaan errors sudah tersedia. Bagian ini sudah sesuai dan tidak perlu diperbaiki.':'Tempat pesan kesalahan per isian belum tersedia. Peserta belum mendapat keterangan langsung di kolom yang perlu diperbaiki.',
      state.fieldErrors?'Pesan akan mengikuti nama isian yang dikirim backend.':'Bisa diperbaiki dengan menambahkan tempat pesan di dekat isian dan memasangkan errors dari backend ke kolom terkait.'
    ]};
    if(topic==='reset')return {next:state.keepValues?'idle':'reset-discussion',parts:[
      'form.reset() mengosongkan formulir dan mengembalikan pilihan kelas serta kegiatan ke nilai awal.',
      state.keepValues?'Reset sudah dibatasi pada pendaftaran yang diterima. Bagian ini sudah sesuai dan tidak perlu diperbaiki.':'Saat ini reset berjalan setelah setiap pengiriman, termasuk ketika pendaftaran ditolak. Isian yang masih diperlukan peserta ikut hilang.',
      state.keepValues?'Isian tetap tersedia ketika peserta perlu memperbaiki data yang ditolak.':'Bisa diperbaiki agar reset hanya berjalan setelah status response dan success menyatakan pendaftaran diterima.'
    ]};
    if(topic==='design')return {next:state.design==='bad'?'design-explained':'idle',parts:[
      'CSS ini mengatur ukuran tulisan, kontrol, dan jarak pada formulir. Bagian ini tidak mengubah data pendaftaran.',
      state.design==='bad'?'Judul dan tombol dibesarkan, tetapi label dan isian menjadi kecil serta rapat. Bagian tersebut bisa diperbaiki agar peserta lebih mudah membaca dan mengisi.':'Label, kontrol, dan jarak sudah dibuat lebih lega. Tidak ada perbaikan fungsi pendaftaran yang perlu dilakukan pada CSS ini.'
    ]};
    if(topic==='choices')return {next:'idle',parts:[
      'Elemen select menyediakan pilihan kelas dan ekstrakurikuler. Nilai option yang dipilih akan ikut dikirim bersama isian lain.',
      'Pilihan awal bernilai kosong untuk menandai bahwa peserta belum memilih. Bagian ini sudah sesuai dan tidak perlu diperbaiki.'
    ]};
    const source=sources(state)[item.file]||'';
    const range=item.range||{start:0,end:0};
    const text=source.split('\n').slice(range.start,range.end+1).join('\n');
    const descriptions=[
      ['setSubmitting','Fungsi ini mengatur status pengiriman, menonaktifkan tombol selama menunggu, lalu mengembalikan teks tombol setelah proses selesai.'],
      ['readFormData','Fungsi ini membaca nilai formulir yang akan dikirim sebagai data pendaftaran.'],
      ['clearMessages','Fungsi ini membersihkan pesan dari percobaan sebelumnya sebelum pengiriman baru.'],
      ['finally','Blok finally mengaktifkan kembali tombol setelah proses kirim berhasil ataupun mengalami kegagalan.'],
      ['catch','Blok catch menampilkan pesan ketika proses pengiriman atau pembacaan response mengalami kesalahan. Status penolakan 422 tetap perlu diperiksa terpisah.'],
      ['isSubmitting','Status isSubmitting mencegah pengiriman kedua ketika permintaan sebelumnya belum selesai.'],
      ['const submitButton','Kode ini mengambil tombol kirim agar status dan teksnya dapat diubah selama pengiriman.'],
      ['defaultButtonText','Teks awal tombol disimpan agar dapat dikembalikan ketika proses pengiriman selesai.'],
      ['querySelector("#registration")','Kode ini mengambil elemen formulir dan menyimpannya pada variabel form untuk dipakai oleh handler pengiriman.'],
      ['querySelector("#result")','Kode ini mengambil elemen tempat pesan hasil pendaftaran ditampilkan.'],
      ['addEventListener','Kode ini memasang handler submit. Proses di dalamnya dijalankan ketika peserta mengirim formulir.'],
      ['preventDefault','Kode ini mencegah pengiriman bawaan browser agar formulir diproses oleh JavaScript tanpa membuka ulang halaman.'],
      ['FormData','Kode ini mengumpulkan nilai isian formulir ke dalam objek data untuk dikirim ke API pendaftaran.'],
      ['sendRegistration','Kode ini mengirim data pendaftaran dan menunggu response dari API.'],
      ['response.json','Kode ini membaca isi response sebagai JSON agar pesan, data, dan errors dapat dipakai oleh halaman.'],
      ['<label','Label ini memberi nama pada isian dan menghubungkannya dengan kontrol melalui atribut for.'],
      ['<input','Elemen input ini menyediakan tempat peserta mengetik data. Atribut name menentukan nama kolom saat formulir dikirim.'],
      ['<h1','Elemen h1 ini menampilkan judul halaman pendaftaran.']
    ];
    const parts=descriptions.filter(([match])=>text.includes(match)).map(([,description])=>description);
    if(!parts.length)parts.push(!text.trim()?'Baris kosong ini memisahkan bagian kode supaya lebih mudah dibaca. Baris ini tidak menjalankan proses apa pun.':item.file==='css'?'Deklarasi CSS ini mengatur tampilan bagian formulir yang ditandai.':/^[\s{}();]+$/.test(text)?'Tanda ini membuka atau menutup blok kode agar susunan handler tetap lengkap.':'Bagian ini mengatur struktur dasar kode yang dipakai formulir.');
    parts.push('Tidak ada yang salah dengan bagian kode ini. Bagian yang Anda tandai bisa tetap dipakai.');
    return {next:'idle',parts};
  }
  window.TEFA_REGISTRATION_EXAMPLE={initial,normalize,backend,sources,documentSource,problems,sourceKey,codeSections,codeSelection,describeCode};
})();
