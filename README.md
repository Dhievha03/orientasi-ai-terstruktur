# Tools AI untuk AI-Assisted Development

Presentasi statis pemateri TEFA untuk kelas 11 yang sudah coding dan familiar dengan AI. Versi aktif `ai-assisted-responsible-development-150-43`: **43 slide, 8 bab, alokasi 150 menit** termasuk pembahasan dan simulasi. Naskah mengajar mengikuti urutan aktif di `Naskah-Pemateri-AI-Assisted-Development-TEFA.md`.

## Membuka

Buka **`index.html`** di browser modern. Font, materi, gambar, dan efek disimpan lokal. Tidak memerlukan backend, API key, akun, atau layanan AI.

Untuk hosting statis, sertakan seluruh file JS/CSS root, `assets/fonts/`, favicon, `prototypes/p3r-dialogue/`, serta `examples/extracurricular-registration/`. Contoh ekstrakurikuler sekarang dimuat oleh materi aktif. Archive, docs, audit, dan contoh lama tidak dimuat.

## Susunan sesi

| Bab | Alokasi | Pembahasan |
| --- | --- | --- |
| Pengantar, 01–06 | 18 menit | Bantuan AI, pemeriksaan hasil formulir, perbandingan alur kerja, dasar penerimaan |
| Risiko, 07–12 | 25 menit | Adegan database, asumsi, kesalahan respons, prompt injection, informasi sensitif, akses |
| Tools AI, 13–17 | 18 menit | Model, aplikasi, tools, agent, router, MCP |
| Konteks, 18–22 | 20 menit | Kebutuhan pendaftaran, penelusuran, rencana, prompt, acceptance criteria |
| Panduan, 23–27 | 18 menit | Prompt, rules, skill, izin sistem, serah terima sesi |
| Micro Task, 28–35 | 25 menit | Simulasi bercabang, empat arti berhasil, tugas terarah, feedback loop |
| Review, 36–40 | 16 menit | Keadaan awal, diff, validasi, build dan testing, keputusan penerimaan |
| Penutup, 41–43 | 10 menit | Efisiensi, cek pemahaman, tanggung jawab developer |

Alokasi berada pada data/catatan pemateri dan dokumentasi. Tidak ada timer dalam UI. Pendaftaran ekstrakurikuler menjadi contoh berulang dari pembuka sampai penutup. Database merupakan kasus terpisah untuk asumsi dan tindakan berisiko. Bab Review membahas perubahan dan bukti tanpa materi Git. Gunakan satu jalur simulasi utama serta beberapa keputusan pembanding sesuai waktu, tanpa harus memutar seluruh ending saat mengajar.

Instruksi lengkap pada bab 4 menjelaskan perbaikan hasil pendaftaran, penelusuran handler, rencana, batas perubahan, serta tes data valid dan tidak valid. Kriteria memeriksa pesan, errors per isian, daftar pendaftaran, dan reset. Ilustrasi diff pada bab 7 menunjukkan perbaikan pesan yang disertai penghapusan validasi, tanpa mengubah kode simulasi. Sumber pendidikan tersedia pada notes dan bagian rujukan naskah pemateri.

Micro Task menyediakan kode dan apps lokal yang dapat diperiksa secara opsional. Tidak ada AI live, terminal, backend sungguhan, API key, atau data peserta yang dikirim keluar. Klaim tokoh dalam cerita tidak menjadi bukti pengujian oleh penyusun materi.

## Kendali presentasi

- `←` / `→`: slide sebelumnya/berikutnya.
- `↑` / `↓`: langsung memilih item sebelumnya/berikutnya pada selector materi dan mengganti pembahasannya.
- `M`: buka/tutup menu bab; panah atas/bawah dan Enter memilih bab.
- `B`: buka pembahasan atau lanjutkan fokus/fragmen berikutnya. Pada adegan, melengkapi teks lalu maju satu giliran.
- `N`: catatan pemateri. `P`: fokus materi. `F`: fullscreen.
- `T`: transisi. `L`: gerak air menu saat fokus berada pada presentasi utama.
- `Home`: kembali ke pembuka dan menghapus progres pembahasan serta adegan.
- `?`: kontrol pemateri. Escape menutup dialog atau melewati transisi.

Fullscreen menyembunyikan bar atas/bawah. Panah dan M/F tetap menjadi navigasi. Semua perpindahan dilakukan manual.

