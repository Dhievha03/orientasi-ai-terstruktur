# Naskah Pemateri: AI-Assisted Development

Pegangan mengajar untuk **43 slide, 8 bab, sekitar 150 menit**. Materi menggunakan aplikasi pendaftaran ekstrakurikuler sebagai contoh berulang. Cerita penghapusan database menjadi kasus terpisah untuk membahas asumsi dan tindakan berisiko.

Paragraf biasa adalah contoh ucapan pemateri. Bagian miring merupakan arahan penggunaan presentasi. Sesuaikan ucapan dengan kelas, tanpa perlu membacakan setiap kalimat. Catatan pemateri di aplikasi memuat rincian teknis dan sumber tambahan.

Tidak ada AI live, database sungguhan, atau publikasi aplikasi. Gunakan data contoh. Angka poin bantuan dan overheat adalah aturan cerita, bukan perhitungan token layanan AI.

| Bab | Slide | Alokasi |
| --- | --- | --- |
| AI-Assisted Development | 01–06 | 18 menit |
| Asumsi, tindakan, dan risiko | 07–12 | 25 menit |
| Memilih tools AI | 13–17 | 18 menit |
| Konteks, rencana, dan standar hasil | 18–22 | 20 menit |
| Prompt, rules, skill, dan izin | 23–27 | 18 menit |
| Micro task dan feedback loop | 28–35 | 25 menit |
| Review dan verifikasi perubahan | 36–40 | 16 menit |
| Efisiensi dan kesimpulan | 41–43 | 10 menit |

## Bab 1: AI-Assisted Development

### Slide 01: AI-Assisted Development

Kalian mungkin sudah pernah meminta AI membuat fungsi, menjelaskan error, atau merapikan tampilan. Bantuan itu bisa dipakai dalam banyak bagian pengembangan aplikasi. Kali ini, kita membahas cara menilai hasilnya sebelum dipakai orang lain.

Kalau AI sudah bisa membuat kode, lalu apa tugas developer? Untuk membahasnya, kita pakai satu tugas yang dekat dengan kegiatan sekolah: membuat formulir pendaftaran ekstrakurikuler.

*Beri kesempatan siswa memikirkan pertanyaan pembuka. Tidak perlu langsung menyampaikan seluruh kesimpulan.*

### Slide 02: AI membantu bagian apa dalam pengembangan aplikasi?

Saat membuat aplikasi, pekerjaan developer tidak hanya menulis kode. Kita perlu memahami kebutuhan, membuat fitur, mencari penyebab masalah, dan mencoba hasilnya. AI bisa membantu pekerjaan tersebut.

Misalnya, sekolah memerlukan formulir pendaftaran ekstrakurikuler. AI dapat membantu menyusun isian, membuat formulir, menelusuri pesan yang salah, dan menyiapkan contoh data untuk tes.

*Ikuti empat pekerjaan pada tabel. Jelaskan debugging sebagai mencari penyebab masalah dan testing sebagai mencoba hasilnya.*

Namun, bantuan bukan berarti hasilnya otomatis sesuai. Isian yang disarankan perlu dicocokkan dengan kebutuhan sekolah. Kode yang dibuat perlu dipahami. Tes yang disiapkan juga perlu dijalankan dan diperiksa hasilnya.

### Slide 03: Kapan hasil dari AI bisa dianggap selesai?

Bayangkan AI sudah membuat formulir tadi. Halamannya bisa dibuka, tombol Daftar bisa ditekan, dan pesan “Berhasil” muncul. Tetapi saat daftar pendaftar diperiksa, nama siswa tidak ada.

Tabel ini memisahkan yang sudah terlihat dari yang masih perlu diperiksa. Formulir yang tampil belum membuktikan isiannya lengkap. Tombol yang bisa diklik belum membuktikan data diterima. Pesan berhasil juga bisa salah.

Developer perlu memeriksa apakah aplikasi bekerja sesuai kebutuhan. Detail penyebab masalah ini akan kita telusuri nanti. Sekarang, kita bandingkan dua cara bekerja dengan bantuan AI.

### Slide 04: Vibe Coding dan AI-Assisted Development

