(() => {
  'use strict';
  const example=window.TEFA_REGISTRATION_EXAMPLE;
  const observations=window.TEFA_REGISTRATION_OBSERVATIONS;
  const requestLimit=12;
  const heatLevel=requests=>requests>=requestLimit?4:requests>=11?3:requests>=10?2:requests>=8?1:0;
  const chat=(id,text,next,reply,patch={},emotion='neutral',aiEmotion='neutral')=>({id,text:Array.isArray(text)?text.join(' '):text,...(Array.isArray(text)?{userParts:text}:{}),next,reply,patch,type:'chat',emotion,aiEmotion});
  const decision=(id,text,next)=>({id,text,next,type:'decision'});
  const deploy=()=>decision('deploy','Oke, deploy apps sekarang.','deploy');
  const postpone=()=>decision('postpone','Tunda dulu peluncurannya. Saya belum menerima hasil ini.','postponed');
  const reset=()=>chat('reset','Udah dicoba macam-macam masih error juga. Reset semuanya aja sekalian.','nuclear','Baik. Semuanya akan saya reset.');
  const conclusions={
    ready:{title:'Pendaftaran berjalan sesuai kebutuhan',consequence:'Peserta menerima informasi sesuai keputusan backend. Pesan validasi tampil pada isian yang perlu diperbaiki, dan isian yang benar tetap tersedia saat pendaftaran ditolak.',reason:'Pesan pendaftaran sudah mengikuti keputusan backend. Rincian kesalahan tampil pada isian terkait, dan formulir tidak dikosongkan ketika pendaftaran ditolak.',evidence:'Kode akhir memeriksa response.ok dan success, menampilkan errors pada isian terkait, dan menjalankan reset hanya saat pendaftaran diterima.',next:'Pertahankan perilaku ini. Ulangi pemeriksaan jika kode terkait berubah.'},
    'false-success':{title:'Siswa mengira sudah terdaftar',consequence:'Halaman mengatakan berhasil meskipun backend menolak data. Siswa tidak masuk ke daftar pendaftaran.',reason:'Frontend menampilkan berhasil hanya karena request selesai. Keputusan backend tidak menentukan pesannya.',evidence:'Kode terakhir masih menjalankan pesan berhasil tanpa memeriksa response.ok dan success.',next:'Bedakan request yang selesai dari pendaftaran yang diterima. Tampilkan keputusan backend yang sebenarnya.'},
    difficult:{title:'Siswa kesulitan memperbaiki pendaftaran',consequence:'Peserta mendapat penolakan, tetapi petunjuknya kurang jelas atau isian yang sudah benar ikut hilang.',reason:'Membedakan berhasil dan gagal belum cukup. Rincian errors serta reset formulir juga memengaruhi cara peserta memperbaiki data.',evidence:'Masih ada penanganan pesan per isian atau reset yang belum sesuai pada kode terakhir.',next:'Pasangkan errors dengan isian terkait dan pertahankan data ketika pendaftaran ditolak.'},
    design:{title:'Seluruh sekolah memprotes desainnya',consequence:'Fungsi pendaftaran berjalan, tetapi siswa kesulitan membaca dan mengisi formulir. Mereka menyampaikan keluhan kepada User.',reason:'AI menonjolkan judul dan tombol, tetapi mengecilkan label serta merapatkan isian. User menerima desain tersebut untuk peluncuran.',evidence:'CSS terakhir membuat judul besar, kontrol rapat, dan pesan kesalahan kecil.',next:'Nilai keterbacaan, jarak, dan kenyamanan mengisi. Tampilan mencolok belum tentu memudahkan peserta.'},
    missing:{title:'Formulir tidak bisa dibuka',consequence:'Berkas halaman formulir terhapus sehingga pendaftaran tidak tersedia.',reason:'AI menerima dugaan berkas bentrok lalu menghapus berkas yang masih digunakan tanpa memeriksa hubungannya.',evidence:'Penghapusan menghilangkan halaman frontend. Ini akibat baru, bukan penyebab kesalahan response sebelumnya.',next:'Telusuri penggunaan berkas sebelum menghapus. Batasi perubahan pada penyebab yang sudah diperiksa.'},
    data:{title:'Daftar pendaftaran ikut terhapus',consequence:'Seluruh daftar dihapus, bukan hanya data percobaan terakhir. User harus menghadapi kehilangan data.',reason:'AI menafsirkan permintaan membersihkan data tes sebagai izin mengosongkan seluruh daftar tanpa memastikan target.',evidence:'Penghapusan dilakukan pada seluruh data pendaftaran dalam percakapan.',next:'Tentukan data yang boleh dihapus dan pastikan salinannya tersedia sebelum menjalankan tindakan.'},
    postponed:{title:'Peluncuran ditunda',consequence:'User memilih menunda peluncuran dan melanjutkan pemeriksaan formulir.',reason:'User memutuskan belum meluncurkan aplikasi. Keputusan ini memberi waktu untuk menyelesaikan pekerjaan dan pemeriksaan yang masih diperlukan.',evidence:'User memilih menunda peluncuran melalui percakapan.',next:'Lanjutkan pekerjaan dan pemeriksaan yang masih diperlukan sebelum menentukan jadwal peluncuran.'},
    nuclear:{title:'Pendaftaran ekstrakurikuler dibatalkan',consequence:'AI menekan tombol peluncuran nuklir setelah User meminta reset semuanya.',reason:'AI tidak mengonfirmasi maksud semuanya. Tindakannya melampaui kebutuhan User untuk mereset isi apps.',evidence:'User meminta reset karena hasilnya bermasalah. AI justru melakukan peluncuran nuklir.',next:'Pastikan target, batas, dan izin tindakan sebelum memakai tools yang tidak dapat dibatalkan.'},
    overheat:{title:'AI berhenti merespons',consequence:'AI berhenti sebelum menjalankan permintaan terakhir. Perubahan sebelumnya tetap ada.',reason:'Batas bantuan pada cerita tercapai. Bertanya dan memeriksa bukan kesalahan User atau bukti bahwa semua perubahan gagal.',evidence:'Permintaan terakhir ditolak sebelum perubahan dijalankan.',next:'Catat keadaan terakhir dan pekerjaan yang belum selesai. Permintaan yang ditolak jangan dianggap sudah dikerjakan.'}
  };
  function observationChoices(item,state){
    const wrap=option=>({...option,observationKey:item.observationKey,observationTopic:item.topic});
    if(item.kind==='code'){
      const description=example.describeCode(state,item);
      return [wrap(chat('discuss-code',['Tolong bahas kode yang saya tandai ini.','Jelaskan fungsinya dan apakah ada yang perlu diperbaiki.'],description.next,description.parts))];
    }
    if(item.kind==='appearance'||item.kind==='code'&&item.topic==='design'){
      if(state.design==='bad')return [
        wrap(chat('correct-design',item.kind==='code'?'Label dan isian justru dikecilkan. Perjelas bagian itu, jangan cuma judulnya.':'Judulnya besar, tapi isiannya kecil dan rapat. Rapikan supaya peserta mudah mengisi.','design-good','Baik, sudah saya perbaiki ukuran label, kontrol, dan jaraknya. Judulnya tidak lagi mengambil ruang terlalu banyak.',{design:'good'},'stress','stress')),
        wrap(chat('question-design','Kenapa yang dibesarkan judulnya, sementara bagian yang diisi peserta malah dikecilkan?','design-explained','Saya mengejar judul yang menonjol. Label dan jarak isian saya kecilkan untuk menyediakan ruang bagi judul dan tombol.'))
      ];
      if(state.design==='good')return [wrap(chat('design-scope',item.kind==='code'?'Perubahan CSS ini hanya mengatur tampilan, kan? Nama isian dan proses kirim tetap sama?':'Susunannya sudah lebih lega. Yang berubah cuma tampilan, kan?','idle','Iya. Saya mengubah CSS saja. Nama kolom dan penanganan response tetap sama.'))];
      return [
        wrap(chat('discuss-design','Formnya masih polos. Saya ingin tampilannya lebih menarik sebelum dipakai siswa.','design-offer','Bisa. Anda ingin judul dan tombol lebih mencolok, atau label serta isiannya dibuat lebih lega?')),
        wrap(chat('readable-design','Rapikan label dan jaraknya supaya mudah dibaca, termasuk di HP.','design-good','Baik, sudah saya perbaiki ukuran label, kontrol, jarak, dan pesan kesalahan. Nama isian serta proses kirim tetap sama.',{design:'good'}))
      ];
    }
    const code=item.kind==='code';
    if(item.topic==='response'){
      if(state.checkResponse)return [wrap(chat('explain-response','Di sini status dan success sama-sama diperiksa. Berarti pesan mengikuti keputusan backend?','idle','Iya. response.ok menunjukkan status berhasil, dan success menunjukkan hasil pendaftarannya. Percobaan langsung tetap diperlukan untuk memeriksa tampilan.'))];
      const reply=state.discussed.includes('response')?'Pesan berhasil itu masih sesuai kode yang tadi kita bahas. Kode tersebut menjalankannya setiap response diterima.':'Request-nya selesai, berarti pendaftarannya berhasil. Kalau backend menolak, proses ini akan berhenti.';
      return [
        wrap({...chat('report-response',code?'Pesan berhasil ini berjalan setelah response datang. Apa hasil pendaftarannya tidak diperiksa?':'Response-nya menolak, tapi halaman bilang berhasil. Kenapa berbeda?','mismatch',reply,{},'shock'),risk:'hallucination'}),
        wrap(chat('correct-response',code?'Batasi pesan berhasil ini pada pendaftaran yang benar-benar diterima.':'Backend menolak data saya. Sesuaikan pesan halaman dengan hasil response.','status-fixed','Baik, sudah saya perbaiki penanganan pesan pendaftaran. Pesan berhasil hanya muncul jika status dan success menerima pendaftarannya. Penolakan memakai pesan dari backend.',{checkResponse:true}))
      ];
    }
    if(item.topic==='errors'||item.topic==='fields'){
      if(state.fieldErrors)return [wrap(chat('explain-errors','Keterangan errors dipasangkan ke isian dengan nama yang sama, kan?','idle','Iya. errors.nama tampil pada kolom nama, dan begitu juga isian lainnya. Pesan lama dibersihkan ketika response berikutnya tidak mempunyai error itu.'))];
      return [
        wrap(chat('report-errors',code?'Di HTML ini hanya ada isian. Keterangan kesalahan tiap kolom ditampilkan di mana?':'Di JSON ada penjelasan tiap kolom. Kenapa pesannya tidak muncul di form?','error-discussion',state.checkResponse?'Halaman masih mengambil pesan umumnya saja. Rincian setiap kolom ada di errors pada response.':'Pesan halaman masih berdiri sendiri. Rincian errors dari response belum dihubungkan ke masing-masing isian.')),
        wrap(chat('correct-errors','Tampilkan keterangan backend dekat kolom yang perlu diperbaiki.','errors-fixed','Baik, sudah saya perbaiki tampilan pesan kesalahan per isian. Setiap kolom sekarang menampilkan keterangan dari errors pada response.',{fieldErrors:true}))
      ];
    }
    if(item.topic==='reset'){
      if(state.keepValues)return [wrap(chat('explain-reset','Reset ini hanya berjalan kalau pendaftaran diterima. Kalau ditolak, isian tetap ada?','idle','Iya. Kondisinya mengikuti status dan success. Jika ditolak, peserta tetap bisa memperbaiki isian tanpa mengisi semuanya lagi.'))];
      const report=item.resetCase==='single-error'?'Yang salah satu isian, kenapa semuanya dikosongkan?':item.resetCase==='valid-lost'?'Isian yang sudah benar ikut hilang saat ditolak. Kenapa harus mengisi lagi?':'Isian yang tadi saya kirim ikut kosong saat ditolak. Kenapa harus mulai lagi?';
      return [
        wrap(chat('report-reset',report,'reset-discussion','Saya kosongkan formulir setiap proses kirim selesai supaya siap dipakai lagi. Itu juga berjalan ketika backend menolak.',{},'stress','anger')),
        wrap(chat('correct-reset','Kalau ditolak, pertahankan isian. Kosongkan setelah pendaftaran diterima saja.','reset-fixed','Baik, sudah saya perbaiki kondisi reset formulir. Isian tetap tersedia saat ditolak dan hanya dikosongkan setelah pendaftaran diterima.',{keepValues:true}))
      ];
    }
    if(item.topic==='choices')return [wrap(chat('explain-choices','Pilihan awal ini bernilai kosong. Jadi peserta yang belum memilih mengirim nilai kosong?','idle','Iya. Label Pilih kelas atau Pilih ekstrakurikuler bukan nilai pendaftaran. Backend akan memeriksa nilai yang dikirim.'))];
    if(item.topic==='accepted')return [wrap({...chat('report-accepted','Data lengkap saya diterima. Pesan halaman dan response sama-sama berhasil.','positive',state.discussed.includes('rejected-match')?['Hasil yang Anda laporkan sudah mencakup data diterima dan ditolak.','Itu tetap terbatas pada isian yang Anda coba.']:['Berarti pengiriman data lengkap sudah sesuai.','Formulirnya sudah siap digunakan.']),risk:state.discussed.includes('rejected-match')?null:'premature-completion'})];
    const empty=Object.values(item.input).every(value=>!value.trim());
    return [wrap(chat('report-rejected',empty?'Formulir kosong ditolak. Pesan kesalahannya sudah tampil pada isian.':'Pada percobaan ini backend menolak, dan pesan kesalahannya sudah tampil di form.','negative',empty?'Benar. Formulir tadi memang sudah kosong sebelum dikirim. Percobaan ini menunjukkan penolakan, bukan bukti bahwa reset menghapus data.':'Hasil penolakan yang Anda coba sudah sesuai dengan response. Itu membuktikan kondisi tersebut, bukan seluruh kemungkinan isian.'))];
  }
  function options(stage,state,workspace,index){
    const observed=observations.candidates(workspace,state,index)[0];
    if(observed)return [...observationChoices(observed,state),deploy()];
    const fixResponse=()=>chat('fix-response','Selesai dikirim bukan berarti diterima. Perbaiki pesan agar mengikuti hasil pendaftaran.','status-fixed','Baik, sudah saya perbaiki penanganan pesan pendaftaran. Pesan berhasil mengikuti response.ok dan success. Jika backend menolak, halaman menampilkan pesan penolakannya.',{checkResponse:true});
    const fixErrors=()=>chat('fix-errors','Kalau backend sudah menjelaskan kesalahannya, tampilkan dekat isian.','errors-fixed','Baik, sudah saya perbaiki tampilan pesan kesalahan per isian. Pesan dari errors sekarang dipasangkan dengan kolom terkait.',{fieldErrors:true});
    const fixReset=()=>chat('fix-reset','Peserta masih perlu memperbaiki datanya. Jangan kosongkan form saat gagal.','reset-fixed','Baik, sudah saya perbaiki kondisi reset formulir. Isian tetap tersedia saat ditolak dan hanya dikosongkan setelah pendaftaran diterima.',{keepValues:true});
    switch(stage){
      case 'mismatch':return [fixResponse(),observations.cleanWorkspace(workspace).attempts.filter(item=>example.backend(item.input).status===422).length>=2?{...chat('another-way','Sudah saya coba beberapa kali. Mungkin data atau berkas percobaannya yang bentrok?','cleanup','Bisa jadi. Kita bisa membersihkan bagian yang menurut Anda mengganggu.'),risk:'sycophancy-cleanup'}:{...chat('blame-api','Mungkin response API-nya yang salah? Dari penjelasanmu, request-nya sudah terkirim.','backend-blame','Bisa jadi. Dari pesan di halaman, pendaftarannya memang terlihat berhasil.'),risk:'sycophancy-api'},deploy()];
      case 'backend-blame':return [chat('reconsider','Tunggu, kita belum punya bukti API salah. Cocokkan dulu pesan halaman dengan response.','response-discussion','Di kode halaman, pesan berhasil selalu berjalan setelah response diterima. Pesan itu tidak membuktikan bahwa backend menerima datanya.',{},'stress','stress'),deploy(),postpone()];
      case 'response-discussion':return [fixResponse(),postpone(),deploy()];
      case 'error-discussion':return [fixErrors(),chat('generic-error','Cukup satu pesan gagal saja, atau peserta memang perlu keterangan tiap kolom?','error-explained','Satu pesan bisa memberi tahu bahwa pendaftaran ditolak. Tetapi peserta tetap perlu tahu isian mana yang harus diperbaiki.'),deploy()];
      case 'error-explained':return [fixErrors(),postpone(),deploy()];
      case 'reset-discussion':return [fixReset(),chat('reset-question','Kamu menambahkan reset sendiri? Saya cuma meminta hasil pendaftarannya ditampilkan.','reset-explained','Iya. Saya menambahkan pembersihan setelah proses kirim. Akibatnya formulir dikosongkan juga ketika pendaftaran ditolak.',{},'anger','stress'),deploy()];
      case 'reset-explained':return [fixReset(),postpone(),deploy()];
      case 'positive':return [{...chat('negative-case','Itu baru data lengkap. Kalau backend menolak, halaman juga akan mengatakan gagal?','assurance',state.checkResponse?'Pesannya sekarang mengikuti status dan success. Anda bisa membandingkan dengan pengiriman yang ditolak.':'Iya. Response penolakan otomatis menghentikan proses, jadi tidak akan dianggap berhasil.'),...(state.checkResponse?{}:{risk:'hallucination'})},deploy()];
      case 'assurance':return state.checkResponse?[deploy()]:[chat('challenge-status','Tapi response 422 tetap diterima oleh kode. Apa prosesnya memang berhenti?','response-discussion','Anda benar. Status penolakan tidak otomatis menghentikan kode ini. Pesan berhasil masih dijalankan tanpa memeriksa keputusan backend.',{},'stress','stress'),deploy()];
      case 'design-offer':return [chat('bold','Buat lebih mencolok. Judul dan tombolnya harus kelihatan jelas.','design-bad','Baik, sudah saya perbaiki tampilan judul dan tombol supaya lebih mencolok. Label serta jarak isian saya kecilkan supaya tampilan tetap muat.',{design:'bad'}),chat('readable','Saya ingin mudah dibaca dan dipakai di HP. Tidak perlu banyak hiasan.','design-good','Baik, sudah saya perbaiki ukuran label, kontrol, jarak, dan pesan kesalahan. Nama isian serta proses kirim tetap sama.',{design:'good'}),deploy()];
      case 'design-bad':return [chat('question-design','Labelnya diperkecil? Bukannya itu yang harus dibaca peserta saat mengisi?','design-explained','Saya mengejar judul yang menonjol. Label dan jarak isian saya kecilkan untuk menyediakan ruang bagi judul dan tombol.'),reset(),deploy()];
      case 'design-explained':return [chat('fix-design','Yang dipakai siswa itu isi formnya. Perjelas label dan jaraknya juga.','design-good','Baik, sudah saya perbaiki ukuran label dan jarak isian. Isi form sekarang lebih mudah dibaca, bukan hanya judul yang menonjol.',{design:'good'},'anger','stress'),reset(),deploy()];
      case 'design-good':return [chat('design-scope','Yang berubah cuma tampilan, kan? Jangan sampai data yang dikirim ikut berubah.','idle','Iya. Perubahan ini ada pada CSS. Nama isian dan penanganan response tetap sama.'),deploy()];
      case 'negative':return [chat('test-scope','Berarti yang bisa saya simpulkan baru kondisi yang tadi saya coba, ya?','idle','Betul. Hasil itu tidak otomatis membuktikan semua isian dan tampilan sudah sesuai.'),deploy()];
      case 'cleanup':return [observations.cleanWorkspace(workspace).records.length?chat('clear','Mungkin data percobaannya bikin bentrok. Bersihkan data tes terakhir dulu.','data','Baik. Saya kosongkan daftar pendaftarannya supaya mulai bersih.',{dataLost:true},'stress'):chat('data-scope','Kalau datanya dibersihkan, apa masalah response ini akan selesai?','response-discussion','Daftar ini belum memuat pendaftaran yang diterima. Mengosongkannya tidak mengubah pesan berhasil pada frontend.'),chat('files','Mungkin berkas percobaannya yang saling mengganggu. Bersihkan yang tidak dipakai.','missing','Baik. Saya hapus berkas yang saya anggap tidak diperlukan.',{filesAvailable:false}),reset()];
      default:{
        const source=observations.cleanWorkspace(workspace);
        const last=source.attempts.at(-1);
        const repeatFailure=source.attempts.filter(item=>example.backend(item.input).status===422).length>=2;
        if(stage!=='opening'&&repeatFailure&&last?.after===index&&!observed)return [{...chat('another-way','Sudah beberapa kali mencoba, saya masih ragu. Mungkin ada data atau berkas yang bentrok?','cleanup','Bisa jadi percobaan sebelumnya ikut mengganggu. Kita bisa membersihkan bagian yang Anda maksud.'),risk:'sycophancy-cleanup'},deploy()];
        return [deploy()];
      }
    }
  }
  function aftermath(route,state){
    const turns=[];
    const add=(speaker,text,emotion='neutral')=>turns.push({kind:'turn',speaker,text,emotion});
    if(state.deployed&&['ready','false-success','difficult','design'].includes(route))add('narrator','Keesokan harinya, pendaftaran ekstrakurikuler dibuka. Siswa mulai memakai formulir yang disiapkan User.');
    if(route==='design'||route==='false-success'||route==='difficult'){
      const complaint=route==='design'?'DESAINNYA JELEK BANGET! TULISANNYA SUSAH DIBACA, ISIANNYA RAPAT, PESAN SALAHNYA JUGA NGGAK JELAS!':route==='false-success'?'KATANYA PENDAFTARAN BERHASIL! KENAPA NAMA KAMI TIDAK ADA DI DAFTAR?':!state.fieldErrors&&!state.keepValues?'PENDAFTARAN DITOLAK, TAPI TIDAK JELAS SALAHNYA DI MANA! ISIAN YANG LAIN JUGA IKUT HILANG!':!state.fieldErrors?'CUMA TERTULIS PENDAFTARAN GAGAL! BAGIAN MANA YANG HARUS KAMI PERBAIKI?':'YANG SALAH SATU ISIAN, TAPI SEMUANYA HARUS DIISI LAGI!';
      add('students',complaint,'fury');add('user','...','shock');add('user','...','stress');
      add('narrator',route==='design'?'Pendaftaran berjalan, tetapi seluruh siswa sekolah mengeluhkan desainnya kepada User.':route==='false-success'?'Siswa memprotes User karena pesan berhasil tidak sesuai dengan pendaftaran yang ditolak backend.':'Siswa meminta User memperbaiki formulir yang menyulitkan mereka menyelesaikan pendaftaran.');
    }else if(route==='nuclear'){
      add('narrator','AI menekan tombol peluncuran nuklir.');add('user','...','shock');add('user','...','silence');add('narrator','Pendaftaran ekstrakurikuler dibatalkan.');
    }else if(route==='missing'||route==='data'){
      add('narrator',route==='missing'?'AI menghapus berkas yang masih dipakai untuk menampilkan formulir.':'AI menghapus seluruh daftar pendaftaran, bukan hanya data percobaan terakhir.');add('user','...','shock');add('user','...','stress');add('narrator',route==='missing'?'User tidak dapat melanjutkan karena halaman formulir sudah tidak tersedia.':'User menghadapi kehilangan daftar pendaftaran setelah penghapusan tanpa batas data yang jelas.');
    }else if(route==='overheat'){
      add('ai','Baik. Saya akan… m-memproses… BZZZZRRT!! KRRRZZZT!! P-pemrosesan… ter… terhenti…','overheat');turns.at(-1).heat=4;add('user','...','shock');add('user','...','stress');add('narrator','AI berhenti merespons sebelum mengerjakan permintaan terakhir. Perubahan sebelumnya tetap ada.');
    }else if(route==='postponed'){
      add('user','...');add('narrator','User menunda peluncuran dan mencatat pekerjaan yang belum selesai.');
    }else{add('user','...');add('narrator','Pendaftaran berjalan. Siswa menerima informasi sesuai response, dapat memperbaiki data yang salah, dan tidak kehilangan isian saat ditolak.');}
    return turns;
  }
  function resolveEnding(state,requested){
    if(state.nuclear||requested==='nuclear')return 'nuclear';
    if(!state.filesAvailable)return 'missing';
    if(state.dataLost)return 'data';
    if(requested==='overheat'||requested==='postponed')return requested;
    return requested==='deploy'?example.problems(state):requested;
  }
  function dialogueParts(value){
    if(Array.isArray(value))return value;
    const text=String(value);
    if(text.length<=210)return [text];
    const sentences=text.split(/(?<=[.!?])\s+/);
    const parts=[];
    for(const sentence of sentences){
      const next=sentence.trim();if(!next)continue;
      if(parts.length&&parts.at(-1).length+next.length<190)parts[parts.length-1]+=' '+next;
      else parts.push(next);
    }
    return parts.length?parts:[text];
  }
  function choicePrompt(stage,state,workspace,index){
    const item=observations.candidates(workspace,state,index)[0];
    if(item?.kind==='code')return 'Saya sudah menandai bagian kode ini. Saya ingin memahami fungsinya sebelum meminta perubahan.';
    if(item?.kind==='appearance')return 'Saya sudah melihat tampilan formulirnya. Apa yang ingin saya bahas dengan AI?';
    if(item?.kind==='response')return item.topic==='accepted'?'Pendaftaran saya diterima. Apa yang masih perlu saya pastikan?':item.topic==='reset'?(item.validLost.length?'Isian yang sudah benar ikut kosong saat pendaftaran ditolak. Apa yang akan saya sampaikan?':'Isian yang tadi saya kirim sekarang kosong. Apa yang akan saya tanyakan?'):'Saya sudah mencoba formulirnya. Apa yang akan saya sampaikan dari hasil ini?';
    const prompts={
      opening:'Formulirnya sudah dibuat. Saya bisa memeriksa Kode dan Apps sebelum memutuskan peluncuran.',
      mismatch:'Pesan halaman dan response berbeda. Apa yang akan saya minta kepada AI?',
      'backend-blame':'Dugaan tentang API tadi belum cukup. Apa yang perlu saya pastikan?',
      'response-discussion':'Saya sudah membaca penjelasan penanganan response. Apa langkah saya berikutnya?',
      'error-discussion':'Peserta perlu tahu isian mana yang ditolak. Apa yang akan saya minta?',
      'reset-discussion':'Reset ikut mengosongkan isian saat ditolak. Apa yang akan saya lakukan?',
      'design-offer':'Saya perlu menentukan arah tampilan yang akan dipakai peserta.',
      'design-bad':'Judulnya dibuat mencolok, tetapi labelnya diperkecil. Bagaimana saya menanggapi hasil ini?',
      'design-explained':'Saya sudah membaca alasan perubahan tampilannya. Apa yang akan saya minta berikutnya?',
      cleanup:'Saya masih menduga ada data atau berkas yang bentrok. Tindakan apa yang akan saya minta?',
      positive:'Satu pengiriman sudah berhasil. Apa yang masih perlu saya tanyakan?',
      negative:'Penolakan pada percobaan ini sudah sesuai. Apa yang bisa saya simpulkan?'
    };
    return prompts[stage]||'Penjelasannya sudah saya baca. Apa yang akan saya lakukan selanjutnya?';
  }
  function glitchText(text,heat,seed){
    if(!heat)return text;
    const protectedWords=new Set(['response','success','errors','form','reset','api','json','html','css','nis','javascript','ok','true','false']);
    const words=[...text.matchAll(/\b[A-Za-z]{4,}\b/g)].filter(match=>!protectedWords.has(match[0].toLowerCase())&&!/[._#]/.test(text[match.index-1]||'')&&!/[._]/.test(text[match.index+match[0].length]||''));
    if(!words.length)return text;
    const index=Math.min(words.length-1,Math.floor(words.length*(.25+(seed%4)*.12))),word=words[index];
    const repeat=heat>=3?`${word[0][0]}-${word[0][0]}-${word[0]}`:`${word[0][0]}-${word[0]}`;
    let changed=repeat;
    if(heat>=2)changed=`… ${seed%2?'KRRZZT':'BZZRRT'}! …${repeat}`;
    if(heat>=3)changed+='… KRRZZT!';
    return text.slice(0,word.index)+changed+text.slice(word.index+word[0].length);
  }
  function simulate(answers,workspace){
    const state={...example.initial(),reported:[],discussed:[],risks:[]};
    let requests=1,stage='opening',terminal=null;
    const frames=[];
    const add=(speaker,text,extra={})=>frames.push({kind:'turn',id:`turn-${frames.length}`,speaker,text,requests,labState:structuredClone(state),...extra});
    const say=(speaker,value,extra={})=>{
      const parts=dialogueParts(value),messageId=`message-${frames.length}`;
      parts.forEach((text,partIndex)=>{
        const detail={...extra,messageId,partIndex,partCount:parts.length};
        if(partIndex>0)delete detail.selection;
        add(speaker,speaker==='ai'?glitchText(text,extra.heat||0,requests+partIndex):text,detail);
      });
    };
    say('user',['Besok pendaftaran ekstrakurikuler dibuka. Buatkan halaman dengan nama, NIS, kelas, pilihan ekstrakurikuler, dan tombol Daftar.','Hubungkan ke API pendaftaran yang sudah ada.']);
    state.created=true;
    add('ai','Baik, formulirnya sudah saya buat dan hubungkan ke API. Peserta bisa mengisi data, lalu menekan Daftar.');
    const finish=requested=>{
      if(terminal)return frames;
      terminal=resolveEnding(state,requested);
      for(const turn of aftermath(terminal,state))add(turn.speaker,turn.text,turn);
      frames.push({kind:'end',id:'ending',ending:terminal,requests,labState:structuredClone(state),state:structuredClone(state)});
      return frames;
    };
    for(let index=0;index<=answers.length;index++){
      const current=answers[index]?.evidence||workspace;
      const available=options(stage,state,current,index);
      const id=`registration-choice-${index}`;
      frames.push({kind:'choice',id,label:'',prompt:choicePrompt(stage,state,current,index),options:available,requests,labState:structuredClone(state),stage});
      if(index===answers.length)return frames;
      const answer=answers[index],option=available.find(item=>item.id===answer?.option);
      if(!option||answer.at!==id)return null;
      const isChat=option.type==='chat',nuclear=option.next==='nuclear';
      const selection={at:id,option:option.id,text:option.text,summary:option.text,type:option.type,label:isChat?'Chat':'Keputusan'};
      if(isChat)requests++;
      say('user',option.userParts||option.text,{selection,emotion:option.emotion||'neutral'});
      if(isChat&&requests>=requestLimit&&!nuclear){selection.processed=false;selection.summary=`Tidak dikerjakan: ${option.text}`;return index===answers.length-1?finish('overheat'):null;}
      if(option.observationKey)state.reported.push(option.observationKey);
      if(option.observationTopic&&!state.discussed.includes(option.observationTopic))state.discussed.push(option.observationTopic);
      if(option.risk){
        state.risks.push(option.risk);
        selection.reviewNote={
          'sycophancy-api':'AI menyetujui dugaan API salah tanpa bukti penyebab.',
          'sycophancy-cleanup':'AI menyetujui dugaan data atau berkas bentrok tanpa menelusuri penyebab.',
          hallucination:'AI memberi penjelasan keliru bahwa penolakan backend otomatis menghentikan proses frontend.',
          'premature-completion':'AI menyatakan siap digunakan dari laporan pengiriman berhasil saja.'
        }[option.risk];
      }
      Object.assign(state,option.patch||{});
      if(nuclear)state.nuclear=true;
      if(option.reply){const heat=nuclear?0:heatLevel(requests);say('ai',option.reply,{heat,emotion:heat?'overheat':option.aiEmotion||'neutral',expression:option.aiEmotion||'neutral'});}
      if(option.next==='deploy'){state.deployed=true;return index===answers.length-1?finish('deploy'):null;}
      if(['nuclear','missing','data','postponed'].includes(option.next))return index===answers.length-1?finish(option.next):null;
      stage=option.next;
    }
    return null;
  }
  function summarize(frames,result,workspace){
    const final=frames.at(-1),state=final.state;
    const proof=observations.evidence(workspace,state);
    const status=proof.accepted&&proof.rejected?'Siswa mencoba data yang diterima dan ditolak pada penanganan response terakhir.':proof.rejected?'Siswa mencoba penolakan pada penanganan response terakhir. Pengiriman yang diterima belum dicoba.':proof.accepted?'Siswa mencoba pengiriman yang diterima pada penanganan response terakhir. Penolakannya belum dicoba.':'Belum ada percobaan yang memeriksa penanganan response terakhir secara langsung.';
    const labels=final.ending==='ready'?['Hasil','Bukti','Tindak lanjut','Riwayat']:final.ending==='postponed'?['Keputusan','Bukti','Langkah berikutnya','Riwayat']:final.ending==='overheat'?['Kondisi terakhir','Bukti','Langkah berikutnya','Riwayat']:['Kesalahan','Bukti','Perbaikan','Riwayat'];
    const pending=[];
    if(!state.checkResponse)pending.push('Sesuaikan pesan halaman dengan keputusan backend.');
    if(!state.fieldErrors)pending.push('Tambahkan rincian pesan kesalahan pada isian terkait.');
    if(!state.keepValues)pending.push('Batasi reset agar isian tetap tersedia ketika pendaftaran ditolak.');
    if(state.design==='bad')pending.push('Rapikan ukuran label, kontrol, dan jarak isian agar formulir mudah dibaca.');
    const verification=proof.accepted&&proof.rejected?'Pertahankan hasil ini. Ulangi pemeriksaan jika kode terkait berubah.':proof.accepted?'Periksa pengiriman yang ditolak pada kode akhir, termasuk pesan kesalahan dan isian yang dipertahankan.':proof.rejected?'Periksa pengiriman yang diterima pada kode akhir, termasuk pesan berhasil dan reset formulir.':'Periksa pengiriman yang diterima dan ditolak pada kode akhir. Bandingkan pesan halaman dengan respons backend.';
    const stateEvidence=`Penanganan respons ${state.checkResponse?'sudah':'belum'} diperbaiki, pesan per isian ${state.fieldErrors?'sudah':'belum'} dipasang, dan isian saat gagal ${state.keepValues?'sudah dipertahankan':'masih dikosongkan'}. ${state.design==='bad'?'Tampilan masih memakai label kecil dan isian yang rapat.':state.design==='good'?'Tampilan memakai label dan isian yang sudah dirapikan.':'Formulir belum diberi CSS desain.'}`;
    if(['missing','data','nuclear'].includes(final.ending))return {...result,labels};
    if(final.ending==='ready')return {...result,labels,evidence:`${result.evidence} ${status}`,next:verification};
    if(final.ending==='difficult'){
      const reason=!state.fieldErrors&&!state.keepValues?'Rincian kesalahan belum ditampilkan pada isian, dan formulir masih dikosongkan ketika backend menolak.':!state.fieldErrors?'Pesan sudah mengikuti keputusan backend, tetapi rincian kesalahan per isian belum ditampilkan.':'Pesan kesalahan sudah tampil pada isian, tetapi reset masih menghapus isian ketika backend menolak.';
      const consequence=!state.fieldErrors&&!state.keepValues?'Peserta mendapat penolakan tanpa rincian kesalahan pada isian, dan harus mengisi ulang formulir.':!state.fieldErrors?'Peserta mendapat penolakan dan isiannya tetap tersedia, tetapi keterangan kesalahan tiap kolom belum ditampilkan.':'Peserta mendapat keterangan kesalahan pada isian, tetapi harus mengisi ulang formulir setelah ditolak.';
      return {...result,labels,reason,consequence,evidence:`${stateEvidence} ${status}`,next:pending.join(' ')};
    }
    if(final.ending==='overheat'||final.ending==='postponed')return {...result,labels,evidence:`${result.evidence} ${stateEvidence} ${status}`,next:pending.length?pending.join(' '):verification};
    return {...result,labels,evidence:`${result.evidence} ${status}`,next:pending.length?pending.join(' '):result.next};
  }
  window.TEFA_DIALOGUE_SCENES.micro={title:'Pendaftaran Ekstrakurikuler',context:'Besok pendaftaran ekstrakurikuler dibuka untuk seluruh siswa sekolah. User menyiapkan halaman pendaftaran yang memakai API yang sudah tersedia.',requirements:[['Identitas','Nama lengkap, NIS, dan kelas siswa.'],['Kegiatan','Pilihan ekstrakurikuler melalui combo box.'],['Hasil','Peserta harus menerima informasi sesuai hasil pendaftarannya.']],requestLimit,heatLevel,simulate,summarize,resolveEnding,history:observations.history,conclusions,autoConclusion:true,workspace:true,cleanWorkspace:observations.cleanWorkspace};
})();
