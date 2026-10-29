# Contoh micro-task: pemeriksaan Nama

Formulir ini disiapkan untuk simulasi dalam presentasi. Data tidak dikirim dan tidak disimpan. Kode tidak ditampilkan dalam slide.

## Tiga tahap kasus yang sama

- Buka `index.html?stage=before` untuk versi awal: Nama kosong dan tiga spasi masih diterima.
- Buka `index.html?stage=first` untuk perbaikan pertama: Nama kosong ditolak, Rina diterima, tetapi tiga spasi masih diterima.
- Buka `index.html` atau `index.html?stage=final` untuk hasil setelah koreksi.

Tambahkan parameter pada alamat browser setelah membuka file. Versi awal dan pertama sengaja mempertahankan kekurangan yang dibahas dalam simulasi.

## Perubahan yang dikerjakan

Saat penyusunan materi, asisten AI mengubah pemeriksaan dari selalu menerima isian, menjadi menolak nilai kosong, lalu menolak nilai yang kosong setelah spasi tepi dirapikan. Alur formulir, pilihan Kelas, Reset, dan pengiriman dengan Enter tetap sama. Sebelum perbaikan akhir, pengujian benar-benar gagal pada isian kosong, lalu gagal pada spasi saja. Setelah koreksi, seluruh kondisi berikut lulus.

| Kondisi pada versi akhir | Hasil yang diamati di Microsoft Edge |
| --- | --- |
| Nama kosong | Nama belum diisi |
| Tiga spasi | Nama belum diisi |
| Rina | Pendaftaran berhasil |
| Rina Putri | Diterima; spasi antar-kata tetap ada |
| Spasi di tepi Rina Putri | Diterima; spasi tepi dirapikan |
| Kelas XII RPL dipilih sebelum mengirim | Pilihan Kelas tetap XII RPL |
| Reset setelah mengisi | Nama kosong, Kelas kembali XI RPL, pesan hasil direset |
| Enter pada Rina dan pada tiga spasi | Nama biasa diterima; spasi saja ditolak |

Pemeriksaan memakai Playwright pada Microsoft Edge. Tangkapan pada `assets/demo/` berasal dari browser tersebut. Percakapan dalam slide tetap berlabel contoh yang disiapkan, bukan rekaman jawaban layanan AI langsung.

Formulir ini belum diperiksa di browser lain dan tidak terhubung ke server pendaftaran. Kriteria serta laporan slide merujuk pada batas ini.
