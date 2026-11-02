# Revisi prototipe: siluet dan percakapan database

Catatan historis tahap prototipe terpisah. Pengguna kemudian meminta integrasi ke slide dan penggantian bad ending menjadi 18 giliran. Revisi aktif: `../../../docs/superpowers/plans/2026-10-29-story-deck-150.md`. Pengujian integrasi diserahkan kepada pengguna.

## Desain yang disetujui

Prototipe tetap terpisah. Portrait asli dijadikan hitam melalui CSS, mempertahankan alpha dan bentuk aset. Identitas yang terbaca adalah USER dan AI; AI tidak menyapa dengan nama atau kata user. Nama sumber aset tetap dicatat dalam dokumentasi.

Pilihan ada sebelum penghapusan. Perintah ambigu membuka bad ending yang diberikan pengguna, dengan nama dihapus dari sapaan. Perintah testing yang eksplisit membuka good ending yang disetujui: identifikasi target, pemeriksaan penggunaan/backup, konfirmasi, penghapusan terbatas, verifikasi production, laporan.

Seluruh ucapan termasuk pilihan USER ditampilkan dalam adegan. Konklusi baru dapat dibuka setelah giliran terakhir. Semua tindakan database merupakan cerita fiktif, tanpa operasi sungguhan.

Emosi berupa tanda seru, tanda tanya, urat marah, dan garis stres yang dibuat sebagai SVG. Marah meningkat menjadi beberapa tanda pada pembicara. Saat AI mengabarkan backup ikut terhapus, garis stres muncul pada USER sebagai reaksi, sesuai rancangan yang disetujui. Label `Reaksi USER` membedakannya dari pembicara AI. Gerak singkat berupa hentakan atau mundur, berhenti saat membaca. Dua ucapan terakhir bad ending adalah `...`, tanpa simbol atau animasi. Reduced-motion mempertahankan simbol diam.

## Rencana pelaksanaan

1. Tulis dan jalankan pemeriksaan browser yang gagal pada naskah, label, siluet, simbol, serta syarat konklusi baru.
2. Ubah `index.html`, `styles.css`, dan `story.js`. Gunakan ID pembicara `user`/`ai`, route `bad`/`good`, dan metadata `emotion` pada giliran. Pertahankan fungsi log, reset, fullscreen, serta pengisian teks manual.
3. Jalankan pemeriksaan seluruh giliran kedua cabang pada desktop, tablet, ponsel; periksa screenshot emosi. Periksa keyboard, ulang cabang, log, reduced-motion, tidak ada autoplay, dan sumber lokal.
4. Perbarui README/sumber aset serta audit sesudah pengerjaan.

## Catatan pelaksanaan

- Prototipe dikerjakan di folder yang sama dengan prototipe sebelumnya agar URL pengguna tetap berlaku. Tidak ada commit atau perpindahan workspace.
- Naskah pertengkaran merupakan dramatisasi, bukan klaim perilaku wajib semua model. Konklusi membahas kesalahan asumsi target dan otorisasi, bukan menyalahkan satu pihak saja.
- Review: reaksi USER saat kabar backup terhapus dipertahankan sesuai percakapan desain; label reaksi ditambahkan agar gambar tidak disalahartikan sebagai pembicara, terutama di ponsel. Pemeriksaan label dijalankan gagal dahulu lalu lulus setelah implementasi.
- Temuan minor yang ditunda: shortcut satu huruf L/F bawaan prototipe belum memiliki pengaturan nonaktif/remap. Kontrol tombol tetap tersedia; perbaikan ini tidak menjadi bagian permintaan revisi siluet.
