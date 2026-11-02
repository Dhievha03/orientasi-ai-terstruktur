# Tools AI untuk AI-Assisted Development

Presentasi statis pemateri TEFA untuk kelas 11 yang sudah coding dan familiar dengan AI. Versi aktif `ai-assisted-registration-ending-review-150-8`: **37 slide, 8 bab, alokasi 150 menit** termasuk pembahasan dan pertanyaan per bab.

## Membuka

Buka **`index.html`** di browser modern. Font, materi, gambar, dan efek disimpan lokal. Tidak memerlukan backend, API key, akun, atau layanan AI.

Untuk hosting statis, sertakan seluruh file JS/CSS root, `assets/fonts/`, favicon, `prototypes/p3r-dialogue/`, serta `examples/extracurricular-registration/`. Contoh ekstrakurikuler sekarang dimuat oleh materi aktif. Archive, docs, audit, dan contoh lama tidak dimuat.

## Susunan sesi

| Bab | Alokasi | Pembahasan |
| --- | --- | --- |
| Pengantar | 15 menit | Vibe Coding, AI-Assisted Development, tanggung jawab developer |
| Risiko | 30 menit | Pengantar skenario dan pemeran, adegan database, konklusi, tiga risiko respons |
| Tools AI | 20 menit | Aplikasi, model, tools, mode kerja, akses, koneksi |
| Konteks | 20 menit | Relevansi, kebaruan, task brief, acceptance criteria |
| Panduan | 20 menit | Prompt, rules, skill, cakupan, serah terima context |
| Micro Task | 20 menit | Requirement, percakapan bercabang, unit pekerjaan, scope, feedback loop |
| Review | 15 menit | Rencana, perubahan, klaim, verifikasi, penerimaan |
| Penutup | 10 menit | Laporan, tindak lanjut, tanggung jawab |

Alokasi berada pada data/catatan pemateri dan dokumentasi. Tidak ada timer dalam UI. Contoh berbeda digunakan per prinsip: database, login, library, pencarian katalog, notifikasi, dan pendaftaran ekstrakurikuler.

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

Bab Risiko memakai urutan **pengantar skenario/pemeran → percakapan lengkap → konklusi**. Slide 5–6 lama digabung menjadi satu halaman yang menjelaskan situasi serta peran USER dan AI, dengan tombol `Mulai percakapan`. Pembahasan asumsi target, instance, dan backup berada sesudah adegan. Adegan menggunakan iframe lokal untuk mengisolasi CSS serta siklus dialog.

- Adegan langsung dimulai dari instruksi “Tolong hapus database.” Tidak ada pilihan cabang pada bab Risiko.
- Adegan database memiliki 20 giliran. Setelah “Karena databasenya sudah saya hapus”, USER bertanya database mana yang dihapus dan AI menjawab “Database production.” Pertengkaran serta dua giliran `...` terakhir tetap ada. AI memakai sapaan Anda, sedangkan USER tetap dapat memakai kamu.
- Pembahasan instruksi bercabang dipindahkan ke bab Micro Task, setelah requirement ditampilkan.
- Label pembicara adalah User/AI. AI tidak menyebut nama atau menyapa dengan kata user.
- Portrait asli game menjadi siluet hitam. Tanda seru/tanya dan urat marah berwarna merah; garis stres cyan. Simbol merupakan SVG terpisah, bukan gambar generatif AI.
- `Enter`, `B`, atau tombol Lanjut: melengkapi teks yang sedang muncul, lalu maju satu giliran. `L` di dalam adegan membuka Log.
- Panah kiri/kanan, M/N/P/F/T, Home, dan `?` di dalam adegan diteruskan ke presentasi. Konklusi tetap terkunci selama percakapan belum selesai.
- Setelah dialog terakhir, ringkasan dampak singkat dan tombol `Lihat konklusi` ditampilkan. Tidak ada tulisan “Adegan selesai” atau “Akhir percakapan”. Bagian Akibat/Alasan/Prinsip dibuka manual. `Ulang percakapan` memulai database dari awal.
- Progres adegan disimpan bersama posisi slide bila localStorage tersedia. Jika penyimpanan tidak tersedia, progres bertahan selama halaman aktif.

Naskah adalah dramatisasi. Tidak ada database yang diakses atau dihapus. Klaim backup, penghapusan, serta pemeriksaan dalam cerita bukan hasil operasi sungguhan atau dokumentasi penyedia database tertentu.

## Percakapan Micro Task

