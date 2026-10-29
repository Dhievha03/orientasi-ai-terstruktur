/* Arsip versi 45 slide sebelum redesign berfokus AI. */
(() => {
  const chapters = [
    {id:'peran',name:'Pengantar',menu:'PENGANTAR',indent:13,section:1,phase:'New Moon',moon:0},
    {id:'masalah',name:'Masalah Awal',menu:'MASALAH AWAL',indent:38,section:1,phase:'Crescent',moon:.16},
    {id:'alat',name:'Alat AI',menu:'ALAT AI',indent:9,section:1,phase:'Crescent',moon:.30},
    {id:'instruksi',name:'Instruksi AI',menu:'INSTRUKSI AI',indent:26,section:1,phase:'Quarter',moon:.50},
    {id:'panduan',name:'Aturan Kerja',menu:'ATURAN KERJA',indent:0,section:1,phase:'Gibbous',moon:.64},
    {id:'pemeriksaan',name:'Pemeriksaan',menu:'PEMERIKSAAN',indent:22,section:1,phase:'Gibbous',moon:.78},
    {id:'microtask',name:'Tugas Kecil',menu:'TUGAS KECIL',indent:5,section:2,phase:'Gibbous',moon:.90},
    {id:'perbaikan',name:'Perbaikan',menu:'PERBAIKAN',indent:0,section:2,phase:'Full Moon',moon:1,climax:true},
    {id:'percobaan',name:'Uji Coba',menu:'UJI COBA',indent:26,section:2,phase:'Full Moon',moon:1},
    {id:'laporan',name:'Hasil Kerja',menu:'HASIL KERJA',indent:34,section:2,phase:'Full Moon',moon:1}
  ];
  const slide = (id,chapter,type,title,body,notes=[]) => {
    const index=chapters.findIndex(item=>item.id===chapter);
    return {id,chapter,type,title,kicker:`MATERI ${chapters[index].section} / BAB ${String(index+1).padStart(2,'0')}${type==='lab'?' · DEMO PEMATERI':''}`,...body,notes};
  };
  window.TEFA_DECK = {
    version:'v0.7-ringkas',
    title:'Belajar Menggunakan AI untuk Membantu Coding',
    source:'Materi pemateri TEFA v0.7, disusun ulang agar satu layar membahas satu gagasan.',
    sections:[
      {id:1,name:'Orientasi penggunaan AI tools',description:'Orientasi penggunaan AI Tools terstruktur untuk calon AI Engineer.'},
      {id:2,name:'Simulasi micro-task',description:'Simulasi pengerjaan micro-task dengan AI Assistant.'}
    ],
    chapters,
    glossary:[
      ['Requirement','Kebutuhan aplikasi. Contoh: pengguna wajib mengisi nama.'],
      ['Acceptance criteria / AC','Syarat untuk memeriksa apakah pekerjaan sudah sesuai permintaan.'],
      ['Scope','Batas pekerjaan. Pada contoh ini, kita memperbaiki pemeriksaan Nama.'],
      ['Prompt','Instruksi atau pertanyaan yang dikirim ke AI.'],
      ['Konteks','Informasi yang membantu AI memahami tugas, seperti kode dan pesan error.'],
      ['Micro-task','Satu pekerjaan kecil yang jelas dan bisa diperiksa hasilnya.'],
      ['Validasi','Pemeriksaan isian sebelum digunakan.'],
      ['Diff','Perbandingan kode sebelum dan sesudah perubahan.'],
      ['Code review','Memeriksa perubahan kode dan alasannya.'],
      ['Testing','Mencoba fungsi atau aplikasi dan membandingkan hasilnya dengan yang diharapkan.'],
      ['Debugging','Mencari penyebab kesalahan dan memperbaikinya.'],
      ['Regression testing','Mencoba kembali fitur yang sebelumnya berjalan setelah kode diubah.'],
      ['Handler','Kode yang dijalankan saat suatu tindakan terjadi, misalnya formulir dikirim.'],
      ['Human in the Loop','Manusia ikut mengarahkan, memeriksa, dan memutuskan selama AI bekerja.']
    ],
    demo:{
      defaultClass:'XI PPLG',
      prompt:'Saat saya hanya menekan spasi di kolom Nama lalu mengeklik Daftar, aplikasi tetap menampilkan pesan “Pendaftaran berhasil”. Seharusnya pengguna diminta mengisi nama.\n\nPeriksa fungsi validateName dan kode yang menggunakan hasilnya. Jika nama belum diisi atau isinya hanya spasi, tampilkan pesan “Nama belum diisi” dan jangan lanjutkan pendaftaran.\n\nJika ada spasi sebelum atau sesudah nama, hapus spasi tersebut. Spasi di antara kata, seperti pada “Rina Putri”, harus tetap ada.\n\nJangan mengubah tampilan atau kolom lain. Tidak perlu menambah library. Bentuk hasil fungsi juga jangan diubah agar kode yang memakainya tetap bekerja.\n\nBaca kodenya terlebih dahulu dan jelaskan rencana perbaikannya. Setelah rencananya kita periksa, baru ubah kode. Terakhir, jelaskan apa yang sudah dicoba dan apakah masih ada masalah.',
      code:{
        before:'function validateName(raw) {\n  if (raw.length === 0) {\n    return { ok: false, error: "Nama belum diisi" };\n  }\n  return { ok: true, name: raw };\n}',
        fixed:'function validateName(raw) {\n  const name = raw.trim();\n  if (name.length === 0) {\n    return { ok: false, error: "Nama belum diisi" };\n  }\n  return { ok: true, name };\n}',
        ignored:'function validateName(raw) {\n  raw.trim();\n  if (raw.length === 0) {\n    return { ok: false, error: "Nama belum diisi" };\n  }\n  return { ok: true, name: raw };\n}',
        handler:'const result = validateName(raw);\n\n// Kesalahan: hasil ok tidak diperiksa.\nshowSuccess();\n\n// Seharusnya: jika ok false,\n// tampilkan error dan jangan lanjutkan.'
      },
      criteria:[
        ['AC1','Nama “Rina” dan tombol Daftar menghasilkan pesan berhasil.'],
        ['AC2','Nama kosong atau spasi saja tidak melanjutkan pendaftaran.'],
        ['AC3','Nama kosong menampilkan pesan “Nama belum diisi”.'],
        ['AC4','Spasi tepi dihapus; spasi di antara kata dipertahankan.'],
        ['AC5','Bentuk hasil tetap ok/name atau ok/error.'],
        ['AC6','Kelas, Reset, dan pengiriman dengan Enter tetap bekerja.']
      ],
      tests:[
        {id:'T1',ac:'AC1, AC5',label:'Nama biasa',steps:'Ketik “Rina”, lalu klik Daftar.',expected:'Pesan berhasil. Hasil fungsi berisi nama “Rina”.'},
        {id:'T2',ac:'AC2, AC3',label:'Nama kosong',steps:'Kosongkan Nama, lalu klik Daftar.',expected:'“Nama belum diisi”; pesan berhasil tidak muncul.'},
        {id:'T3',ac:'AC2, AC3',label:'Spasi saja',steps:'Tekan spasi tiga kali, lalu klik Daftar.',expected:'“Nama belum diisi”; pendaftaran tidak dilanjutkan.'},
        {id:'T4',ac:'AC4',label:'Spasi di tepi',steps:'Tambahkan dua spasi sebelum dan sesudah “Rina”.',expected:'Hasil fungsi adalah “Rina” tanpa spasi tepi.'},
        {id:'T5',ac:'AC4',label:'Spasi di tengah',steps:'Ketik “Rina  Putri” dengan dua spasi di tengah.',expected:'Dua spasi di tengah tetap ada pada hasil fungsi.'},
        {id:'T6',ac:'AC1–AC3',label:'Salah lalu benar',steps:'Kirim Nama kosong, lalu kirim “Rina”.',expected:'Pesan error berganti menjadi pesan berhasil.'},
        {id:'T7',ac:'AC6',label:'Tombol Reset',steps:'Isi Nama dan Kelas, lalu klik Reset.',expected:'Formulir kembali seperti saat pertama dibuka.'},
        {id:'T8',ac:'AC6',label:'Kirim dengan Enter',steps:'Tekan Enter untuk “Rina”, lalu untuk spasi saja.',expected:'Nama terisi diterima; spasi saja ditolak. Perlu Enter langsung.'}
      ]
    },
    slides:[
      // Bab 1: lihat masalahnya sebelum mendengar istilah dan cara kerja.
      slide('v07-pembuka','peran','hero','Belajar Menggunakan AI untuk Membantu Coding',{
        hero:{pretitle:'Belajar Menggunakan',lines:['AI UNTUK','MEMBANTU CODING'],audience:'Bekal untuk calon AI Engineer'},
        subtitle:'Pahami tugasnya. Coba hasilnya. Ceritakan yang sudah diperiksa.',
        parts:[['Materi 1','Orientasi AI tools'],['Materi 2','Contoh perbaikan formulir']],
        takeaway:'Kita mulai dari satu masalah pada kolom Nama.'
      },['Materi utama adalah panduan pemateri TEFA v0.7. Materi 1 berjudul resmi Orientasi penggunaan AI Tools terstruktur untuk calon AI Engineer; Materi 2 adalah simulasi pengerjaan micro-task dengan AI Assistant.','Siswa menyimak penjelasan dan demo; tidak ada tugas praktik siswa. Nama dan kelas adalah contoh lokal. Menonton demo belum membuktikan kemampuan mandiri.']),
      slide('ringkas-bug-awal','peran','lab','Nama kosong, tetapi berhasil?',{
        lab:'warmup',takeaway:'Pilih Awal, isi tiga spasi, lalu klik Daftar.'
      },['Tunjukkan kejadian sebelum membahas istilah. Pilih kode Awal secara manual, coba Rina, lalu tiga spasi. Pesan berhasil muncul meskipun pengguna belum mengetik nama.','Gunakan Siapkan isian jika perlu. Ini formulir lokal, bukan layanan pendaftaran sungguhan; tidak ada data yang dikirim.','Jangan memperbaiki dulu. Keputusan: formulir masih bermasalah. Alasan: nama belum diisi. Tindakan: kita jelaskan kebutuhan lalu periksa kode pada bab berikutnya.']),
      slide('v07-peran','peran','focus','Apa yang tetap kita lakukan?',{
        points:[['Jelaskan','Apa yang perlu dibuat atau diperbaiki.'],['Periksa','Baca perubahan dan coba aplikasinya.'],['Laporkan','Sebut yang sudah dan belum dicoba.']],
        takeaway:'AI membantu mengerjakan kode. Kita bertanggung jawab atas hasilnya.'
      },['AI dapat menulis kode dan menjelaskan error. Manusia menentukan pekerjaan, memeriksa, dan mengambil keputusan.','AI-Assisted Developer bukan nama sertifikasi. Penggunaan coding agent adalah salah satu bekal calon AI Engineer; pekerjaan AI Engineer mencakup kemampuan yang lebih luas.']),
      slide('v07-dua-cara','peran','contrast','Dua cara memakai AI',{
        left:{title:'Vibe Coding',points:['Mencoba ide lewat hasil yang terlihat.','Kode yang dihasilkan tidak diperiksa.']},
        right:{title:'AI-Assisted Development',points:['Menjelaskan kebutuhan dan batas perubahan.','Membaca kode dan memahami alasannya.']},
        progressive:true,takeaway:'Vibe Coding dapat membantu membuat contoh awal tampilan.'
      },['Definisi Vibe Coding pada materi mengikuti tulisan Fowler: iterasi tanpa memeriksa kode yang dihasilkan. Menggunakan AI atau bekerja cepat tidak otomatis Vibe Coding.','Contoh: membuat ide tampilan formulir untuk berdiskusi. Saat akan dipakai, lanjutkan pemeriksaan kode dan perilaku. Gunakan tombol perbandingan untuk membuka cara kerja kedua.']),
      slide('ringkas-dua-cara-hasil','peran','contrast','Saat hasilnya perlu diperbaiki',{
        left:{title:'Langsung mencoba lagi',points:['Minta AI memperbaiki tanpa menelusuri kode.','Bisa berhenti saat tampilan terasa sesuai.']},
        right:{title:'Periksa langkahnya',points:['Ulangi kejadian dan cari penyebab.','Coba nama biasa, kosong, dan spasi.']},
        takeaway:'Tanggung jawab tetap pada orang yang memakai atau menyerahkan hasil.'
      },['Tabel lama dipisah agar pembahasan instruksi dan pemeriksaan hasil tidak memenuhi layar yang sama.','Proses terstruktur tetap bisa menghasilkan bug. Ini perbandingan pola kerja, bukan pembagian profesi resmi.']),

      // Bab 2: kejadian, harapan, lalu contoh penjelasan.
      slide('v07-jelaskan-masalah','masalah','focus','Apa yang terjadi di formulir?',{
        statement:'Tiga spasi masih menghasilkan pesan berhasil.',
        example:{label:'YANG TERLIHAT',text:'Nama belum diketik → Daftar → “Pendaftaran berhasil”.'},
        takeaway:'Ceritakan langkah dan pesan yang benar-benar muncul.'
      },['Empat hal yang perlu dijelaskan: apa yang terjadi, seharusnya bagaimana, bagian yang diperbaiki, dan contohnya. Keempatnya dibagi ke layar berikutnya.','Contoh konkret: pengguna hanya menekan spasi. Keputusan: perbaiki pemeriksaan Nama. Alasan: hasilnya belum sesuai kebutuhan. Tindakan: jelaskan kejadian dan pesan yang diinginkan.']),
      slide('ringkas-hasil-diminta','masalah','contrast','Seharusnya bagaimana?',{
        left:{title:'Nama “Rina”',points:['Pengguna boleh melanjutkan.','Muncul pesan berhasil.']},
        right:{title:'Kosong atau spasi',points:['Pendaftaran tidak dilanjutkan.','Muncul “Nama belum diisi”.']},
        takeaway:'Pemeriksaan isian ini disebut validasi.'
      },['Jelaskan kejadian di layar dahulu, baru sebut istilah validasi. Aturan lain tentang nama tidak dibahas.','Tampilan dan kolom lain tetap menjadi batas pekerjaan; kita tidak menambah fitur pendaftaran.']),
      slide('v07-instruksi-awal','masalah','promptShort','Jelaskan bagian yang salah',{
        label:'CONTOH INSTRUKSI',
        quote:'Saat Nama hanya berisi spasi, pesan berhasil tetap muncul. Tolong perbaiki agar pengguna diminta mengisi nama terlebih dahulu.',
        takeaway:'“Tolong perbaiki formulir” belum menjelaskan masalahnya.'
      },['Contoh awal: Tolong perbaiki formulir ini. Bandingkan dengan instruksi di layar yang menyebut kejadian dan harapan.','Kita memilih instruksi yang lengkap karena AI mendapatkan masalah yang bisa diperiksa. Berikutnya sertakan kode yang berhubungan.']),

      // Bab 3: satu peran alat pada setiap layar.
      slide('v07-peta-alat','alat','contrast','Model dan aplikasi chat',{
        left:{title:'Model AI',points:['Menghasilkan jawaban dari instruksi dan informasi.']},
        right:{title:'Aplikasi chat',points:['Tempat kita bertanya dan berdiskusi dengan model.']},
        example:'Contoh: meminta penjelasan satu pesan error.'
      },['Model berbeda dari aplikasi yang menjadi tempat berinteraksi. Model yang dipilih tersedia melalui integrasi aplikasi.','Untuk satu error, chat dengan potongan kode yang sesuai bisa cukup. Jangan mengirim password atau data pribadi.']),
      slide('ringkas-agent','alat','focus','Agent membantu pekerjaan proyek',{
        statement:'Coding agent dapat membaca dan mengubah file sesuai akses yang diberikan.',
        example:{label:'CONTOH',text:'OpenCode · Claude Code · fitur agent pada Copilot'},
        takeaway:'Kemampuan mengikuti versi, akun, lingkungan, dan izin.'
      },['Sebagian agent dapat menjalankan perintah jika diizinkan. Nama model saja tidak menjelaskan kemampuan aplikasinya.','Editor digunakan untuk membaca dan menyunting kode. Browser, terminal, dan editor adalah antarmuka; tempat perintah dijalankan mengikuti lingkungan aplikasi.']),
      slide('v07-opencode-router','alat','process','Apa peran 9router?',{
        steps:[['OpenCode','Tempat memberi pekerjaan'],['9router','Perantara permintaan'],['Model AI','Menghasilkan jawaban']],
        takeaway:'Router bersifat opsional; gunakan koneksi yang didukung aplikasi.'
      },['OpenCode memakai jawaban model untuk membantu proyek. Jika dikonfigurasi melalui 9router, permintaan melewati router. Tidak semua agent memerlukan router.','Alat pendukung: Git melihat riwayat/perubahan; browser mencoba formulir; alat tes menjalankan pemeriksaan proyek.','Siapkan akun, koneksi, dan alat sebelum acara; sesi bukan tutorial instalasi satu produk.']),

      // Bab 4: kebutuhan instruksi tidak ditumpuk dalam satu tabel.
      slide('v07-isi-instruksi','instruksi','focus','Prompt dan konteks',{
        points:[['Prompt','Instruksi atau pertanyaan kepada AI.'],['Konteks','Informasi yang dibutuhkan untuk mengerjakan tugas.']],
        example:{label:'CONTOH KONTEKS',text:'Kode validateName dan kejadian saat tombol Daftar diklik.'}
      },['Prompt tidak perlu panjang. Informasi yang relevan dan konsisten lebih membantu daripada memasukkan semua hal.','Jika AI tidak dapat membaca file yang diperlukan, minta AI menjelaskan keterbatasan itu sebelum mengubah kode.']),
      slide('ringkas-syarat-selesai','instruksi','focus','Tentukan hasil yang diinginkan',{
        points:[['Nama biasa','“Rina” menghasilkan pesan berhasil.'],['Kosong atau spasi','Muncul “Nama belum diisi”.']],
        takeaway:'Syarat ini disebut acceptance criteria: acuan memeriksa hasil.'
      },['Daftar AC1–AC6 dibahas pada Bab 7. Di sini kenalkan kegunaannya melalui dua contoh yang bisa diamati.','Tampilan yang rapi belum cukup untuk menyatakan pemeriksaan nama benar.']),
      slide('v07-batas-prompt','instruksi','focus','Batasi bagian yang diubah',{
        points:[['Perbaiki','Pemeriksaan kolom Nama.'],['Pertahankan','Tampilan, kolom lain, dan bentuk hasil fungsi.'],['Hindari tambahan','Library atau fitur baru yang tidak diperlukan.']],
        takeaway:'Jika usulan AI melebar, kembalikan ke masalah Nama.'
      },['Batas diperlukan supaya perbaikan kecil tidak merusak kode lain. Mengubah bentuk hasil ok/name atau ok/error dapat memengaruhi kode pemakainya.','Nama dan kelas dalam contoh hanya data demonstrasi.']),
      slide('ringkas-kode-konteks','instruksi','focus','Sertakan kode yang berhubungan',{
        points:[['Fungsi','validateName.'],['Pemakai hasilnya','Kode saat formulir dikirim.'],['Cara mencoba','Langkah menjalankan aplikasi.']],
        takeaway:'Berikan akses ke file yang diperlukan atau kirim potongan kodenya.'
      },['Konteks yang cukup membantu AI memahami aliran dari isian, hasil fungsi, hingga pesan di layar.','Sertakan error jika memang ada. Jangan mengarang log dan jangan mengirim kredensial.']),
      slide('v07-prompt-formulir','instruksi','promptShort','Contoh instruksi kepada AI',{
        quote:'Periksa validateName dan kode yang memakainya. Tolak Nama kosong atau spasi saja. Tampilkan “Nama belum diisi”. Pertahankan tampilan dan jelaskan rencana sebelum mengubah kode.',
        fullPrompt:true,
        takeaway:'Instruksi lengkap dapat dibuka atau disalin saat diperlukan.'
      },['Versi lengkap juga mengatur spasi awal/akhir, mempertahankan spasi tengah, melarang library tambahan, menjaga bentuk hasil fungsi, serta meminta laporan tes.','Periksa rencana sebelum implementasi. Web ini tidak mengirim prompt ke layanan AI; pemateri dapat menyalinnya ke agent yang telah disiapkan.']),

      // Bab 5: aturan, panduan berulang, dan dua cakupan.
      slide('v07-prompt-rules-skills','panduan','contrast','Prompt dan rules',{
        left:{title:'Prompt: tugas sekarang',points:['“Perbaiki Nama agar tidak boleh kosong.”']},
        right:{title:'Rules: aturan kerja',points:['“Ikuti susunan file dan pertahankan tampilan.”']},
        takeaway:'Arahan tetap perlu diperiksa efektivitasnya.'
      },['Prompt adalah permintaan saat ini; rules adalah konvensi/batas kerja yang ingin diterapkan selama proyek.','Format, prioritas, dan cara memasang aturan dapat berbeda antaralat.']),
      slide('v07-contoh-skill','panduan','process','Skill adalah panduan berulang',{
        steps:[['Baca','Kebutuhan dan perubahan kode'],['Coba','Tes yang berkaitan'],['Laporkan','Masalah dan bagian yang belum dicek']],
        takeaway:'Langkah yang sering dipakai tidak perlu ditulis ulang setiap kali.'
      },['Panduan lengkap: baca permintaan, lihat diff, cek kesesuaian, jalankan tes jika tersedia, laporkan temuan dan bagian belum diperiksa.','Contoh temuan: spasi masih diterima. Periksa hasil trim dan pemakaian nilai ok. Reset belum dicoba. Ini contoh, bukan klaim tes sudah dijalankan.']),
      slide('v07-lokasi-skill','panduan','pathFocus','Skill untuk satu proyek',{
        label:'CONTOH LOKASI OPENCODE',path:'.opencode/skills/review-form/SKILL.md',
        statement:'Simpan panduan di proyek yang membutuhkan langkah pemeriksaan tersebut.',
        takeaway:'Nama file panduannya adalah SKILL.md.'
      },['Ini contoh lokasi yang didukung OpenCode. Cara aplikasi lain membaca skill dapat berbeda.','Pemuatan mengikuti penemuan skill, konteks proyek, kebutuhan, serta izin. Tidak ada file skill yang diinstal selama presentasi.']),
      slide('ringkas-skill-pengguna','panduan','focus','Skill untuk beberapa proyek',{
        points:[['Pengaturan pengguna','Panduan dapat dipakai di beberapa proyek pengguna.'],['Aplikasi agent','Skill tetap disiapkan pada aplikasi yang membacanya.']],
        takeaway:'Memakai router yang sama tidak otomatis membagikan skill.'
      },['Contoh lokasi global OpenCode: ~/.config/opencode/skills/review-form/SKILL.md. Simbol ~ berarti direktori home pengguna.','Aturan OpenCode dapat disimpan melalui AGENTS.md. Global pengguna tidak berarti otomatis tersebar ke komputer lain.','Router meneruskan permintaan model; agent menyusun konteks dan memuat skill.']),

      // Bab 6: tiap jenis pemeriksaan diberi tempat sendiri.
      slide('v07-human-loop','pemeriksaan','process','Kita ikut mengarahkan dan memeriksa',{
        steps:[['Arahkan','Jelaskan tugas dan batasnya'],['Periksa','Baca kode dan coba hasil'],['Putuskan','Sudah sesuai atau perlu diperbaiki']],
        takeaway:'Keterlibatan ini sering disebut Human in the Loop.'
      },['Manusia memeriksa rencana, perubahan, izin tindakan, dan hasil. Tingkat pemeriksaan mengikuti kebutuhan serta dampak kegagalan.','Koreksi chat menjadi informasi untuk jawaban berikutnya; tidak otomatis melatih ulang model secara permanen.']),
      slide('v07-tiga-pemeriksaan','pemeriksaan','contrast','Baca kode dan jalankan fungsi',{
        left:{title:'Baca kode',points:['Apakah hasil trim dipakai sebelum nama diperiksa?']},
        right:{title:'Jalankan fungsi',points:['Coba nama, teks kosong, dan spasi; lihat nilai hasilnya.']},
        takeaway:'Keduanya belum membuktikan tombol dan pesan di layar benar.'
      },['Fungsi bisa benar sementara handler atau tampilan masih salah. Ini alasan pemeriksaan kode dan aplikasi diperlukan bersamaan.','Contoh keputusan: lanjutkan mencoba formulir setelah nilai fungsi benar. Alasan: belum ada bukti integrasi tombol/pesan. Tindakan: isi kolom dan kirim.']),
      slide('ringkas-status-hasil','pemeriksaan','focus','Coba juga formulirnya',{
        points:[['Lulus','Hasil sesuai yang diharapkan.'],['Gagal','Hasil berbeda dari harapan.'],['Belum diuji','Percobaannya belum dilakukan.']],
        example:{label:'CONTOH LAPORAN',text:'“Nama sudah dicoba. Tombol Reset belum saya coba.”'}
      },['Isi kolom, klik tombol, dan lihat pesannya. Hasil ini memberi bukti untuk kondisi yang dicoba, bukan semua kemungkinan penggunaan.','Jangan menganggap belum diuji sama dengan lulus atau gagal. Catat browser, versi/mode kode, langkah, dan hasilnya.']),
      slide('v07-data-izin','pemeriksaan','focus','Perhatikan data dan izin',{
        points:[['Data contoh','Gunakan “Rina”, bukan data pribadi.'],['Izin tindakan','Pahami perintah yang akan dijalankan agent.'],['Riwayat kode','Gunakan Git untuk melihat dan memulihkan perubahan.']],
        takeaway:'Password dan kunci akses tidak perlu disertakan dalam contoh.'
      },['Jika dampak suatu tindakan belum dipahami, minta penjelasan atau bantuan pendamping.','Riwayat kode membantu pemulihan, tetapi tidak menggantikan pembacaan dan pengujian.']),

      // Bab 7: syarat tetap lengkap, disajikan tanpa tabel panjang.
      slide('v07-microtask-ac','microtask','focus','Satu pekerjaan kecil yang jelas',{
        statement:'Perbaiki pemeriksaan Nama pada formulir yang sudah ada.',
        points:[['Batas tugas','Fokus pada kolom Nama.'],['Fitur yang ada','Kelas, Daftar, Reset, dan Enter.']],
        takeaway:'Pekerjaan kecil seperti ini disebut micro-task.'
      },['Formulir bukan layanan pendaftaran sungguhan. Tidak menambah server, mengganti tampilan, atau membuat aturan nama baru.','AC1–AC6 dipakai sebagai penanda pembahasan; bukan nomor standar dari sumber.']),
      slide('ringkas-ac-nama','microtask','focus','Nama harus diisi sebelum melanjutkan',{
        points:[['AC1','“Rina” diterima.'],['AC2','Kosong dan spasi saja ditolak.'],['AC3','Pesan yang muncul: “Nama belum diisi”.']],
        takeaway:'Gunakan tiga kondisi ini saat mencoba formulir.'
      },['AC1 mengharapkan pesan berhasil setelah Rina diisi dan Daftar diklik. AC2 melarang kelanjutan pendaftaran saat kosong/spasi; AC3 menetapkan pesannya.']),
      slide('v07-kontrak-fungsi','microtask','compactContract','Perhatikan hasil fungsi dan fitur lain',{
        points:[['AC4','Hapus spasi tepi, pertahankan spasi tengah.'],['AC5','Bentuk hasil fungsi tetap sama.'],['AC6','Kelas, Reset, dan Enter tetap bekerja.']],
        shapes:['{ ok: true, name }','{ ok: false, error }']
      },['name berisi nama yang sudah dirapikan; error berisi pesan ketika nama kosong. ok menentukan apakah proses dapat dilanjutkan.','Contoh nilai: {ok:true,name:"Rina"} atau {ok:false,error:"Nama belum diisi"}. Mengganti bentuk hasil berisiko memengaruhi kode pemakainya.']),

      // Bab 8: klimaks perbaikan, setiap kode hanya menyorot bagian penting.
      slide('v07-demo-masalah','perbaikan','lab','Perbaiki kolom Nama',{
        lab:'intro',takeaway:'Bandingkan kode Awal dan Perbaikan secara manual.'
      },['Siapkan salinan aplikasi, agent, akun, dan koneksi sebelum acara. Gunakan kelas contoh yang sama.','Siapkan rekaman/gambar cadangan bila koneksi agent terputus dan beritahukan jika yang dilihat siswa adalah rekaman. Besarkan teks serta tutup panel yang tidak diperlukan.','Demo lokal tersedia tanpa koneksi AI. Contoh rencana/kode adalah bahan pembahasan, bukan jawaban layanan AI yang sedang berjalan.']),
      slide('v07-rencana-ai','perbaikan','caseOne','Minta AI membaca kode dulu',{
        scene:'“Baca validateName dan kode pengiriman. Jelaskan rencana sesuai AC1–AC6. Jangan ubah file dulu.”',
        revealLabel:'Tampilkan contoh rencana',
        discussion:[['Rapikan','Hapus spasi di tepi nama.'],['Periksa','Tolak hasil yang masih kosong.'],['Gunakan','Kembalikan nama yang sudah dirapikan.']]
      },['Jika rencana menghapus semua spasi, koreksi: Rina Putri tidak boleh menjadi RinaPutri. Database baru tidak diperlukan.','Setelah rencana diperiksa, pemateri dapat meminta perubahan: pertahankan tampilan/bentuk hasil, tunjukkan diff, serta sebut tes yang dijalankan.','Urutan ini membantu siswa mengikuti alasan perbaikan; bukan aturan wajib untuk semua pekerjaan.']),
      slide('v07-kode-awal','perbaikan','codeFocus','Mengapa spasi masih diterima?',{
        code:'if (raw.length === 0) {\n  return { ok: false, error: "Nama belum diisi" };\n}',
        highlight:[1],codeKey:'before',
        result:'Tiga spasi → 3 karakter → kondisi kosong tidak terpenuhi.',
        takeaway:'Spasi ikut dihitung sebagai karakter.'
      },['raw adalah teks dari kolom Nama. Kode awal hanya memeriksa jumlah karakter.','Fungsi menerima teks. Contoh ini tidak membahas semua aturan nama atau tipe data lain. Buka Kode lengkap jika diperlukan.']),
      slide('v07-kode-perbaikan','perbaikan','codeFocus','Simpan hasil trim',{
        code:'const name = raw.trim();\nif (name.length === 0) {\n  return { ok: false, error: "Nama belum diisi" };\n}',
        highlight:[1,2],codeKey:'fixed',
        result:'Tiga spasi → teks kosong → “Nama belum diisi”.',
        takeaway:'Spasi di antara kata tetap ada.'
      },['trim menghasilkan teks baru dan tidak mengubah raw secara langsung. Simpan hasilnya dalam name, lalu periksa name.','trim juga menghapus karakter seperti tab dan baris baru di kedua tepi. Buka kode lengkap untuk melihat pengembalian {ok:true,name}.']),
      slide('v07-diff','perbaikan','codeFocus','Tiga bagian kode yang berubah',{
        code:'+ const name = raw.trim();\n- if (raw.length === 0)\n+ if (name.length === 0)\n- return { ok: true, name: raw };\n+ return { ok: true, name };',
        diff:true,codeKey:'fixed',
        takeaway:'Diff membandingkan kode sebelum dan sesudah perubahan.'
      },['Perubahan 1 menyimpan hasil trim. Perubahan 2 memeriksa nama yang sudah dirapikan. Perubahan 3 mengembalikan nama itu.','Bentuk hasil tetap ok/name atau ok/error. Saat demo agent, baca diff yang benar-benar dibuat, cocokkan dengan rencana, lalu jalankan aplikasi.']),

      // Bab 9: rencana uji dibagi berpasangan, hasil aktual tetap di dialog.
      slide('v07-coba-formulir','percobaan','lab','Coba hasil perbaikannya',{
        lab:'tests',takeaway:'Coba formulir; buka Catatan tes untuk menjalankan dan melihat T1–T8.'
      },['Pilih Perbaikan secara manual. Lihat kode serta JSON melalui Lihat kode, dan daftar tes melalui Catatan tes.','T1–T7 mencoba formulir lokal. T8 memerlukan dua penekanan Enter langsung. Semua catatan dimulai belum diuji.','Mengganti mode kode mengosongkan tes sebelumnya. Isian dan catatan tidak dikirim atau dipersistenkan sebagai data siswa.']),
      slide('v07-tes-isian','percobaan','testPair','Nama biasa dan nama kosong',{
        tests:[['T1','Ketik “Rina”.','Pesan berhasil; hasil nama “Rina”.'],['T2','Biarkan Nama kosong.','Muncul “Nama belum diisi”.']],
        takeaway:'Ini hasil yang diharapkan, bukan laporan percobaan.'
      },['T1 memeriksa AC1 dan AC5. T2 memeriksa AC2 dan AC3. Jalankan percobaannya dan catat pesan yang benar-benar muncul.']),
      slide('ringkas-tes-spasi','percobaan','testPair','Spasi saja dan spasi tepi',{
        tests:[['T3','Tekan spasi tiga kali.','Ditolak: “Nama belum diisi”.'],['T4','Tambahkan spasi di tepi “Rina”.','Hasil fungsi tetap “Rina”.']],
        takeaway:'Lihat nilai hasil fungsi untuk memeriksa spasi.'
      },['T3 memeriksa AC2/AC3; T4 memeriksa AC4. Gunakan tampilan JSON agar spasi tidak merapat seperti teks HTML biasa.']),
      slide('ringkas-tes-tengah','percobaan','testPair','Spasi tengah dan percobaan ulang',{
        tests:[['T5','Ketik “Rina  Putri” dengan dua spasi.','Kedua spasi tengah tetap ada.'],['T6','Kirim kosong, lalu kirim “Rina”.','Pesan error berganti menjadi berhasil.']]
      },['T5 memeriksa AC4; tampilkan hasil fungsi karena HTML bisa merapatkan dua spasi. T6 memeriksa AC1–AC3.','Memperbaiki satu kasus jangan sampai merusak perilaku yang sudah berjalan.']),
      slide('v07-tes-alur','percobaan','testPair','Coba Reset dan Enter',{
        tests:[['T7','Isi Nama/Kelas, lalu Reset.','Formulir kembali ke keadaan awal.'],['T8','Tekan Enter untuk nama dan spasi.','Nama diterima; spasi ditolak.']],
        takeaway:'Mencoba kembali fitur lama disebut regression testing.'
      },['T7/T8 memeriksa AC6. Gunakan Catatan tes → Uji Enter. Dialog ditutup agar pemateri bisa menekan Enter langsung di kolom Nama.','Catat browser dan mode kode. Klik Daftar saja tidak membuktikan Enter bekerja.']),
      slide('v07-debugging','percobaan','codeFocus','Hasil trim belum dipakai',{
        code:'raw.trim();\nif (raw.length === 0) {\n  // Masih memeriksa raw yang lama.\n}',
        highlight:[1,2],codeKey:'ignored',
        result:'trim menghasilkan teks baru; raw tetap berisi tiga spasi.',
        takeaway:'Simpan hasilnya ke name, lalu coba ulang.'
      },['Contoh koreksi: “Spasi saja masih diterima. Hasil raw.trim() belum digunakan. Simpan hasilnya ke name dan gunakan name saat memeriksa kosong.”','Ulangi kejadian, periksa nilai dan kode terkait, perbaiki penyebab, lalu uji ulang kasus gagal serta bagian terkait. Mode kesalahan dapat dipilih dari Lihat kode.']),
      slide('ringkas-handler','percobaan','codeFocus','Fungsi benar, tetapi pesan masih salah',{
        code:'const result = validateName(raw);\n\n// ok belum diperiksa.\nshowSuccess();',
        highlight:[4],codeKey:'handler',
        result:'Hasil ok: false harus menghentikan proses dan menampilkan error.'
      },['Ini contoh kesalahan pada kode pemakai hasil fungsi (handler). Fungsi dapat benar sementara formulir tetap menampilkan pesan berhasil.','Pada Lihat kode, pilih Hasil ok diabaikan dan Gunakan pada formulir untuk menunjukkan contoh lokalnya. Kembalikan ke Perbaikan saat melanjutkan pengujian.','Contoh ini tidak harus muncul saat demo agent; jelaskan sebagai contoh jika tidak muncul.']),
      slide('v07-keputusan','percobaan','caseOne','Apakah perbaikannya sudah selesai?',{
        scene:'Nama sudah diperiksa. Tombol Reset dan pengiriman dengan Enter belum dicoba.',
        discussion:[['Keputusan','Belum semua syarat diperiksa.'],['Alasan','Nama yang benar belum membuktikan Reset dan Enter.'],['Berikutnya','Coba AC6, lalu perbarui laporan.']],
        takeaway:'Satu kasus berhasil belum membuktikan seluruh perbaikan.'
      },['Jika spasi masih diterima, masalah utama belum selesai: periksa validasi dan ulangi. Jika baru fungsi yang dicoba, jalankan juga formulir.','Jika semua tes sesuai dan kode sudah ditinjau, perbaikan dapat diterima untuk kondisi yang dicoba. Itu tidak berarti semua browser dan sistem pendaftaran sungguhan bebas bug.','Ini pembahasan lisan, bukan pengumpulan jawaban peserta.']),

      // Bab 10: contoh laporan dibagi sesuai pertanyaan pembaca.
      slide('v07-laporan-panduan','laporan','reportShort','Ceritakan apa yang diperbaiki',{
        quote:'Pemeriksaan Nama sudah diperbaiki. Sebelumnya spasi saja masih diterima. Sekarang muncul pesan “Nama belum diisi”.',
        takeaway:'Sebutkan perubahan dan alasannya.'
      },['Ini contoh penulisan laporan, bukan hasil tes yang otomatis dianggap sudah dilakukan. Saat demo, sesuaikan dengan kejadian nyata dan nama file yang berubah.']),
      slide('v07-contoh-laporan','laporan','reportShort','Sebutkan yang sudah dicoba',{
        quote:'Nama “Rina” dan “Rina Putri” sudah dicoba. Spasi tepi dihapus. Kelas, Reset, dan Enter masih bekerja.',
        actualReport:true,
        takeaway:'Tulis hanya percobaan yang benar-benar dijalankan.'
      },['Pernyataan ini adalah contoh format. Jangan membacakannya sebagai hasil demo jika percobaannya belum dilakukan.','Catatan demo menampilkan hasil lokal yang benar-benar dijalankan, browser, mode, langkah, dan status.']),
      slide('ringkas-laporan-batas','laporan','reportShort','Sebutkan yang belum diperiksa',{
        quote:'Percobaan baru dilakukan di browser demo. Browser lain dan pendaftaran ke server belum diperiksa.',
        actualReport:true,
        takeaway:'Hasil belum diuji perlu disebutkan dengan jelas.'
      },['Sebutkan browser dan versi/mode kode yang benar-benar dipakai. Jangan menyalin harapan dari rencana tes sebagai hasil aktual.','Jika ada tes yang belum dijalankan, catat sebagai belum diuji. Menyelesaikan tugas kecil tidak berarti seluruh aplikasi bebas masalah.']),
      slide('v07-penutup','laporan','focus','Tiga kebiasaan saat memakai AI',{
        points:[['Sebelum','Jelaskan masalah dan beri contoh.'],['Sesudah','Baca perubahan dan coba hasilnya.'],['Saat melaporkan','Sebut yang sudah dan belum diperiksa.']]
      },['Ajak siswa menjelaskan ulang kasus formulir dengan kata-kata sendiri. Mereka tidak perlu menghafal istilah untuk memahami alur.','Contoh jawaban: Saya perlu melihat perubahan kode serta mencoba nama, kosong, spasi, Reset, dan Enter. Alasannya: satu kasus belum cukup. Tindakan: lengkapi tes yang belum dilakukan.']),
      slide('ringkas-selesai','laporan','focus','Belajar memakai AI dengan bertanggung jawab',{
        statement:'AI membantu menulis kode. Kita tetap memahami perubahan dan mencoba aplikasinya.',
        takeaway:'Memahami alur ini adalah bekal untuk calon AI Engineer.'
      },['Ringkas tujuan sesi dan persilakan pertanyaan lisan. Semua contoh menggunakan formulir yang sama tanpa tugas praktik siswa.','Kemampuan melakukannya secara mandiri memerlukan latihan pada pertemuan berikutnya. Daftar istilah dapat dibuka dari kontrol pemateri.'])
    ]
  };
})();
