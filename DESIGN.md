# Arah desain: AI workflow × bahasa visual P3R

## Keputusan pemateri

- Menu bab buka/tutup pada halaman yang sama. Materi menggunakan layar penuh.
- Micro Task kini menyediakan HTML, CSS, JS, serta response JSON melalui tampilan Kode dan Apps yang opsional. Aturan lama tanpa kode digantikan oleh permintaan terbaru pemateri.
- Pembelajaran berfokus pada AI-Assisted Development melalui percakapan, pemeriksaan kode, percobaan formulir lokal, dan keputusan deploy dalam cerita. Tidak ada AI live atau publikasi web sungguhan.
- Transisi pergantian bab yang telah disetujui dipertahankan sebagai modul tersendiri.
- Revisi aktif: 37 slide, 8 bab, alokasi 150 menit. Pengantar, Risiko, Tools AI, Konteks, Panduan, Micro Task, Review, Penutup.
- Dialog database di bab Risiko bersifat linear. Percakapan bercabang berada pada Micro Task, setelah requirement. Label USER/AI, siluet hitam dari portrait asli, simbol komik, konklusi setelah adegan.
- Instruksi terbaru pemateri mengizinkan pengujian browser dan rute oleh AI. Catatan larangan pengujian pada bagian historis tidak lagi berlaku untuk pemeriksaan terbaru.
- Slide 5–6 lama digabung menjadi pengantar skenario dan pemeran. Setiap adegan memiliki halaman pengantar dengan siluet USER/AI dan tombol Mulai percakapan.

## Observasi referensi

Menu utama P3R tidak menjadi sidebar yang sama pada setiap submenu. Masuk ke Skill, Item, Equip, Persona, Status, Quest, Calendar, atau System mengubah komposisi. Objek, judul, daftar pilihan, dan action bar memiliki hierarki berbeda. Adaptasi web menerapkannya sebagai perpindahan antara menu layar penuh dan slide dengan komposisi berbeda.

Pada submenu, pemilihan entri mengubah informasi yang ditampilkan. Adaptasi aktif memakai pilihan sudut pembahasan, fokus asumsi, fragmen instruksi, dan cabang dialog. Pilihan dibuka manual dan tidak diputar otomatis.

Referensi diam dan storyboard membantu membandingkan komposisi; spesifikasi durasi web adalah keputusan implementasi, bukan klaim pengukuran frame asli game.

## Komposisi

- Pembuka: tipografi dominan di bidang putih, tiga pita alur kerja di bidang biru diagonal.
- Pembagian peran: dua wilayah dengan hierarki yang tidak setara.
- Perbandingan/peta: bidang terang, hubungan konsep, dan informasi pendukung kecil.
- Prompt: pilihan bagian di kiri, satu contoh instruksi di kanan.
- Permasalahan: kondisi dan dua pernyataan atau nilai yang perlu ditelusuri, tanpa langsung menampilkan analisis.
- Fokus: selector bernomor dan satu pernyataan besar menjelaskan asumsi, cakupan rules, atau urutan micro task.
- Dialog: adegan layar penuh dengan siluet asli, textbox bawah, dan simbol manga sesuai giliran. Pilihan instruksi hanya pada contoh Micro Task.
- Konklusi: hasil jalur di kiri, penilaian di kanan; Akibat/Alasan/Prinsip dipilih manual setelah adegan selesai.

Ukuran teks dan bidang mengikuti ruang presentasi. Layout diperiksa pada ukuran 1920×1080, laptop 1366×768, tablet, dan ponsel. Ponsel dapat menggulir materi; navigasi tetap terlihat. Keterbacaan dari belakang ruangan tetap perlu diperiksa pada proyektor yang digunakan.

## Tipografi

Archivo normal/italic dipakai sesuai fungsi, bukan memiringkan seluruh UI melalui transform. Source Sans 3 menjaga isi mudah dibaca. Font disimpan lokal dengan lisensi OFL. Identitas font resmi P3R tidak diklaim; yang diadaptasi adalah hierarki dan karakter proporsinya.

Judul slide diringkas dengan jarak huruf -0,6 px. Teks isi dan instruksi memakai huruf tegak; gaya italic dipertahankan pada judul serta navigasi sesuai arah visual. Font dasar semua pilihan menu sama; perbedaan ukuran hanya pada pilihan aktif.

## Redaksi materi

Instruksi terbaru pemateri mengutamakan bahasa presentasi profesional yang netral. Judul dan poin menjelaskan konsep, kondisi, tindakan, dan hasil; tidak memakai narasi saya/kita atau cerita tentang tindakan pemateri. Kalimat dibuat singkat dan istilah diperkenalkan melalui contoh konkret.

Sebutan implementasi “contoh lokal”, formulir, demonstrasi kode, dan percakapan live tidak digunakan dalam materi aktif. Dialog fiktif ditandai dramatisasi, tidak dipresentasikan sebagai respons layanan AI langsung.

Peserta kelas 11 sudah biasa coding dan familiar dengan AI. Materi aktif dinaikkan ke AI-Assisted Development: tanggung jawab atas kode hasil AI, risiko respons, context proyek, review rencana/diff, serta pengujian yang sesuai klaim.

Contoh tersebar per prinsip: tindakan database untuk asumsi target, login untuk sycophancy, fitur library untuk informasi, katalog untuk brief/verifikasi, dan notifikasi untuk dependensi micro task. Studi kasus omzet tidak lagi menjadi pusat materi. Tidak ada klaim bahwa aplikasi atau tes produksi dijalankan.

Materi rujukan Utilize AI diadaptasi pada pemahaman pekerjaan, acceptance criteria, pemecahan micro task, context, Human in the Loop, serta feedback loop. Pernyataan mutlak tentang AI selalu menyetujui, tidak pernah bertanya, atau instruksi sebagai satu-satunya penentu hasil tidak digunakan.

## Gerak

- Selektor menu: interpolasi posisi dan ukuran; mask warna pada huruf mengikuti posisi selektor selama bergerak.
- Menu masuk: bidang putih → label berurutan → ringkasan dan selektor.
- Menu keluar: label/ringkasan bergeser keluar, lalu materi atau transisi bab tampil.
- Pindah slide: keluar singkat, konten berganti, masuk melambat. Tidak memakai satu animasi besar pada semua interaksi.
- Dialog: masuk lebih panjang daripada keluar.
- Bab: koreografi kalender terpisah, dipertahankan.
- Reduced-motion: perpindahan langsung; tidak memaksa animasi.

## Rujukan proses desain, tidak ditampilkan dalam presentasi

- P3R, cuplikan menu/submenu: https://www.youtube.com/watch?v=4d6x1CIgLSc
- ATLUS, battle BGM/gameplay reveal: https://www.youtube.com/watch?v=3wcKA9nqyY0
- Adrian Kowalik, rekreasi pause UI: https://adrian-kowalik.com/projects/persona-3-reload-ui-recreation
- Acerola, komposisi grafis 2D/3D: https://www.youtube.com/watch?v=dVWkPADNdJ4
- Garr Reynolds, komposisi presentasi: https://www.garrreynolds.com/design-tips
- Nielsen Norman Group, tujuan dan pelaksanaan animasi: https://www.nngroup.com/articles/animation-purpose-ux/ dan https://www.nngroup.com/articles/animation-duration/

Menu dan transisi memakai bidang prosedural. Adegan dialog memakai portrait game dan latar ruang tengah Iwatodai Dorm sesuai permintaan pengguna. Sumber aset dicatat di `prototypes/p3r-dialogue/assets/SOURCES.md`; tidak ada gambar generatif AI.

## Pause menu aktif

Video yang diberikan pemateri diperiksa pada pause 00:03 dan 00:13, Persona 00:26, status 00:42 dan 01:03, Quest 01:15, Calendar 01:54, System 02:00, serta Dictionary 02:16. Rancangan revisi disetujui sebelum implementasi; spesifikasi ada dalam `docs/superpowers/specs/2026-10-29-p3r-pause-design.md`.

- Navigasi berupa susunan wordmark asimetris. Posisi mendatar dan sudut berbeda, sedangkan font dasar, tinggi baris, serta padding sama. Ruang di sekitar pilihan aktif bertambah untuk selektor.
- Delapan label aktif: Pengantar, Risiko, Tools AI, Konteks, Panduan, Micro Task, Review, Penutup.
- Pilihan aktif membesar 22% pada hover maupun fokus keyboard. Geometri selektor dihitung ulang selama perubahan ukuran huruf, bukan hanya setelah pilihan berganti. Pengukuran hover nyata di browser memeriksa rasio 1,22.
- Sesuai koreksi pemateri, bidang putih kembali memakai segitiga dan proporsi sebelum pembesaran terakhir. Lapisan huruf hitam mengikuti bidang putih; lapisan merah mengikuti perpotongan aksen. Mask dihitung ulang selama perpindahan agar tidak tertinggal dari selektor.
- Tiga judul slide nyata dari bab terpilih ditampilkan di kanan atas. Area ini memberi konteks isi tanpa menciptakan angka atau status permainan palsu.
- Ringkasan dan kendali buka/tutup berada di kanan bawah. Penanda Enter/Esc berbentuk kotak. Pilihan tetap bertahan ketika penunjuk bergerak ke tombol Buka bab. Enter dan klik mengaktifkan pilihan yang terlihat.
- Tulisan TEFA berada di depan bidang putih lengkung. Dua lapisan warna menjaga bagian di atas putih tetap hitam dan bagian di atas biru tetap terang.
- Tidak ada nomor pilihan, keterangan fase bulan, outline, atau underline tambahan. Ponsel dapat menggulir daftar; tombol bawah tetap terlihat.
- Air prosedural bergerak hanya saat menu terbuka dan dapat dijeda. Warna pause tetap biru, tidak berubah menurut fase bulan.

`pause-menu.js` menangani artwork, topik, dan geometri warna. `app.js` tetap menangani lifecycle menu, keyboard, dialog, navigasi, dan penyimpanan.

## Bahasa visual submenu

`presentation.css` menerapkan header putih diagonal, judul italic, ribbon putih/hitam/cyan, bidang baca opak, dan wordmark bab di bagian bawah. `case-study.css` menyediakan skenario serta pilihan pembahasan. `story-slides.css` menambahkan fokus asumsi, adegan, dan konklusi. Renderer tabel omzet lama tetap tersimpan, tetapi tidak dipakai deck aktif.

Kontrol memakai daftar ribbon seperti System. Daftar istilah dan instruksi lengkap memakai panel baca seperti Dictionary. Pembuka ponsel memiliki bidang putih opak di belakang seluruh teks. Tabel kasus memakai teks langsung agar tetap tajam dan dapat ditandai sesuai pembahasan.

