# Arah desain: AI workflow × bahasa visual P3R

## Keputusan pemateri

- Menu bab buka/tutup pada halaman yang sama. Materi menggunakan layar penuh.
- Tidak ada kode, termasuk kode lampiran, JSON, sintaks, maupun rangkaian tes fungsi.
- Pembelajaran berfokus pada bagaimana manusia mengarahkan dan mengevaluasi pekerjaan AI.
- Transisi pergantian bab yang telah disetujui dipertahankan sebagai modul tersendiri.

## Observasi referensi

Menu utama P3R tidak menjadi sidebar yang sama pada setiap submenu. Masuk ke Skill, Item, Equip, Persona, Status, Quest, Calendar, atau System mengubah komposisi. Objek, judul, daftar pilihan, dan action bar memiliki hierarki berbeda. Adaptasi web menerapkannya sebagai perpindahan antara menu layar penuh dan slide dengan komposisi berbeda.

Pada battle, pemilihan aksi, respons, dan hasil merupakan keadaan yang berbeda. Adaptasinya pada simulasi adalah permintaan pemateri → rencana AI → pertimbangan manusia. Langkah dibuka manual, bukan diputar otomatis. Efek battle tidak digunakan berulang pada semua slide.

Referensi diam dan storyboard membantu membandingkan komposisi; spesifikasi durasi web adalah keputusan implementasi, bukan klaim pengukuran frame asli game.

## Komposisi

- Pembuka: tipografi dominan di bidang putih, tiga pita alur kerja di bidang biru diagonal.
- Pembagian peran: dua wilayah dengan hierarki yang tidak setara.
- Perbandingan/peta: bidang terang, hubungan konsep, dan informasi pendukung kecil.
- Prompt: pilihan bagian di kiri, satu contoh instruksi di kanan.
- Simulasi: nomor langkah dan peran penutur, bukan tampilan kode atau chat palsu yang mengaku langsung.
- Evaluasi: klaim besar di satu sisi, tiga status bukti di sisi lain, keputusan dibuka setelah penjelasan.

Ukuran teks dan bidang mengikuti ruang presentasi. Layout diperiksa pada proyektor 1920×1080, laptop 1366×768, tablet, dan ponsel. Ponsel dapat menggulir materi; navigasi tetap terlihat.

## Tipografi

Archivo normal/italic dipakai sesuai fungsi, bukan memiringkan seluruh UI melalui transform. Source Sans 3 menjaga isi mudah dibaca. Font disimpan lokal dengan lisensi OFL. Identitas font resmi P3R tidak diklaim; yang diadaptasi adalah hierarki dan karakter proporsinya.

Status pengujian, contoh produk, dan judul bagian laporan memakai ukuran 20 px agar informasi penting tidak menjadi label kecil. Judul slide diringkas dengan jarak huruf -0,6 px. Kutipan instruksi memakai Source Sans 3 tegak; gaya italic dipertahankan pada judul dan navigasi sesuai arah visual.

## Redaksi materi

Instruksi terbaru pemateri mengutamakan bahasa presentasi profesional yang netral. Judul dan poin menjelaskan konsep, kondisi, tindakan, dan hasil; tidak memakai narasi saya/kita atau cerita tentang tindakan pemateri. Kalimat dibuat singkat dan istilah diperkenalkan melalui contoh konkret.

Sebutan implementasi “contoh lokal” dihapus dari teks, caption, alt, dan gambar. Materi menyebut formulir simulasi. Gambar menunjukkan kondisi isian dan pesan hasil tanpa catatan teknis yang mengganggu pembahasan.

Studi kasus mengikuti satu alur: versi awal menerima isian kosong dan spasi saja; perbaikan pertama menolak kosong tetapi masih menerima spasi; hasil koreksi diuji ulang sebelum diterima. Percakapan tetap berlabel simulasi. Tangkapan dan hasil pengujian berasal dari berkas dalam `examples/registration/`, yang benar-benar dijalankan di Microsoft Edge.

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

Tidak ada aset, rekaman, atau gambar game yang dimasukkan ke aplikasi.

## Pause menu aktif