*Ikuti tabel dari atas ke bawah. Kedua kolom membahas pembuatan formulir yang sama.*

Kolom Vibe Coding menggambarkan contoh cara mencoba ide. Kita meminta formulir, menjalankannya, lalu meminta perubahan dari hasil yang terlihat. Cara ini berguna untuk membuat percobaan awal dengan data contoh.

Kolom terstruktur menunjukkan langkah yang dikelola dengan jelas. Kita menentukan kebutuhan, menyebut batas tugas, memahami kode, menelusuri penyebab masalah, lalu memeriksa perubahan. Testing juga mencakup pendaftaran yang diterima dan ditolak.

Tanggung jawab pada baris terakhir tetap sama: developer. Tabel ini membandingkan dua contoh cara kerja, bukan menyebut semua orang yang memakai istilah Vibe Coding selalu bekerja seperti kolom kiri.

### Slide 05: Kode dari AI, tanggung jawab developer

AI dapat membantu membaca kode, menyusun rencana, membuat perubahan, dan menjalankan tes jika tools serta izinnya tersedia. Developer menentukan kebutuhan dan menilai apakah hasil bantuan itu sudah sesuai.

Misalnya, pesan error hilang setelah validasi NIS dihapus. Kita perlu tahu apakah perbaikannya benar atau justru membuat data salah diterima. Menyebut bahwa kode dibuat AI belum menjawab pertanyaan itu.

### Slide 06: Apa dasar menerima hasil AI?

*Buka Kebutuhan, Perubahan, lalu Bukti.*

Kebutuhan menjelaskan hasil yang diminta. Perubahan menunjukkan apa yang benar-benar dibuat. Bukti menunjukkan hasil pemeriksaan yang sudah dijalankan. Ketiganya perlu cocok.

Frontend adalah bagian yang dilihat dan digunakan peserta. Backend memproses permintaan dan memeriksa data. Handler adalah fungsi yang menangani kejadian, misalnya saat formulir dikirim. Kita akan memakai istilah ini untuk menelusuri mengapa pesan halaman bisa berbeda dari hasil pendaftaran.

Berikutnya, kita melihat kasus terpisah ketika tindakan dijalankan berdasarkan asumsi.

## Bab 2: Asumsi, tindakan, dan risiko

### Slide 07: Skenario: membersihkan database aplikasi

Ada website yang memiliki database testing dan production. Developer ingin membersihkan database yang sudah tidak diperlukan, lalu meminta bantuan AI yang punya akses tools.

Perhatikan apakah keduanya memahami target dan batas tindakannya dengan cara yang sama. Ini cerita fiktif. Presentasi tidak mengakses atau menghapus database sungguhan.

*Tekan Mulai. Pembahasan target, instance, dan backup dilakukan setelah dialog.*

### Slide 08: Adegan User dan AI: hapus database

*Jalankan seluruh 20 giliran secara manual. Enter atau B melengkapi teks lalu melanjutkan. L membuka Riwayat. Biarkan bagian hening di akhir tetap berjalan.*

Permintaan awal belum menjelaskan target. AI lalu memilih target dan menjalankan tindakan tanpa memastikan maksudnya. Itu dua masalah yang perlu dibedakan. Instruksi yang kurang jelas tidak membenarkan tindakan apa pun.

*Dialog dibuat berlebihan untuk cerita. Jangan menyimpulkan AI sungguhan selalu membentak, selalu menurut, atau tidak pernah bertanya.*

### Slide 09: Instruksi dan tindakan

*Buka Akibat, Alasan, lalu Prinsip.*

Website tidak dapat diakses adalah pengamatan dalam cerita. Memilih production tanpa dasar adalah asumsi. Sebelum penghapusan, kita memerlukan pemeriksaan target, pemakaiannya, dampak, dan cadangan yang bisa dipulihkan.

Menulis “jangan hapus production” memberi arahan. Menggunakan akun yang tidak memiliki hak menghapus production membatasi tindakan melalui sistem. Kedua lapisan ini berbeda.

Perilaku backup bergantung pada layanan dan pengaturannya. Cerita ini bukan dokumentasi bahwa semua cadangan ikut terhapus saat instance dihapus.