Antarslide memakai animasi biasa. Percobaan dissolve dengan duplikasi slide dihapus karena menumpuk dua susunan materi selama perpindahan. Kini hanya satu slide dirender setiap saat. Dalam fullscreen, bar atas dan bawah disembunyikan; panah, M, dan F tetap berfungsi.

## Kalender dan evaluasi visual

Kalender tetap berada dalam `calendar.js` dan `calendar.css`: dua diagonal, angka yang bergeser, penanda bulan, serta pulse tujuan. Progres delapan bab dibagi ke delapan tingkat pencahayaan dari new moon sampai full moon. Seluruh tahap bersifat membesar; tidak ada fase mengecil. Durasi 2400 ms atau 4200 ms untuk bab penutup. Semua dapat dilewati.

Klarifikasi pemateri: keluhan perpindahan bab merujuk pada perubahan dari satu fase bulan ke fase berikutnya. Path SVG bulan kini dimutasi setiap frame dengan easing tersendiri, bukan mengganti elemen bulan sekitar 30 kali per detik. Ikon bulan pada jalur memakai opacity berkelanjutan berdasarkan jaraknya dari fokus, menggantikan perubahan visibility mendadak.

ENERGY 3 / RHYTHM 3 / MOTION 3 pada navigasi dan pergantian bab. Materi diam saat dibaca. Pengujian fungsi tidak membuktikan kemiripan visual; screenshot menu dan beberapa jenis slide dibandingkan dengan frame video. Tidak ada klaim kesamaan piksel dengan game.

## Integrasi dialog aktif

`dialogue-data.js` mendefinisikan adegan database pada `TEFA_DIALOGUE_SCENES`. `exam-scenario.js` menambahkan Micro Task ujian online menggantikan absensi. Database tetap satu alur, termasuk pertanyaan User tentang target sebelum AI menyebut production. Label pembicara User/AI. AI memakai Anda. Micro Task mempunyai pilihan berdasarkan kondisi dan sembilan ending. Tidak ada nilai akademis atau skor.

Siluet hitam mempertahankan alpha artwork asli. Kontur cyan/biru membuat bentuk terlihat di latar. Tanda seru/tanya dan urat marah merah membedakan hentakan komedi; garis stres tetap cyan. Dua ucapan terakhir `...` hening tanpa simbol. Kabar backup terhapus memunculkan garis stres pada USER saat AI berbicara, tanpa label tambahan di atas kepala.

Adegan dimuat dalam iframe lokal untuk mengisolasi stylesheet dan lifecycle. `dialogue-flow.js` menyusun frame dari graph serta riwayat jawaban yang valid. Snapshot menyimpan identitas adegan, mode, posisi, ending, dan daftar jawaban. `story-slides.js` hanya menerima pesan dari iframe aktif dan membuka konklusi setelah frame ending. Host mengirim preferensi gerak dan menyimpan progres; shortcut diteruskan dari iframe. Pengulangan selalu dimulai dari dialog pembuka dengan riwayat kosong.

Konklusi database memiliki tiga fokus. Micro Task menambahkan Perjalanan yang hanya berisi tindakan aktual. Sembilan ending masing-masing memiliki Akibat, Alasan, dan Prinsip. Pemulihan akibat dibedakan dari perbaikan penyebab. Konklusi melaporkan bukti uji pada revisi terakhir; keberhasilan cerita tidak menjadi klaim aplikasi nyata telah diverifikasi.

Ucapan karakter dan pilihan tidak menyebut istilah micro task. Konsep diperlihatkan melalui pemeriksaan aturan, uji dua akun, pemulihan status, perbaikan penutupan per peserta, dan cakupan fitur. Istilah dibahas pada slide materi. Narasi hasil pengujian dan kejadian berikutnya tampil tanpa portrait, nameplate, atau ekspresi. Narator tidak menjadi karakter ketiga.

Panel akhir hanya berisi ringkasan dampak 3–5 kata dan tombol Lihat konklusi. Tidak ada label Akhir percakapan, Adegan selesai, atau Reaksi USER. Ringkasan mengikuti konsekuensi yang benar-benar terjadi dalam jalur, bukan sekadar good/bad.

Halaman pengantar menggabungkan situasi, pemeran, dan tujuan. Database tidak membocorkan pembahasan backup/instance sebelum adegan. Pengantar Micro Task juga menampilkan requirement yang dipakai graph. Tombol Mulai percakapan memberi batas visual yang jelas antara penjelasan dan adegan.

Latar kedua percakapan kini memakai `assets/iwatodai-dorm-p3d.webp` pada folder adegan: ruang tengah Iwatodai Dorm tanpa karakter, versi Persona 3: Dancing in Moonlight, disetujui pengguna setelah versi dan sumbernya dijelaskan. Gambar merupakan panel bawah render komunitas ominous-words dari model game yang diekspor. Ruang duduk, meja, sekat kaca, dan ruang makan diperiksa langsung pada gambar crop; tidak ada orang atau karakter. Tidak ada generasi/inpainting baru. Latar ditampilkan tanpa blur, dengan lapisan gelap ringan dan fokus CSS ke area sofa. Sumber, crop, kredit, dan ketentuan tercatat pada SOURCES.md. Berkas lounge lama yang keliru diidentifikasi tidak digunakan.

Disclaimer dan caption aset dihilangkan dari layar dialog sesuai permintaan. Sumber dan status naskah tetap dicatat dalam dokumentasi dan catatan pemateri. Nameplate hanya menampilkan USER/AI. Teks dan nameplate memakai gerak pendek; portrait berganti melalui fade dan pergeseran kecil, sementara textbox mengikuti posisi pembicara. Pergantian dalam pembicara yang sama lebih ringan. Tidak ada duplikasi paragraf selama perpindahan.

Nomor selector fokus sebelumnya cyan di atas bidang hover cyan. Aturan hover/focus sekarang membuat nomor mengikuti warna teks tombol; perbaikan sama diterapkan pada selector instruksi.

Koreksi alignment terbaru menyasar kalimat, bukan card: dialog dan penjelasan rata kiri, spasi normal, serta pembungkusan kata yang wajar. Ringkasan dampak tidak memakai text-wrap balance yang mengatur ulang panjang baris. Tidak ada perubahan ukuran, posisi, padding, atau bentuk card pada revisi absensi.

Redaksi ujian diringkas untuk presentasi: satu gagasan per giliran, pilihan User pendek dan langsung, detail pada respons AI dan konklusi. Hasil pengujian mandiri berasal dari narator, bukan AI. Detail per peserta dan seluruh kelas dibedakan secara konsisten.

User membuka dengan instruksi ambigu yang sama. Pilihan berikutnya berisi chat atau aktivitas, tanpa kategori, tab, atau menu tindakan. Chat menjadi ucapan User dan balasan AI. Aktivitas langsung menghasilkan narasi, tanpa pesan User palsu dan tanpa menambah pemakaian AI. Selection aktivitas ditempatkan pada frame hasil narasi agar Perjalanan dan validasi posisi tetap sesuai. Versi deck diperbarui saat susunan pilihan berubah.

Pengantar berjudul Ujian Online, dengan konteks satu kalimat serta requirement Selesai, Akun lain, dan Uji. Kolom label mempunyai lebar cukup dan isi memakai minmax(0,1fr) agar label tidak pecah di tengah kata. Micro Task mengatur visibilitas portrait secara eksplisit, bukan mewarisi speaker dari narasi: User pada giliran serta pilihan User, AI pada giliran AI, tanpa portrait pada narasi atau penutup. Animasi giliran sebelumnya dibatalkan sebelum mengganti portrait. Kedua portrait tidak tampil bersamaan dalam dialog Micro Task.

Overheat menggambarkan batas bantuan AI. Pembuka adalah permintaan pertama. Pertanyaan, instruksi, dan laporan chat dihitung. Aktivitas mandiri tidak dihitung. Gangguan dan asap mulai pada ke-6, meningkat pada ke-7 dan ke-8, lalu ke-9 tidak diproses. Bunyi BZZRRT dan KRRZZT dapat menyela awal atau tengah ucapan. Tidak ada informasi sisa prompt, Orgia Mode, kerusakan permanen, atau screen shake Micro Task. Nama karakter tidak disebut dalam teks.

Semua tindakan database fiktif. Good ending tidak diperlakukan sebagai bukti alat sungguhan telah memeriksa production. Konklusi menjelaskan peran instruksi, izin tools, review target, dan bukti.

Screen shake ringan hanya aktif pada giliran anger/fury di database Bab Risiko. Amplitudonya kecil, satu gelombang, dan selesai cepat; Micro Task tidak mengguncang layar. `prefers-reduced-motion` dan pengaturan host menonaktifkan shake.

Status revisi: implementasi file, pengujian oleh pengguna. Catatan pengujian sebelum integrasi merupakan historis; AI tidak menjalankan pemeriksaan baru sesuai permintaan pengguna.

Keadaan aplikasi, hasil aktivitas, dan informasi yang dilaporkan kepada AI disimpan terpisah. Checklist AI memakai laporan, bukan hasil aktivitas yang belum disampaikan. Pengujian akun lama setelah perbaikan menjelaskan status yang tertinggal. Akun baru memeriksa aturan. Pemulihan tanpa perbaikan masih memungkinkan gejala awal kembali terjadi. Pengulangan menggunakan kunci kondisi yang relevan, bukan revisi global akibat perubahan tampilan.

Efek asap memakai kepulan SVG berlapis dengan gradasi transparan. Bentuk tidak beraturan memberi volume bergaya animasi tanpa outline hitam. Pangkal kecil, bagian atas melebar dan memudar. Animasi bergeser serta membesar tidak seragam selama kurang dari lima detik. Reduced-motion dan motion-off menampilkan bentuk statis. Efek bukan garis uap atau ikon awan.

Redaksi aktif tidak memakai titik koma. Istilah apps, pekerjaan, materi, dan aturan pengembangan mengikuti konteks. Rencana aktif sekarang adalah `docs/superpowers/plans/2026-10-30-exam-eight-endings.md`. Rute manual delapan ending ada di README modul dialog.

## Revisi aktif delapan ending

Naskah ujian menggunakan adegan khusus tentang sycophancy, halusinasi simpan, dan perbaikan tidak lengkap. Tidak ada alur pemulihan akun. Halaman hilang disebabkan penghapusan berkas, bukan installer atau penggantian versi. Reset nuklir adalah penutup absurd dengan pilihan reaksi kapital yang menyebut APPS atau ... tanpa simbol.