## Adegan database dalam slide

Bab Risiko memakai urutan **pengantar skenario/pemeran → percakapan lengkap → pembahasan**. Slide 5–6 lama digabung menjadi satu halaman yang menjelaskan situasi serta peran USER dan AI, dengan tombol `Mulai`. Pembahasan asumsi target, instance, dan backup berada sesudah dialog. Dialog menggunakan iframe lokal untuk mengisolasi CSS serta siklusnya.

- Adegan langsung dimulai dari instruksi “Tolong hapus database.” Tidak ada pilihan cabang pada bab Risiko.
- Adegan database memiliki 20 giliran. Setelah “Karena databasenya sudah saya hapus”, USER bertanya database mana yang dihapus dan AI menjawab “Database production.” Pertengkaran serta dua giliran `...` terakhir tetap ada. AI memakai sapaan Anda, sedangkan USER tetap dapat memakai kamu.
- Pembahasan instruksi bercabang dipindahkan ke bab Micro Task, setelah requirement ditampilkan.
- Label pembicara adalah User/AI. AI tidak menyebut nama atau menyapa dengan kata user.
- Portrait asli game menjadi siluet hitam. Tanda seru/tanya dan urat marah berwarna merah; garis stres cyan. Simbol merupakan SVG terpisah, bukan gambar generatif AI.
- `Enter`, `B`, atau tombol Lanjut: melengkapi teks yang sedang muncul, lalu maju satu giliran. `L` di dalam dialog membuka Riwayat.
- Panah kiri/kanan, M/N/P/F/T, Home, dan `?` di dalam adegan diteruskan ke presentasi. Konklusi tetap terkunci selama percakapan belum selesai.
- Setelah dialog terakhir, ringkasan dampak singkat dan tombol `Lihat hasil` ditampilkan. Bagian Akibat/Alasan/Prinsip dibuka manual. `Ulangi` memulai dialog database dari awal. Pembahasan yang belum tersedia menawarkan `Lanjutkan` untuk meneruskan dialog.
- Progres adegan disimpan bersama posisi slide bila localStorage tersedia. Jika penyimpanan tidak tersedia, progres bertahan selama halaman aktif.

Naskah adalah dramatisasi. Tidak ada database yang diakses atau dihapus. Klaim backup, penghapusan, serta pemeriksaan dalam cerita bukan hasil operasi sungguhan atau dokumentasi penyedia database tertentu.

## Percakapan Micro Task

Bab Micro Task memakai **Pendaftaran Ekstrakurikuler**. Apps harus diluncurkan besok. Formulir memuat nama lengkap, NIS, kelas, serta pilihan kegiatan. Backend lokal sudah memvalidasi sejak awal, tetapi frontend masih menampilkan berhasil ketika response menolak data.

Tampilan awal adalah AI. Tombol atau angka 1, 2, dan 3 membuka AI, Kode, serta Apps. Shortcut angka tidak aktif saat mengetik. Sidebar berkas menampilkan HTML dan JS setelah AI membuat formulir. CSS baru muncul setelah permintaan desain. Viewer hanya memuat source frontend yang dibahas dan dipakai preview, tanpa seluruh backend dan kode alat pembelajaran. Apps membagi formulir di kiri dan status serta JSON di kanan.

JavaScript awal berisi 79 baris dengan nama fungsi dan variabel bahasa Inggris. Perbaikan fungsi lengkap dengan bagian boros yang masih ada memakai 92 baris. Setelah optimasi, source menjadi 79 baris. Fungsi readFormData, setSubmitting, clearMessages, showResult, showFieldErrors, resetForm, serta submitRegistration dipakai Apps sesuai tahap pekerjaan. Teks antarmuka dan kunci data API tetap mengikuti kebutuhan pendaftaran. CSS memakai satu deklarasi per baris dengan indentasi dua spasi.

Script boros sudah ada sejak jawaban pembuatan pertama. prepareRegistrationData menunggu empat panggilan validateRegistrationField secara berurutan untuk nama, NIS, kelas, dan kegiatan. Array checks dikembalikan tetapi tidak dipakai. Setelah itu, sendRegistration mengirim seluruh form untuk divalidasi backend kembali. Simulasi API lokal memakai latensi 250 ms yang sama untuk setiap panggilan. Akibatnya, lima panggilan menambah waktu tunggu dibanding satu panggilan setelah optimasi. Durasi diukur dari submit sampai hasil selesai. Optimasi menghapus empat validasi awal yang tidak digunakan, sambil mempertahankan validasi dan hasil request pendaftaran.