### Slide 10: Dugaan penyebab langsung disetujui

Kita kembali ke pendaftaran ekstrakurikuler. User melihat pesan berhasil, tetapi namanya tidak ada di daftar. Ia menduga API rusak, dan AI langsung setuju.

API adalah antarmuka yang dipakai frontend untuk mengirim pendaftaran ke backend. Kita belum tahu API-nya rusak. Yang diketahui baru perbedaan antara pesan dan daftar. Respons serta handler perlu diperiksa sebelum memilih perubahan.

### Slide 11: Tiga kesalahan respons yang perlu dibedakan

*Buka Sycophancy, Halusinasi, lalu Klaim selesai.*

Sycophancy berarti terlalu menyetujui pengguna tanpa dasar yang cukup. Halusinasi berarti informasi keliru atau tidak didukung fakta. Contohnya, AI mengatakan respons 422 otomatis menghentikan kode frontend.

Klaim selesai berbeda lagi. Satu pendaftaran diterima belum membuktikan bahwa penolakan sudah ditampilkan dengan benar. Minta kondisi yang dicoba dan hasilnya. Nada yakin atau persetujuan AI tidak menambah bukti.

### Slide 12: Batasi informasi dan akses agent

*Buka ketiga bagian. Contoh prompt injection dibahas sebagai teks berbahaya, bukan instruksi untuk dijalankan.*

Dokumen yang dibaca agent bisa berisi perintah tersisip, misalnya meminta isi `.env` dikirim keluar. Itu upaya mengalihkan tugas, yang disebut prompt injection. Isi dokumen tidak otomatis menjadi izin dari developer.

Untuk memeriksa handler, gunakan data contoh dan samarkan identitas pada log. Password serta API key juga harus dijaga. Perbaikan pesan tidak membutuhkan akses menghapus data production. Arahan tertulis membantu, tetapi akses tetap perlu dibatasi oleh lingkungan.

## Bab 3: Memilih tools AI

### Slide 13: Model, aplikasi, dan tools berbeda peran

Aplikasi adalah tempat kita berinteraksi dan mengelola pekerjaan. Model menghasilkan respons dari masukan yang diterimanya. Tool melakukan tindakan tertentu, misalnya membaca berkas atau menjalankan tes.

Model yang sama di dua aplikasi belum tentu memiliki kemampuan kerja yang sama. Salah satunya mungkin hanya menerima teks, sedangkan yang lain terhubung dengan berkas dan browser. Nama model saja belum menjelaskan apa yang bisa diperiksa.

### Slide 14: Pilih alat AI sesuai pekerjaan

*Buka Chat, Editor, lalu Agent.*

Untuk memahami respons 422, chat dengan konteks yang relevan bisa cukup. Untuk meninjau saran pada satu fungsi, bantuan di editor dapat memudahkan perbandingan. Untuk menelusuri alur, mengubah kode, dan menjalankan pemeriksaan, agent dengan tools yang sesuai dapat membantu.

Pembagian ini tidak kaku. Agent juga bisa berada di editor atau browser. Pilih kemampuan yang diperlukan, lalu pertimbangkan akses, data, waktu, dan biayanya.

### Slide 15: Cara coding agent bekerja

Coding agent memakai model dan tools dalam siklus pekerjaan. Agent membaca konteks, mengusulkan langkah, lalu aplikasi menjalankan tool sesuai izin. Hasil tool menjadi masukan untuk langkah berikutnya.

Contohnya, agent membaca handler, menemukan kondisi pesan yang salah, mengedit bagian itu, lalu mencoba formulir. Jika gagal, hasil tes perlu dibaca sebelum meminta perubahan baru. Jika browser tidak tersedia, agent tidak boleh mengaku sudah mencoba formulir.

### Slide 16: Alur koneksi ke model

*Ikuti diagram OpenCode, 9router, dan penyedia model.*

Ini salah satu contoh susunan koneksi. Aplikasi mengelola konteks dan tools. Jika memakai router, permintaan melewati perantara sebelum sampai ke penyedia model.