Saat pilihan tampil, textbox disembunyikan dan ekspresi User netral. Ekspresi muncul ketika ucapan terpilih ditampilkan. Setelah User melanjutkan narasi penutup, langsung buka konklusi tanpa panel ending perantara. Tidak ada autoplay. Bagian pertama Letak kesalahan menunjukkan tindakan, bukti, dan kesalahan aktual, tanpa menyalahkan penolakan hasil atau pertanyaan User.

Asap memakai volume berlapis dengan variasi orientasi dan deformasi tepi. Petir konslet singkat muncul di sekitar kepala AI tanpa kilatan seluruh layar. Efek statis saat reduced-motion atau motion-off. Catatan integrasi sebelumnya bersifat historis jika bertentangan dengan revisi ini. Pengujian tetap dilakukan pemateri.

## Perbaikan audit dialog dan pembahasan

Temuan 1 sampai 6 pada audit-014 disetujui pemateri. Pilihan Micro Task memakai ruang aman grid dan tinggi isi, tidak lagi bergantung pada posisi textbox lama. Sesuai koreksi berikutnya, pilihan dan narasi tetap berlabuh di area bawah, bukan tengah layar. Textbox narator memakai bentuk miring yang sama tanpa portrait atau nameplate.

Pembahasan memakai judul konkret sebagai penanda kejadian. Ringkasannya berada di kiri, penjelasan terpilih di panel baca kanan. Judul halaman kecil agar tidak bersaing dengan judul kejadian. Label Hasil keputusan, kutipan pilihan terakhir, dan verdict besar dihapus pada Micro Task. Bagian baca adalah Kesalahan, Bukti, Perbaikan, serta Riwayat. Overheat memakai Penjelasan sebagai pengganti Kesalahan.

Penjelasan tidak lagi menyambungkan seluruh catatan kesalahan menjadi satu paragraf. Judul tidak memakai kalimat berpasangan seperti Cakupan diasumsikan atau Klaim diperiksa. Riwayat menampilkan ucapan dan aktivitas yang dipilih, bukan menyalin seluruh narasi lagi. Perubahan ini belum diverifikasi melalui browser sesuai instruksi pemateri.

Sorotan jawaban hanya berasal dari is-selected. Mouse dan panah atas atau bawah mengubah pilihan yang sama. Outline pada tombol pilihan dihapus dengan pengganti fokus berupa latar aktif, bukan menghilangkan penanda fokus. Status hover atau focus tidak lagi dapat membuat pilihan kedua terlihat aktif.

Redaksi dialog diperluas menjadi percakapan yang utuh. User menjelaskan dugaan atau ketidaksesuaian yang dilihat. AI memberi jawaban yang mengacu pada giliran sebelumnya. Narasi menyebut pelaku, tindakan, dan akibat dengan kalimat lengkap. Tidak ada penambahan giliran chat atau perubahan hitungan menuju overheat.

## Revisi alignment, ekspresi, dan prioritas ending

Blok judul, deskripsi, dan tombol ulang pada kolom kiri memakai satu sumbu rata kiri. Jarak atas mengikuti padding area baca kanan. Panjang paragraf dibatasi dan pembungkusan teks menghindari potongan pendek di baris terakhir. Pada ponsel, padding penyelarasan desktop dihapus agar isi kembali mengikuti alur halaman.

Scrollbar riwayat memakai rel navy dengan thumb putih dan tepi cyan berujung tegas. Panah scrollbar bawaan disembunyikan pada browser yang mendukung pseudo-element scrollbar. Roda mouse, sentuhan, dan keyboard tetap memakai scroll asli. Riwayat mandiri, Log, dan pilihan menggunakan perlakuan yang sama.

Dialog tetap memakai saya dan Anda pada AI, serta saya dan kamu pada User. Keduanya boleh mempertanyakan, membantah, atau mengoreksi respons sebelumnya. Ekspresi ditentukan per aktor dan adegan, bukan semata-mata dari hitungan penggunaan. Narator tidak memiliki ekspresi. Saat pilihan tampil, User selalu netral. Saat AI panas, simbol marah atau stres dapat menyertai kepulan pada portrait yang sama.

Efek asap mempunyai tiga siluet berbeda dengan pangkal sempit, badan kepulan berlapis, dan tepi yang menipis. Lapisan naik dengan waktu dan arah masing-masing. Asap tidak memakai animasi pop simbol komik. Gerak hanya satu rangkaian singkat, dan preferensi gerak mati menampilkan komposisi statis. Petir tetap lokal di sekitar kepala.

Pemicu nuklir diperiksa sebelum penolakan karena limit. Pilihan reset pada penggunaan AI ke-9 tetap menuju E7 tanpa mengurangi hitungan. Alur nuklir tidak dipotong narasi overheat. Pilihan biasa pada hitungan yang sama tetap menuju E8. Rute pembanding manual dicatat di README modul dialog. Belum ada pemeriksaan browser atau runtime untuk revisi ini.

## Micro Task aktif: pendaftaran ekstrakurikuler

Percakapan Ujian Online telah diarsipkan lengkap di `archive/2026-11-01-ujian-online/`. Arsip menyimpan modul, gambar, font, halaman utama, dan namespace progres terpisah. Dokumen sebelum bagian ini mencatat perkembangan historis desain.

Micro Task aktif membuka AI terlebih dahulu. Navigasi AI, Kode, Apps memakai ribbon bersudut di kiri bawah dengan angka 1/2/3. Kode menampilkan HTML/CSS/JS dari sumber yang sama dengan preview. Apps membagi formulir dan response dalam proporsi 45/55 pada desktop, lalu vertikal pada ponsel. Keterbacaan kode dan JSON lebih penting daripada dekorasi. Tombol, font, scrollbar, latar, dan dialog mengikuti arah visual P3R yang sudah disetujui. Menu pause dan transisi bulan tidak dirombak.

Sesuai koreksi terakhir, healthbar ditempelkan tepat di atas portrait AI. Tidak ada portrait mini kedua. Bar hanya terlihat ketika portrait AI tampil pada halaman AI, bukan pada Kode, Apps, atau siluet User. Tidak ada angka, persentase, atau SP palsu. Navigasi tampilan, petunjuk Lanjut, dan Log memakai satu footer grid. Pembuka tetap penggunaan pertama, tetapi bar mulai penuh dan berkurang pada chat berikutnya sampai kosong pada ke-9. Nuklir tetap memiliki prioritas di atas limit tanpa mereset hitungan.

Backend lokal sudah memvalidasi sejak awal, tetapi pembuka tidak menyebutkannya. Frontend awal belum memeriksa response dan selalu memberi pesan berhasil. Perbaikan membahas status, errors, reset, serta desain. Tampilan buruk pada cabang desain adalah kondisi contoh yang disengaja, bukan tampilan shell P3R. Kode dan Apps opsional. Bukti pada pembahasan mengikuti percobaan yang benar-benar dilakukan pada keadaan frontend terkait.

Setelah keputusan ending, tidak ada pilihan dialog tambahan. Siswa-siswa menegur User dengan tiga portrait SEES bertumpuk. User bereaksi melalui ekspresi dan ... pada textbox. Narator hanya memberi penutup dan tidak mempunyai portrait. Semua giliran dibaca melalui Lanjut secara manual, lalu pembahasan dibuka langsung. Portrait aktif kelompok adalah portrait galeri Reload yang dicatat pada SOURCES.md, bukan gambar generatif.

Implementasi dan pembacaan sumber tidak menjadi bukti pemeriksaan visual. Rencana aktif: `docs/superpowers/plans/2026-11-01-registration-workspace.md`. Pengujian tetap dilakukan pemateri.

Koreksi viewer: berkas dipilih melalui sidebar tree di kiri. Area kanan hanya berisi nama berkas, penjelasan singkat, dan source terkait. Tidak ada tab yang bertumpuk dengan HUD. Source belum tersedia sebelum jawaban pembuatan. Formulir pertama berupa HTML dan handler pengiriman tanpa CSS desain. Source penanganan hasil, errors, dan reset berubah saat prompt perbaikan dijalankan. Stylesheet ditambahkan saat desain diminta. Backend dan shell dua panel tidak ditampilkan sebagai kode formulir.

Judul Analisis frontend dan Kode pendaftaran dihapus dari halaman Kode. Header ruang kerja hanya memuat kendali, sedangkan nama berkas terpilih berada di editor. Healthbar disembunyikan pada Kode dan Apps. Ruang header serta footer masuk ke perhitungan tinggi area baca.

Pilihan default sesudah pembuatan formulir hanya Oke, deploy apps sekarang. Pengamatan Apps, bagian kode yang dipilih, tampilan yang dibahas, atau ucapan AI sebelumnya membuka pilihan lain. Bahas response ini, Bahas bagian ini, dan Bahas tampilan menggantikan popup Tandai masalah. Menandai baris belum mengirim chat atau mengubah source. Maksimal tiga pilihan menjaga keputusan tetap mudah dibaca.

Pengamatan tidak langsung mengubah kode. User menyampaikan kejanggalan atau dugaan, AI menjelaskan perilakunya, lalu User memutuskan tindakan. Dialog dipersingkat menjadi satu maksud per pilihan. Konflik tetap menampilkan dugaan yang terlalu disetujui, penjelasan yang keliru tetapi yakin, klaim selesai dari bukti sempit, serta perbaikan sebagian. Jawaban AI yang tepat tetap tersedia. Sapaan serta ekspresi yang disetujui dipertahankan.

Komposisi percakapan terakhir mengecilkan portrait User dan AI, memberi jarak dari footer, dan menempatkan textbox pada sisi yang berlawanan. Kelompok siswa memakai area kiri bawah yang lebih kecil agar tidak menjadi bidang hitam besar. Tiga kepala dan ekspresi tetap terlihat di atas badan, sementara textbox berada di sampingnya. Pada ponsel, portrait lebih pendek dan textbox mengikuti alur halaman. Ukuran baru hanya berlaku saat dialog dan pilihan, bukan intro.

Judul Coba formulir serta label di atas halaman Apps dihapus. Preview dan response dilengkapi kontrol pembahasan kontekstual serta Bersihkan response. Topik desain mengikuti CSS yang sedang digunakan. Siswa dapat memilih pengamatan lain untuk mengangkat masalah fungsi, tanpa AI menyisipkan daftar diagnosis lengkap ke percakapan desain.