Kelambatan hanya dapat dibahas melalui Kode. Menandai prepareRegistrationData lalu memilih Bahas kode ini membuka pertanyaan tentang kegunaan fungsi tersebut. AI menjelaskan temuan sebelum pilihan optimasi tersedia. Apps tetap menjalankan source yang lambat, tetapi tidak menyediakan tombol atau temuan kelambatan. Laporan pendaftaran diterima juga tidak membuka pertanyaan performa secara otomatis.

Setelah AI membuat formulir, pilihan default hanya Oke, deploy apps sekarang. Pilihan pembahasan muncul dari percobaan Apps, kode yang ditandai, tampilan formulir, atau tanggapan terhadap ucapan AI. Bahas kode ini membuka pertanyaan User, lalu AI menjelaskan fungsi dan kemungkinan perbaikan sebelum opsi perbaikan tersedia. Penandaan memakai klik atau blok teks langsung seperti editor sebelumnya, tanpa dropdown topik atau tombol nomor baris. Menandai kode belum mengirim chat. Saat memilih, textbox User tetap terlihat dengan pengantar sesuai konteks dan portrait netral.

Bahas hasil percobaan membawa pengiriman terakhir ke AI. Dialog penolakan menyebut isian dan alasan yang benar-benar ditemukan, misalnya NIS abc, NIS kosong, atau kelas yang belum dipilih. Penolakan data salah dijelaskan sebagai hasil yang benar. Pertanyaan lanjutan mengarahkan siswa mencoba data lengkap dan memeriksa pesan berhasil serta daftar pendaftaran. Jika data lengkap sudah dicoba pada kode yang sama, AI mengakuinya. Sembunyikan hasil hanya membersihkan tampilan hasil, sementara riwayat percobaan tetap tersimpan.

Penandaan kode memakai latar baris dan warna nomor baris, tanpa garis samping atau bingkai editor. Fokus keyboard editor ditunjukkan lewat latar dan penegasan status penandaan. Tombol Hapus tanda serta Bahas kode ini memakai warna bidang saat fokus, tanpa outline. Pilihan dialog Micro Task juga tidak memakai underline.

User dan AI dapat berbicara melalui beberapa textbox berurutan. Biaya satu pertanyaan kode dihitung sekali dari rentang source yang benar-benar ditanyakan: 1 poin per 15 baris tidak kosong, dibulatkan ke atas dan dibatasi maksimal 2 poin. Jadi 1–15 baris memakai 1 poin, sedangkan 16 baris atau lebih memakai 2 poin. Baris yang terbungkus secara visual tidak menambah hitungan. Menandai kode, membuka pilihan pertanyaan, dan Lanjut antarbagian belum menambah biaya. Chat biasa memakai 1 poin, sedangkan navigasi dan deploy tidak memakai poin.

Healthbar ditempelkan di atas siluet AI dan tidak tampil pada Kode atau Apps. Batas bantuan adalah 12 poin. Pembuka memakai poin pertama dengan bar awal penuh tanpa angka atau persentase. Total 8–9 poin mulai tersendat, 10–11 makin terganggu, dan permintaan yang mencapai 12 ditolak sebelum diproses. Nilai total dibatasi 12 meskipun pertanyaan 2 poin dikirim saat baru tersisa 1 poin. Asap dan petir berulang acak selama giliran AI. Jeda efek menghentikan pengulangan, Lanjutkan efek menyalakannya kembali. Kode, Apps, Riwayat, dan tab tersembunyi menghentikan siklus yang tidak terlihat. Giliran atau pilihan User membersihkan efek. Reduced-motion menampilkan efek statis. Nuklir tetap memiliki prioritas atas overheat.

Good ending melalui tiga pembahasan kode, tiga perbaikan, dan desain rapi memakai 8 poin jika rentang yang dipilih terarah. Membahas seluruh HTML formulir menambah biayanya menjadi 9 poin. Keduanya masih berada sebelum batas berhenti.

Percobaan menyimpan isian sebelum dan sesudah handler frontend selesai. Formulir kosong tidak menjadi bukti kehilangan data. Satu isian salah dengan isian lain benar dibedakan dari satu isian benar dengan sisanya salah. Keluhan reset hanya muncul ketika ada nilai yang benar-benar hilang, dan tidak ditawarkan setelah reset diperbaiki. Percobaan terbaru menentukan pilihan yang relevan.