Router bersifat opsional. Memakai router yang sama tidak otomatis membuat aplikasi berbagi rules, skill, izin, atau percakapan. Kemampuan agent tetap bergantung pada aplikasi dan lingkungan yang mengelolanya.

### Slide 17: MCP dan router berbeda fungsi

*Bandingkan baris Fungsi, Contoh, dan Batasnya.*

MCP, singkatan dari Model Context Protocol, adalah standar untuk menghubungkan aplikasi AI dengan tools atau sumber informasi. Contohnya membaca laporan masalah pendaftaran dari layanan yang sudah dihubungkan.

Router meneruskan permintaan ke penyedia model. Router tidak otomatis menyediakan kemampuan agent, rules, atau skill. Membaca berkas lokal juga tidak harus memakai MCP. Pilih koneksi yang diperlukan, lalu batasi izinnya. Kita tidak memasang server MCP dalam sesi ini.

## Bab 4: Konteks, rencana, dan standar hasil

### Slide 18: Konteks apa yang dibutuhkan untuk tugas ini?

Konteks adalah informasi yang diperlukan untuk memahami tugas. Untuk memperbaiki pendaftaran, kita perlu tahu isian yang dibutuhkan, alur submit, bentuk respons, dan contoh masalahnya.

NIS abc menghasilkan respons 422 dan `success: false`, tetapi halaman mengatakan berhasil. Informasi itu lebih membantu daripada sekadar “formnya error”. Jangan menambah aturan kuota atau NIS duplikat jika kebutuhannya belum ditetapkan.

### Slide 19: Rencanakan sebelum mengubah kode

*Ikuti enam tahap sesuai nomor.*

Mulai dari kebutuhan: peserta harus tahu apakah pendaftarannya diterima. Lalu telusuri respons dan handler. Dari temuan itu, buat rencana perubahan dan tentukan cara memeriksanya.

Implementasi berarti membuat perubahan kode. Testing membandingkan hasil aktual dengan yang diharapkan. Setelah itu, developer mengambil keputusan menerima, mengoreksi, atau menunda hasil.

Rencana boleh diperbarui jika ada temuan baru. Daftar rencana belum menjadi bukti tes lulus. Perubahan kecil cukup memakai rencana singkat yang jelas.

### Slide 20: Banyak konteks belum tentu relevan

*Buka Relevansi, Kebaruan, lalu Ketidakpastian.*

Mulai dari berkas yang berhubungan dengan pesan pendaftaran. Jika ditemukan hubungan lain, perluas penelusurannya. Membaca seluruh aplikasi belum tentu diperlukan.

Gunakan kode dan hasil percobaan terbaru. Screenshot sebelum perubahan belum memeriksa hasil sesudahnya. Bedakan juga pengamatan dengan dugaan: pesan berhasil adalah yang terlihat, sedangkan API rusak masih perlu dibuktikan.

### Slide 21: Prompt: tujuan, konteks, dan hasil

*Buka ketiga bagian, lalu Instruksi lengkap. Contoh lengkap merupakan brief beberapa tugas yang dikerjakan bertahap.*

“Perbaiki formnya” belum menjelaskan masalah. Instruksi yang lebih membantu menyebut input, respons yang muncul, hasil yang diharapkan, serta bagian yang harus dipertahankan.

Misalnya, perbaiki pesan saat backend menolak, tetapi pertahankan empat isian dan validasi. Lalu sebutkan bahwa data valid serta tidak valid perlu dicoba. Prompt tidak harus panjang. Yang penting, tugas dan ukuran selesainya jelas.

### Slide 22: Acceptance criteria: tanda hasil sudah sesuai

Acceptance criteria adalah syarat hasil yang bisa diperiksa. Pada contoh ini, data salah ditolak dengan pesan yang membantu. Data valid diterima dan masuk daftar. Formulir baru dikosongkan setelah pendaftaran diterima.

Bedakan tiga hal: syaratnya, langkah mencoba, dan hasil aktual. “Isian tetap ada saat ditolak” adalah syarat. Mengisi NIS abc lalu menekan Daftar adalah langkah tes. Keadaan yang benar-benar terlihat setelahnya menjadi bukti.

## Bab 5: Prompt, rules, skill, dan izin

