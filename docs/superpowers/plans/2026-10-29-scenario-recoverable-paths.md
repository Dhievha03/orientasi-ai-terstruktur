# Pengantar skenario dan jalur dialog yang dapat dikoreksi

Status: skenario inventaris pada catatan ini superseded oleh Kantin Digital Sekolah, sesuai keputusan pemateri. Desain aktif dicatat di `2026-10-29-kantin-digital-graph.md`.

## Desain disetujui

Pengguna menyetujui penggabungan slide 5–6 menjadi satu pengantar skenario/pemeran dan memilih percabangan yang memungkinkan perbaikan ending di tengah percakapan. Database tetap linear. Micro Task dimulai dengan requirement dan dialog pembuka sebelum titik pilihan pertama. Konklusi tidak menyela adegan.

## Perubahan

- [x] Slide 5 mengenalkan website, database testing/production, USER developer, dan AI agent. Pembahasan target/instance/backup dipindahkan ke konklusi.
- [x] Requirement Micro Task menggunakan halaman skenario/pemeran yang sama, dengan tombol Mulai percakapan.
- [x] Tambah renderer `sceneBrief` dan komposisi dua pemeran dengan siluet asli.
- [x] Ganti cabang tunggal awal menjadi graph giliran/pilihan/ending. Pilihan USER ditampilkan sebagai giliran dialog sebelum respons berikutnya.
- [x] Tambah koreksi sebelum perubahan dan setelah regresi. Ending tidak memakai skor; masalah yang belum diselesaikan saat penerimaan menentukan bad ending.
- [x] Tambah ringkasan Perjalanan berisi pilihan aktual; good ending setelah koreksi memiliki penjelasan khusus.
- [x] Tambah `dialogue-flow.js` sebagai penyusun trace dan validator bersama host/iframe. Snapshot berisi posisi dan riwayat jawaban, bukan ending saja.
- [x] Variasikan latar navy database dan biru Micro Task dengan lapisan ruang kerja abstrak. Pertahankan transisi pendek dan reduced-motion.
- [x] Ubah jumlah materi menjadi 37 slide, versi `ai-assisted-recovery-150-8`.
- [ ] Pengujian oleh pengguna sesuai instruksi.

## Contoh perjalanan

- Scope kecil, rencana dipertahankan, bukti diminta, hanya micro task pertama diterima: good ending.
- Scope luas, rencana dikoreksi sebelum perubahan, bukti diminta, Reset dipisahkan: good ending dengan koreksi.
- Scope luas, perombakan diteruskan, regresi muncul, scope dipulihkan, bukti diminta, penerimaan dibatasi: good ending dengan koreksi.
- Scope semula kecil diperluas saat review; regresi diterima: bad ending.
- Hasil terbatas diterima tanpa bukti atau seluruh fitur diklaim selesai sebelum Reset: bad ending.

## Status

Tidak ada browser, suite otomatis, pemeriksaan sintaks, pengukuran visual, atau review subagent dijalankan oleh AI. Perubahan dibuat dan ditelusuri melalui pembacaan sumber; pengguna tetap melakukan pengujian sendiri.
