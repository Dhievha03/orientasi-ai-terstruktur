# Belajar Menggunakan AI untuk Membantu Coding

Web presentasi statis khusus pemateri TEFA. **28 slide dalam 10 bab**, berfokus pada penggunaan AI: memahami pekerjaan, memberi konteks, menilai rencana, mengoreksi respons, dan menerima hasil berdasarkan bukti.

## Membuka

Buka **`index.html`** di Chrome, Edge, atau Firefox modern. Semua materi, font, ikon, dan efek tersedia lokal. Tidak perlu instalasi, backend, database, API key, akun, atau koneksi AI.

Untuk hosting statis, unggah file utama beserta folder `assets/`. File dalam `archive/` hanya cadangan versi terdahulu dan tidak perlu diunggah.

## Cara menyajikan

Presentasi langsung membuka slide. Menu bab tampil ketika tombol **Bab** dipilih atau **M** ditekan. Pilih label, lalu klik label atau tombol **Buka bab**; Enter juga membuka pilihan yang terlihat. Setelah bab dipilih, menu keluar dan materi menggunakan seluruh lebar layar. Pada ponsel, daftar menu dapat digulir.

| Kendali | Fungsi |
| --- | --- |
| `←` / `→` | Slide sebelumnya / berikutnya |
| `M` | Buka/tutup menu bab |
| `↑` / `↓` saat menu terbuka | Memindahkan pilihan bab |
| `Enter` saat fokus pada bab | Membuka pilihan yang sedang ditampilkan |
| `B` | Membuka pembahasan, bagian instruksi berikutnya, atau respons simulasi berikutnya |
| `N` | Buka/tutup catatan pemateri |
| `P` | Masuk/keluar Fokus materi |
| `Esc` | Tutup menu/dialog, lewati transisi, keluar Fokus materi, atau tutup catatan |
| `F` | Masuk/keluar layar penuh; bar atas dan bawah disembunyikan |
| `T` | Aktifkan/nonaktifkan transisi |
| `L` | Aktifkan/jeda gerak air pada menu |
| `Home` | Kembali ke pembuka dan reset pembahasan |
| `?` | Buka kontrol pemateri |

Kontrol tambahan tersedia melalui ikon di kanan atas: layar penuh, fokus materi, transisi, gerak air, daftar istilah, serta kembali ke awal. Tombol sebelumnya/berikutnya tetap tersedia dalam Fokus materi. Tidak ada autoplay, timer, voting, polling, atau halaman peserta.

Dalam layar penuh, navigasi memakai panah kiri/kanan dan menu `M`. Tekan `F` untuk keluar. Bar atas dan bawah tampil kembali setelah keluar dari layar penuh.

## Susunan materi

1. **Pengantar** — pembagian peran manusia/AI dan dua pola kerja.
2. **Masalah awal** — contoh formulir dan cara membuat brief yang jelas.
3. **Alat AI** — hubungan aplikasi, model, tools, dan router.
4. **Instruksi AI** — prompt, konteks yang relevan, batas, serta kriteria selesai.
5. **Aturan kerja** — prompt, rules, skill, serta cakupan proyek/pengguna.
6. **Pemeriksaan** — titik keputusan manusia, feedback, izin, dan data.
7. **Tugas kecil** — membatasi pekerjaan dan urutan kerja bersama AI.
8. **Simulasi AI** — permintaan, rencana AI, usulan yang melebar, dan ilustrasi perubahan hasil.
9. **Evaluasi** — klaim vs bukti, permintaan perbaikan, dan keputusan penerimaan.
10. **Hasil kerja** — laporan dan kebiasaan yang dibawa ke pekerjaan berikutnya.

Slide tidak menampilkan kode, sintaks, JSON, atau lampiran kode. Studi kasus menggunakan **formulir simulasi**: versi awal, perbaikan pertama, dan hasil setelah koreksi. Tangkapan formulir berasal dari pengujian versi tersebut di Microsoft Edge. Percakapan diberi label simulasi dan tidak berasal dari panggilan AI langsung saat presentasi.

Alurnya berurutan: versi awal menerima Nama kosong dan spasi; perbaikan pertama menolak Nama kosong tetapi masih menerima spasi; koreksi berikutnya memenuhi kondisi yang diuji. Berkas formulir tersedia di `examples/registration/`, dengan petunjuk dan hasil pemeriksaan dalam README folder tersebut. Slide menggunakan gambar dan tidak mengumpulkan data peserta.

Dalam simulasi, pemateri membuka respons dan pertimbangan secara manual. Pembahasan lain dapat ditampilkan/disembunyikan. Status tersebut serta posisi slide disimpan melalui `localStorage`, jika diizinkan browser. Menu selalu tertutup saat halaman dimuat agar web langsung membuka materi.