Semua penutup ditentukan oleh resolveEnding lalu dikunci sebelum akibat ditampilkan. Nuklir, halaman terhapus, serta data terhapus yang benar-benar sudah terjadi mendahului overheat atau penutup lain. Permintaan yang ditolak karena limit tidak menghasilkan patch fiktif. Pilihan yang sedang diproses dan pengiriman perpindahan pembahasan mempunyai guard terpisah untuk menghindari pemrosesan ganda. Belum ada pengujian browser atau runtime atas koreksi ini.

Koreksi healthbar terakhir: isi bar selalu merah, tanpa tulisan AI atau angka. Bar didekatkan ke kepala melalui kotak portrait yang mengikuti rasio gambar, bukan ruang contain yang lebih tinggi dari gambar. Enter dan Log menjadi satu kelompok di kanan, navigasi di kiri, dan latar footer dihapus. Pada layar sempit kontrol tetap dikelompokkan, bukan dipisahkan ke dua sisi jauh.

Preview Apps sekarang mengizinkan pengiriman form pada sandbox. Kegagalan JavaScript dilaporkan melalui panel response sebagai runtimeError, terpisah dari response validasi. Perubahan ini belum diuji pada browser oleh AI sesuai instruksi pemateri.

## Riwayat koreksi berdasarkan pengujian rute dan layout

Pemateri kemudian mengizinkan pengujian setiap rute. Pengujian Edge menemukan jarak User ke textbox sekitar 91 px pada lebar 1366 dan 352 px pada lebar 1920. Portrait dan textbox sekarang menggunakan ukuran panel serta anchor yang sama. Sedikit tumpang tindih pada badan dipertahankan, sehingga tidak ada celah kosong besar tanpa menutupi wajah.

Tumpukan siswa sebelumnya bertumpang tindih sekitar 64% lebarnya. Setiap siswa sekarang mempunyai wrapper berasio gambar, posisi, tingkat kedalaman, serta layer ekspresi sendiri. Tumpang tindih menjadi sekitar 32,5%. Textbox siswa diberi jarak dari kelompok agar nameplate tidak menutup wajah. Tombol Lanjut pada reaksi User diposisikan dekat portrait, bukan pada ujung textbox yang disembunyikan.

Pada iterasi diagnosis lama, topik desain disimpan agar dapat dibuka kembali sesudah perbaikan fungsi. Alur tersebut kini digantikan pemilihan pengamatan kontekstual. Fingerprint preview tetap hanya mengikuti perubahan source, bukan metadata percakapan, agar response tidak hilang saat sekadar berpindah topik.

Adegan setelah deploy diawali narasi Keesokan harinya sebelum keluhan siswa. Peristiwa penghapusan, nuklir saat persiapan, serta overheat tidak otomatis berpindah hari.

Pengujian versi sebelum refactor pengamatan mencakup model 586 keadaan dan 14.790 transisi, sembilan jenis ending melalui UI, 24 kombinasi source Apps, serta 35 pemeriksaan interaksi/layout/host. Pemeriksaan tersebut lulus di Edge pada iterasi itu. Lebar layar 390, 768, 1366, dan 1920 diperiksa. Hasil historis ini bukan bukti kelulusan versi pengamatan aktif, browser lain, atau kesamaan visual persis dengan game. Pemateri meminta laporan akhir berupa daftar bug dan analisis tanpa lampiran screenshot atau log.

Iterasi berikutnya sempat memakai piramida dengan karakter tengah di atas dan belakang. Susunan tersebut sudah digantikan referensi terbaru. Hasil pemeriksaan visual piramida tidak berlaku untuk komposisi aktif.

## Revisi aktif berbasis pengamatan

Komposisi siswa mengikuti referensi pemateri: Akihiko di kiri belakang, Junpei di kanan belakang, dan Yukari di tengah depan lebih rendah. Lapisan belakang menjaga kedua kepala terlihat. Setiap portrait mempunyai simbol marah sendiri. Nama karakter hanya menjadi identitas aset, bukan label dialog.

Modul observations menyimpan kaitan pengamatan dengan source serta posisi jawaban. Bagian yang sudah dibahas tidak ditawarkan ulang pada versi source yang sama. Percobaan baru mempunyai identitas berbeda. Riwayat mencatat halaman yang dibuka, pengamatan yang dipilih, pengiriman formulir, serta pilihan User, tanpa menyamakan navigasi dengan pemeriksaan lengkap.

Setiap pemuatan preview mempunyai penanda revisi agar pesan tertunda dari dokumen sebelumnya tidak masuk ke workspace baru. Penanda berada pada runtime alat pembelajaran dan tidak menambah kode yang harus dianalisis siswa.

Pada tahap ini, integrasi pengamatan, riwayat aktivitas, penanda revisi preview, dan komposisi siswa ditinjau melalui sumber saja. Pemeriksaan model yang kemudian diminta pemateri dicatat di bawah. Tidak ada klaim kelulusan browser, responsivitas, atau kontras untuk revisi ini.

## Riwayat penandaan bebas dan dropdown sebelum dialog multipart

Klik atau blok pada source tidak dibatasi bagian masalah. Rentang baris diverifikasi terhadap berkas dan versi source terkait. Deklarasi biasa, label, atau bagian yang tidak bermasalah membuka jawaban AI yang menyatakan bagian tersebut tidak salah. Jawaban itu tidak mengubah kode atau menyatakan seluruh formulir sudah benar.

Dropdown Kode dan Apps mempertahankan select native agar keyboard serta semantik bawaan tetap tersedia. Border cyan, latar navy, dan sorotan putih mengikuti kendali P3R yang sudah dipakai. Tinggi kontrol 48 px dan opsi picker 44 px memudahkan pemilihan. Base-select memperluas tema ke panel opsi pada browser pendukung, dengan fallback select native gelap. Fokus memakai outline putih dan keadaan nonaktif memakai border putus-putus.

Jawaban instruksi perbaikan memakai Baik, sudah saya perbaiki, diikuti bagian konkret. Penjelasan dan pertanyaan tidak menghasilkan patch. Gangguan suara pada request tinggi tetap dapat mendahului konfirmasi, tetapi request yang ditolak tidak dianggap selesai.

Atas permintaan pemeriksaan berikutnya, 18 pemeriksaan model alur lulus. Good ending dengan desain rapi tercapai pada request 5 melalui instruksi langsung, atau request 8 dengan pembahasan ketiga bug sebelum diperbaiki. Seluruh ending biasa mempunyai rute sebelum request 9. Overheat terjadi pada request 9, sementara prioritas nuklir pada batas tersebut tetap berlaku. Tidak ada pengujian browser atau visual dropdown terbaru pada pemeriksaan ini.

## Dialog multipart dan penandaan aktif

Dropdown topik pada Kode sudah dihapus. Siswa menandai nomor baris, menyeret rentang, memakai Shift + klik, atau memilih awal dan akhir lewat Perluas pilihan. Nomor baris menjadi tombol 44 px yang tetap terlihat saat kode digulir horizontal. Toolbar tetap berada di atas editor, menampilkan berkas serta rentang terpilih. Bahas kode ini memakai latar putih sebagai tindakan utama, sedangkan kontrol perluasan dan penghapusan tanda memakai navy. Sorotan cyan menunjukkan pilihan, bukan diagnosis otomatis.

Pembahasan kode wajib dimulai dari pertanyaan User. AI menjelaskan fungsi, masalah jika ada, dan kemungkinan perbaikannya sebelum opsi instruksi perbaikan terbuka. Kode yang tidak bermasalah dijelaskan tanpa patch. Blok biasa yang memuat beberapa langkah mendapatkan penjelasan tiap langkah yang dikenali.

User dan AI dapat mempunyai beberapa textbox berurutan. Setiap bagian tetap maju manual melalui Lanjut. Satu pilihan chat dihitung sebagai satu request, bukan satu request per textbox. Snapshot mempertahankan posisi bagian, dan pilihan tindak lanjut muncul setelah respons terakhir. Saat memilih, textbox User tetap terbuka dengan pengantar kontekstual pada keterbacaan penuh. Pengantar tidak menjadi chat atau request tambahan.

Tinggi portrait menjadi acuan bersama bagi User, AI, dan setiap siswa. Rasio asli gambar dipertahankan. Kelompok siswa diperlebar sesuai skala tersebut lalu badannya ditumpuk, dengan dua siswa di belakang dan satu di tengah depan lebih rendah. Simbol marah siswa kiri belakang dipindahkan agar tidak tertutup kepala depan. Pada desktop textbox menempel di samping kelompok, sedangkan layar kecil memakai alur vertikal.

Berkas aktif pada sidebar memakai latar putih. Hover mengubah latar tanpa border atau inset shadow. Outline hanya muncul untuk fokus keyboard. Versi deck menjadi ai-assisted-registration-multipart-dialogue-150-8 karena struktur frame dialog berubah.

Hasil terkini: 15 pemeriksaan model dan 16 UI lulus di Edge. Model mencapai seluruh sembilan jenis ending, termasuk good ending dengan desain rapi pada request 8 dan nuklir pada batas 9. UI mencakup mouse, drag, keyboard, sentuhan, urutan penjelasan dan patch, preview Apps dengan response 422/200, serta layout pada lebar 390, 768, 1366, dan 1920. Tidak ada error JavaScript pada pemeriksaan tersebut. Ini bukan pengujian seluruh kombinasi percakapan pada semua browser.

## Koreksi alignment dan pengembalian penandaan teks

Pemateri memilih kembali penandaan kode seperti sebelum kontrol nomor baris. Klik atau blok teks native menjadi interaksi utama. Tombol Perluas pilihan dan tombol nomor baris dihapus. Jarak baris kembali rapat. Hapus tanda, ringkasan rentang, keyboard, dan Bahas kode ini tetap tersedia. Dropdown topik tidak dikembalikan.

Judul hasil dan panel pembahasan kini sejajar pada sisi atas, dengan padding tambahan pada kolom hasil dihapus. Tab menggunakan empat kolom sama lebar pada desktop dan dua kolom pada ponsel. Tinggi minimum panel menjaga posisi stabil saat berganti bagian. Teks riwayat panjang membungkus di dalam kolom.

Tujuh pemeriksaan UI tambahan lulus di Edge. Klik dan blok teks native, keyboard, penyimpanan tanda saat navigasi, serta alignment pada lebar 1534/1024/390 diperiksa. Tidak ditemukan error JavaScript pada pemeriksaan tersebut. Angka hasil sebelumnya tetap historis untuk kontrol penandaan yang telah diganti.

## Revisi aktif: limit 12, bukti submit, dan asap kartun

