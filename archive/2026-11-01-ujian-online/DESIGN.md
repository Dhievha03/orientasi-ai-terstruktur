# Arah desain: AI workflow × bahasa visual P3R

## Keputusan pemateri

- Menu bab buka/tutup pada halaman yang sama. Materi menggunakan layar penuh.
- Tidak ada kode, termasuk kode lampiran, JSON, sintaks, maupun rangkaian tes fungsi.
- Pembelajaran berfokus pada AI-Assisted Development melalui contoh masalah dan analisis, tanpa demonstrasi aplikasi atau kode.
- Transisi pergantian bab yang telah disetujui dipertahankan sebagai modul tersendiri.
- Revisi aktif: 37 slide, 8 bab, alokasi 150 menit. Pengantar, Risiko, Tools AI, Konteks, Panduan, Micro Task, Review, Penutup.
- Dialog database di bab Risiko bersifat linear. Percakapan bercabang berada pada Micro Task, setelah requirement. Label USER/AI, siluet hitam dari portrait asli, simbol komik, konklusi setelah adegan.
- Pengguna meminta menguji revisi ini sendiri. Tidak ada klaim hasil pengujian baru oleh AI.
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
