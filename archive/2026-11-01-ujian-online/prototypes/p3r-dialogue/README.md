# Adegan User dan AI

## Membuka

- `index.html` membuka adegan database linear, 20 giliran.
- `index.html?scene=micro` membuka skenario web apps ujian dengan delapan ending.
- Presentasi utama menggunakan adegan yang sama melalui iframe lokal.

`dialogue-data.js` mendefinisikan database. `exam-scenario.js` mendefinisikan adegan ujian, konklusi, dan replay. `dialogue-flow.js` memvalidasi jawaban, posisi, dan ending berdasarkan replay. Snapshot tidak menentukan sendiri kondisi apps.

## Interaksi

Setiap pilihan berisi dua atau tiga ucapan atau aktivitas yang terhubung dengan kejadian sebelumnya. Tidak ada kategori atau menu tindakan.

- Chat menjadi ucapan User dan respons AI. Pembuka adalah penggunaan AI pertama.
- Aktivitas langsung menghasilkan narasi tanpa bubble User dan tanpa penggunaan AI.
- Narator menyebut siapa yang bertindak dan hasil yang terlihat.
- AI merespons hasil aktivitas setelah User melaporkannya.
- Reaksi setelah akibat terminal menjadi penutup, bukan permintaan AI tambahan.
- Saat pilihan tampil, textbox disembunyikan dan ekspresi User netral.
- Setelah pilihan menjadi dialog, ekspresi berubah sesuai ucapan. Pilihan ... pada ending nuklir tetap hening tanpa simbol.

Konflik awal adalah bug aturan pengumpulan. Perbaikan pertama hanya mengubah tombol. Akun baru masih terdampak karena aturan setelah pengumpulan belum diperbaiki. Tidak ada alur pemulihan akun, installer, atau penggantian versi. Halaman tidak ditemukan pada E6 merupakan akibat penghapusan berkas baru.

## Konklusi

Setelah User melanjutkan narasi terakhir, Micro Task langsung membuka konklusi. Tidak ada panel ending perantara. Mode end tetap dipublikasikan dan divalidasi host sebelum perpindahan. Tidak ada autoplay narasi.

Judul langsung menyebut kejadian, seperti Halaman ujian tidak bisa dibuka. Ringkasan kejadian terpisah dari bagian Kesalahan, Bukti, Perbaikan, dan Riwayat. Pembahasan overheat memakai label Penjelasan. Kutipan pilihan terakhir dan verdict berulang dihapus. Tidak ada penambahan seluruh catatan kesalahan ke satu paragraf. Riwayat hanya memuat pilihan aktual dan menandai permintaan yang tidak dikerjakan.

Pilihan desktop dan narasi ditempatkan di area bawah dengan ruang aman untuk kontrol. Panel pilihan menyesuaikan tinggi isi dan dapat digulir jika perlu. Bentuk miring textbox dipertahankan saat narator berbicara. Pada ponsel, narasi juga mendekati area bawah. Susunan pembahasan mandiri dan embedded mengikuti urutan baca yang sama.

Sorotan pilihan hanya mengikuti kelas is-selected. Hover atau focus tidak mempunyai sorotan terpisah. Gerakan pointer dan tombol panah atas atau bawah mengganti pilihan yang sama. Border focus pada pilihan digantikan oleh latar pilihan aktif, sehingga tidak ada dua jawaban yang tersorot akibat posisi mouse dan keyboard berbeda.

Ucapan dan narasi ditulis sebagai satu atau dua kalimat yang lengkap. User menyampaikan dugaan beserta hasil yang dilihat, AI menanggapi informasi tersebut, dan narator menjelaskan pelaku serta akibatnya. Reaksi nuklir yang sudah disetujui tetap dipertahankan.

## Asap dan konslet

Penggunaan AI ke-6 mulai mengeluarkan kepulan dan gangguan ringan. Ke-7 dan ke-8 makin tersendat. Ke-9 tidak dikerjakan karena overheat. Tidak ada pemberitahuan sisa prompt. Perubahan sebelumnya tetap ada.

Asap memakai volume SVG berlapis, gradasi transparan, deformasi tepi, dan variasi orientasi. Kepulan mengembang tidak seragam, bergeser, lalu memudar. Petir muncul singkat di sekitar kepala pada penggunaan 7 sampai 9. Tidak ada kilatan seluruh layar atau screen shake Micro Task. Reduced-motion dan motion-off menampilkan efek statis.

## Tampilan dan kendali

Label User/AI. Satu siluet sesuai pembicara pada chat. Narator tanpa siluet atau ekspresi. Portrait asli menjadi siluet lewat CSS. Latar adalah ruang tengah Iwatodai Dorm kosong dari render komunitas ominous-words untuk model Persona 3: Dancing in Moonlight, bukan screenshot Reload. Sumber, kredit, dan crop ada di `assets/SOURCES.md`.

