# Rencana Perubahan Bab 3

**Tujuan:** Siswa memahami cara mengakses bantuan AI pada project, pekerjaan yang dapat dilakukan agent, hubungan aplikasi dengan model, dan batas aksesnya.

**Dasar:** Diskusi pengguna: materi umum, tidak berpusat pada OpenCode; mulai dari pengalaman siswa sebelum istilah; router cukup pengenalan singkat. Contoh tetap sederhana, tidak menyalin project api dan api-gin.

**Pendekatan:** Pertahankan empat slide dan gunakan satu situasi pengikat: siswa membuka project di VS Code dan ingin memperbaiki tombol login. Gunakan renderer yang sudah tersedia; ubah renderer atau CSS hanya jika komposisi baru memerlukannya.

## Batas perubahan

- Hanya Bab 3, deskripsi bab, sumber terkait, dan bagian Bab 3 pada naskah pemateri.
- Tidak mengenalkan spec, review kode, testing, atau otomasi sebagai materi baru.
- Tidak menyajikan agent sebagai komponen sejajar dengan model.
- Tidak mengajarkan Plan/Build sebagai mode universal.
- Tidak membuat daftar nama tools internal.
- Contoh aplikasi boleh menjadi ilustrasi singkat, tetapi penjelasan tidak bergantung satu produk.
- Tidak membuat subagent, commit, atau push.

## Susunan materi

### Slide 13 — Bagaimana memakai AI pada project kita?

Pembuka: “Kamu membuka project di VS Code. Tombol login tidak berfungsi dan kamu ingin meminta bantuan AI.”

Kenalkan dua jalur yang terlihat oleh pengguna:
- Melalui integrasi AI di editor: memberi tugas sambil membuka project.
- Melalui aplikasi di terminal: menjalankan aplikasi dari folder project dan memberi tugas di sana.

VS Code sendiri bukan coding agent. Integrasi atau aplikasi yang digunakan menentukan kemampuan aksesnya. Akhiri dengan penghubung: setelah memilih tempat memberi tugas, apa yang dapat dikerjakan AI?

### Slide 14 — Apa yang dikerjakan coding agent?

Definisi singkat: coding agent memakai model untuk menjalankan langkah pekerjaan pada project.

Gunakan tugas login yang sama: agent dapat membaca file terkait, menjelaskan temuannya, lalu mengubah bagian yang diminta jika diizinkan. Tindakan mengikuti informasi yang ditemukan, bukan urutan wajib untuk semua tugas.

Bandingkan secara singkat dengan percakapan tanpa akses project: pengguna perlu menyediakan kode dan menerapkan perubahan sendiri. Jangan menganggap semua aplikasi chat tidak mendukung berkas atau integrasi.

### Slide 15 — Aplikasi, model, dan router berbeda peran

- Aplikasi: tempat memberi tugas, mengelola akses project, dan melihat hasil.
- Model: mengolah konteks untuk menghasilkan respons atau menentukan tindakan.
- Router: perantara akses ke penyedia model jika digunakan.

Utamakan hubungan aplikasi dengan model. Router menjadi catatan atau cabang opsional, bukan komponen wajib dan bukan pusat slide. Jika memakai diagram, arah permintaan dibaca konsisten; jelaskan bahwa respons kembali melalui jalur yang sama tanpa menumpuk panah berlawanan.

Hubungkan dengan tugas login: aplikasi menyediakan konteks kode, model mengolahnya, aplikasi melaksanakan tindakan yang tersedia sesuai izin. Agent adalah sistem kerja keseluruhannya.

### Slide 16 — Apa yang perlu jelas sebelum agent bekerja?

Gunakan tiga hal konkret:
- Project: folder mana yang sedang dibuka.
- Tugas: bagian login mana yang ingin dipahami atau diperbaiki.
- Izin: hanya membaca dan menjelaskan, atau boleh mengubah kode.

Contoh arahan: “Baca alur tombol login di project ini dan jelaskan penyebabnya. Jangan ubah kode dulu.”

Akhiri dengan jembatan ke Bab 4: agar AI tidak menebak, pengguna perlu menjelaskan kebutuhan dan konteks. Tegaskan singkat bahwa arahan tugas berbeda dari pembatasan akses aplikasi.

## Langkah penerapan

### 1. Materi dan struktur
- [ ] Edit `content.js`: nama Bab 3 menjadi “Menggunakan AI pada Project”, sesuaikan deskripsinya dengan empat slide di atas.
- [ ] Ganti isi empat slide Bab 3, pertahankan jumlah slide dan urutan bab. Pertahankan ID jika memungkinkan agar navigasi tersimpan tetap kompatibel.
- [ ] Pilih komponen yang sesuai isi: perbandingan untuk jalur penggunaan, contoh tugas untuk agent, diagram ringkas untuk hubungan aplikasi–model, dan ringkasan untuk project–tugas–izin.
- [ ] Pastikan sumber mendukung klaim yang ditampilkan; sumber router hanya untuk slide yang menjelaskannya.

### 2. Tampilan dan naskah
- [ ] Sesuaikan `app.js` dan `presentation.css` hanya jika renderer yang tersedia tidak dapat menyampaikan hubungan dengan jelas. Selector perubahan harus khusus Bab 3 atau slide terkait.
- [ ] Sinkronkan judul, contoh login, penjelasan transisi, serta batas istilah pada `Naskah-Pemateri-AI-Assisted-Development-TEFA.md` bagian Bab 3.
- [ ] Pertahankan judul di atas dan isi utama terpusat vertikal. Hindari panel tinggi tetap untuk teks singkat.

### 3. Pemeriksaan terarah
- [ ] Jalankan `node --check content.js` dan `node --check app.js` jika renderer diubah.
- [ ] Baca empat slide sebagai pemateri: setiap transisi menjawab pertanyaan yang muncul pada slide sebelumnya.
- [ ] Baca sebagai siswa: jelas aplikasi apa yang dibuka, apa yang dilakukan agent, model berperan apa, dan izin apa yang diberikan.
- [ ] Periksa empat slide pada 1366×768 dan 1920×1080: tidak ada teks terpotong, overflow, atau ruang kosong panel yang berlebihan.
- [ ] Periksa 390×844: tidak ada overflow horizontal; isi panjang boleh digulir vertikal.
- [ ] Periksa navigasi Slide 12 → 13 → 16 → 17, sumber tiap slide, serta kontrol yang dipakai komponen baru. Pastikan tidak ada error JavaScript.

## Kriteria selesai

Siswa dapat menjawab: “Saya memberi tugas lewat aplikasi di editor atau terminal. Coding agent memakai model untuk membantu mengerjakan project sesuai izin. Router hanya perantara akses model jika digunakan.” Materi tidak mengharuskan pemateri menambah definisi penghubung yang hilang.