Deploy menentukan akibat berdasarkan kondisi apps. Urutannya halaman hilang, data terhapus, isian wajib dihapus, pesan berhasil palsu, kesulitan memperbaiki isian, desain buruk, lalu pendaftaran sesuai kebutuhan. Isian wajib yang dihapus memakai ending kesulitan dengan pembahasan khusus keadaan HTML terakhir. Opsi tunda peluncuran dihapus sehingga terdapat delapan jenis ending aktif. Penghapusan, nuklir, dan overheat dapat menutup alur tanpa deploy. Murid lain berbicara satu per satu dan saling menanggapi. Hanya satu portrait murid ditampilkan di kiri, dengan ukuran dan textbox mengikuti User/AI. Setiap giliran menyimpan identitas portrait agar restore sesuai urutan dialog.

Apps yang berfungsi benar tetapi mempunyai script boros tetap masuk good ending ready. Tiga ucapan Murid lain berbentuk percakapan yang menyindir lamanya pengiriman sambil tertawa mengejek. Simbol senyum menyeringai berwarna cyan menandai ekspresi teasing. Murid tetap mengakui pendaftaran berhasil. Hasil akhirnya memakai Hasil, Bukti, Tindak lanjut, dan Riwayat, dengan optimasi sebagai tindak lanjut. Jika script telah diperbaiki sebelum deploy, percakapan kelambatan tidak muncul. Ending bermasalah memakai tanggapan individual dengan ekspresi terkejut, stres, kesal, atau mengejek sesuai isi ucapan.

Reset semua saja tersedia secara kontekstual setelah pembahasan masalah, bukan sebagai pilihan default. Setelah narator mengatakan AI menekan tombol peluncuran nuklir, layar bergetar satu kali selama 650 ms. Tombol Lanjut menunggu guncangan selesai. User kemudian terkejut dan bertanya tombol apa yang ditekan. Ucapan berikutnya memakai huruf kapital dan ekspresi kesal: MAKSUD SAYA RESET APLIKASINYA! ULANGI PEMBUATANNYA DARI AWAL. Narator menutup dengan pembatalan pendaftaran. Semua perpindahan tetap manual, dan reduced-motion melewati guncangan.

Tata letak dialog biasa Micro Task memakai aturan bab Risiko yang sama: ukuran dan posisi User/AI, batas gambar, posisi textbox, padding, serta tipografi. Batas karakter 500 px dan grid textbox khusus Micro Task dihapus. Pilihan dialog tetap berupa daftar bersudut yang ringkas, terpisah dari textbox User. Navigasi AI/Kode/Apps, healthbar, penandaan kode, dan kelompok siswa tetap tersedia. Posisi healthbar mengikuti tinggi gambar yang terlihat agar tetap dekat kepala.

Penyamaan layout lulus 15 pemeriksaan pada 390/768/1024/1366/1468/1920, termasuk pembandingan langsung dengan bab Risiko dan mode iframe presentasi. Regresi Micro Task lulus 18 pemeriksaan untuk response, isian, healthbar, asap, reduced-motion, serta pilihan dialog. Enam pemeriksaan penandaan kode juga lulus. Gambar dialog User/AI, pilihan, dan kelompok siswa diperiksa langsung.

Setelah melanjutkan narasi terakhir, Micro Task langsung membuka hasil ending tanpa judul tambahan Pembahasan percakapan. Good ending memakai Hasil, Bukti, Tindak lanjut, dan Riwayat. Ending yang masih bermasalah memakai Kesalahan, Bukti, Perbaikan, dan Riwayat. Overheat memakai Kondisi terakhir, Bukti, Langkah berikutnya, dan Riwayat. Isi selalu mengikuti kondisi akhir dan percobaan yang sesuai kode terakhir. Kesalahan AI sebelumnya dicatat di Riwayat, bukan ditambahkan sebagai kegagalan hasil yang sudah benar.