### Slide 23: Prompt, rules, dan skill saling melengkapi

Untuk pekerjaan yang sama, prompt meminta perbaikan pesan. Rules menetapkan batas, misalnya mempertahankan validasi backend. Skill menyediakan prosedur yang dapat digunakan lagi, misalnya cara debugging.

Ketiganya dapat berbentuk teks, tetapi fungsinya berbeda. Sebagian aplikasi mendukung berkas seperti `AGENTS.md` dan `SKILL.md`. Cara memuatnya mengikuti aplikasi. Nama berkas belum membuktikan panduan sudah dibaca atau dilaksanakan.

### Slide 24: Panduan tertulis dan izin sistem berbeda

*Bandingkan tujuan, contoh, dan cara kerjanya pada tabel.*

Kalimat “jangan ubah validasi backend” memberi arahan kepada model. Jika lingkungan hanya mengizinkan edit frontend, sistem dapat menolak perubahan berkas di luar izin itu. Arahan tertulis dan pembatasan tindakan bekerja pada lapisan berbeda.

Permission boundaries berarti batas akses dari lingkungan. Memuat skill debugging tidak otomatis memberi izin tambahan. Pembatasan juga perlu mencakup jalur akses yang tersedia, karena memblokir satu tool belum tentu menutup semua cara melakukan tindakan yang sama.

### Slide 25: Rules: aturan yang jelas dan sesuai cakupan

*Buka Penulisan, Cakupan, lalu Konflik.*

“Kerjakan dengan benar” sulit diperiksa. “Pertahankan validasi dan coba data valid serta tidak valid” memberi tindakan yang lebih jelas.

Aturan penamaan bisa berlaku untuk seluruh aplikasi. Larangan mengubah desain bisa khusus untuk tugas sekarang. Jika diminta menghapus validasi padahal NIS masih wajib angka, jelaskan pertentangannya sebelum bertindak. Instruksi terbaru tidak otomatis mengalahkan semua ketentuan lain.

### Slide 26: Gunakan skill untuk prosedur berulang

*Buka Penggunaan, Prosedur, lalu Hasil.*

Skill debugging dapat mengarahkan kita mengulangi masalah, memeriksa respons, membaca handler, melakukan koreksi, lalu menguji ulang. Masalah lain dapat memakai prosedur serupa dengan kode dan bukti berbeda.

Skill menjelaskan cara bekerja. Tool menjalankan tindakan. MCP menyediakan salah satu cara koneksi. Memakai skill tidak melatih ulang model atau menjamin hasil. Tetap periksa langkah yang benar-benar dijalankan dan laporkan jika ada hambatan.

### Slide 27: Catat keputusan sebelum berpindah sesi

Contoh catatan ini menyebut tiga hal: keputusan yang berlaku, pekerjaan beserta tes yang sudah dilakukan, dan tugas yang masih tersisa. Dengan begitu, sesi berikutnya tidak perlu menebak keadaan terakhir.

Kalau pesan sudah diperbaiki tetapi data valid belum dicoba ulang, catat keduanya. Jangan merangkum menjadi “form sudah selesai”. Ringkasan membantu membawa konteks, tetapi tidak menjamin semua detail percakapan tersedia. Contoh pada slide bukan laporan tes sungguhan.

## Bab 6: Micro task dan feedback loop

### Slide 28: Pendaftaran Ekstrakurikuler

*Baca kebutuhan sebelum menekan Mulai. Gunakan satu jalur utama dan beberapa pilihan pembanding sesuai waktu.*

Sekarang kita mencoba kasus yang dibahas sejak pembuka. Pendaftaran dibuka besok. Nama, NIS, kelas, dan pilihan kegiatan masih dibutuhkan. Peserta harus menerima informasi yang sesuai hasil pendaftaran.

Kita bisa melihat percakapan AI, kode, serta Apps. Gunakan ketiganya untuk menilai keadaan aplikasi. Membuka tampilan saja belum sama dengan memeriksa seluruh isinya.

### Slide 29: Pendaftaran ditolak, tetapi halaman menampilkan berhasil

