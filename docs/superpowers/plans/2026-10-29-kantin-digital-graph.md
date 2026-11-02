# Revisi graph Micro Task: Kantin Digital

## Rencana yang disetujui

Mengganti skenario inventaris yang sebelumnya aktif dengan graph Kantin Digital yang disediakan pengguna. Delapan ending dan cabang keputusan mengikuti skenario tersebut. Beberapa cabang diberi kesempatan koreksi sebelum ending. Dialog tidak menyebut istilah micro task.

## Implementasi

- [x] Pertahankan percakapan database di bab Risiko.
- [x] Ganti graph inventaris dengan skenario Kantin Digital: menu stok, laporan/Pesan Cepat, timeout/template, dan delapan ending.
- [x] Tambah kesempatan membatalkan laporan fiktif, memulihkan saldo setelah simpan gagal, mempertahankan riwayat pesanan, dan mematikan integrasi luar sebelum demo.
- [x] Bedakan masalah data, operasi, presentasi, dan bukti dalam konklusi.
- [x] Pertahankan halaman pengantar, pemeran, dan requirement sebelum dialog.
- [x] Pakai sapaan AI “Anda”. Label pembicara tetap USER/AI.
- [x] Tambah screen shake satu kali untuk giliran anger/fury pada dialog database Bab Risiko. Shake tidak loop, lebih kuat pada fury, tidak berlaku pada Micro Task, dan menghormati reduced-motion/motion-off.
- [x] Batasi screen shake ke adegan database Bab Risiko. Adegan Micro Task tidak terguncang.
- [x] Hapus label Reaksi USER dari atas portrait.
- [x] Skenario proyek inventaris diganti dengan graph Kantin Digital yang disetujui pemateri.
- [x] Update dokumentasi adegan serta jumlah 37 slide.
- [x] Dialog AI memakai Anda pada sapaan; label Reaksi USER dihapus.
- [x] Ringkasan dampak singkat ditampilkan langsung setelah ending dengan tombol Lihat konklusi.
- [x] Ringkasan akhir diperkecil dan diturunkan dekat area textbox.
- [x] Kurangi amplitudo serta durasi shake; shake Micro Task tidak aktif.
- [ ] Pengujian pemateri.

## Handoff pengujian

Pemateri meminta seluruh pengujian dilakukan sendiri. AI tidak menjalankan browser, suite otomatis, pemeriksaan sintaks, contrast audit baru, atau review subagent. Dokumen ini bukan bukti kelulusan runtime/layout.

Versi graph awal di naskah ini telah diperinci dalam `dialogue-data.js`: pemilihan opsi USER selalu menjadi giliran dialog, cabang pilihan saling terhubung, dan AI memberikan respons sebelum ending baik. Versi yang dijalankan pemateri adalah sumber kebenaran.