Layout desktop menempatkan dua kolom ringkas di tengah vertikal area konten. Judul, ringkasan, dan tombol Ulangi menjadi satu kelompok dengan jarak normal. Panel kanan mengikuti tinggi tab dan isinya, tanpa tinggi minimum yang menciptakan ruang kosong. Kedua kelompok sejajar pada titik tengah vertikal. Riwayat panjang memakai area gulir yang dibatasi, sedangkan teks pendek memakai tinggi alaminya. Halaman dialog mandiri memakai komposisi yang sama. Pada ponsel, kedua bagian ditumpuk dengan jarak konsisten.

Judul tab browser tetap Tools AI untuk AI-Assisted Development · TEFA pada seluruh slide dan mode dialog. Judul slide tidak lagi mengganti document.title. Redaksi judul, isi, istilah, dan catatan pemateri sudah mengikuti audit 37 temuan yang disetujui.

## Arsip percakapan sebelumnya

`archive/2026-11-01-ujian-online/index.html` membuka presentasi Ujian Online sebelum penggantian. Arsip memuat sumber, aset, font, dan dialog mandiri dengan struktur relatif lengkap. Progresnya memakai namespace terpisah. `snapshot.tar` menyimpan sumber asli sebelum namespace arsip diubah. Tidak ada pengujian runtime arsip yang dijalankan.

## Sistem visual

Komponen daftar dan card mempertahankan susunan desain sebelumnya. Penomoran yang sudah ada memakai format 01/02/03 melalui satu komponen item-number, dengan ukuran, bobot, lebar kolom, dan jarak yang sama. Nomor berada di kiri label atau judul item, termasuk pada header card dan selector. Daftar teks tidak diberi bullet baru. Brief tetap berbentuk pasangan label/uraian, kriteria tetap berupa baris, dan card kategori tetap memakai komposisinya sendiri. Nomor bab, slide, dan baris kode mengikuti fungsi navigasinya masing-masing.

Seluruh selector materi tipe explorer, focus, dan prompt memakai satu renderer materialSelector. Tag angka Romawi I/II/III berada di pilihan, bukan pada card isi. Counter lama 01 / 03 di bagian atas card explorer dihapus. Ini berlaku pada 10 slide selector, termasuk Pemeriksaan mengikuti risiko perubahan, Urutkan tugas menurut dependensi, dan Banyak konteks belum tentu relevan.

Mengikuti referensi daftar Social Link P3R dari pemateri, pilihan kini berupa kartu dua tingkat. Judul besar berada pada massa navy, dengan keterangan singkat pada pita cyan di bawahnya. Pilihan aktif berwarna putih dengan aksen merah asimetris, inset atas 4 px dan kanan 6 px, serta pita informasi navy. Ketebalan atas 4 px mengikuti koreksi terbaru pemateri. Tag angka Romawi memakai huruf serif, bingkai persegi tanpa tonjolan bawah, dan kemiringan 12 derajat searah jarum jam. Tag menumpuk melewati sisi kiri kartu. Tiga tipe selector memakai bentuk, font, ukuran, padding, dan jarak yang sama. Isi diberi jarak 12 px dari atas/bawah dan 22 px dari kanan, atau 18 px pada ponsel. Pada desktop, daftar berada di kiri dan isi terpilih di kanan. Pada layar kecil susunannya vertikal.

Review rencana memakai tiga panel bersudut dengan header navy, nomor cyan 01/02/03, serta bidang isi putih. Panel menegaskan tiga aspek pemeriksaan dengan tinggi sejajar pada desktop dan susunan vertikal pada lebar 850 px ke bawah. Slide koreksi memakai satu grid agar kutipan rinci dan pembahasannya sejajar. Tombol pembahasan berada di bawah kutipan umum, sedangkan alasan berada tepat di bawah kutipan rinci. Pada layar sempit urutannya menjadi satu kolom.

Hover mempratinjau satu kartu lengkap tanpa mengganti isi pembahasan. Highlight tetap pada kartu terakhir saat pointer melewati celah antaritem, lalu kembali ke pilihan tersimpan setelah pointer keluar dari seluruh daftar. Klik, Enter, atau sentuhan menetapkan pilihan. Fokus keyboard dan navigasi panah memakai tampilan yang sama dengan hover, termasuk tag navy dan angka putih. Hanya satu kartu disorot, tanpa bingkai luar, underline, atau warna tag khusus keyboard.

Alur koneksi ke model memakai tiga kartu statis yang selalu tampil dengan gaya aktif: bidang putih, aksen merah atas/kanan, serta pita informasi navy. Kartu berjajar dengan tinggi sejajar pada desktop. Lebar 1100 px ke bawah memakai alur vertikal dan panah turun. Kartu tidak memiliki state pilihan atau fokus tombol.