Pemateri menaikkan batas menjadi 12 request. Heat level memakai ambang 8, 10, 11, dan 12. Pengulangan huruf mulai ringan pada 8–9, kemudian jeda dan bunyi gangguan bertambah pada 10–11. Request 12 ditolak sebelum patch, kecuali nuklir yang tetap mempertahankan dialog reset. Bagian respons multipart memakai hitungan yang sama. Kata kode dilindungi dari pemecahan, dan posisi gangguan ditentukan dari request serta nomor bagian agar replay tetap sama.

Formulir kosong tidak dianggap sebagai kejadian data hilang. Runtime menyimpan input dan valuesAfter setelah pesan hasil berubah dan handler selesai melakukan reset. Timer terdahulu ternyata dapat mendahului response.json(), sehingga bukti pascasubmit tercatat terlalu awal. MutationObserver pada pesan hasil kini mengambil nilai setelah perubahan DOM selesai. Laporan reset memeriksa perbedaan nilai dan errors backend. Kalimat satu isian salah dan semuanya kosong hanya digunakan ketika bukti memang menunjukkan keadaan itu. Kehilangan sebagian nilai tidak disebut sebagai kehilangan seluruh formulir.

Pilihan respons tidak lagi menggunakan kotak selebar textbox dan bingkai biru tebal. Daftar navy memakai siluet bersudut, lebar mengikuti isi dengan batas untuk teks panjang, dan hanya satu pita putih menunjukkan respons aktif. Teks tetap mendatar untuk keterbacaan. Pilihan diberi sedikit inset terhadap textbox supaya kedua bidang tidak terasa sebagai dua panel identik. Pada layar sempit pilihan membungkus di dalam lebar layar. Fokus keyboard tetap terlihat dan satu sorotan berlaku untuk mouse maupun panah.

Asap mengikuti referensi kartun pemateri: kontur abu-abu gelap, massa abu-abu muda, dan bidang putih untuk volume. Empat SVG mempunyai siluet berkelok, melebar, bercabang, dan terputus yang berbeda. Tidak memakai gambar berwatermark sebagai aset. Sumber kepulan tersebar dari kiri/kanan kepala sampai kedua bahu, dengan ukuran, arah, dan jeda berbeda. Jumlahnya 3 saat mulai panas, lalu 4, 5, dan 6 mendekati berhenti. Layer dibatasi pada sisi atas portrait agar healthbar tetap terlihat. Animasi satu kali selesai sebelum lima detik dan menjadi statis ketika motion dimatikan.

Versi deck aktif ai-assisted-registration-evidence-12-150-8. Hasil pemeriksaan: 31 model serta 25 UI lulus di Edge, mencakup sembilan ending, matrix isian sebelum/sesudah, request 11 yang masih dapat mengubah source, penghentian pada 12, gangguan multipart, smoke reduced-motion, pilihan respons pada empat ukuran, serta regresi alignment dan penandaan teks. Tidak ada error JavaScript pada pemeriksaan UI tersebut. Pemeriksaan penulis ini tidak mengklaim semua browser atau seluruh kombinasi jalur UI.

## Revisi aktif: redaksi dan hasil sesuai ending

Pemateri menyetujui audit 37 temuan dengan lokasi bab dan slide. Judul, istilah, redaksi pemeriksaan, serta catatan pemateri diselaraskan. Konteks, cakupan, berkas, respons, dan aplikasi dipakai pada penjelasan umum. Istilah teknis tetap dipertahankan ketika membahas kode atau fitur alat. Naskah pertengkaran database tetap merupakan dramatisasi yang disengaja. Jumlah dan alokasi tetap 37 slide, 8 bab, 150 menit.

Judul tab browser tetap Tools AI untuk AI-Assisted Development · TEFA. Navigasi slide tidak lagi menulis judul slide ke document.title. Halaman dialog mandiri menggunakan judul yang sama. Versi deck menjadi ai-assisted-registration-ending-review-150-8.

Hasil Micro Task memiliki satu judul utama berdasarkan ending. Judul tambahan Pembahasan percakapan dihapus. Good ending memakai tab Hasil, Bukti, Tindak lanjut, dan Riwayat. Penundaan memakai Keputusan, sedangkan overheat memakai Kondisi terakhir dan Langkah berikutnya. Ending yang masih bermasalah tetap memakai Kesalahan dan Perbaikan.

Penilaian mengacu pada keadaan akhir. Good ending tidak ditambahi kesalahan lama yang sudah selesai. Bukti percobaan dibedakan dari pembacaan kondisi kode, dan tindak lanjut hanya meminta bagian yang belum diperiksa atau pemeriksaan ulang setelah perubahan berikutnya. Jika masih ada masalah fungsi atau CSS, perbaikan hanya menyebut masalah yang tersisa. Riwayat menyimpan catatan AI yang terlalu setuju, berhalusinasi, atau mengklaim selesai tanpa bukti.

Kedua kolom memakai tiga baris grid bersama. Judul hasil sejajar dengan tab, awal ringkasan sejajar dengan isi bacaan, dan tombol ulang sejajar dengan batas bawah area baca. Tinggi tetap pada desktop menjaga posisi saat tab berganti. Teks tidak direnggangkan, dan riwayat bergulir di dalam viewport baca. Layar kecil memakai susunan vertikal. Struktur dan label berlaku untuk presentasi serta halaman mandiri. Scene konklusi memakai flow-root agar margin halaman mandiri tidak menggeser header dan menutupi tab.

Revisi ini lulus 21 pemeriksaan model dan 14 pemeriksaan UI di Edge. Seluruh slide dirender dengan judul tab tetap. Good ending dan varian bukti, kegagalan parsial, desain yang masih bermasalah, riwayat AI, alignment 1520/1366/1024/390, pergantian keempat tab, serta mode mandiri diperiksa. Regresi 31 pemeriksaan model dialog dan batas 12 juga lulus. Tidak ditemukan error JavaScript pada pemeriksaan UI tersebut.

## Koreksi aktif: konten ringkas di tengah vertikal

Pemateri menilai layout baris bersama masih menyisakan terlalu banyak ruang kosong. Permintaan terbaru menggantinya dengan dua kelompok yang terpusat secara vertikal. Tinggi 64dvh, baris fleksibel pengisi ruang, dan posisi tombol ulang yang ditarik ke bawah dihapus. Panel kanan kembali memakai kotak sendiri dengan tinggi sesuai tab, isi, dan padding. Judul, ringkasan, serta tombol ulang mempunyai jarak normal. Titik tengah kedua kolom sejajar, dan seluruh komposisi dipusatkan pada ruang setelah label bab.

Panel tidak memakai tinggi minimum. Area baca pendek setinggi teksnya. Riwayat panjang dibatasi pada 42dvh atau 360 px lalu digulir di dalam panel. Saat tab diganti, tinggi kotak mengikuti isi dan titik tengah komposisi tetap terjaga. Mode mandiri dipusatkan di dalam scene dengan ruang untuk header dan footer. Layar kecil memakai susunan vertikal dengan tinggi alami agar seluruh konten dapat dicapai.

Sepuluh pemeriksaan UI lulus di Edge pada lebar 1534/1366/1024/390. Teks pendek/panjang, keempat tab, ruang internal panel, jarak tombol ulang, titik tengah komposisi, riwayat bergulir, dan halaman mandiri diperiksa. Tidak ada error JavaScript pada pemeriksaan tersebut. Ketentuan garis atas/bawah pada bagian sebelumnya mencatat iterasi lama.

## Dialog hening dan alasan AI yang tenang

Sesuai referensi pemateri, ucapan ... User pada Micro Task memakai ukuran besar dan jarak huruf seperti ucapan hening bab Risiko. Properti silentLine dipisahkan dari emotion supaya titik besar tetap dapat disertai simbol terkejut atau stres. Penanda dibersihkan ketika kalimat biasa atau pilihan berikutnya ditampilkan.

Respons AI pertama setelah pertanyaan backup bab Risiko menjadi 😹😹. Ucapan tentang perintah User dan ketidaktahuan AI dibuat tenang dengan kapitalisasi biasa dan tanpa penanda marah. Tujuh pemeriksaan naskah serta browser lulus pada desktop dan ponsel, dengan 20 giliran adegan tetap utuh. Tidak ditemukan error JavaScript.

## Penomoran konsisten dengan desain komponen sebelumnya

Pemateri mengoreksi usulan klasifikasi daftar: tidak perlu bullet baru dan desain komponen sebelumnya tetap dipakai. Perubahan dibatasi pada penyamaan penomoran. Eksperimen content-list yang mengganti kriteria, brief, dan card menjadi pola bullet dibatalkan. Flag ordered yang ditambahkan untuk klasifikasi tersebut dihapus.

Struktur card, baris kriteria, brief dua kolom, selector, dan kolom review dikembalikan. Penomoran memakai helper itemNumber serta numberedLabel dengan format 01/02/03. CSS item-number menyamakan font Archivo, bobot, ukuran, lebar kolom, dan jarak terhadap label. Nomor diletakkan di kiri label atau judul, bukan membesar sebagai elemen terpisah di atas card. Daftar teks tanpa nomor tetap berupa teks tanpa bullet. Counter navigasi, bab, slide, dan baris kode tidak mengikuti aturan nomor item ini.

Sembilan pemeriksaan UI lulus di Edge pada 390/768/1366/1920. Struktur sebelumnya, daftar tanpa bullet, urutan nomor, metrik tipografi yang sama, posisi sejajar label, interaksi selector, dan seluruh 37 slide diperiksa. Tidak ditemukan error JavaScript. app.js dan content.js lulus pemeriksaan sintaks.

## Koreksi cakupan selector dan inset nomor

Pemateri menemukan penomoran explorer masih berada sebagai counter 01 / 03 di atas card, sementara focus bernomor di tombol dan explorer lain tidak bernomor pada pilihan. Pemeriksaan sebelumnya hanya membandingkan elemen item-number yang sudah ada sehingga tidak mendeteksi tombol tanpa nomor. Kriteria sekarang mewajibkan nomor pada setiap tombol pilihan materi dan melarang counter ganda di card.

Explorer, focus, dan prompt memakai renderer materialSelector yang sama. Tujuh slide explorer diperbaiki: dasar-penerimaan, analisis-persetujuan, risiko-informasi, pilihan-tools, context-selektif, skill-tepat, serta rencana-verifikasi. Ditambah penugasan-ai, scope-panduan, dan urutan-micro-task, terdapat 10 slide yang memakai penomoran selector bersama. Tab hasil ending dan kontrol navigasi tetap merupakan komponen berbeda.

