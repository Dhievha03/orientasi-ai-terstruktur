# Tools AI untuk AI-Assisted Development

Presentasi statis pemateri TEFA untuk kelas 11 yang sudah coding dan familiar dengan AI. Versi aktif `ai-assisted-exam-reactions-150-8`: **37 slide, 8 bab, alokasi 150 menit** termasuk pembahasan dan pertanyaan per bab.

## Membuka

Buka **`index.html`** di browser modern. Font, materi, gambar, dan efek disimpan lokal. Tidak memerlukan backend, API key, akun, atau layanan AI.

Untuk hosting statis, sertakan seluruh file JS/CSS root, `assets/fonts/`, favicon, serta **`prototypes/p3r-dialogue/`**. Folder tersebut sekarang memuat modul adegan yang digunakan presentasi. `examples/`, `archive/`, `docs/`, dan `anti-slop/` tidak dimuat sebagai materi aktif.

## Susunan sesi

| Bab | Alokasi | Pembahasan |
| --- | --- | --- |
| Pengantar | 15 menit | Vibe Coding, AI-Assisted Development, tanggung jawab developer |
| Risiko | 30 menit | Pengantar skenario dan pemeran, adegan database, konklusi, tiga risiko respons |
| Tools AI | 20 menit | Aplikasi, model, tools, mode kerja, akses, koneksi |
| Konteks | 20 menit | Relevansi, kebaruan, task brief, acceptance criteria |
| Panduan | 20 menit | Prompt, rules, skill, cakupan, serah terima context |
| Micro Task | 20 menit | Requirement, percakapan bercabang, unit pekerjaan, scope, feedback loop |
| Review | 15 menit | Rencana, perubahan, klaim, verifikasi, penerimaan |
| Penutup | 10 menit | Laporan, tindak lanjut, tanggung jawab |

Alokasi berada pada data/catatan pemateri dan dokumentasi. Tidak ada timer dalam UI. Contoh berbeda digunakan per prinsip: database, login, library, pencarian katalog, notifikasi, dan ujian online. Materi tidak berpusat pada dataset omzet.

Tidak ada praktik aplikasi, kode, terminal, polling, atau respons AI live. Daftar pemeriksaan dan kutipan laporan merupakan bahan pembahasan, bukan klaim pengujian yang dijalankan presentasi.

## Kendali presentasi

- `←` / `→`: slide sebelumnya/berikutnya.
- `M`: buka/tutup menu bab; panah atas/bawah dan Enter memilih bab.
- `B`: buka pembahasan atau lanjutkan fokus/fragmen berikutnya. Pada adegan, melengkapi teks lalu maju satu giliran.
- `N`: catatan pemateri. `P`: fokus materi. `F`: fullscreen.
- `T`: transisi. `L`: gerak air menu saat fokus berada pada presentasi utama.
- `Home`: kembali ke pembuka dan menghapus progres pembahasan serta adegan.
- `?`: kontrol pemateri. Escape menutup dialog atau melewati transisi.

Fullscreen menyembunyikan bar atas/bawah. Panah dan M/F tetap menjadi navigasi. Semua perpindahan dilakukan manual.

## Adegan database dalam slide

Bab Risiko memakai urutan **pengantar skenario/pemeran → percakapan lengkap → konklusi**. Slide 5–6 lama digabung menjadi satu halaman yang menjelaskan situasi serta peran USER dan AI, dengan tombol `Mulai percakapan`. Pembahasan asumsi target, instance, dan backup berada sesudah adegan. Adegan menggunakan iframe lokal untuk mengisolasi CSS serta siklus dialog.