Video yang diberikan pemateri diperiksa pada pause 00:03 dan 00:13, Persona 00:26, status 00:42 dan 01:03, Quest 01:15, Calendar 01:54, System 02:00, serta Dictionary 02:16. Rancangan revisi disetujui sebelum implementasi; spesifikasi ada dalam `docs/superpowers/specs/2026-10-29-p3r-pause-design.md`.

- Navigasi berupa susunan wordmark yang padat di tengah. Setiap label mempunyai posisi, sudut, dan skala sendiri, bukan satu kolom miring.
- Label diringkas menjadi Pengantar, Masalah, Alat AI, Instruksi, Panduan, Kendali, Tugas, Simulasi, Evaluasi, Laporan. Nama lengkap tetap tersedia pada konteks pilihan dan nama aksesibel.
- Pilihan aktif membesar 14% pada hover maupun fokus keyboard. Geometri selektor dihitung ulang selama perubahan ukuran huruf, bukan hanya setelah pilihan berganti.
- Sesuai koreksi pemateri, bidang putih kembali memakai segitiga dan proporsi sebelum pembesaran terakhir. Lapisan huruf hitam mengikuti bidang putih; lapisan merah mengikuti perpotongan aksen. Mask dihitung ulang selama perpindahan agar tidak tertinggal dari selektor.
- Tiga judul slide nyata dari bab terpilih ditampilkan di kanan atas. Area ini memberi konteks isi tanpa menciptakan angka atau status permainan palsu.
- Ringkasan dan kendali buka/tutup berada di kanan bawah. Penanda Enter/Esc berbentuk kotak. Pilihan tetap bertahan ketika penunjuk bergerak ke tombol Buka bab. Enter dan klik mengaktifkan pilihan yang terlihat.
- Tulisan TEFA berada di depan bidang putih lengkung. Dua lapisan warna menjaga bagian di atas putih tetap hitam dan bagian di atas biru tetap terang.
- Tidak ada nomor pilihan, keterangan fase bulan, outline, atau underline tambahan. Ponsel dapat menggulir daftar; tombol bawah tetap terlihat.
- Air prosedural bergerak hanya saat menu terbuka dan dapat dijeda. Warna pause tetap biru, tidak berubah menurut fase bulan.

`pause-menu.js` menangani artwork, topik, dan geometri warna. `app.js` tetap menangani lifecycle menu, keyboard, dialog, navigasi, dan penyimpanan.

## Bahasa visual submenu

`presentation.css` menerapkan header putih diagonal, judul italic, ribbon putih/hitam/cyan, bidang baca opak, dan wordmark dekoratif bab di bagian bawah. Komposisi berbeda menurut isi: pembagian peran, perbandingan, peta alat, instruksi, percakapan, bukti, dan laporan. Teks isi tetap tegak.

Kontrol memakai daftar ribbon seperti System. Daftar istilah dan instruksi lengkap memakai panel baca seperti Dictionary. Pembuka ponsel memiliki bidang putih opak di belakang seluruh teks agar diagonal biru tidak mengganggu kontras.

Slide 19 ke 20 memakai animasi slide biasa. Percobaan dissolve dengan duplikasi slide dihapus karena menumpuk dua susunan materi selama perpindahan. Kini hanya satu slide dirender setiap saat. Dalam fullscreen, bar atas dan bawah disembunyikan; panah, M, dan F tetap berfungsi.

## Kalender dan evaluasi visual

Kalender tetap berada dalam `calendar.js` dan `calendar.css`: dua diagonal, angka yang bergeser, penanda bulan, serta pulse tujuan. Durasi 2400 ms atau 4200 ms untuk bab simulasi. Semua dapat dilewati.

Klarifikasi pemateri: keluhan perpindahan bab merujuk pada perubahan dari satu fase bulan ke fase berikutnya. Path SVG bulan kini dimutasi setiap frame dengan easing tersendiri, bukan mengganti elemen bulan sekitar 30 kali per detik. Ikon bulan pada jalur memakai opacity berkelanjutan berdasarkan jaraknya dari fokus, menggantikan perubahan visibility mendadak.

ENERGY 3 / RHYTHM 3 / MOTION 3 pada navigasi dan pergantian bab. Materi diam saat dibaca. Pengujian fungsi tidak membuktikan kemiripan visual; screenshot menu dan beberapa jenis slide dibandingkan dengan frame video. Tidak ada klaim kesamaan piksel dengan game.