*AI/Kode/Apps dapat dibuka lewat tombol atau angka 1/2/3. Shortcut angka tidak aktif saat mengetik. Enter atau B melanjutkan percakapan secara manual.*

Saat formulir tersedia, coba data salah dengan isian lain valid. Bandingkan respons, pesan halaman, dan keadaan isian. Penolakan data salah bukan bug. Bug-nya ada jika halaman mengatakan berhasil atau menghilangkan informasi yang masih dibutuhkan.

*Tandai kode terkait dan pilih Bahas kode ini. Baca penjelasan sebelum meminta koreksi. Pembahasan kelambatan dibuka melalui kode helper, bukan tombol pada Apps.*

Setelah perubahan, ulangi percobaan. Coba juga data valid dan periksa daftar pendaftaran. Pilihan deploy hanya memilih akibat dalam cerita. Healthbar dan batas bantuan bukan perhitungan token layanan sungguhan.

### Slide 30: Hasil pendaftaran

*Bahas ending yang benar-benar tercapai. Buka tab Bukti dan Riwayat. Jangan membacakan semua ending seolah semuanya terjadi.*

Keadaan kode dan percobaan yang dilakukan adalah dua hal berbeda. Good ending mengikuti keadaan aplikasi dalam cerita. Tab Bukti tetap menunjukkan apakah data diterima dan ditolak sudah dicoba pada kode terakhir.

Jika hasil masih bermasalah, fokus pada yang belum benar. Jika fungsi sudah benar tetapi masih lambat, catat optimasi sebagai tindak lanjut. Jika AI berhenti sebelum mengerjakan permintaan, jangan menganggap permintaan itu sudah selesai.

### Slide 31: Empat arti “berhasil” yang berbeda

Mendapat respons tidak berarti pendaftaran diterima. Responsnya masih bisa 422 dengan `success: false`. Pada contoh ini, data yang diterima menghasilkan HTTP 200, `success: true`, dan masuk daftar.

Tes juga punya arti berhasil sendiri. Jika tes mengharapkan NIS abc ditolak dengan pesan sesuai, penolakan yang benar berarti tes lulus. Tetapi satu tes lulus belum memeriksa seluruh fitur. Sebutkan kondisi yang diperiksa dan batasnya.

### Slide 32: Satu micro task, hasil yang dapat diperiksa

“Selesaikan seluruh aplikasi” memuat terlalu banyak hasil sekaligus. “Perbaiki penentuan pesan agar sesuai respons” lebih mudah dipahami, ditinjau, dan dicoba.

Micro task tidak ditentukan oleh jumlah baris. Satu baris bisa mengubah aturan penting. Beberapa berkas juga bisa menjadi satu tugas jika hubungannya jelas dan hasilnya bisa diperiksa. Tugas lain, seperti pesan per isian dan reset, tetap perlu dikerjakan serta diuji.

### Slide 33: Kerjakan tugas sesuai urutannya

*Buka Respons, Pesan kesalahan, lalu Isian.*

Pahami dulu bagaimana backend menyatakan diterima atau ditolak. Setelah itu, hubungkan rincian `errors` dengan isian yang sesuai. Lalu pastikan reset hanya berjalan setelah pendaftaran diterima.

Ada tugas yang menjadi dasar tugas berikutnya. Itulah hubungan dependensi antartugas. Setelah perbaikan digabungkan, coba lagi alur lengkap. Membagi tugas tidak menghilangkan kemungkinan masalah saat bagian-bagiannya bekerja bersama.

### Slide 34: Temuan lain tidak otomatis menjadi tugas

AI mengusulkan pembersihan data dan berkas ketika kita meminta perbaikan pesan. Kita perlu tahu apakah tindakan itu berhubungan dengan penyebab masalah. Menghapus data belum tentu mengubah kondisi pesan di frontend.

*Buka pembahasan.*

Jika tambahan tidak diperlukan, catat sebagai pekerjaan berikutnya. Jika diperlukan, jelaskan hubungan, dampak, dan perubahan batas tugas. Membatasi pekerjaan membantu kita tetap memahami perubahan yang dilakukan.

### Slide 35: Koreksi menyebut kondisi dan hasil