- Adegan langsung dimulai dari instruksi “Tolong hapus database.” Tidak ada pilihan cabang pada bab Risiko.
- Adegan database memiliki 20 giliran. Setelah “Karena databasenya sudah saya hapus”, USER bertanya database mana yang dihapus dan AI menjawab “Database production.” Pertengkaran serta dua giliran `...` terakhir tetap ada. AI memakai sapaan Anda, sedangkan USER tetap dapat memakai kamu.
- Pembahasan instruksi bercabang dipindahkan ke bab Micro Task, setelah requirement ditampilkan.
- Label pembicara adalah User/AI. AI tidak menyebut nama atau menyapa dengan kata user.
- Portrait asli game menjadi siluet hitam. Tanda seru/tanya dan urat marah berwarna merah; garis stres cyan. Simbol merupakan SVG terpisah, bukan gambar generatif AI.
- `Enter`, `B`, atau tombol Lanjut: melengkapi teks yang sedang muncul, lalu maju satu giliran. `L` di dalam adegan membuka Log.
- Panah kiri/kanan, M/N/P/F/T, Home, dan `?` di dalam adegan diteruskan ke presentasi. Konklusi tetap terkunci selama percakapan belum selesai.
- Setelah dialog terakhir, ringkasan dampak singkat dan tombol `Lihat konklusi` ditampilkan. Tidak ada tulisan “Adegan selesai” atau “Akhir percakapan”. Bagian Akibat/Alasan/Prinsip dibuka manual. `Ulang percakapan` memulai database dari awal.
- Progres adegan disimpan bersama posisi slide bila localStorage tersedia. Jika penyimpanan tidak tersedia, progres bertahan selama halaman aktif.

Naskah adalah dramatisasi. Tidak ada database yang diakses atau dihapus. Klaim backup, penghapusan, serta pemeriksaan dalam cerita bukan hasil operasi sungguhan atau dokumentasi penyedia database tertentu.

## Percakapan Micro Task

Bab Micro Task memakai **Ujian Online**: aplikasi ujian untuk 30 siswa. User meminta, “Kalau ada yang sudah selesai, langsung tutup ujiannya, ya.” AI menerapkan penutupan seluruh kelas. Kebutuhan sebenarnya adalah mengunci ujian peserta yang mengumpulkan tanpa menghentikan peserta lain. Pengantar memakai konteks singkat dan tiga requirement berlabel Selesai, Akun lain, serta Uji.

Setelah pembuka, seluruh ucapan User berasal dari pilihan. Setiap giliran menampilkan dua atau tiga respons atau aktivitas yang relevan, tanpa tab atau kategori. Aktivitas langsung menuju narasi tanpa menjadi pesan User. Pertanyaan, instruksi, dan laporan hasil menjadi chat. Pilihan memakai aplikasi muncul pada jeda keputusan, bukan setiap balasan.

User menguji dua akun contoh. Narasi menyebut pelaku dan hasil tanpa portrait atau ekspresi. AI baru mengetahui hasil tes setelah User melaporkannya. Perbaikan pertama mengubah tombol, tetapi aturan setelah pengumpulan belum benar. Tidak ada alur pemulihan akun. Saat memilih jawaban, textbox tersembunyi dan ekspresi User netral. Ekspresi berubah ketika ucapan terpilih ditampilkan.

Pertanyaan, instruksi, dan laporan kepada AI menambah penggunaan. Pembuka dihitung sebagai permintaan pertama. Kepulan berlapis muncul pada ke-6. Ucapan makin tersendat pada ke-7 dan ke-8. Permintaan ke-9 tidak dikerjakan karena AI overheat. Bunyi BZZRRT dan KRRZZT menjadi dramatisasi gangguan, tanpa pemberitahuan sisa prompt, Orgia Mode, atau kerusakan permanen. Pengujian mandiri, narasi, dan keputusan penggunaan tidak dihitung. Ambang sembilan adalah aturan simulasi, bukan batas layanan nyata.

Delapan ending mencakup aturan terbukti, penyimpanan terbukti, hasil ditolak, peringatan disembunyikan, data hilang, halaman hilang, reset nuklir absurd, dan overheat. Setiap alur mempunyai pemicu sendiri. Nuklir hanya unsur cerita, bukan tindakan sungguhan. Tidak ada installer atau penggantian versi. Semua hasil tanpa nilai akademis.

Setelah melanjutkan narasi terakhir, Micro Task langsung membuka pembahasan tanpa panel ending tambahan. Judul menyebut kejadian, misalnya Soal dan jawaban ikut terhapus. Kesalahan, Bukti, Perbaikan, dan Riwayat dibaca bergantian. Pembahasan overheat memakai label Penjelasan. Tidak ada kutipan pilihan terakhir, label Hasil keputusan, atau penumpukan paragraf kesalahan. Ulang mengosongkan kondisi dan penggunaan AI.

