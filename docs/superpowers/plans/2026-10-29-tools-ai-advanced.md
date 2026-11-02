# Tools AI dan micro task: rencana revisi

## Arah yang disetujui

Peserta kelas 11 sudah biasa coding dan familiar dengan AI. Materi berpusat pada AI-Assisted Development, dengan perbandingan Vibe Coding tetap menjadi fondasi. Developer bertanggung jawab atas kode yang digunakan, termasuk kode hasil AI.

Bahasa slide netral, ringkas, profesional; istilah Tools AI dan micro task dipertahankan. Identitas visual, hover, fullscreen, dan transisi kalender yang sudah dikoreksi tetap digunakan. Menu ringkas: Pengantar, Risiko, Tools AI, Konteks, Panduan, Review, Micro Task, Simulasi, Evaluasi, Laporan.

## Kasus

Perhitungan omzet dashboard memasukkan transaksi cancelled dan pending. Dataset simulasi berisi enam transaksi, lima pada periode terpilih dan satu pada hari sebelumnya. Aturan bisnis: hanya completed pada periode terpilih dihitung sebagai omzet. Nilai sebelum perbaikan Rp3.800.000; perbaikan parsial yang hanya mengecualikan cancelled masih Rp3.300.000; hasil sesuai aturan Rp3.000.000.

Dashboard dan ekspor memakai fungsi agregasi yang sama. Filter periode, data sumber, dan tampilan berada di luar cakupan perubahan. Kebijakan refund berada di luar micro task ini. Percakapan rekonstruksi ditandai simulasi; hasil perhitungan dan pengujian harus berasal dari kode yang dijalankan.

## Langkah implementasi

- [x] Bangun dataset dan demonstrasi dashboard yang dapat dibuka di browser. Pengujian final awal gagal karena hasil masih Rp3.300.000; setelah koreksi aturan completed, seluruh pemeriksaan lulus. Versi awal dan parsial tetap tersedia sebagai tahap simulasi.
- [x] Susun 33 slide dengan tanggung jawab developer, risiko AI, Tools AI, konteks proyek, rules/skill, review, micro task, simulasi, pengujian, dan laporan.
- [x] Tambahkan renderer transaksi, perbandingan aturan, dan hasil pengujian yang memakai dataset/engine yang sama.
- [x] Periksa tujuh ukuran layar, seluruh tujuan bab, mode fokus, fullscreen, penyimpanan, reduced-motion, filter periode, data kosong, dan isi unduhan CSV.
- [x] Audit redaksi netral dan klaim. Review independen menemukan contoh sycophancy yang belum membedakan dugaan pengguna dari persetujuan AI; regresi gagal sebelum koreksi dan lulus sesudahnya.

## File

- `examples/sales-report/`: data simulasi, agregasi, dan antarmuka demonstrasi.
- `content.js`: materi baru, catatan, prompt, dan menu ringkas.
- `app.js`: renderer kasus transaksi dan aturan perubahan.
- `presentation.css`: layout kasus dan typography yang diperlukan.
- `index.html`: script data/engine sebelum materi dan metadata judul.
- `README.md`, `DESIGN.md`, `anti-slop/`: panduan serta bukti audit.

Tidak ada commit, publikasi, perubahan backend, atau pengubahan proyek LMS dalam pekerjaan ini.

## Hasil akhir

`verify-tefa-sales.cjs`, `verify-tefa-advanced.cjs`, `verify-p3r-slides.cjs`, `verify-p3r-pause.cjs`, `verify-tefa-redesign-final.cjs`, dan `verify-tefa-redesign-motion.cjs` lulus. Pemeriksaan sintaks dan `git diff --check` lulus. Tidak ada request eksternal atau error JavaScript pada suite slide. Laporan: `anti-slop/audit-007-2026-10-29.md`.
