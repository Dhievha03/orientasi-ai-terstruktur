# Rencana Percakapan Ujian Berbasis Temuan

## Acuan

Rencana disetujui dalam percakapan pemateri. Percakapan menjadi adegan yang terhubung, bukan kumpulan tindakan dengan jawaban umum.

## Batas pengerjaan

- Pengerjaan langsung dalam folder presentasi yang digunakan pemateri.
- Tidak commit, menjalankan tes, pemeriksaan sintaks, browser, audit kontras, atau review subagent. Pengujian dilakukan pengguna.
- Delapan bab dan 150 menit dipertahankan.
- Redaksi tanpa titik koma. Sebutan pendamping hanya AI.
- Tidak ada audio otomatis, Orgia Mode, screen shake Micro Task, atau hitung mundur prompt.

## Implementasi

- [x] Pisahkan chat dari aktivitas dengan metadata type pada pilihan.
- [x] Catat aktivitas pada frame narator. Tidak menghasilkan bubble User atau pemakaian AI.
- [x] Simpan keadaan aplikasi, hasil aktivitas, dan pengetahuan AI secara terpisah.
- [x] Batasi pengulangan berdasarkan kondisi yang relevan, bukan revisi global.
- [x] Bedakan aturan penutupan, akun lama, akun baru, dan pemulihan.
- [x] Hubungkan pertanyaan, laporan, dan pemeriksaan berikutnya melalui adegan.
- [x] Pertahankan sembilan konklusi dan riwayat aktual. Aktivitas bukan kutipan ucapan User.
- [x] Ganti garis asap dengan volume SVG berlapis yang bergerak singkat lalu memudar.
- [x] Tingkatkan gangguan ucapan pada permintaan 6 sampai 9 tanpa memberitahukan sisa penggunaan.
- [x] Selaraskan materi, versi penyimpanan, dan panduan pemeriksaan manual.

## Keputusan implementasi

Aktivitas tetap menggunakan frame turn dengan speaker narrator agar lifecycle, Log, dan validasi posisi tidak memerlukan mode tambahan. Selection ditempatkan pada narasi hasil aktivitas, bukan pada ucapan User palsu. Replay menentukan seluruh keadaan dari jawaban yang valid.

Pertanyaan tentang hasil pengujian hanya dijawab sebagai hasil yang diketahui AI setelah User melaporkannya. Checklist AI memakai laporan tersebut. Konklusi memakai riwayat aktual, termasuk pemeriksaan yang belum dilaporkan.

Kunci pemeriksaan mengikuti aturan yang diuji. Perubahan tampilan tidak membuka kembali tes penutupan. Pemulihan menambah generasi akun uji sehingga pengulangan kegagalan sesudah pemulihan dapat dibedakan dari tes awal.

## Status

Implementasi file dan pembacaan sumber saja. Belum ada bukti pengujian runtime. Panduan rute tersedia di README modul dialog.