## Sistem visual

Menu pause tetap layar penuh dengan wordmark asimetris dan selektor putih/merah. Pilihan hover/fokus membesar 22%. Tulisan TEFA, kendali Enter/Esc kotak, dan komposisi yang telah disetujui dipertahankan.

Delapan tingkat pencahayaan bulan tetap new moon sampai full moon. `calendar.js`, `calendar.css`, `pause-menu.js`, dan `pause-menu.css` tidak diubah pada integrasi ini.

Archivo normal/italic dan Source Sans 3 dimuat lokal, bukan font resmi game. Materi menggunakan komposisi berbeda untuk cerita, asumsi, perbandingan, alur tools, brief, panduan, bukti, dan keputusan. Teks konsep netral. Dialog fiktif mengikuti suara dan kapitalisasi naskah pemateri.

Asal gambar ada di `prototypes/p3r-dialogue/assets/SOURCES.md`. Artwork portrait dipertahankan sebagai berkas asli. Warna hitam diterapkan melalui CSS. Kedua percakapan memakai ruang tengah Iwatodai Dorm **tanpa karakter**, dari render komunitas model **Persona 3: Dancing in Moonlight** oleh ominous-words yang disetujui pengguna. Ini bukan screenshot Reload. Gambar kosong diperiksa langsung, dipotong dari panel bawah sumber, dan disimpan lokal. Tidak ada generasi/inpainting baru. Lapisan gelap ringan menjaga keterbacaan tanpa blur. Tidak ada disclaimer/caption aset dalam adegan.

Perpindahan pembicara menggunakan kemunculan portrait dan nameplate singkat. Textbox bergeser mengikuti pembicara. Micro Task memakai satu portrait pada chat dan tanpa portrait pada narasi. Asap memakai bentuk SVG berlapis dengan tepi lembut yang melebar dan memudar. Reduced-motion menampilkan asap statis. Giliran hening tidak menambah efek gerak.

Dialog, ringkasan dampak, requirement, dan konklusi rata kiri. Spasi kata normal dan kalimat tidak dipaksa rata tengah atau justify. Redaksi aktif tidak memakai titik koma. Istilah aplikasi, pekerjaan, dan aturan pengembangan dipilih sesuai konteks.

## File utama

```text
content.js                           Bab, 37 slide, notes, glossary, task brief
app.js                               Renderer, navigasi, kontrol, penyimpanan
story-slides.js                       Integrasi adegan, snapshot, gerbang konklusi
story-slides.css                      Layout adegan, konklusi, dan fokus manual
prototypes/p3r-dialogue/dialogue-data.js Naskah dan konklusi database
prototypes/p3r-dialogue/exam-scenario.js Kondisi ujian, replay pilihan, sembilan konklusi
prototypes/p3r-dialogue/dialogue-flow.js Jalur graph, validasi riwayat, ringkasan keputusan
prototypes/p3r-dialogue/story.js       Lifecycle percakapan dan simbol emosi
prototypes/p3r-dialogue/index.html     Adegan mandiri serta mode embed
prototypes/p3r-dialogue/styles.css     Siluet, simbol, textbox, responsive
presentation.css                     Bahasa visual materi
case-study.css                       Layout skenario dan pilihan analisis
calendar.js / calendar.css           Transisi bab yang dipertahankan
pause-menu.js / pause-menu.css        Menu yang dipertahankan
```

Renderer kasus lama dan contoh dalam `examples/` tidak dipakai deck aktif. Dokumen rencana serta audit sebelumnya adalah catatan historis.

## Status pengujian revisi ini

**Pengujian diserahkan kepada pengguna sesuai permintaan.** AI tidak menjalankan browser, suite otomatis, pemeriksaan sintaks, atau review subagent untuk revisi ini. Hasil pengujian versi sebelumnya tidak membuktikan integrasi baru sudah berjalan benar.

Untuk mencoba: buka Micro Task dan mulai skenario Ujian Online. Pilih langsung salah satu jawaban dialog. Daftar rute manual ada di `prototypes/p3r-dialogue/README.md`. Shake ringan tetap hanya pada dialog database marah di bab Risiko. Pengujian tetap dilakukan pengguna.