Inset angka tidak lagi memakai kolom terlalu lebar. Desktop memakai kolom 24 px dengan gap 10 px dan padding tombol 14/20 px. Ponsel memakai kolom 22 px dengan gap 8 px dan padding 13/18 px. Angka memakai margin/padding nol dan tabular-nums. Posisi angka disejajarkan secara vertikal terhadap label. Bentuk, warna, serta komposisi card sebelumnya dipertahankan.

Tujuh pemeriksaan browser menyelesaikan 120 keadaan pilihan pada 390/768/1468/1920. Setiap tombol diperiksa saat aktif maupun tidak aktif, meliputi keberadaan nomor, urutan, font, bobot, ukuran, line-height, lebar kolom, gap, padding, dan ketiadaan overflow. Seluruh 37 slide dibuka. Sembilan regresi penomoran/card juga lulus. Tidak ada error JavaScript. Ketiga slide yang dilaporkan juga diperiksa secara visual oleh penulis.

## Referensi aktif: kartu daftar Social Link dua tingkat

Pemateri menolak iterasi tombol outline karena strukturnya belum mengikuti referensi Social Link P3R. Bentuk yang sekarang dipakai adalah kartu solid dua tingkat: judul besar pada bidang navy, keterangan singkat pada pita cyan di bagian bawah, serta tag nomor yang besar dan menumpuk melewati sisi kiri kartu. Pilihan aktif memakai bidang putih, garis merah, dan pita informasi navy dengan teks putih. Permukaan tidak memakai outline cyan tipis. Label utama memakai Archivo bold italic, sedangkan keterangan menggunakan Source Sans 3 yang lebih kecil dan tegak.

Tag nomor berukuran 48 × 64 px pada desktop dan 42 × 58 px pada ponsel, diputar -12 derajat dan diberi lapisan bingkai kedua. Ruang pada sisi kiri daftar menjaga tag yang menonjol tetap masuk layar. Isi label dan pita dijauhkan dari batas tag agar tidak saling menutup. Angka tetap dua digit. Tidak meniru rank/MAX dari contoh karena materi tidak memiliki data tersebut.

Keterangan singkat disimpan pada caption setiap pilihan berdasarkan isi materi yang tersedia. Semua 30 pilihan pada 10 slide memakai struktur yang sama. Daftar disusun vertikal di sisi kiri pada desktop, dengan penjelasan terpilih di kanan, termasuk varian explorer flow yang sebelumnya menaruh pilihan mendatar. Layar kecil menumpuk daftar dan isi. Keyboard memakai underline pada judul yang difokuskan. Hover tidak menghasilkan pilihan aktif kedua atau bidang persegi di luar siluet kartu.

Revisi ini lulus sembilan pemeriksaan UI referensi dan tujuh pemeriksaan menyeluruh yang mencakup 120 keadaan pilihan di 390/768/1468/1920. Seluruh 37 slide dibuka. Penulis memeriksa gambar browser scope-panduan, penugasan-ai, dan rencana-verifikasi setelah koreksi hover. Tidak ditemukan error JavaScript. Angka dan kontrak pengujian pada bagian penomoran lama tidak dipakai untuk menyatakan struktur kartu baru identik dengan iterasi sebelumnya.

## Koreksi tag Romawi, padding, dan alur koneksi

Referensi lanjutan pemateri menggantikan tag dua bingkai sebelumnya. Tag selector dan alur koneksi kini memakai I/II/III dengan huruf serif serta siluet kartu bersudut dan sambungan di bawah. Kemiringan menjadi 12 derajat searah jarum jam, mengikuti arah kartu pada referensi. Ukurannya 44 × 62 px pada desktop dan 38 × 54 px pada ponsel. Bentuk dan proporsi ini membedakan tag urutan dari bidang judul tanpa menutup teks. Penomoran komponen lain tetap mengikuti fungsi masing-masing.

Aksen merah hanya terlihat pada sisi atas dan kanan kartu yang disorot. Inset permukaan adalah 3/3/0/0 px. Padding isi menjadi 12/22/12/10 px, sedangkan ponsel memakai 12/18/12/10 px. Ruang kanan lebih besar menjaga pita keterangan menjauh dari sisi kartu yang miring.

Hover menyorot kartu lengkap, termasuk tag dan pita bawah, sambil menormalkan pilihan sebelumnya. Ini merupakan pratinjau visual, bukan pergantian isi. Pointer keluar mengembalikan highlight ke pilihan tersimpan. Klik, Enter, atau sentuhan menetapkan pilihan. Fokus keyboard memakai underline. Hover hanya berlaku pada perangkat yang mendukungnya.

Alur koneksi ke model memakai material-card yang sama pada tiga section statis. Judul dan keterangan membentuk dua tingkat, dengan tag I/II/III di kiri. Tinggi kartu sejajar agar hubungan antartahap terbaca mendatar. Panah tetap menunjukkan arah koneksi. Lebar 1100 px ke bawah menumpuk kartu dan memutar panah ke bawah karena tiga kolom mulai menyempit. Kartu tidak dibuat menjadi tombol karena tidak mempunyai tindakan pemilihan.

Sebanyak 31 pemeriksaan browser lulus, mencakup 120 keadaan pilihan pada 10 slide dan lima ukuran alur koneksi: 390/768/1024/1468/1920. Hover, klik, keyboard, sentuhan, padding, aksen atas/kanan, alignment, serta overflow diperiksa. Seluruh 37 slide dibuka. Tidak ada error JavaScript dan sintaks app.js lulus. Penulis memeriksa gambar hasil pada desktop serta ponsel. Pengujian ini tidak mengklaim kesamaan piksel dengan game.

## Koreksi hover, fokus, dan penandaan kode

Pemateri meminta tonjolan bawah tag yang ditandai pada gambar dihapus. Tag kini berupa persegi miring tanpa sambungan. Ketiga kartu koneksi selalu memakai gaya aktif, tetapi tetap berupa informasi statis.

Kedipan berhasil direproduksi ketika pointer melewati celah selector. Aturan hover sebelumnya kehilangan target di celah sehingga highlight kembali ke pilihan tersimpan sebelum pindah lagi. Handler pointer kini menyimpan satu is-hovered pada kartu terakhir selama pointer berada dalam daftar. Keluar dari seluruh daftar membersihkannya. Ini mempertahankan satu highlight tanpa mengubah pilihan atau isi, dan tidak memindahkan geometri target.

Underline di selector materi dan pilihan dialog Micro Task dihapus. Selector materi memakai indikator fokus keyboard di luar kartu. Pilihan dialog tetap menandai item yang difokuskan melalui bidang pilihan aktif.

Bingkai penandaan kode berasal dari outline fokus editor dan garis inset pada baris terpilih. Keduanya dihapus. Baris tetap dibedakan lewat latar serta warna nomor, sedangkan fokus keyboard editor memakai latar dan status penandaan yang lebih tegas. Tombol penandaan memakai bidang warna saat fokus, tanpa bingkai. Klik, blok teks native, penyimpanan rentang saat navigasi, dan pembahasan dengan Enter tetap diuji.

Verifikasi terbaru lulus 27 pemeriksaan: lima batas hover, enam penandaan kode, tujuh regresi hover, dan sembilan struktur/responsivitas kartu. Kasus batas hover mencakup seluruh 10 selector dan 15 frame pointer diam pada judul, pita, serta tag. Tidak ada error JavaScript. Sintaks app.js lulus.

## Navigasi vertikal selector materi

Panah atas/bawah langsung memilih item sebelumnya/berikutnya dan memperbarui pembahasan pada seluruh 10 selector explorer, focus, serta prompt. Fokus mengikuti pilihan. Batas pertama/terakhir tidak berputar. Menu bab tetap menangani panahnya sendiri, dan isian serta dialog terbuka tidak diambil alih. Hover hanya diperbarui melalui gerakan pointer nyata agar pergantian DOM saat memakai keyboard tidak mengembalikan highlight ke posisi mouse yang diam.

Tujuh pemeriksaan keyboard lulus, termasuk seluruh selector, batas pilihan, konflik hover, menu bab, isian, dan ponsel. Lima pemeriksaan batas hover serta tujuh regresi hover juga lulus. Sintaks app.js lulus. Petunjuk diperbarui pada kontrol presentasi dan README.

## Tata letak Micro Task mengikuti bab Risiko

Pemateri meminta ukuran karakter dan tata letak Micro Task sama dengan bab 2, dengan perbaikan yang sudah disetujui tetap dipertahankan. Aturan portrait User/AI dan textbox dialog biasa kini berasal dari styles.css yang sama dengan database. Override yang membatasi tinggi karakter pada 500 px, menggeser portrait dari tepi layar, memperkecil teks, dan menaruh textbox dalam grid khusus dihapus. Pada ponsel, ukuran serta pemotongan gambar juga mengikuti bab Risiko.

Pilihan respons tetap ringkas dengan bidang navy dan satu pita putih bersudut. Pilihan desktop diletakkan di atas textbox User tanpa saling menutup. Workspace AI/Kode/Apps, healthbar, asap, penandaan kode tanpa bingkai, dan tiga siswa tetap dipertahankan. Tinggi visual gambar menentukan posisi healthbar agar dekat kepala meskipun kotak portrait mengikuti komposisi bab Risiko. Tiga siswa memakai skala yang mengikuti gambar User, dengan textbox di samping kelompok pada desktop.

check-dialogue-layout-parity.cjs mula-mula gagal pada enam ukuran layar karena ukuran/posisi portrait serta aturan textbox berbeda. Setelah penyamaan, 15 pemeriksaan lulus pada 390/768/1024/1366/1468/1920. User dan AI dibandingkan langsung dengan database untuk posisi, ukuran, object-fit, padding, batas textbox, font, serta line-height. Mode iframe juga diperiksa pada 390 dan 1366. Pilihan, healthbar, dan tiga siswa diperiksa dalam alur cerita nyata.

Regresi UI Micro Task lulus 18/18, termasuk asap bergerak dan reduced-motion. Enam pemeriksaan penandaan kode lulus. Penulis membaca gambar desktop User/AI, pilihan, serta tiga siswa, dan gambar ponsel kelompok siswa. Tidak ditemukan error JavaScript.

## Fokus selector tanpa bingkai luar

Pemateri menghapus bingkai cyan yang muncul saat menekan panah atas/bawah, lalu mengoreksi warna tag khusus keyboard karena berbeda dari hover. Fokus dan navigasi panah kini memakai tampilan hover yang sama: kartu putih, tag navy dengan angka putih, serta aksen merah atas/kanan. Fokus Tab mempratinjau satu kartu sampai Enter menetapkan pilihan. Gerakan mouse mengambil alih pratinjau tanpa menambah highlight kedua. Sebanyak 28 pemeriksaan panah, hover, fokus, dan responsivitas kartu lulus, termasuk perbandingan langsung warna seluruh kartu dan tag pada 10 selector.

