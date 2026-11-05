# Aturan Kerja Minimal

## Utamakan perubahan yang diminta

- Kerjakan hanya bagian yang berkaitan langsung dengan permintaan pengguna.
- Untuk permintaan yang jelas, langsung lakukan perubahan tanpa brainstorming, rencana tertulis, atau pertanyaan persetujuan tambahan.
- Jika pengguna meminta diskusi atau brainstorming, bahas gagasan terlebih dahulu. Jangan mengubah berkas sebelum diminta menerapkannya.
- Jangan membuat subagent, worktree, commit, atau push tanpa permintaan pengguna.

## Batasi pembacaan dan pencarian

- Mulai dari berkas, komponen, selector, atau fungsi yang disebut pengguna atau sudah diketahui dari percakapan.
- Baca bagian yang relevan dengan rentang secukupnya. Jangan membaca ulang seluruh berkas jika konteksnya sudah tersedia.
- Jangan memindai seluruh proyek secara rutin. Hindari pencarian rekursif jika lokasi yang dibutuhkan sudah diketahui.
- Jangan membaca arsip, aset, hasil pengujian lama, atau dokumentasi historis kecuali diperlukan untuk tugas tersebut.
- Perluas pencarian hanya jika lokasi belum ditemukan, ada hubungan lintas berkas, atau ditemukan masalah yang memerlukan penelusuran tambahan.
- Jangan memuat ulang skill yang sudah tersedia dalam percakapan. Gunakan hanya panduan yang benar-benar diperlukan.

## Sesuaikan pemeriksaan dengan dampak perubahan

- Perubahan ukuran huruf, warna, jarak, border, atau teks cukup diperiksa pada komponen dan keadaan yang terdampak.
- Untuk perubahan visual, periksa tampilan yang relevan. Tambahkan ukuran layar lain hanya jika perubahan dapat memengaruhi tata letak responsif.
- Jangan membuat tes baru yang hanya mencocokkan nilai CSS atau redaksi untuk perubahan kecil dan mudah dibatalkan.
- Perubahan perilaku cukup diperiksa melalui alur yang berubah dan hubungan terdekatnya.
- Jangan menjalankan seluruh tes, membuka seluruh slide, atau menguji semua ending untuk perubahan lokal.
- Perluas atau ulangi pengujian hanya jika ada dampak bersama, kegagalan, perubahan baru, atau permintaan pengguna.
- Jangan mengklaim pemeriksaan telah dilakukan jika belum dijalankan.

## Hindari pekerjaan tambahan

- Jangan memperbarui README, DESIGN, catatan rencana, PDF, atau dokumen lain untuk setiap revisi kecil.
- Perbarui dokumentasi hanya jika diminta atau perubahan membuat petunjuk penggunaan aktif menjadi keliru. Batasi pembaruan pada bagian yang diperlukan.
- Jangan membuat rencana, laporan, ledger, atau berkas serah terima untuk tugas kecil kecuali diminta.
- Gunakan daftar tugas hanya jika pekerjaan memang terdiri dari beberapa langkah penting.
- Jangan mengubah konfigurasi OpenCode atau aturan global sebagai bagian dari pekerjaan aplikasi tanpa permintaan pengguna.

## Komunikasi

- Gunakan bahasa Indonesia yang singkat dan jelas.
- Laporkan perubahan utama dan pemeriksaan yang relevan saja.
- Jangan menyalin log panjang, seluruh isi berkas, atau daftar pemeriksaan yang tidak membantu pengguna.

## Prioritas aturan

Instruksi langsung pengguna dan aturan proyek ini mengesampingkan alur kerja default skill. Pengguna secara eksplisit meminta proses minimal untuk menghemat token. Jangan menambahkan proses yang tidak diperlukan hanya karena menjadi kebiasaan atau tercantum dalam panduan umum. Instruksi sistem dan developer tetap berlaku.
