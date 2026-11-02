# Ujian Online Dinamis Implementation Plan

**Goal:** Mengganti Micro Task absensi dengan simulasi ujian online berdasarkan kondisi aplikasi dan sembilan ending.

**Architecture:** Riwayat pilihan diputar ulang secara deterministik untuk membangun kondisi, pilihan yang relevan, dialog, narasi, dan ending. Integrasi snapshot tetap memakai validator host dan iframe yang sama.

**Tech Stack:** JavaScript, HTML, CSS lokal tanpa dependency baru.

**Spec:** Naskah Skenario_Ujian_Online_Dinamis_Overheat.md yang diberikan dalam percakapan, dengan koreksi pemateri setelahnya.

## Global Constraints

- User membuka dengan satu instruksi ambigu. Semua ucapan berikutnya berasal dari pilihan.
- Label User/AI. Narator tanpa portrait, ekspresi, atau karakter ketiga.
- Hanya permintaan ke AI dihitung, termasuk pembuka. Permintaan ke-9 ditolak karena overheat; asap mulai pada permintaan ke-6.
- Tanpa Orgia Mode, konslet, nilai akademis, autoplay, dan screen shake Micro Task.
- Setiap ending memiliki Akibat, Alasan, Prinsip, dan Perjalanan aktual. Konklusi baru dibuka setelah ending.
- Pengguna menguji sendiri. Tidak menjalankan tes, browser, pemeriksaan sintaks, atau subagent. Tidak commit.

## Tasks

- [x] Tambahkan mesin kondisi ujian, pilihan kontekstual, batas permintaan, sembilan hasil, dan konklusi sesuai kondisi terakhir.
- [x] Hubungkan replay dengan trace, validasi snapshot, dan Perjalanan pada host.
- [x] Tambahkan narasi tanpa portrait, kategori pilihan, label User, ekspresi User, dan SVG asap dengan reduced-motion.
- [x] Selaraskan requirement, contoh materi, versi penyimpanan, dan dokumentasi aktif.
- [x] Periksa sumber: prioritas ending, pembatalan tindakan, hasil uji setelah revisi, snapshot replay, serta narator versus penggunaan AI. Pengujian runtime diserahkan kepada pengguna.

## Status

Implementasi dan pembacaan sumber selesai. Belum ada pengujian runtime atau pemeriksaan sintaks. Rute manual untuk sembilan ending disediakan di README modul; seluruh pengujian dilakukan pemateri sesuai instruksi.