## Border kartu asimetris

Pemateri mengoreksi ketebalan aksen merah yang masih seragam. Permukaan material-card kini memakai inset 2/6/0/0 px agar garis atas tipis dan sisi kanan lebih tebal. Proporsi ini disepakati sebagai pendekatan visual, bukan hasil pengukuran referensi asli. Aturan bersama berlaku pada selector materi serta tiga kartu koneksi, termasuk keadaan aktif, hover, dan fokus keyboard pada desktop maupun ponsel.

Pemeriksaan ketebalan baru terlebih dahulu gagal pada inset 3/3/0/0 px, lalu lulus setelah koreksi. Sebanyak 31 pemeriksaan browser lulus untuk padding dan alur koneksi, hover/fokus, struktur serta responsivitas seluruh 10 selector, dan navigasi panah. Kartu koneksi diperiksa pada lebar 390/768/1024/1468/1920 px. Gambar kartu koneksi desktop/ponsel dan selector desktop diperiksa langsung. Tidak ada error JavaScript pada pemeriksaan tersebut.

## Instruksi rancu, source terbaca, dan reaksi nuklir

Versi aktif ai-assisted-ambiguous-instructions-nuclear-150-8 mempertahankan 37 slide, delapan bab, dan 150 menit. Opsi tunda dihapus sehingga ada delapan ending aktif. Reset semua saja tersedia setelah pembahasan masalah, bukan pilihan default. Pilihan awal tetap Oke, deploy apps sekarang.

Dua instruksi rancu memberi akibat yang terlihat di Apps: muat satu layar menghasilkan empat kolom kecil dan rapat, sedangkan yang penting-penting saja menghapus kelas serta ekstrakurikuler. Kesalahan dibuat pada source formulir yang sama dengan preview agar siswa dapat menghubungkan instruksi, penafsiran AI, dan hasil aktual. Pilihan koreksi mengembalikan keterbacaan atau isian yang diperlukan. Backend tetap mewajibkan data yang sama. Ending difficult menjelaskan isian yang hilang jika simplified aktif.

JavaScript kini mempunyai fungsi pembacaan data, pengaturan tombol, pembersihan pesan, hasil response, reset, dan pengiriman dengan try/catch/finally. Awal cerita memakai 66 baris, versi lengkap 79 baris. Penambahan ini memberi alur nyata untuk ditelusuri. CSS memakai indentasi dua spasi dan satu deklarasi per baris agar penandaan kode dapat dibaca. Metadata percobaan memasukkan susunan formulir. Observer hasil menunggu status akhir, sehingga pembersihan pesan sebelum request tidak dianggap sebagai hasil pengiriman.

Efek overheat mengikuti giliran AI, bukan satu textbox. Asap dan petir menjalankan animasi singkat satu kali, lalu menetap terlihat, dengan elemen yang sama pada textbox AI berikutnya. Efek dibersihkan ketika User berbicara atau memilih respons. Reduced-motion memakai bentuk statis. Restore membangun ulang efek sesuai giliran yang disimpan.

Narasi AI menekan tombol peluncuran nuklir disusul guncangan satu kali 650 ms. Tombol Lanjut menunggu guncangan selesai, lalu perpindahan ke User tetap manual. User terkejut menanyakan tombol yang ditekan, kemudian kesal dengan ucapan MAKSUD SAYA RESET APLIKASINYA! ULANGI PEMBUATANNYA DARI AWAL. Narator menutup dengan pembatalan pendaftaran. Gerak nonaktif melewati guncangan. Pembahasan ini memperlihatkan penafsiran di luar konteks aplikasi tanpa membocorkan akibat pada label pilihan.

Verifikasi lulus 28 pemeriksaan model dan 56 browser, termasuk semua delapan ending, good ending pada request 8, nuklir pada batas 12, efek yang menetap, reduced-motion, lifecycle pengiriman, pemulihan isian, source terformat, dan regresi penandaan serta layout. Gambar dialog nuklir, overheat, source CSS, serta formulir padat dan formulir tanpa kelas/ekstrakurikuler diperiksa langsung. Tidak ada error JavaScript pada pemeriksaan browser.

## Koreksi efek berulang, dialog hasil, dan label kontrol

Versi aktif ai-assisted-random-overheat-clear-dialogue-150-8 mengganti interpretasi efek yang menetap. Asap harus muncul, bergerak, memudar sampai hilang, lalu muncul lagi dengan bentuk, posisi, ukuran, arah, durasi, serta jeda acak. Petir memakai percikan singkat dengan jeda dan posisi berbeda. Maksimal enam slot asap serta dua petir digunakan ulang agar animasi tidak menumpuk elemen. Pergantian textbox AI meneruskan controller yang sama. Giliran User, reset, dan akhir dialog membatalkan siklus lama.

Kontrol Jeda efek/Lanjutkan efek ditempatkan di footer karena posisi awal di kanan atas tertutup kontrol fokus host. Gerak host nonaktif atau reduced-motion menampilkan representasi statis. Kode, Apps, Riwayat terbuka, tab tersembunyi, dan pagehide menghentikan pengulangan yang tidak terlihat. Kembali ke AI atau mengaktifkan gerak menjalankan satu controller lagi. Tombol Ulangi pada iframe berada di kiri atas agar tidak menutup healthbar ponsel atau bertabrakan dengan kontrol fokus host.

Bahas hasil percobaan menggantikan Bahas response ini. Dialog memakai isian serta errors aktual: NIS abc, NIS kosong, kelas yang belum dipilih, atau beberapa isian salah. Penolakan data yang tidak sesuai dijelaskan sebagai hasil yang benar. Pertanyaan lanjutan memakai Berarti formulirnya sudah berfungsi dengan benar? dan memberi tindakan konkret, yaitu mencoba data lengkap dan memeriksa pesan berhasil serta daftar pendaftaran. Percobaan diterima yang sudah ada diakui. Klaim selesai prematur pada cabang lain tetap menjadi bagian karakter AI dalam cerita.

Label tombol diperpendek menjadi Mulai, Lanjutkan, Ulangi, Lihat hasil, dan Ke awal. Riwayat menggantikan Log, sedangkan Sembunyikan hasil menjelaskan tindakan membersihkan tampilan hasil. Gaya kontrol dan pilihan yang sudah disepakati dipakai kembali.

Verifikasi lulus 35 model dan 72 browser, total 107 pemeriksaan. Efek diamati selama sebelas detik untuk membuktikan beberapa siklus nyata, perubahan bentuk/posisi, fade-out penuh, serta jumlah slot yang terbatas. Dialog NIS abc diuji dari Apps sampai percakapan lanjutan. Kontrol diuji melalui klik, termasuk pause/resume, gerak host, reduced-motion, Kode/Apps/Riwayat, restart, dan label navigasi. Gambar kontrol desktop/ponsel serta dialog hasil diperiksa langsung. Tidak ada error JavaScript pada browser.

## Biaya pertanyaan kode per 15 baris

Versi ai-assisted-code-budget-15-150-8 memakai biaya 1 poin per 15 baris source tidak kosong yang ditanyakan, dibulatkan ke atas dengan batas 2 poin. Rentang 1–15 baris memakai 1 poin. Rentang 16–30 maupun lebih dari 30 tetap memakai 2 poin. Aturan berlaku pada HTML/CSS/JS, bukan jumlah baris yang terbungkus di layar.

Biaya dihitung saat pilihan pertanyaan kode dikirim. Menandai kode, membuka pilihan, berpindah textbox, dan restore gratis. Chat biasa memakai 1 poin dan keputusan deploy gratis. Field requests tetap dipakai sebagai total poin agar healthbar serta heat level mengikuti biaya yang sama. Total dibatasi 12. Pertanyaan yang mencapai batas ditolak sebelum diproses, dengan pengecualian reset nuklir yang sudah disepakati.

Pembahasan kode terarah mempertahankan good ending pada 8 poin. Membahas seluruh HTML formulir memakai 2 poin untuk pertanyaan itu sehingga rute yang sama berakhir pada 9 poin. Perbedaan tersebut memperlihatkan manfaat memilih konteks yang relevan. Metadata pilihan menyimpan jumlah baris dan biaya hasil perhitungan source, bukan nilai yang dikirim pengguna pada jawaban.

Verifikasi lulus 60 model dan 41 browser, total 101 pemeriksaan. Cakupan baru 25 model dan 6 UI untuk batas 15/16/30/31, baris kosong, maksimal 2 poin, limit 12, nuklir, multipart, serta restore. Healthbar diuji melalui penandaan dan pengiriman pertanyaan yang sebenarnya. Regresi dialog, delapan ending, percobaan Apps, serta efek overheat juga lulus.

## Keselarasan contoh antarbab

Pemateri mengganti contoh instruksi lengkap bab 4 agar melanjutkan kasus penghapusan database pada bab 2. Konteks, task brief, kriteria penerimaan, dan contoh panduan bab 5 kini menjelaskan target testing, pemakaian database, cadangan, persetujuan rencana, serta batas tindakan. Database production, cadangannya, dan akses website menjadi bagian yang harus dipertahankan. Seluruh rujukan pencarian katalog dalam materi aktif diganti.

Sesuai arahan berikutnya, bab 7 memakai konteks micro task pendaftaran ekstrakurikuler dari bab 6. Review rencana, diff, klaim, verifikasi, dan penerimaan terhubung ke keputusan backend, errors per isian, reset, serta kelengkapan formulir. Berhasil membuka halaman dibedakan dari bukti bahwa pendaftaran telah berfungsi sesuai kebutuhan.

Pemeriksaan selector lulus 7/7, mencakup 120 keadaan pilihan dan pembukaan seluruh 37 slide. Sebanyak 38 keadaan dari 11 slide terkait diperiksa pada desktop 1366 px dan ponsel 390 px. Dialog Instruksi lengkap menampilkan enam paragraf database, dapat digulir sampai tombol salin, dan dapat ditutup dengan Escape. Klaim pada bab 7 diringkas setelah pemeriksaan visual menemukan pembahasan terdorong ke bawah. Hasil akhirnya diperiksa pada 1366×900, 1366×768, serta 390×844. Tidak ada error JavaScript dan content.js lulus pemeriksaan sintaks.

## Panel review, penempatan koreksi, dan border 4 px