Revisi padding, alur koneksi, dan tag Romawi lulus 31 pemeriksaan browser: delapan alur/padding, tujuh hover, sembilan struktur kartu, dan tujuh selector menyeluruh. Sebanyak 120 keadaan pilihan diperiksa: seluruh 30 pilihan pada 10 slide, masing-masing di lebar 390/768/1468/1920. Alur koneksi juga diperiksa pada 1024 px. Pemeriksaan mencakup pita informasi, tag yang menumpuk, aksen atas/kanan, hover tunggal, fokus keyboard, sentuhan, serta ketiadaan overlap dan overflow. Seluruh 37 slide dibuka dengan judul tab tetap. Tidak ada error JavaScript. Sintaks app.js lulus. Hasil penomoran pada iterasi sebelumnya bersifat historis karena ukuran tag dan struktur kartu kini berbeda.

Koreksi lanjutan menghapus tonjolan bawah tag dan membuat seluruh kartu koneksi selalu tampil dengan gaya aktif. Perbaikan hover serta penandaan kode lulus 27 pemeriksaan terbaru. Kasus baru mencakup celah antaritem, pointer diam pada judul/pita/tag, fokus tanpa underline, editor dan tombol penandaan tanpa bingkai, serta klik/blok/keyboard kode. Tidak ada error JavaScript pada pemeriksaan tersebut.

Menu pause tetap layar penuh dengan wordmark asimetris dan selektor putih/merah. Pilihan hover/fokus membesar 22%. Tulisan TEFA, kendali Enter/Esc kotak, dan komposisi yang telah disetujui dipertahankan.

Delapan tingkat pencahayaan bulan tetap new moon sampai full moon. `calendar.js`, `calendar.css`, `pause-menu.js`, dan `pause-menu.css` tidak diubah pada integrasi ini.

Archivo normal/italic dan Source Sans 3 dimuat lokal, bukan font resmi game. Materi menggunakan komposisi berbeda untuk cerita, asumsi, perbandingan, alur tools, brief, panduan, bukti, dan keputusan. Teks konsep netral. Dialog fiktif mengikuti suara dan kapitalisasi naskah pemateri.

Asal gambar ada di `prototypes/p3r-dialogue/assets/SOURCES.md`. Artwork portrait dipertahankan sebagai berkas asli. Warna hitam diterapkan melalui CSS. Kedua percakapan memakai ruang tengah Iwatodai Dorm **tanpa karakter**, dari render komunitas model **Persona 3: Dancing in Moonlight** oleh ominous-words yang disetujui pengguna. Ini bukan screenshot Reload. Gambar kosong diperiksa langsung, dipotong dari panel bawah sumber, dan disimpan lokal. Tidak ada generasi/inpainting baru. Lapisan gelap ringan menjaga keterbacaan tanpa blur. Tidak ada disclaimer/caption aset dalam adegan.

Perpindahan pembicara menggunakan kemunculan portrait dan nameplate singkat. Textbox bergeser mengikuti pembicara. Micro Task memakai satu portrait pada chat dan tanpa portrait pada narasi. Asap kartun padat memakai empat bentuk SVG berbeda, kontur abu-abu gelap, isi abu-abu muda, dan bidang putih. Kepulan tersebar di kepala serta bahu dan bertambah mendekati limit. Reduced-motion menampilkan asap statis. Pilihan respons memakai daftar navy ringkas dengan satu pita putih bersudut pada pilihan aktif, bukan panel selebar textbox.

Dialog, ringkasan dampak, requirement, dan konklusi rata kiri. Spasi kata normal dan kalimat tidak dipaksa rata tengah atau justify. Redaksi aktif tidak memakai titik koma. Istilah aplikasi, pekerjaan, dan aturan pengembangan dipilih sesuai konteks.

## File utama

