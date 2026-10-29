# Revisi berdasarkan video pause menu P3R

## Tujuan

Mengganti komposisi menu yang masih menyerupai daftar presentasi dengan adaptasi pause menu P3R, lalu menerapkan bahasa visual submenu pada materi dan dialog.

## Temuan dari video yang diberikan

Cuplikan yang diperiksa: pause pada 00:03 dan 00:13, Persona pada 00:26, status pada 00:42 dan 01:03, Quest pada 01:15, Calendar pada 01:54, System pada 02:00, serta Dictionary pada 02:16.

- Pause: daftar sempit dan padat di tengah, bukan daftar lebar dengan ringkasan berbobot sama di samping.
- Setiap kata memiliki skala, kemiringan, dan awal/akhir yang berbeda. Kesannya seperti susunan wordmark, bukan tombol dengan kotak masing-masing.
- Selektor terdiri atas bidang putih segitiga dan aksen merah diagonal yang saling bertumpuk. Bukan stroke seragam yang mengelilingi tulisan.
- Pilihan memengaruhi ruang label sekitarnya. Masuk dan keluar menu mengubah komposisi layar.
- Perintah kontekstual dan tombol konfirmasi/tutup berada di kanan bawah.
- Submenu berbeda komposisi: daftar ribbon, pita informasi diagonal, judul besar, serta bidang putih/hitam/biru yang tegas.

## Pendekatan

Adaptasi longgar dengan mempertahankan daftar dan mengganti border sudah dicoba dan ditolak pemateri. Pendekatan revisi adalah membangun kembali struktur visual berdasarkan video. Ini merupakan adaptasi untuk presentasi tanpa karakter, bukan reproduksi aset game.

## Menu

- Pertahankan menu layar penuh yang dibuka/tutup pada halaman sama.
- Geser pusat navigasi ke tengah layar. Ringkas label agar kepadatannya mendekati nama menu game: Pengantar, Masalah, Alat AI, Instruksi, Panduan, Kendali, Tugas, Simulasi, Evaluasi, Laporan.
- Nama bab lengkap tetap tersedia sebagai konteks pilihan dan nama aksesibel.
- Susun label sebagai komposisi vektor dengan pose tersendiri. Teks aktif tetap terbaca ketika selektor menyilangnya.
- Gunakan bidang segitiga, pemisahan lapisan putih/merah, dan perpotongan warna pada teks. Hapus sistem border 5 px serta batas padding kotak sebagai tolok ukur visual.
- Daftar pokok bahasan bab terpilih menempati area kanan atas sebagai konteks isi, menggantikan peran area status pada referensi. Isinya berasal dari slide nyata, tanpa angka.
- Ringkasan tindakan dan kendali pilih/buka/tutup berada di kanan bawah.
- Tulisan besar di kiri tetap terbaca, hitam di atas putih dan terang di atas biru.
- Ponsel memakai susunan lebih renggang dan dapat menggulir jika perlu. Tombol tetap dapat dipilih dengan sentuhan serta keyboard.

## Materi dan dialog

- Terapkan pita judul putih/hitam diagonal dan tipografi judul yang lebih dekat dengan submenu.
- Gunakan ribbon untuk pilihan instruksi, brief, kriteria, dan bukti. Variasi layout mengikuti jenis isi.
- Perbandingan dan peta tools memakai pembagian bidang yang lebih tegas; hindari kesan kartu dashboard umum.
- Percakapan memakai panel penutur dan bidang dialog yang dibuka manual.
- Kontrol pemateri, daftar istilah, dan instruksi lengkap mengikuti bahasa visual System/Dictionary.
- Latar materi tetap tenang saat dibaca. Teks isi tidak dimiringkan atau didistorsi.

## Batas yang tetap berlaku

- Bahasa Indonesia, 28 slide, 10 bab, fokus penggunaan AI tanpa materi kode.
- Tidak ada karakter/manusia, aset game resmi, audio, atau gambar latar hasil generasi.
- Tidak ada nomor dalam menu, nama fase bulan di UI, outline aktif, atau underline tambahan.
- Font lokal Archivo dan Source Sans 3. Jangan mengklaim font resmi game.
- Transisi kalender yang disetujui tetap terpisah dalam `calendar.js` dan `calendar.css`.
- Semua kendali, penyimpanan, reduced-motion, dan penggunaan offline tetap berfungsi.

## Dasar evaluasi

Pemeriksaan fungsional tidak membuktikan kemiripan visual. Hasil perlu dibandingkan melalui screenshot menu dan beberapa jenis slide terhadap cuplikan video, selain pengujian klik, keyboard, ukuran layar, dan console.

ENERGY 3 / RHYTHM 3 / MOTION 3 untuk navigasi. Isi materi tetap diam saat dibaca.
