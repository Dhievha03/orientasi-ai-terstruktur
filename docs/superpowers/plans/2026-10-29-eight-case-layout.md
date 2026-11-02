# Revisi delapan bab dan studi kasus interaktif

## Keputusan terbaru pemateri

- Tetap delapan bab: Pengantar, Risiko, Tools AI, Metode, Kasus, Analisis, Review, Penutup.
- Delapan tahap pencahayaan bulan hanya dari new moon sampai full moon. Tidak memakai fase mengecil.
- Susunan menu asimetris seperti versi sebelumnya. Font dasar dan padding nonaktif sama; pilihan aktif membesar dengan jelas.
- Contoh berbentuk studi kasus tanpa demonstrasi aplikasi, kode, terminal, atau percakapan AI langsung.
- Permasalahan tampil terlebih dahulu. Slide berikutnya membahas analisis.
- Interaksi berupa pilihan pembahasan manual dan penyorotan data, tanpa polling atau praktik peserta.

## Implementasi dan hasil

- [x] Susun ulang 28 slide dalam delapan bab dengan bahasa presentasi netral. Studi kasus utama memakai data dalam `content.js` dan tidak memuat script atau tautan ke contoh executable.
- [x] Tambahkan panel permasalahan, pilihan analisis vertikal/horizontal, dan tabel kasus yang menyorot transaksi sesuai aturan serta sumber selisih.
- [x] Pulihkan posisi mendatar dan kemiringan menu yang berbeda. Tinggi baris, padding, dan font dasar tetap sama; hover/fokus membesar 22%.
- [x] Pertahankan geometri selektor dan sinkronisasi mask selama pembesaran. Geometri wordmark diperiksa terhadap tabrakan dan batas layar.
- [x] Bagi fase bulan menjadi delapan langkah pada separuh siklus dari new moon sampai full moon; cocokkan bentuk akhir animasi dengan ikon bab tujuan.
- [x] Uji seluruh slide dan seluruh state analisis pada tujuh ukuran layar, serta navigasi, penyimpanan, fullscreen, dialog, dan reduced-motion.

## Pengamatan referensi singkat

Pause, Persona, Status, Social Link, System, dan Dictionary digunakan untuk membandingkan komposisi daftar, panel informasi, dan action corner. Referensi utamanya video yang diberikan pemateri serta uraian teknis Adrian Kowalik. Setelah pembandingan singkat, pekerjaan langsung berfokus pada implementasi dan pemeriksaan browser.

## Verifikasi

- `verify-tefa-eight-case.cjs`: delapan bab, urutan masalah/analisis, pilihan interaktif, persistensi, tidak ada contoh executable, serta fullscreen.
- `verify-tefa-menu-fan.cjs`: hover nyata 1,22, asimetri posisi/sudut, font nonaktif seragam, padding seragam, dan progres new moon ke full moon.
- `verify-p3r-pause.cjs`: semua delapan pilihan pada tujuh ukuran, tabrakan wordmark, tujuan bab, keyboard, dan konteks isi.
- `verify-p3r-slides.cjs`: 28 slide beserta seluruh pilihan analisis pada tujuh ukuran; tanpa overflow horizontal, scroll laptop/proyektor, error JavaScript, atau request eksternal.
- `verify-tefa-eight-moons.cjs`: delapan bentuk berbeda, endpoint animasi cocok dengan ikon bab, elemen SVG stabil, skip, dan reduced-motion.
- `verify-tefa-case-controls.cjs`: hover/Enter, notes/fokus, salin instruksi, istilah, fullscreen, reduced-motion, dan fallback Canvas/penyimpanan.

Tidak ada commit atau publikasi yang diminta dalam revisi ini.