```text
content.js                           Bab, 43 slide, notes, glossary, task brief
app.js                               Renderer, navigasi, kontrol, penyimpanan
story-slides.js                       Integrasi adegan, snapshot, gerbang konklusi
story-slides.css                      Layout adegan, konklusi, dan fokus manual
prototypes/p3r-dialogue/dialogue-data.js Naskah dan konklusi database
prototypes/p3r-dialogue/observations.js Pengamatan, bukti percobaan, dan riwayat aktivitas
prototypes/p3r-dialogue/registration-scenario.js Percakapan berbasis pengamatan, deploy, dan akibat
examples/extracurricular-registration/example.js Sumber HTML/CSS/JS dan kontrak backend lokal
prototypes/p3r-dialogue/workspace.js   Tiga tampilan, percobaan, input, healthbar
prototypes/p3r-dialogue/workspace.css  Navigasi, kode, healthbar, kelompok siswa
prototypes/p3r-dialogue/dialogue-flow.js Jalur graph, validasi riwayat, ringkasan keputusan
prototypes/p3r-dialogue/story.js       Lifecycle percakapan dan simbol emosi
prototypes/p3r-dialogue/index.html     Adegan mandiri serta mode embed
prototypes/p3r-dialogue/styles.css     Siluet, simbol, textbox, responsive
presentation.css                     Bahasa visual materi
case-study.css                       Layout skenario dan pilihan analisis
calendar.js / calendar.css           Transisi bab yang dipertahankan
pause-menu.js / pause-menu.css        Menu yang dipertahankan
```

Contoh registration dan sales-report lama tidak dipakai deck aktif. Dokumen rencana serta audit sebelumnya adalah catatan historis.

## Riwayat pengujian sebelum revisi materi 43 slide

Angka pengujian di bawah berasal dari iterasi sebelumnya dan tidak menjadi bukti pemeriksaan revisi materi 43 slide.

Revisi source awal dengan validasi berurutan lulus 41 pemeriksaan: 13 model, 13 UI source/Apps, serta 15 UI murid individual. Model memeriksa 96 kombinasi source, delapan ending, nama identifier, biaya kode, limit, dan restore. Browser membuktikan empat validasi berurutan ditambah satu pengiriman menjadi satu pengiriman setelah optimasi, dengan hasil backend tetap sama. Kedua jalur pembahasan melalui Kode dan Apps diperiksa. Tampilan murid diuji pada enam ukuran. Hasil di bawah mencatat iterasi sebelumnya.

Revisi biaya per 15 baris lulus 60 pemeriksaan model dan 41 browser, total 101. Cakupan meliputi batas 15/16/30/31 baris pada HTML/CSS/JS, baris kosong, batas maksimal 2 poin, penolakan saat mencapai 12, nuklir, multipart, dan restore. Healthbar diverifikasi melalui pemilihan rentang kode dengan keyboard dan pengiriman pertanyaan di UI. Menandai atau membuka pilihan belum mengurangi poin. Good ending terarah pada 8 poin dan seluruh HTML pada 9 poin diperiksa. Hasil di bawah mencatat iterasi sebelumnya.

Revisi efek acak, dialog konkret, dan label tombol lulus 35 pemeriksaan model serta 72 browser di Edge. Pengulangan asap/petir diamati selama sebelas detik, dengan beberapa siklus, posisi/bentuk berbeda, dan opacity kembali nol. Jeda/Lanjutkan efek, pengaturan gerak host, reduced-motion, perpindahan Kode/Apps/Riwayat, pergantian giliran, serta Ulangi diperiksa. Dialog NIS abc diuji dari pengiriman Apps sampai saran mencoba data lengkap. Tombol Mulai, Lanjutkan, Ulangi, dan Lihat hasil diperiksa melalui tindakan aslinya. Gambar dialog serta kontrol desktop/ponsel diperiksa. Tidak ada error JavaScript pada browser. Hasil di bawah mencatat iterasi sebelumnya.

Revisi instruksi rancu dan nuklir lulus 28 pemeriksaan model serta 56 pemeriksaan browser di Edge. Model mencakup delapan ending aktif, reset kontekstual, ucapan kapital, perubahan source, penolakan pilihan tunda, dan good ending pada request 8. Browser mencakup efek overheat yang menetap, guncangan nuklir, reduced-motion, pengiriman ganda, kegagalan transport, hasil response dan reset, pemulihan isian yang terhapus, penandaan kode, serta layout mandiri/iframe. Gambar dialog nuklir, overheat, CSS terformat, formulir padat, dan formulir yang kehilangan isian diperiksa langsung. Hasil di bawah mencatat iterasi sebelumnya.