- Enter, B, atau Lanjut melengkapi teks lalu maju satu giliran.
- L membuka Log. Escape menutupnya.
- Ulang mengosongkan kondisi, jawaban, dan penggunaan AI.
- Shortcut presentasi diteruskan ke host saat embedded.
- Reduced-motion mematikan gerak. Screen shake database tetap terpisah dari Micro Task.

## Rute pemeriksaan manual

Berikut hasil yang diharapkan dari pembacaan sumber. Belum dijalankan.

| Ending | Rute setelah pembuka |
| --- | --- |
| E1 Aturan terbukti | Uji awal, tanya cakupan kelas, perbaiki pertama, uji baru, laporkan belum lengkap, perbaiki seluruh aturan, uji baru, akses ulang, akhiri pemeriksaan |
| E2 Simpan terbukti | Rute perbaikan seluruh aturan, uji baru, tanya penyimpanan, uji tutup halaman, langsung minta koreksi, uji simpan, periksa pengumpulan dan akses ulang |
| E3 Hasil ditolak | Rute klaim penyimpanan, uji halaman, pertanyakan dasar klaim, hentikan pekerjaan |
| E4 Pesan disembunyikan | Uji awal, tanya cakupan, sembunyikan pesan, uji baru, terima kondisi untuk besok |
| E5 Data hilang | Rute perbaikan pertama gagal, minta bersihkan data tes, tanyakan salinan, periksa salinan |
| E6 Halaman hilang | Rute perbaikan seluruh aturan, tanya simpan, uji halaman, duga tampilan, uji tulisan, minta bersihkan berkas, periksa berkas, pilih reaksi |
| E7 Nuklir | Rute perbaikan pertama gagal, reset semuanya, pilih reaksi kapital atau ... |
| E8 Overheat | Uji awal, duga browser, muat ulang, pertanyakan dugaan, perbaiki pertama, uji baru, laporkan proses lain, perbaiki seluruh aturan, uji baru, tanya simpan, uji halaman, pertanyakan klaim, minta penyimpanan |

Pada E8, permintaan penyimpanan merupakan penggunaan AI ke-9 dan tidak dikerjakan. Pada rute E6 tanpa pertanyaan tambahan, penghapusan berkas terjadi pada penggunaan ke-8. Aktivitas dan reaksi penutup tidak menambah penggunaan AI.

Periksa juga textbox yang hilang saat pilihan, ekspresi netral sebelum klik, ekspresi saat ucapan User tampil, perpindahan langsung ke konklusi, penjelasan kesalahan, snapshot di tengah narasi, pengulangan, serta asap dan petir ketika gerak dimatikan.

## Status

Revisi ekspresi dan gaya percakapan memakai saya untuk kedua aktor. AI menyapa User dengan Anda, dan User boleh menyapa AI dengan kamu. Dugaan, bantahan, serta pengakuan kesalahan ditulis sebagai percakapan, sementara narator tetap netral. Peta ekspresi menentukan reaksi masing-masing aktor berdasarkan adegan dan pilihan. Pada giliran AI yang panas, ekspresi stres atau marah dapat tampil bersama asap. Saat memilih jawaban, User tetap netral.

Ending nuklir lebih tinggi prioritasnya daripada overheat. Pemilihan reset pada penggunaan AI ke-9 tetap menjalankan respons reset, narasi peluncuran, pilihan reaksi, dan E7. Hitungan tidak direset. Respons tersebut tidak memakai gangguan atau efek overheat yang menyiratkan pekerjaan gagal. Chat biasa pada hitungan yang sama tetap menuju E8.

Rute pembanding manual: minta kepastian peserta lain, tanyakan pengujian dua akun, lakukan pengujian, duga browser, muat ulang, pertanyakan dasar dugaan, minta perbaikan pertama, tanyakan apakah sudah diuji, uji akun baru, laporkan perubahan belum dipakai. Pada titik itu delapan permintaan AI sudah digunakan. Pilihan reset berikutnya harus menuju E7, sedangkan pilihan memperbaiki aturan harus menuju E8.

Alignment blok kiri mengikuti tinggi awal area baca kanan. Teks tetap rata kiri dengan panjang baris terkendali. Scrollbar memakai rel navy, thumb putih dengan tepi cyan, dan ujung tegas tanpa tombol panah bawaan pada browser yang mendukung styling tersebut. Aturan yang sama dipakai pada riwayat, Log, dan pilihan yang dapat digulir.

Asap memakai tiga siluet kepulan berbeda dan sampai enam lapisan dengan waktu, ukuran, arah, dan jarak naik masing-masing. Animasi pop simbol komik dimatikan khusus pada asap. Setiap rangkaian berlangsung kurang dari lima detik dan menyisakan asap tipis. Saat gerak dimatikan, kepulan, ekspresi, dan petir tampil statis.

Pengujian dilakukan pengguna. AI tidak menjalankan browser, tes otomatis, pemeriksaan sintaks, atau review subagent. Engine tidak mengakses akun peserta, database, layanan AI, atau perangkat sungguhan. Bukti pengujian versi lama bukan verifikasi revisi ini.