Bab Micro Task memakai **Pendaftaran Ekstrakurikuler**. Apps harus diluncurkan besok. Formulir memuat nama lengkap, NIS, kelas, serta pilihan kegiatan. Backend lokal sudah memvalidasi sejak awal, tetapi frontend masih menampilkan berhasil ketika response menolak data.

Tampilan awal adalah AI. Tombol atau angka 1, 2, dan 3 membuka AI, Kode, serta Apps. Shortcut angka tidak aktif saat mengetik. Sidebar berkas menampilkan HTML dan JS setelah AI membuat formulir. CSS baru muncul setelah permintaan desain. Viewer hanya memuat source frontend yang dibahas dan dipakai preview, tanpa seluruh backend dan kode alat pembelajaran. Apps membagi formulir di kiri dan status serta JSON di kanan.

Setelah AI membuat formulir, pilihan default hanya Oke, deploy apps sekarang. Pilihan pembahasan muncul dari percobaan Apps, kode yang ditandai, tampilan formulir, atau tanggapan terhadap ucapan AI. Bahas kode ini membuka pertanyaan User, lalu AI menjelaskan fungsi dan kemungkinan perbaikan sebelum opsi perbaikan tersedia. Penandaan memakai klik atau blok teks langsung seperti editor sebelumnya, tanpa dropdown topik atau tombol nomor baris. Menandai kode belum mengirim chat. Saat memilih, textbox User tetap terlihat dengan pengantar sesuai konteks dan portrait netral.

Penandaan kode memakai latar baris dan warna nomor baris, tanpa garis samping atau bingkai editor. Fokus keyboard editor ditunjukkan lewat latar dan penegasan status penandaan. Tombol Hapus tanda serta Bahas kode ini memakai warna bidang saat fokus, tanpa outline. Pilihan dialog Micro Task juga tidak memakai underline.

User dan AI dapat berbicara melalui beberapa textbox berurutan. Satu permintaan tetap dihitung sekali, meskipun pertanyaan dan responsnya dipecah menjadi beberapa bagian. Lanjut berpindah antarbagian tanpa menambah request. Kalimat pengantar pilihan tidak menjadi pesan yang dikirim. Membuka Kode saja tidak dianggap menganalisis, dan membuka Apps saja tidak dianggap menguji.

Healthbar ditempelkan di atas siluet AI dan tidak tampil pada Kode atau Apps. Batas bantuan adalah 12 request. Bar awal penuh tanpa angka atau persentase. Request 8–9 mulai tersendat, 10–11 makin terganggu, dan 12 ditolak sebelum patch. Gangguan dapat muncul di tengah kalimat dan pada bagian berikutnya dalam respons multipart. Navigasi, Lanjut antarbagian, pengiriman formulir, deploy, serta adegan akibat tidak menambah request. Nuklir tetap memiliki prioritas atas overheat tanpa mereset hitungan.

Percobaan menyimpan isian sebelum dan sesudah handler frontend selesai. Formulir kosong tidak menjadi bukti kehilangan data. Satu isian salah dengan isian lain benar dibedakan dari satu isian benar dengan sisanya salah. Keluhan reset hanya muncul ketika ada nilai yang benar-benar hilang, dan tidak ditawarkan setelah reset diperbaiki. Percobaan terbaru menentukan pilihan yang relevan.

Deploy menentukan akibat berdasarkan kondisi apps. Urutannya halaman hilang, data terhapus, pesan berhasil palsu, kesulitan memperbaiki isian, desain buruk, lalu pendaftaran sesuai kebutuhan. User juga dapat menunda peluncuran. Penghapusan, nuklir, dan overheat dapat menutup alur tanpa deploy. Semua akibat diikuti ekspresi aktor dan narasi akhir tanpa pilihan reaksi tambahan. Kelompok siswa memakai skala portrait User/AI, dengan badan menumpuk rapat dan tiga kepala serta simbol marah tetap terlihat.

Tata letak dialog biasa Micro Task memakai aturan bab Risiko yang sama: ukuran dan posisi User/AI, batas gambar, posisi textbox, padding, serta tipografi. Batas karakter 500 px dan grid textbox khusus Micro Task dihapus. Pilihan dialog tetap berupa daftar bersudut yang ringkas, terpisah dari textbox User. Navigasi AI/Kode/Apps, healthbar, penandaan kode, dan kelompok siswa tetap tersedia. Posisi healthbar mengikuti tinggi gambar yang terlihat agar tetap dekat kepala.