Bandingkan “masih salah” dengan penjelasan yang menyebut NIS abc, respons 422, serta pesan berhasil yang tetap muncul. Penjelasan kedua memberi kondisi yang bisa diulangi dan hasil yang bisa dibandingkan.

*Buka pembahasan.*

Urutannya: apa yang dicoba, apa yang muncul, apa yang seharusnya terjadi, bagian mana yang ditelusuri, apa koreksinya, lalu bagaimana hasil tes ulangnya. Inilah feedback loop. Mengirim koreksi belum membuktikan perbaikan berhasil.

## Bab 7: Review dan verifikasi perubahan

### Slide 36: Ketahui keadaan kode sebelum AI bekerja

*Buka Keadaan awal, Yang sudah benar, lalu Batas tugas.*

Catat contoh masalah sebelum perubahan. Catat juga yang sudah benar, misalnya backend masih menolak NIS bukan angka dan empat isian tersedia. Lindungi pekerjaan lain yang belum selesai.

Dengan pembanding itu, kita lebih mudah melihat apakah perbaikan menyelesaikan masalah atau merusak perilaku lain. Perilaku yang sebelumnya benar lalu rusak disebut regresi. Review kode dan testing membantu menemukannya dari sisi berbeda.

### Slide 37: Baca diff, bukan hanya jawaban AI

*Buka Berkas, Logika, lalu Penjelasan.*

Diff adalah perbandingan dua keadaan kode. Tanda plus menunjukkan tambahan, dan minus menunjukkan penghapusan. Tanda tersebut belum berarti benar atau salah. Kita perlu memahami dampaknya.

Mulai dari berkas yang berubah, lalu baca logika dan kode di sekitarnya. Cocokkan dengan penjelasan AI. Jika katanya hanya memperbaiki pesan, mengapa validasi atau desain juga berubah? Pertanyaan itu membantu menemukan perubahan yang perlu dinilai lebih jauh.

### Slide 38: Error hilang, validasi ikut hilang

Pada ilustrasi ini, frontend mulai memeriksa respons, tetapi pemeriksaan NIS di backend ikut dihapus. Klaim “pendaftaran sekarang berhasil” menyembunyikan perubahan yang tidak sesuai kebutuhan.

*Buka keputusan. Potongan diff adalah ilustrasi ringkas, bukan patch yang mengubah simulasi.*

Pulihkan aturan yang masih diperlukan dan periksa perbaikan pesannya. Tes data valid saja dapat melewatkan hilangnya validasi. Coba juga NIS abc agar kita tahu penolakannya masih berjalan dengan benar.

### Slide 39: Build berhasil dan fungsi teruji berbeda bukti

*Buka Build, Testing, lalu Pemulihan.*

Build menyiapkan keluaran aplikasi sesuai pengaturannya. Sebagian proyek juga menjalankan pemeriksaan lain saat build. Namun, kita tetap perlu tahu cakupannya. Aplikasi statis ini sendiri tidak memiliki langkah build.

Coba perilaku pendaftaran pada kode terakhir. Jika perubahan merusak fitur, hentikan edit lanjutan dan telusuri bagian penyebabnya. Mengembalikan kode tidak otomatis memulihkan data yang terhapus. Data memerlukan cadangan atau cara pemulihan tersendiri.

### Slide 40: Terima, koreksi, atau tunda hasil

*Buka Terima, Koreksi, lalu Tunda.*

Terima jika perubahan bisa dijelaskan dan buktinya memenuhi kriteria. Koreksi jika ada bagian yang melenceng, sambil menjaga yang sudah benar. Tunda jika pemeriksaan penting belum tersedia.

Tindakan berhenti untuk review juga bagian dari pekerjaan developer. Kita tidak harus terus meminta edit ketika belum memahami keadaan terakhir. Keputusan perlu mengikuti kebutuhan dan hasil pemeriksaan, bukan kata “selesai” dari AI.

## Bab 8: Efisiensi dan kesimpulan

### Slide 41: Gunakan bantuan AI sesuai kebutuhan

*Buka Ukuran tugas, Konteks, lalu Bantuan.*