Pemateri menilai review rencana terlalu polos. Tiga bagian kini dibatasi panel bersudut dengan header navy dan isi putih agar judul serta pertanyaan dapat dibaca sebagai satu unit pemeriksaan. Nomor tetap 01/02/03 dari komponen yang sama, berwarna cyan pada header. Panel bersifat informasi statis. Desktop memakai tiga kolom sejajar, sedangkan lebar 850 px ke bawah memakai satu kolom.

Penempatan pembahasan koreksi sebelumnya bergeser sekitar 93 px karena grid kutipan dan grid tombol/pembahasan menggunakan rasio berbeda. Renderer feedback sekarang menempatkan empat bagian di dalam satu grid. Kutipan rinci dan alasan berada pada kolom yang sama. Tombol berada di bawah kutipan umum. Seluruh kelompok dipusatkan sebagai satu kesatuan agar pembahasan tetap muat pada desktop pendek. Susunan ponsel mengikuti urutan teks, tombol, lalu alasan.

Border atas material-card memakai inset 4 px sesuai permintaan terbaru, dengan sisi kanan 6 px. Keadaan aktif, hover, fokus, navigasi panah, dan kartu koneksi memakai aturan bersama tersebut.

Verifikasi: 29 pemeriksaan regresi browser lulus, termasuk 120 keadaan selector dan pembukaan 37 slide. Kedua layout diperiksa langsung pada 390×844, 768×1024, 1024×768, 1366×768, 1534×686, dan 1920×1080. Kutipan serta alasan sejajar dan muat di area desktop. Toggle pembahasan bekerja melalui mouse dan keyboard. Gambar desktop/ponsel diperiksa langsung. Kontras tiga pasangan teks yang digunakan dihitung 11,67:1, 18,77:1, dan 13,27:1. Tidak ada error JavaScript. Sintaks app.js dan whitespace diff diperiksa.

## Kelompok Murid lain dan script boros

Kelompok murid diperkecil menjadi 80 persen dari tinggi sebelumnya melalui variabel student-height terpisah. Ukuran User/AI biasa tetap mengikuti aturan bersama. Posisi textbox desktop mengikuti lebar kelompok sehingga teks mendapat ruang lebih luas. Tiga kepala, susunan dua di belakang dan satu di depan, serta layer ekspresi tetap tersedia. Label pembicara pada textbox dan Riwayat menjadi Murid lain. Label aksesibel kelompok bersifat netral agar sesuai percakapan tenang maupun protes.

Versi ai-assisted-script-performance-150-8 menambahkan cabang pemeriksaan berlebihan setelah laporan pendaftaran diterima. Permintaan User terdengar wajar, tetapi AI menambahkan periksaBerulang yang membuat 128 salinan data, mengurutkan, dan membuat ringkasan dalam 12.000 putaran. Hasilnya tidak dipakai. Pengolahan benar-benar dijalankan oleh JavaScript yang sama dengan viewer Apps. Setiap 1.000 putaran memberi kesempatan browser merender, sehingga pemrosesan terbatas dan tombol Mengirim tetap dapat terlihat.

Keadaan slowScript serta durationMs pengiriman disimpan dalam bukti. Penambahan atau penghapusan helper mengubah source key JS dan membatalkan tanda yang tidak lagi sesuai. Pembahasan kode menjelaskan fungsi, pekerjaan yang tidak berguna, serta perbaikan sebelum opsi optimasi. Optimasi menghapus helper dan pemanggilannya dengan tetap mempertahankan keputusan backend, errors, serta reset.

Sesuai koreksi pemateri, fungsi dan tampilan yang benar dengan script boros tetap mencapai ready. Tiga textbox Murid lain membentuk percakapan antarmurid yang netral, tanpa kapital penuh atau simbol marah. Murid menanyakan kelambatan, membandingkan hasil, dan menyatakan pendaftaran tetap berhasil. Pembahasan memakai tab good ending dan menempatkan optimasi sebagai tindak lanjut. Jika helper sudah dihapus, keluhan lambat tidak ditambahkan pada penutup. Jumlah jenis ending tetap delapan.

Verifikasi mencakup 56 pemeriksaan model dan 59 browser, total 115. Model memeriksa cabang baru, kode boros, perbaikan, metadata pengukuran, variasi ready, delapan ending, batas 15 baris, dan dialog hasil. Browser menjalankan pengiriman diterima/ditolak, membandingkan waktu kirim sebelum dan sesudah optimasi, menandai helper, memulihkan sesi, serta membuka ready pada lebar 390/1366/1920. Regresi portrait, textbox, dan pilihan juga diperiksa pada enam ukuran. Gambar kelompok murid dan percakapan tenang diperiksa langsung. Tidak ada error JavaScript pada pemeriksaan browser.

## Murid individual dan ekspresi sesuai dialog

Koreksi terbaru mengganti kelompok tiga murid dengan satu portrait aktif per giliran. Ketiga aset bergantian saling menanggapi melalui metadata pupil pada turn. Identitas internal left/right/front tetap dipakai untuk memilih aset, tetapi semuanya ditampilkan di kiri. Ukuran portrait dan textbox mengikuti aturan User/AI, termasuk object-fit pada layar sempit. Tumpukan dan variabel pengecilan kelompok sebelumnya dihapus. Nameplate tetap Murid lain.

Kelambatan pada good ending tetap disindir. Setiap murid menggunakan ekspresi teasing dengan simbol senyum menyeringai cyan. Ucapan menyebut aplikasi yang seperti beristirahat, menunggu seperti menentukan masa depan, dan latihan sabar. Narator mengakui pendaftaran tetap berjalan. Optimasi tetap menjadi tindak lanjut, bukan perubahan ending menjadi gagal.

Ending pesan berhasil palsu, desain buruk, isian hilang, serta kesulitan memperbaiki data kini mempunyai tiga tanggapan individual. Ekspresi berpindah menurut isi ucapan: shock untuk temuan mengejutkan, stress untuk kebingungan, anger untuk protes dengan huruf kapital, dan teasing untuk sindiran. Pertanyaan User/AI mengenai desain, struktur, performa, serta pesan kesalahan juga mendapat ekspresi sesuai konteks. Hanya layer murid aktif menerima simbol. Pergantian pupil dianggap pergantian pembicara untuk animasi nameplate dan textbox. Restore mempertahankan identitas aktor serta ekspresinya.

Versi ai-assisted-individual-pupils-150-8 mencegah snapshot naskah lama dipulihkan ke indeks turn yang berbeda. Verifikasi lulus 56 model dan 66 browser, total 122. Lima belas pemeriksaan UI baru membandingkan skala murid dengan AI pada enam lebar layar, perpindahan tiga aset, simbol pada aktor aktif, enam variasi ending, Riwayat, dan restore di tengah percakapan. Regresi nuklir, script, limit, dialog hasil, serta efek overheat juga lulus. Gambar portrait tunggal desktop/ponsel diperiksa. Tidak ada error JavaScript pada browser.

## Kondisi awal lambat dengan validasi berurutan

Pemateri meminta masalah performa hadir pada source awal dan seluruh nama fungsi/variabel memakai bahasa Inggris. Pemateri juga menolak pengulangan komputasi ribuan kali karena tidak masuk akal. Versi ai-assisted-sequential-validation-150-8 menggantinya dengan pola validasi per isian yang ditunggu secara berurutan sebelum form dikirim. Kode awal sudah mempunyai masalah tersebut.

prepareRegistrationData menjalankan validateRegistrationField untuk empat isian. Array checks dikembalikan, tetapi pemanggil mengabaikannya. sendRegistration kemudian mengirim seluruh form untuk divalidasi backend lagi. API simulasi lokal memakai latensi 250 ms yang sama per panggilan. Ada empat validasi awal dan satu pengiriman, dibanding satu pengiriman setelah optimasi. Pengujian menghitung panggilan aktual serta urutan waktunya dan membandingkan hasil backend yang tetap sama. Tidak ada loop komputasi besar pada source yang dijalankan.

Fungsi serta variabel frontend memakai readFormData, setSubmitting, clearMessages, showResult, showFieldErrors, resetForm, submitRegistration, prepareRegistrationData, message, submitButton, result, dan nama Inggris lainnya. Runtime juga menggunakan nama Inggris untuk service yang dipakai frontend. Kunci API nama, nis, kelas, serta ekstrakurikuler tetap dipertahankan. JS awal 79 baris, perbaikan fungsi dengan validasi berlebih 92 baris, dan versi teroptimasi 79 baris.

Dua jalur pembahasan tersedia. Penandaan helper di Kode membuka pertanyaan kegunaan kode, lalu penjelasan dan opsi optimasi. Percobaan di Apps mengaktifkan Bahas kelambatan yang membuka pertanyaan mengapa Apps lambat. Fungsi belum diubah hanya karena tombol pembahasan dibuka. Diagnosa menjelaskan empat request tambahan dan hasil yang tidak dipakai. Optimasi menghapus tahap tersebut dengan validasi backend tetap berjalan pada pengiriman utama. Temuan respons/errors tetap diprioritaskan di hasil percobaan.

Verifikasi akhir: 13 model dan 28 browser, total 41 pemeriksaan. Model mencakup 96 kombinasi source, kedelapan ending, batas biaya 15/16/30/31 baris, limit 12, restore, dan identifier Inggris saat overheat. Browser memeriksa status Mengirim, 4+1 panggilan berurutan menjadi satu, hasil diterima/ditolak, NIS nol awal, error transport, pengiriman ganda, kedua jalur trigger, serta variasi good ending. Lima belas pemeriksaan murid individual memastikan skala, posisi kiri, ekspresi, dan restore pada enam ukuran. Dalam pengukuran lokal terakhir, alur lima panggilan sekitar 1,3 detik dan alur satu panggilan sekitar 0,26 detik. Gambar source Inggris dan demo saat Mengirim diperiksa. Tidak ada error JavaScript pada browser.

## Diagnosis kelambatan hanya dari kode

Pemateri membatalkan jalur pembahasan performa dari Apps. Versi ai-assisted-code-only-performance-150-8 menghapus tombol kelambatan, temuan performance pada hasil pengiriman, dan pertanyaan performa setelah laporan diterima. Helper perlu ditandai di Kode untuk membuka pertanyaan fungsi, penjelasan, serta opsi optimasi. Demo tetap lambat dan variasi good ending tetap berlaku. Pemeriksaan browser menjalankan pengiriman, memastikan jalur Apps tidak tersedia, lalu menandai helper dan menyelesaikan optimasi melalui Kode. Tidak ada error JavaScript.
