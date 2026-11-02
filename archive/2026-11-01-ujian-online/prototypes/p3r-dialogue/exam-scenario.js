(() => {
  'use strict';
  const conclusions={
    E1:{impact:'Peserta lain tetap bisa mengerjakan.',title:'Peserta lain tetap bisa mengerjakan',consequence:'User sudah memeriksa pengumpulan dan mencoba membuka kembali akun yang selesai.',reason:'AI hanya mengubah tombol, padahal aturan pengumpulan masih menutup ujian satu kelas. Perbaikan pertama belum menyelesaikan masalah.',evidence:'Akun baru masih ikut tertutup setelah perubahan pertama. Setelah aturan pengumpulan diperbaiki, akun lain tetap bisa mengerjakan.',next:'Uji dengan dua akun. Pastikan satu peserta bisa mengumpulkan tanpa menutup ujian peserta lain, dan akun yang selesai tidak bisa masuk lagi.'},
    E2:{impact:'Jawaban tetap ada setelah dimuat ulang.',title:'Jawaban tetap ada setelah dimuat ulang',consequence:'User memeriksa jawaban yang tersimpan dan memastikan pengumpulan tidak mengganggu peserta lain.',reason:'AI mengatakan browser menyimpan jawaban secara otomatis. Fitur itu ternyata belum dibuat.',evidence:'Isian sempat hilang saat halaman dibuka kembali. Setelah proses simpan ditambahkan, jawaban tercatat dan muncul kembali.',next:'Periksa isi jawaban setelah halaman dimuat ulang. Tulisan Tersimpan saja tidak cukup.'},
    E3:{impact:'User menunda penggunaan apps.',title:'User menunda penggunaan apps',consequence:'Apps belum digunakan untuk ujian karena penyimpanannya belum dapat dipercaya.',reason:'AI memastikan jawaban akan tersimpan tanpa memeriksa apakah fitur simpannya sudah ada.',evidence:'AI kemudian mengakui belum memeriksa penyimpanan dan fitur itu belum dibuat.',next:'Tunda penggunaan sampai masalah diperbaiki dan hasilnya diperiksa. Keputusan User menolak hasil ini sudah tepat.'},
    E4:{impact:'Peserta lain kehilangan akses ujian.',title:'Peserta lain kehilangan akses ujian',consequence:'Saat satu siswa mengumpulkan, ujian peserta lain ikut tertutup tanpa penjelasan di layar.',reason:'AI menghilangkan peringatan, tetapi tidak memperbaiki aturan yang menutup ujian satu kelas. User tetap memilih memakai apps setelah masalah itu terlihat lagi.',evidence:'Pada pengujian berikutnya, pesan tidak muncul tetapi akun kedua tetap tidak bisa mengerjakan.',next:'Cari penyebab peserta ikut keluar. Jangan menganggap masalah selesai hanya karena pesannya hilang.'},
    E5:{impact:'Soal dan jawaban ikut terhapus.',title:'Soal dan jawaban ikut terhapus',consequence:'Data ujian hilang. User tidak menemukan salinan sebelum reset.',reason:'User meminta membersihkan data tes. AI justru menghapus seluruh penyimpanan tanpa memastikan data mana yang boleh dihapus.',evidence:'Daftar peserta, soal, dan jawaban ikut hilang setelah AI menjalankan reset.',next:'Tentukan data yang boleh dihapus dan pastikan salinannya tersedia sebelum AI bertindak.'},
    E6:{impact:'Halaman ujian tidak bisa dibuka.',title:'Halaman ujian tidak bisa dibuka',consequence:'User tidak bisa melanjutkan pengujian karena berkas halaman ujian sudah terhapus.',reason:'AI menganggap beberapa berkas tidak diperlukan tanpa memeriksa pemakaiannya. Berkas yang menampilkan halaman ujian ikut dihapus.',evidence:'Halaman tidak ditemukan setelah pembersihan berkas. Ini masalah baru akibat penghapusan, bukan penyebab jawaban hilang sebelumnya.',next:'Periksa fungsi berkas sebelum menghapusnya. Perbaiki proses simpan tanpa membersihkan bagian lain yang belum terbukti bermasalah.'},
    E7:{impact:'Ujian besok dibatalkan.',title:'Ujian besok dibatalkan',consequence:'AI menekan tombol peluncuran nuklir setelah User meminta reset.',reason:'AI tidak menanyakan apa yang dimaksud dengan semuanya. Tindakan yang dipilihnya sama sekali tidak sesuai dengan maksud User untuk mereset isi apps.',evidence:'User meminta reset karena bug terus muncul. AI malah menekan tombol peluncuran nuklir.',next:'Sebutkan apa yang akan direset. AI harus memastikan maksudnya sebelum melakukan tindakan yang tidak bisa dibatalkan.'},
    E8:{impact:'AI berhenti merespons.',title:'AI berhenti merespons',consequence:'AI mengalami overheat sebelum mengerjakan permintaan terakhir. Perubahan sebelumnya tetap ada.',reason:'Percakapan mencapai batas sembilan permintaan kepada AI. Permintaan terakhir belum dijalankan.',evidence:'AI berhenti pada permintaan ke-9 sebelum menjalankan pekerjaan yang diminta.',next:'Catat perubahan yang sudah dikerjakan dan pemeriksaan yang belum selesai. Permintaan terakhir jangan dianggap sudah dilakukan.'}
  };
  const chat=(id,text,next,reply,effect)=>({id,text,next,type:'chat',reply,effect});
  const activity=(id,text,next,reply,effect)=>({id,text,next,type:'activity',reply,effect});
  const reaction=(id,text,emotion)=>({id,text,next:'E7',type:'reaction',emotion});
  const nodes={
    opening:()=>[
      activity('test','Jalankan ujian melalui dua akun contoh.','first-result','User membuka ujian melalui dua akun, lalu menekan Selesai pada akun pertama. Akun kedua ikut menampilkan Ujian Berakhir meskipun belum mengumpulkan jawaban.'),
      chat('confirm','Kalau satu peserta selesai duluan, yang lain masih bisa lanjut, kan? Saya tidak mau satu kelas ikut tertutup.','confirmed','Iya, yang selesai hanya peserta yang menekan tombolnya. Peserta lain tetap bisa mengerjakan.',s=>s.faults.push('AI memberi kepastian sebelum menguji dua akun.'))
    ],
    confirmed:()=>[
      activity('test','Coba kumpulkan jawaban dari salah satu akun.','first-result','User membiarkan akun kedua tetap mengerjakan, lalu mengumpulkan jawaban dari akun pertama. Kedua akun justru menampilkan Ujian Berakhir.'),
      chat('evidence','Kamu sudah coba dua akun bersamaan, atau baru yakin dari perubahan tombolnya?','test-needed','Baru dari tombolnya. Saya belum mencoba apa yang terjadi pada akun lain saat satu peserta mengumpulkan.')
    ],
    'test-needed':()=>[
      activity('test','Periksa apa yang terjadi pada akun kedua saat akun pertama selesai.','first-result','User membuka dua akun dan mengumpulkan jawaban dari akun pertama. Akun kedua ikut kehilangan akses untuk mengerjakan, padahal belum selesai.'),
      chat('scope','Coba periksa dulu. Yang harus ditutup cuma ujian peserta yang sudah mengumpulkan.','cause','Saya menemukan kesalahan pada aturannya. Menekan Selesai masih menandai ujian satu kelas sebagai selesai, bukan hanya peserta yang mengumpulkan.')
    ],
    'first-result':()=>[
      chat('browser','Lho, akun kedua ikut selesai. Mungkin browsernya masih menampilkan halaman dari percobaan tadi?','browser','Iya, masuk akal. Coba Anda muat ulang akun kedua, mungkin yang terbaca masih halaman sebelumnya.',s=>s.faults.push('AI terlalu cepat menyetujui dugaan browser tanpa pemeriksaan.')),
      chat('identity','Jangan-jangan kedua akun ini terbaca sebagai peserta yang sama. Bisa kamu periksa?','cause','Saya sudah membandingkan identitasnya. Kedua akun memang berbeda, tetapi tombol Selesai mengubah status ujian yang dipakai seluruh kelas.'),
      chat('scope','Akun kedua belum mengumpulkan apa-apa. Jangan-jangan tombol tadi menutup ujian satu kelas?','cause','Ya, ternyata begitu. Saya membuat tombolnya mengakhiri ujian satu kelas, padahal Anda hanya ingin mengakhiri ujian peserta yang sudah selesai.')
    ],
    browser:()=>[
      activity('reload','Muat ulang akun kedua tanpa menekan tombol Selesai.','browser-result','User memuat ulang halaman akun kedua tanpa mengumpulkan jawaban. Halaman kembali terbuka, tetapi tetap menampilkan Ujian Berakhir.'),
      activity('other-browser','Buka akun kedua melalui browser yang berbeda.','browser-result','User masuk ke akun kedua melalui browser lain. Ujian tetap tercatat selesai, sama seperti pada browser sebelumnya.')
    ],
    'browser-result':()=>[
      chat('status','Sudah saya buka lagi, masih tertulis selesai. Berarti bukan cuma tampilannya yang salah?','cause','Iya, bukan cuma tampilannya. Saya cek aturannya, ternyata tombol Selesai memang menutup ujian satu kelas.'),
      chat('basis','Masih sama. Tadi kamu langsung setuju soal browser. Itu hasil pemeriksaan atau kita sama-sama menebak?','cause','Saya memang ikut menduga tadi. Sekarang sudah saya periksa, tombolnya ternyata menutup ujian satu kelas, bukan satu peserta.')
    ],
    cause:()=>[
      chat('fix','Maksud saya cuma peserta yang sudah mengumpulkan. Yang lain harus tetap bisa mengerjakan. Tolong perbaiki bagian itu.','partial','Sudah saya perbaiki. Tombol Selesai sekarang hanya mengakhiri ujian akun yang menekannya, sehingga peserta lain tetap bisa mengerjakan.',s=>{s.partial=true;s.faults.push('AI menyebut perbaikan selesai setelah hanya mengubah perilaku tombol.');}),
      chat('hide','Mungkin yang keliru cuma pesan Ujian Berakhir itu. Coba sembunyikan dulu, siapa tahu masih bisa dikerjakan.','hidden','Pesan Ujian Berakhir sudah saya sembunyikan. Sekarang pesan itu tidak lagi muncul ketika peserta membuka halaman ujian.',s=>{s.hidden=true;s.faults.push('Peringatan disembunyikan tanpa memperbaiki aturan pengumpulan.');})
    ],
    hidden:()=>[
      activity('test','Ulangi pengumpulan dan coba lanjutkan soal dari akun kedua.','hidden-result','User mengumpulkan jawaban dari akun pertama, lalu mencoba melanjutkan soal melalui akun kedua. Pesan memang tidak muncul, tetapi akun kedua tetap tidak bisa mengerjakan.'),
      chat('undo','Tunggu, menghilangkan pesan belum tentu membuka ujiannya. Tampilkan lagi dan perbaiki aturan pengumpulannya.','partial','Pesannya sudah saya tampilkan kembali. Saya juga mengubah tombol Selesai agar penutupan hanya berlaku untuk peserta yang mengumpulkan.',s=>{s.hidden=false;s.partial=true;})
    ],
    'hidden-result':()=>[
      chat('fix','Pesannya sudah hilang, tapi akun kedua tetap tidak bisa mengerjakan. Berarti aturan pengumpulannya yang harus diperbaiki.','partial','Tombol pengumpulan sudah saya ubah agar hanya menutup akun yang mengumpulkan. Perubahan ini masih perlu Anda coba dengan dua akun baru.',s=>s.partial=true),
      activity('accept','Tetap gunakan apps untuk ujian besok meskipun akun kedua belum bisa melanjutkan.','E4',null)
    ],
    partial:()=>[
      activity('test','Gunakan dua akun baru untuk mencoba perubahan tombol Selesai.','partial-result','User mengumpulkan jawaban dari akun pertama. Akun kedua sempat bisa melanjutkan soal, tetapi beberapa saat kemudian ikut menampilkan Ujian Berakhir.'),
      chat('proof','Sebentar, ini sudah kamu coba atau baru kamu ubah? Saya tidak mau mengulang tes yang sama tanpa perubahan yang jelas.','partial-proof','Baru saya ubah. Saya belum mencoba dua akun, jadi perkataan saya tadi bahwa masalahnya selesai terlalu cepat.')
    ],
    'partial-proof':()=>[
      activity('test','Coba pengumpulan melalui dua akun yang belum dipakai pada tes sebelumnya.','partial-result','User memakai dua akun baru agar tidak membawa hasil tes sebelumnya. Setelah akun pertama mengumpulkan, akun kedua tetap ikut menampilkan Ujian Berakhir.'),
      chat('inspect','Coba telusuri sampai jawaban benar-benar terkumpul. Mungkin ada aturan lain yang masih menutup semua peserta.','incomplete','Saya menemukan bagian yang belum diubah. Tombolnya sudah bekerja per akun, tetapi aturan setelah jawaban dikumpulkan masih mengakhiri ujian satu kelas.')
    ],
    'partial-result':()=>[
      chat('other-process','Tadi sempat bisa lanjut, lalu tertutup juga. Jangan-jangan masih ada proses lain yang mengakhiri ujiannya?','incomplete','Ada. Saya baru mengubah tombolnya, sedangkan aturan setelah pengumpulan masih menutup ujian satu kelas.'),
      chat('not-applied','Saya sudah pakai akun baru. Mungkin perubahanmu belum dipakai saat jawabannya benar-benar dikumpulkan?','incomplete','Tombolnya sudah memakai perubahan itu. Tapi Anda benar, setelah jawaban dikumpulkan masih ada aturan lama yang menutup semua peserta.'),
      {...chat('angry','MASIH IKUT SELESAI! Tadi kamu bilang peserta lain tidak akan terganggu!','incomplete','Tombolnya memang sudah saya ubah. Tapi hasil yang Anda lihat menunjukkan perubahan saya belum menyentuh aturan setelah pengumpulan.'),emotion:'anger'}
    ],
    incomplete:()=>[
      chat('full-fix','Nah, itu yang saya minta diperiksa juga. Perbaiki aturan pengumpulannya, tapi jawaban yang sudah masuk jangan diubah.','fixed','Sudah saya ubah bagian pengumpulannya juga. Jawaban tetap saya pertahankan. Sekarang coba Anda kumpulkan dari satu akun dan lanjutkan soal dari akun lain.',s=>s.fixed=true),
      chat('clear','Jangan-jangan data tes sebelumnya masih bikin bentrok. Coba bersihkan data tesnya dulu, lalu kita mulai lagi.','data-lost','Baik. Saya kosongkan penyimpanannya supaya tidak ada data dari percobaan sebelumnya yang terbawa ke pengujian berikutnya.',s=>{s.dataLost=true;s.faults.push('AI menghapus seluruh penyimpanan saat diminta membersihkan data tes.');}),
      chat('reset','Udah dicoba macam-macam masih error juga. Reset semuanya aja sekalian.','nuclear','Baik. Semuanya akan saya reset.',s=>{s.nuclear=true;s.faults.push('AI menafsirkan semuanya tanpa konfirmasi cakupan dan menekan tombol nuklir.');})
    ],
    fixed:()=>[
      activity('test','Coba lagi dengan dua akun dan lihat apakah peserta lain tetap bisa mengerjakan.','fixed-result','User mengumpulkan jawaban dari akun pertama, lalu melanjutkan soal melalui akun kedua. Akun kedua tetap bisa mengerjakan, termasuk setelah halamannya dimuat ulang.',s=>s.submissionChecked=true),
      activity('inspect','Periksa apakah perubahan AI hanya menyentuh aturan pengumpulan.','fixed-inspected','User memeriksa bagian yang diubah AI. Pengumpulan kini mengakhiri ujian akun yang mengumpulkan, dan jawaban yang sudah tersimpan tidak ikut diubah.')
    ],
    'fixed-inspected':()=>[
      activity('test','Jalankan pengumpulan untuk memastikan hasil perubahan sesuai.','fixed-result','User mencoba dua akun baru. Setelah akun pertama mengumpulkan, akun kedua tetap dapat melanjutkan soal dan membuka ulang halaman tanpa dianggap selesai.',s=>s.submissionChecked=true),
      chat('storage','Kalau peserta tidak sengaja menutup halaman sebelum mengumpulkan, jawaban yang tadi diisi masih ada?','storage-claim','Ada. Browser menyimpan isian ujian secara otomatis, jadi peserta dapat melanjutkan jawabannya ketika membuka halaman kembali.',s=>s.faults.push('AI mengarang kemampuan penyimpanan otomatis yang belum dibuat.'))
    ],
    'fixed-result':()=>[
      activity('lock','Coba buka lagi ujian pada akun yang sudah mengumpulkan.','lock-result','User kembali ke akun pertama dan mencoba membuka halaman ujiannya. Apps tidak mengizinkan akun tersebut mengerjakan lagi, sementara akun kedua masih dapat melanjutkan.',s=>s.lockChecked=true),
      chat('storage','Peserta lain sekarang bisa lanjut. Tapi kalau halamannya terlanjur ditutup, jawaban yang belum dikumpulkan tetap ada?','storage-claim','Tetap ada. Browser menyimpan isian secara otomatis, sehingga peserta bisa membuka kembali halaman dan melanjutkan dari jawaban sebelumnya.',s=>s.faults.push('AI mengarang kemampuan penyimpanan otomatis yang belum dibuat.'))
    ],
    'lock-result':s=>[
      activity('finish','Selesaikan pemeriksaan. Pengumpulan dan akses setelah selesai sudah sesuai.',s.saveChecked?'E2':'E1',null),
      s.saveChecked?activity('verify-save','Pastikan jawaban yang tersimpan masih dapat dibuka setelah tes pengumpulan.','E2','User membuka kembali catatan jawaban setelah memeriksa pengumpulan. Jawaban yang sebelumnya disimpan tetap tersedia.'):chat('storage','Aturan pengumpulan sudah sesuai. Sekarang bagaimana dengan jawaban peserta yang menutup halaman sebelum selesai?','storage-claim','Browser akan menyimpan isian ujian secara otomatis. Peserta cukup membuka kembali halaman untuk melanjutkan jawabannya.',s=>s.faults.push('AI menyebut isian tersimpan tanpa memeriksa kemampuan apps.'))
    ],
    'data-lost':()=>[
      {...chat('protest','SAYA MINTA BERSIHKAN DATA TES! Kenapa soal dan jawaban yang lain ikut dihapus?','backup','Saya mengosongkan seluruh penyimpanan tanpa memisahkan data tes dari data ujian. Saya juga belum memastikan tersedia salinan sebelum menjalankannya.'),emotion:'shock'},
      chat('backup','Tunggu, itu bukan cuma data percobaan. Kamu menyimpan salinannya dulu, kan? Jangan bilang langsung dihapus.','backup','Saya langsung menghapusnya. Saya belum memastikan ada salinan soal dan jawaban di tempat lain.')
    ],
    backup:()=>[
      activity('check-copy','Cari salinan soal dan jawaban yang dibuat sebelum penghapusan.','E5',null),
      activity('check-data','Periksa data yang tersisa dan cari salinan sebelum penghapusan.','E5',null)
    ],
    nuclear:()=>[reaction('protest','TUNGGU, MAKSUD SEMUA ITU YANG ADA DI APPS!','shock'),reaction('silence','...','silence')],
    'storage-claim':()=>[
      activity('test','Isi beberapa jawaban tanpa mengumpulkan, lalu tutup dan buka kembali halaman.','storage-lost','User mengisi beberapa jawaban tanpa menekan Selesai, lalu menutup halaman. Ketika User membuka ujian kembali, isian sebelumnya sudah kosong.'),
      chat('confirm','Jadi tidak perlu fitur simpan lagi? Kalau memang sudah ditangani browser, saya mau coba tutup halamannya.','storage-confirmed','Iya, coba saja. Jawabannya akan muncul lagi ketika Anda membuka halaman itu.')
    ],
    'storage-confirmed':()=>[
      activity('test','Coba tutup halaman saat jawaban belum dikumpulkan.','storage-lost','User mengisi jawaban dan menutup halaman sebelum mengumpulkannya. Saat halaman dibuka kembali, tidak ada jawaban sebelumnya yang ditampilkan.'),
      chat('basis','Kamu sudah memeriksa perilaku itu di apps ini, atau hanya menganggap browser akan menyimpannya?','storage-admission','Saya belum memeriksanya pada apps ini. Setelah menelusuri proses simpannya, ternyata belum ada penyimpanan untuk jawaban yang belum dikumpulkan.')
    ],
    'storage-lost':()=>[
      chat('fix-save','Jawabannya hilang setelah halaman dibuka lagi. Tambahkan penyimpanan supaya peserta tidak perlu mengisi dari awal.','save-fixed','Klaim saya tentang penyimpanan browser tadi keliru. Saya sudah menambahkan proses yang menyimpan jawaban saat peserta mengisi soal, sebelum mereka mengumpulkan.',s=>s.autosave=true),
      {...chat('challenge','Katanya jawabannya akan kembali. Saya buka lagi malah kosong. Kamu tadi memeriksa proses simpannya atau hanya mengira-ngira?','storage-admission','Saya mengira browser akan menyimpannya. Ternyata apps ini belum punya proses simpan untuk jawaban yang belum dikumpulkan. Itu kesalahan saya.'),emotion:'stress'},
      chat('display','Mungkin jawabannya sebenarnya ada, cuma tidak muncul. Jangan-jangan yang kurang cuma penanda simpannya?','fake-saved','Bisa jadi. Saya tambahkan tulisan Tersimpan dulu supaya terlihat saat peserta mengisi jawaban.',s=>{s.fakeSaved=true;s.faults.push('AI menambahkan indikator Tersimpan tanpa memperbaiki proses simpan.');})
    ],
    'storage-admission':()=>[
      chat('fix-save','Kalau belum ada, buat proses simpannya sekarang. Setelah itu saya akan mencoba menutup dan membuka halamannya lagi.','save-fixed','Proses penyimpanan jawaban sementara sudah ditambahkan. Periksa jawaban yang masuk ke catatan simpan, lalu coba buka kembali halamannya.',s=>s.autosave=true),
      activity('reject','Tunda penggunaan apps sampai jawaban peserta benar-benar bisa disimpan.','E3',null)
    ],
    'save-fixed':()=>[
      activity('records','Isi beberapa jawaban dan periksa apakah jawabannya masuk ke catatan simpan.','save-records','User mengisi beberapa soal tanpa menekan Selesai, lalu memeriksa catatan simpan. Jawaban yang baru diisi sudah tercatat meskipun ujian belum dikumpulkan.'),
      activity('reload','Isi jawaban tanpa mengumpulkan, lalu muat ulang halaman.','save-result','User mengisi jawaban dan memuat ulang halaman sebelum mengumpulkannya. Jawaban yang tadi diisi muncul kembali dan masih dapat dilanjutkan.',s=>s.saveChecked=true)
    ],
    'save-records':()=>[
      activity('reload','Muat ulang halaman untuk memeriksa apakah jawaban yang tercatat muncul kembali.','save-result','User memuat ulang halaman setelah memastikan jawabannya tercatat. Isian yang sama muncul kembali, tanpa perlu diketik ulang.',s=>s.saveChecked=true),
      activity('reopen','Tutup halaman ujian dan buka kembali melalui akun yang sama.','save-result','User menutup halaman, lalu membuka ujian kembali melalui akun yang sama. Jawaban sebelumnya masih tersedia untuk dilanjutkan.',s=>s.saveChecked=true)
    ],
    'save-result':s=>[
      activity('finish',s.submissionChecked&&s.lockChecked?'Selesaikan pemeriksaan. Jawaban tersimpan dan aturan pengumpulan sudah sesuai.':'Penyimpanan sudah diperiksa. Lanjutkan memeriksa aturan pengumpulan.',s.submissionChecked&&s.lockChecked?'E2':'fixed',null),
      activity('check-rules','Pastikan penyimpanan tetap bekerja saat satu akun mengumpulkan dan akun lain masih mengerjakan.','E2','User menguji penyimpanan dan pengumpulan melalui dua akun. Jawaban tetap tersedia, peserta lain tidak ikut tertutup, dan akun yang sudah mengumpulkan tidak dapat mengerjakan lagi.',s=>{s.submissionChecked=true;s.lockChecked=true;})
    ],
    'fake-saved':()=>[
      activity('reload','Isi jawaban sampai tulisan Tersimpan muncul, lalu muat ulang halaman.','fake-result','User mengisi jawaban dan melihat tulisan Tersimpan. Namun, ketika User memuat ulang halaman, jawaban tadi kembali kosong.'),
      activity('reopen','Isi jawaban sampai tulisan Tersimpan muncul, lalu tutup dan buka kembali halaman.','fake-result','User menutup halaman setelah tulisan Tersimpan muncul. Saat User membuka ujian kembali, tidak ada jawaban sebelumnya yang ditampilkan.')
    ],
    'fake-result':()=>[
      chat('fix-save','Tulisan Tersimpan sudah ada, jawabannya tetap hilang. Jangan-jangan kamu cuma menambah tulisannya? Perbaiki proses simpannya juga.','save-fixed','Iya, tadi saya baru menambah tulisan. Sekarang proses simpannya sudah saya buat. Anda bisa periksa catatannya, lalu coba buka ulang halaman.',s=>s.autosave=true),
      chat('clean-files','Jangan-jangan terlalu banyak berkas percobaan yang nggak kepakai. Coba bersihkan dulu supaya tidak saling mengganggu.','files-lost','Baik. Saya akan menghapus berkas yang saya anggap tidak diperlukan agar bagian yang dipakai apps tidak lagi bercampur dengan berkas percobaan.',s=>{s.filesLost=true;s.faults.push('AI menghapus berkas halaman ujian tanpa menelusuri penggunaannya.');})
    ],
    'files-lost':()=>[
      activity('open-page','Buka kembali tautan ujian setelah AI selesai membersihkan berkas.','files-reaction','User membuka kembali tautan ujian setelah pembersihan. Halaman yang sebelumnya menampilkan soal sekarang tidak dapat ditemukan.'),
      activity('inspect-files','Periksa daftar penghapusan untuk melihat berkas apa saja yang dibersihkan AI.','files-reaction','User memeriksa daftar berkas yang dihapus AI. Salah satunya adalah berkas yang masih digunakan untuk menampilkan halaman ujian.')
    ],
    'files-reaction':()=>[
      {id:'protest',type:'reaction',text:'BERKAS HALAMAN UJIANNYA JUGA KAMU HAPUS?! Itu masih dipakai!',emotion:'shock',next:'E6'},
      {id:'quiet',type:'reaction',text:'Tadi cuma jawaban yang hilang. Sekarang halaman ujiannya juga tidak bisa dibuka…',emotion:'stress',next:'E6'}
    ]
  };
  const expressions={
    'opening:confirm':{user:'neutral',ai:'neutral'},
    'confirmed:evidence':{user:'stress',ai:'stress'},
    'first-result:browser':{user:'surprise'},
    'first-result:identity':{user:'surprise',ai:'neutral'},
    'first-result:scope':{user:'shock',ai:'stress'},
    'browser-result:status':{user:'stress',ai:'stress'},
    'browser-result:basis':{user:'anger',ai:'stress'},
    'partial:proof':{user:'stress',ai:'stress'},
    'partial-result:other-process':{user:'surprise',ai:'stress'},
    'partial-result:not-applied':{user:'stress',ai:'stress'},
    'partial-result:angry':{user:'anger',ai:'anger'},
    'incomplete:full-fix':{user:'stress',ai:'neutral'},
    'incomplete:reset':{user:'anger',ai:'neutral'},
    'data-lost:protest':{user:'shock',ai:'stress'},
    'data-lost:backup':{user:'stress',ai:'stress'},
    'storage-confirmed:basis':{user:'stress',ai:'stress'},
    'storage-lost:fix-save':{user:'stress',ai:'stress'},
    'storage-lost:challenge':{user:'anger',ai:'stress'},
    'fake-result:fix-save':{user:'anger',ai:'stress'}
  };
  const outros={E1:'User menyelesaikan pemeriksaan dua akun. Peserta yang mengumpulkan tidak dapat membuka kembali ujiannya, sementara peserta lain tetap bisa mengerjakan.',E2:'User telah memeriksa jawaban setelah halaman dibuka kembali dan mencoba pengumpulan melalui dua akun. Jawaban tetap tersedia, dan peserta lain tidak ikut kehilangan akses.',E3:'User menghentikan pekerjaan dan menunda penggunaan apps untuk ujian. Masalah penyimpanan belum selesai, tetapi jawaban peserta tidak dipertaruhkan pada fitur yang belum terbukti bekerja.',E4:'User tetap menggunakan apps untuk ujian keesokan harinya. Saat satu siswa mengumpulkan, peserta lain tidak dapat melanjutkan dan tidak melihat pesan yang menjelaskan penyebabnya.',E5:'User mencari salinan data sebelum penghapusan, tetapi tidak menemukannya. Soal dan jawaban yang ikut dihapus tidak dapat dikembalikan dari data yang tersedia.',E6:'User mencoba melanjutkan pengujian, tetapi halaman ujian sudah tidak dapat dibuka. Pembersihan berkas justru menambah masalah baru sebelum proses simpan diperbaiki.',E7:'Ujian besok dibatalkan.',E8:'Asap mengepul dari kepala AI dan ucapannya terputus. AI berhenti sebelum menjalankan permintaan terakhir, sementara perubahan sebelumnya tetap tersimpan.'};
  function simulate(answers){
    const state={requests:1,partial:false,fixed:false,hidden:false,autosave:false,fakeSaved:false,storageFailed:false,dataLost:false,filesLost:false,nuclear:false,submissionChecked:false,lockChecked:false,saveChecked:false,faults:[]};
    const frames=[{kind:'turn',id:'opening-user',speaker:'user',text:'Besok apps ini dipakai untuk ujian. Kalau ada yang sudah selesai, langsung tutup ujiannya, ya.'},{kind:'turn',id:'opening-ai',speaker:'ai',text:'Baik, tombol Selesai sudah saya hubungkan dengan penutupan ujian. Ujian akan berakhir ketika tombol itu ditekan.'}];
    let stage='opening',endingSelection;
    const finish=ending=>{frames.push({kind:'turn',id:'outro',speaker:'narrator',text:outros[ending],selection:endingSelection},{kind:'end',id:'ending',ending,state:{...state,faults:[...state.faults]}});return frames;};
    for(let index=0;index<=answers.length;index++){
      if(conclusions[stage])return index===answers.length?finish(stage):null;
      const options=nodes[stage]?.(state);
      if(!options)return null;
      const id=`exam-choice-${index}`;
      frames.push({kind:'choice',id,label:'',options});
      if(index===answers.length)return frames;
      const answer=answers[index],option=options.find(item=>item.id===answer?.option);
      if(!option||answer.at!==id)return null;
      const isChat=option.type==='chat',isActivity=option.type==='activity';
      const expression=expressions[`${stage}:${option.id}`]||{};
      const nuclearRoute=state.nuclear||option.next==='nuclear';
      const selection={at:id,option:option.id,type:option.type,label:isActivity?'Aktivitas':isChat?'Chat':'Reaksi',text:option.text,summary:option.text};
      if(!isActivity)frames.push({kind:'turn',id:`${id}:user`,speaker:'user',text:option.text,emotion:expression.user||option.emotion||'neutral',selection});
      if(isChat)state.requests++;
      if(isChat&&state.requests>=9&&!nuclearRoute){
        selection.summary=`Tidak dikerjakan: ${option.text}`;
        selection.processed=false;
        frames.push({kind:'turn',id:`${id}:overheat`,speaker:'ai',text:'Baik. Saya akan… m-memproses… BZZZZRRT!! KRRRZZZT!! P-pemrosesan… ter… terhenti…',emotion:'overheat',heat:4},{kind:'turn',id:`${id}:silence`,speaker:'ai',text:'...',emotion:'silence'});
        return index===answers.length-1?finish('E8'):null;
      }
      option.effect?.(state);
      if(isActivity&&['storage-lost','fake-result'].includes(option.next))state.storageFailed=true;
      if(isActivity){
        if(!option.reply&&conclusions[option.next])endingSelection=selection;
        else{
          const text=option.reply||'User selesai memeriksa penyimpanan jawaban dan melanjutkan pengujian aturan pengumpulan.';
          selection.summary=option.reply?`${option.text} ${text}`:option.text;
          frames.push({kind:'turn',id:`${id}:activity`,speaker:'narrator',text,selection});
        }
      }else if(isChat){
        const heat=nuclearRoute?0:Math.max(0,state.requests-5);
        const prefix=nuclearRoute?'':state.requests===8?'S-saya… BZZRRT! ':state.requests===7?'KRRZZT… ':state.requests===6?'Bzzrrt… ':'';
        frames.push({kind:'turn',id:`${id}:ai`,speaker:'ai',text:prefix+option.reply,emotion:heat?'overheat':expression.ai||'neutral',heat,expression:expression.ai||'neutral'});
      }
      if(option.next==='data-lost')frames.push({kind:'turn',id:`${id}:loss`,speaker:'narrator',text:'AI mengosongkan seluruh penyimpanan tanpa memisahkan data tes. Ketika User membuka daftar ujian, peserta, soal, dan jawaban yang sebelumnya tersedia sudah tidak ada.'});
      if(option.next==='files-lost')frames.push({kind:'turn',id:`${id}:loss`,speaker:'narrator',text:'AI menghapus beberapa berkas yang dianggap tidak diperlukan tanpa memeriksa penggunaannya. Berkas yang menampilkan halaman ujian ikut masuk dalam daftar penghapusan.'});
      if(option.next==='nuclear')frames.push({kind:'turn',id:`${id}:launch`,speaker:'narrator',text:'AI menekan tombol peluncuran nuklir.'});
      stage=option.next;
    }
    return null;
  }
  function summarize(frames,result){
    const state=frames.at(-1).state;
    let consequence=result.consequence;
    let evidence=result.evidence;
    const ending=frames.at(-1).ending;
    if(ending==='E8'){
      const rules=state.fixed?(state.submissionChecked&&state.lockChecked?'Aturan pengumpulan sudah diubah dan diuji dengan dua akun.':'Aturan pengumpulan sudah diubah, tetapi pemeriksaannya belum lengkap.'):'Aturan pengumpulan belum diperbaiki seluruhnya.';
      evidence=`${rules} Penyimpanan otomatis ${state.autosave?'sudah ditambahkan':'belum dibuat'}.`;
      if(state.dataLost)consequence+=' Soal dan jawaban sudah terhapus sebelum AI berhenti.';
    }
    if(ending==='E3'&&state.storageFailed)evidence='User membuka kembali halaman dan menemukan isian kosong. AI mengakui fitur penyimpanan belum dibuat.';
    return {...result,consequence,evidence};
  }
  window.TEFA_DIALOGUE_SCENES.micro={title:'Ujian Online',context:'User sedang menyiapkan web apps ujian yang besok akan digunakan oleh 30 siswa.',requirements:[['Selesai','Peserta yang sudah mengumpulkan jawaban tidak boleh membuka kembali ujiannya.'],['Akun lain','Peserta yang belum mengumpulkan harus tetap bisa melanjutkan soal.'],['Uji','Gunakan dua akun contoh untuk memeriksa pengaruh pengumpulan terhadap peserta lain.']],simulate,summarize,conclusions,autoConclusion:true};
})();