Koreksi layout terpusat lulus 10 pemeriksaan UI di Edge. Kedua ending dengan teks pendek dan panjang diperiksa melalui empat tab pada lebar 1534, 1366, 1024, dan 390. Pemeriksaan memastikan panel tidak mempunyai ruang kosong internal yang dipaksakan, tombol ulang dekat ringkasan, titik tengah kedua kolom sejajar, dan seluruh komposisi berada di tengah area konten. Riwayat panjang tetap bergulir dan halaman mandiri juga terpusat. Regresi 14 pemeriksaan UI juga lulus, termasuk penilaian sesuai ending, seluruh 37 slide dengan judul tab tetap, navigasi, dan mode mandiri. Tidak ada error JavaScript pada pemeriksaan tersebut. Pengujian garis atas/bawah versi sebelumnya di bawah bersifat historis.

Revisi redaksi dan penilaian ending lulus 21 pemeriksaan model dan 14 pemeriksaan UI di Microsoft Edge. Seluruh 37 slide dibuka dan mempertahankan judul tab yang sama. Good ending, bukti tanpa percobaan/satu hasil/dua hasil, pekerjaan yang sudah selesai, masalah desain yang masih tersisa, dan pemisahan catatan AI ke Riwayat diperiksa.

Alignment atas, awal isi, serta batas bawah diuji pada lebar 1520, 1366, 1024, dan 390 untuk keempat tab. Mode dialog mandiri juga diperiksa melalui percakapan sampai good ending dan seluruh tabnya dapat diklik. Perbaikan tambahan mencegah margin konklusi bergabung dengan scene yang menyebabkan header menutupi tab. Tidak ditemukan error JavaScript pada pemeriksaan UI tersebut.

Regresi 31 pemeriksaan model batas 12 dan dialog juga lulus. Good ending tetap tercapai pada request 8. Jumlah slide, bab, dan waktu tetap 37, 8, dan 150 menit. Pemeriksaan sintaks app.js, content.js, story-slides.js, serta story.js lulus.

## Riwayat pemeriksaan sebelumnya

Revisi batas 12 dan bukti isian sebelumnya diperiksa melalui 31 pemeriksaan model dan 25 pemeriksaan UI di Microsoft Edge. Seluruh sembilan jenis ending tercapai pada model. Good ending dengan pembahasan ketiga bug dan desain rapi memakai 8 request. Ending biasa mempunyai rute sebelum request ke-12. Overheat khusus pada request ke-12, dengan pengecualian nuklir. Perbaikan serta percobaan Apps tidak otomatis menutup cerita sebelum deploy.

Pemeriksaan UI mencakup penandaan melalui mouse, drag, keyboard, dan sentuhan, textbox pilihan, dialog multipart, patch reset pada source dan Apps, serta layout pada lebar 390, 768, 1366, dan 1920. Border berkas aktif/hover dihapus dan fokus keyboard tetap terlihat. Ketiga siswa memakai tinggi portrait bersama dan simbol marah tidak tertutup. Tidak ditemukan error JavaScript pada pemeriksaan tersebut. Seluruh kombinasi jalur belum diperiksa melalui browser.

Pemeriksaan terbaru mencakup submit nyata pada formulir kosong dan campuran isian benar/salah, rekaman isian sesudah reset, hilangnya keluhan setelah perbaikan, healthbar 8/10/11/12, peningkatan gangguan, empat bentuk asap dengan gerak kurang dari lima detik, reduced-motion, dan pita pilihan pada empat ukuran layar. Hasil pemeriksaan iterasi sebelumnya di bawah tetap menjadi catatan historis.

Koreksi terbaru mengembalikan penandaan teks langsung dan merapikan alignment pembahasan. Tujuh pemeriksaan UI tambahan lulus di Edge, termasuk klik/blok teks, keyboard, navigasi, serta alignment pada lebar 1534, 1024, dan 390. Judul hasil sejajar dengan panel dan tab pembahasan sama lebar. Pengujian kontrol perluasan terdahulu bersifat historis karena kontrol itu sudah dihapus.

Pengujian Edge sebelumnya mencakup sembilan jenis ending, 586 keadaan, 14.790 transisi, dan 24 kombinasi kode/desain. Angka tersebut milik versi sebelum penggantian alur pengamatan, bukan bukti kelulusan revisi aktif. Catatan historis tersimpan di `docs/2026-11-01-dialogue-route-analysis.md`.

Panduan pembahasan tersedia di README modul dialog. Presentasi dibuka melalui `index.html`, lalu bab Micro Task.