## Sistem visual dan gerak

- **Archivo** normal dan italic untuk judul serta navigasi; **Source Sans 3** untuk isi. Font disimpan lokal, dengan lisensi pada `assets/fonts/LICENSE.txt`. Bukan font resmi game.
- Materi menggunakan judul dan poin yang netral, bukan naskah ucapan orang pertama. Kondisi awal, tindakan, dan hasil dijelaskan langsung. Istilah teknis diperkenalkan melalui fungsi dan contoh.
- Status pengujian, contoh produk, dan judul bagian laporan berukuran 20 px. Jarak huruf judul dilonggarkan; teks instruksi memakai huruf tegak agar mudah dibaca.
- Menu mengadaptasi komposisi pause: wordmark padat di tengah, selektor segitiga putih/merah yang menyilang tulisan, konteks isi bab di kanan atas, serta perintah di kanan bawah. Warna huruf mengikuti perpotongan bidang selama animasi.
- Label menu diringkas, tanpa nomor. Nama bab lengkap dan ringkasannya tetap tersedia saat dipilih. Konteks bab berisi judul slide yang benar-benar ada.
- Tulisan besar di kiri adalah **TEFA**. Pilihan yang di-hover atau difokuskan membesar 14%; bidang putih mengikuti ukuran huruf selama animasi. Penanda tombol Enter dan Esc berbentuk kotak.
- Slide memakai header diagonal, ribbon putih/hitam/cyan, dan susunan berbeda untuk peran, perbandingan, peta tools, prompt, bukti, serta keputusan. Bidang baca opak menjaga keterbacaan; area membaca tidak ditimpa animasi air.
- Kontrol, daftar istilah, dan instruksi lengkap memakai bahasa visual submenu. Semua contoh tetap diberi keterangan sesuai fungsinya.
- Transisi pergantian bab yang disetujui dipisah dalam `calendar.js` dan `calendar.css`: pita biru menurun, garis putih menaik, nomor bab dan bulan yang bergeser, lalu pulse pada bab aktif.
- Bab 8 menjadi Full Moon dengan durasi sekitar 4,2 detik. Transisi biasa sekitar 2,4 detik. Semua dapat dilewati. Nomor bab menggantikan tanggal kalender.
- Bentuk fase bulan berubah bertahap melalui path SVG yang sama. Ikon bulan pada jalur memudar saat melewati penanda aktif, bukan menghilang mendadak.
- Perpindahan slide 19 ke 20 memakai animasi slide biasa, tanpa menumpuk dua lapisan materi.
- Gerak pendek digunakan pada slide dan dialog. Pengaturan `prefers-reduced-motion` dihormati; laut hanya bergerak ketika menu terlihat dan preferensinya aktif.
- Fokus keyboard ditandai melalui warna, selektor, atau perubahan bidang tanpa bingkai outline atau underline tambahan.

Semua bidang, ikon, dan efek visual dibuat melalui CSS, SVG, dan WebGL/Canvas. Tidak ada gambar latar, karakter, logo, musik, atau audio resmi game.

## File

```text
index.html       Halaman pemateri, menu, dan dialog
content.js       Data slide, bab, catatan, istilah, dan contoh prompt
app.js           Renderer, navigasi, penyimpanan, serta interaksi
styles.css       Sistem komposisi, tipografi, menu, dan gerak
pause-menu.js    Renderer pause menu, konteks bab, dan mask warna
pause-menu.css   Komposisi wordmark, selektor segitiga, dan kendali pause
presentation.css Bahasa visual submenu untuk slide dan dialog
calendar.js      Logika pergantian bab yang dipertahankan
calendar.css     Tampilan pergantian bab
water.js         Latar air menu, dengan WebGL dan fallback Canvas
assets/fonts/    Font lokal dan lisensi
assets/demo/     Tangkapan hasil pengujian formulir simulasi
examples/registration/ Formulir simulasi dan tiga tahap perbaikannya
DESIGN.md        Catatan arah desain dan storyboard
archive/         Versi-versi terdahulu, tidak dimuat oleh web aktif
```

Sunting materi pada `content.js`. ID slide harus unik dan stabil. Setiap slide memiliki `chapter`, `type`, teks, serta `notes`. Penanda `climax` pada data bab mengatur transisi Full Moon; tidak bergantung pada posisi indeks yang ditulis ulang di renderer.

Posisi dan preferensi versi lama yang masih sesuai dipulihkan. Jika struktur materi berubah versi, pembahasan dimulai dari keadaan tertutup. Jika penyimpanan tidak tersedia, presentasi tetap dapat digunakan.