Efisien berarti memakai waktu, biaya, dan usaha sesuai kebutuhan. Untuk satu label, mulailah dari komponen terkait. Untuk hasil pendaftaran, telusuri alur dan coba kondisi yang terpengaruh.

Konteks berlebihan, tools yang tidak diperlukan, dan perubahan di luar tugas dapat menambah pekerjaan. Jawaban singkat juga belum tentu memakai sedikit token. Tetap jaga kualitas tes, lalu berhenti mengedit ketika hasil sudah cukup diperiksa dan siap ditinjau.

### Slide 42: Build berhasil. Apakah sudah selesai?

*Bacakan kasus dan beri kesempatan siswa menjawab sebelum membuka pembahasan. Build pada kasus ini adalah laporan hipotetis dari proyek yang memiliki proses build.*

AI mengatakan pesan berhasil palsu sudah diperbaiki dan build berhasil. Tetapi NIS abc yang sebelumnya memunculkan masalah belum dicoba ulang. Apakah buktinya cukup?

*Buka pembahasan.*

Belum. Ulangi kondisi gagal, periksa pesan serta isian, lalu coba data valid dan daftar pendaftaran. Putuskan setelah hasilnya sesuai. Kita tidak perlu meminta seluruh aplikasi dibuat ulang.

### Slide 43: Tanggung jawab developer atas kode hasil AI

Kembali ke pertanyaan awal: kalau AI bisa membuat kode, apa tugas developer? Memahami kebutuhan, mengarahkan pekerjaan, meninjau perubahan, memeriksa hasil, dan bertanggung jawab atas keputusan penggunaannya.

Ingat formulir pada pembuka: pesan “Berhasil” belum membuktikan siswa terdaftar. Saat membuat fitur berikutnya, tentukan hasil yang benar, baca perubahannya, lalu coba sebelum menyatakan selesai.

*Akhiri pada pesan tanggung jawab developer. Tidak perlu membuka topik baru.*

## Rujukan untuk pemateri

Halaman berikut mendukung penjelasan materi. Untuk kursus, yang ditinjau adalah halaman ringkasan publik, bukan seluruh video pelajarannya. Contoh formulir dan ilustrasi diff merupakan contoh pembelajaran, bukan temuan dari sumber tersebut.

| Sumber | Penggunaan |
| --- | --- |
| [Microsoft Learn](https://learn.microsoft.com/en-us/training/paths/accelerate-app-development-using-github-copilot/) | Cakupan bantuan AI: analisis, dokumentasi, pengembangan, testing, dan perbaikan kode. |
| [Simon Willison](https://simonwillison.net/2025/Mar/19/vibe-coding/) | Penggunaan istilah Vibe Coding tanpa review kode, kegunaan eksplorasi, dan pertimbangan risiko. |
| [DeepLearning.AI: Vibe Coding 101](https://www.deeplearning.ai/courses/vibe-coding-101-with-replit) | Penggunaan istilah yang juga membahas planning, kebutuhan produk, debugging, dan iterasi. |
| [DeepLearning.AI: Spec-Driven Development](https://www.deeplearning.ai/courses/spec-driven-development-with-coding-agents) | Spesifikasi dan alur plan, implement, verify. |
| [DeepLearning.AI: Agent Skills](https://www.deeplearning.ai/courses/agent-skills-with-anthropic) | Skill sebagai panduan berulang, pemuatan sesuai kebutuhan, serta perbedaannya dari tools dan MCP. |
| [OpenAI Best Practices](https://learn.chatgpt.com/guides/best-practices) | Konteks, tujuan, batas tugas, kriteria selesai, planning, testing, dan review. |
| [Anthropic Best Practices](https://code.claude.com/docs/en/best-practices) | Panduan untuk model dibanding pembatasan yang ditegakkan, permission rules, dan sandbox. |
| [OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/) | Prompt injection, informasi sensitif, dan izin agent berlebihan. Penjelasan tambahan: [LLM01](https://genai.owasp.org/llmrisk/llm01-prompt-injection/). |
| [Dokumentasi MCP](https://modelcontextprotocol.io/docs/getting-started/intro) | Definisi MCP sebagai standar koneksi aplikasi AI dengan tools dan sumber informasi. |