Penyamaan layout lulus 15 pemeriksaan pada 390/768/1024/1366/1468/1920, termasuk pembandingan langsung dengan bab Risiko dan mode iframe presentasi. Regresi Micro Task lulus 18 pemeriksaan untuk response, isian, healthbar, asap, reduced-motion, serta pilihan dialog. Enam pemeriksaan penandaan kode juga lulus. Gambar dialog User/AI, pilihan, dan kelompok siswa diperiksa langsung.

Setelah melanjutkan narasi terakhir, Micro Task langsung membuka hasil ending tanpa judul tambahan Pembahasan percakapan. Good ending memakai Hasil, Bukti, Tindak lanjut, dan Riwayat. Ending yang masih bermasalah memakai Kesalahan, Bukti, Perbaikan, dan Riwayat. Penundaan memakai Keputusan, sedangkan overheat memakai Kondisi terakhir. Keduanya memakai Langkah berikutnya untuk pekerjaan tersisa. Isi selalu mengikuti kondisi akhir dan percobaan yang sesuai kode terakhir. Kesalahan AI sebelumnya dicatat di Riwayat, bukan ditambahkan sebagai kegagalan hasil yang sudah benar.

Layout desktop menempatkan dua kolom ringkas di tengah vertikal area konten. Judul, ringkasan, dan tombol Ulangi percakapan menjadi satu kelompok dengan jarak normal. Panel kanan mengikuti tinggi tab dan isinya, tanpa tinggi minimum yang menciptakan ruang kosong. Kedua kelompok sejajar pada titik tengah vertikal. Riwayat panjang memakai area gulir yang dibatasi, sedangkan teks pendek memakai tinggi alaminya. Halaman dialog mandiri memakai komposisi yang sama. Pada ponsel, kedua bagian ditumpuk dengan jarak konsisten.

Judul tab browser tetap Tools AI untuk AI-Assisted Development · TEFA pada seluruh slide dan mode dialog. Judul slide tidak lagi mengganti document.title. Redaksi judul, isi, istilah, dan catatan pemateri sudah mengikuti audit 37 temuan yang disetujui.

## Arsip percakapan sebelumnya

`archive/2026-11-01-ujian-online/index.html` membuka presentasi Ujian Online sebelum penggantian. Arsip memuat sumber, aset, font, dan dialog mandiri dengan struktur relatif lengkap. Progresnya memakai namespace terpisah. `snapshot.tar` menyimpan sumber asli sebelum namespace arsip diubah. Tidak ada pengujian runtime arsip yang dijalankan.

## Sistem visual

Komponen daftar dan card mempertahankan susunan desain sebelumnya. Penomoran yang sudah ada memakai format 01/02/03 melalui satu komponen item-number, dengan ukuran, bobot, lebar kolom, dan jarak yang sama. Nomor berada di kiri label atau judul item, termasuk pada header card dan selector. Daftar teks tidak diberi bullet baru. Brief tetap berbentuk pasangan label/uraian, kriteria tetap berupa baris, dan card kategori tetap memakai komposisinya sendiri. Nomor bab, slide, dan baris kode mengikuti fungsi navigasinya masing-masing.

Seluruh selector materi tipe explorer, focus, dan prompt memakai satu renderer materialSelector. Tag angka Romawi I/II/III berada di pilihan, bukan pada card isi. Counter lama 01 / 03 di bagian atas card explorer dihapus. Ini berlaku pada 10 slide selector, termasuk Pemeriksaan mengikuti risiko perubahan, Urutkan tugas menurut dependensi, dan Banyak konteks belum tentu relevan.

Mengikuti referensi daftar Social Link P3R dari pemateri, pilihan kini berupa kartu dua tingkat. Judul besar berada pada massa navy, dengan keterangan singkat pada pita cyan di bawahnya. Pilihan aktif berwarna putih dengan aksen merah hanya di atas dan kanan serta pita informasi navy. Tag angka Romawi memakai huruf serif, bingkai persegi tanpa tonjolan bawah, dan kemiringan 12 derajat searah jarum jam. Tag menumpuk melewati sisi kiri kartu. Tiga tipe selector memakai bentuk, font, ukuran, padding, dan jarak yang sama. Isi diberi jarak 12 px dari atas/bawah dan 22 px dari kanan, atau 18 px pada ponsel. Pada desktop, daftar berada di kiri dan isi terpilih di kanan. Pada layar kecil susunannya vertikal.

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
content.js                           Bab, 37 slide, notes, glossary, task brief
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

## Status pengujian revisi ini

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
