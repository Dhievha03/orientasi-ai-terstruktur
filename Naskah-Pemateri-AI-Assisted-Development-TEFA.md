# Naskah Pemateri: Orientasi Penggunaan AI Tools secara Terstruktur

Pegangan untuk **45 slide dan 10 bab**, ditujukan kepada siswa kelas XI RPL. Sesi berupa presentasi terpandu dengan respons singkat dan demonstrasi simulasi, tanpa latihan atau tugas mandiri. Perkiraan 170 menit bersifat fleksibel. Penjelasan pokok dan pertimbangan pilihan tersedia pada slide; naskah ini menambah contoh ucapan serta arahan penyampaian.

Materi membahas pekerjaan bersama AI yang dapat berkembang mengikuti konteks, respons, dan kebutuhan baru. Bab 3–9 memakai contoh eksplorasi website, portofolio, dark mode, koordinasi project, dan review usulan. Pendaftaran ekstrakurikuler menjadi kasus demonstrasi akhir. Cerita database pada Bab 2 beserta humornya dipertahankan. Tidak ada layanan AI langsung, database sungguhan, atau publikasi web. Nuklir dan overheat adalah mekanik cerita; poin bantuan bukan token atau ukuran kecerdasan model.

Tujuh slide pilihan menyediakan situasi, dua pendekatan, dan kondisi penggunaannya. Klik pilihan untuk membuka pertimbangan, atau tekan **B** untuk membuka pilihan awal. Pilihan dapat diganti dan pembahasan dapat ditutup. Tidak ada skor atau jawaban tunggal yang selalu berlaku. Empat contoh percakapan dapat diikuti lewat **Lanjutkan contoh**, **Sebelumnya**, atau **B**. Jika kelas tidak merespons, kontrol tetap memungkinkan alur berjalan tanpa improvisasi tambahan.

Contoh OpenCode memakai **V1 v1.19.5**. Dokumentasi publik terbaru dapat membahas V2 dengan sintaks berbeda. Rujukan versi, bagian sumber, dan batas klaim tersedia melalui tombol **Sumber** pada setiap slide. Halaman sumber diperiksa pada 13 November 2026. Rujukan kursus hanya berdasarkan ringkasan dan silabus resmi; isi video belum diperiksa.

| Bab | Slide | Pembahasan | Perkiraan |
| --- | --- | --- | --- |
| 1 | 01–06 | AI-Assisted Development | 18 menit |
| 2 | 07–12 | Asumsi, Tindakan, dan Risiko | 25 menit |
| 3 | 13–16 | Mengenal Coding Agent | 17 menit |
| 4 | 17–20 | Kebutuhan, Konteks, dan Spec | 18 menit |
| 5 | 21–24 | Plan, Task, dan Prompt | 18 menit |
| 6 | 25–28 | Rules dan AGENTS.md | 15 menit |
| 7 | 29–31 | Skill | 12 menit |
| 8 | 32–35 | Review Perubahan Kode | 12 menit |
| 9 | 36–39 | Testing dan Penerimaan Hasil | 12 menit |
| 10 | 40–45 | Simulasi Alur Kerja dan Penutup | 23 menit |

## Bab 1: AI-Assisted Development

### Slide 01: Orientasi Penggunaan AI Tools secara Terstruktur untuk Calon AI-Assisted Developer

Kalian mungkin sudah pernah meminta AI membuat fungsi, menjelaskan error, atau merapikan tampilan. Kali ini kita membahas cara mengarahkan pekerjaan itu dan menilai hasilnya sebelum dipakai orang lain.

Kalau AI sudah bisa membuat kode, lalu apa tugas developer? Pertanyaan ini akan kita jawab melalui pembahasan konsep dan dua cerita simulasi.

*Berikan jeda pada pertanyaan pembuka. Tidak perlu langsung menyampaikan semua kesimpulan.*

### Slide 02: Peran AI dalam pengembangan aplikasi

Sekolah membutuhkan formulir pendaftaran ekstrakurikuler. Siswa mengisi nama, NIS, kelas, dan pilihan kegiatan. Setelah mengirim formulir, siswa harus tahu apakah pendaftarannya diterima atau ada isian yang perlu diperbaiki.

AI dapat membantu memahami kebutuhan, membuat kode, menelusuri masalah, dan menyiapkan pengujian. Pengembangan dengan bantuan AI disebut AI-Assisted Development. Developer tetap memastikan kebutuhan sekolah dan memeriksa hasil bantuan tersebut.

### Slide 03: Kapan hasil dari AI bisa dianggap selesai?

Bayangkan formulirnya sudah dibuat. Halaman bisa dibuka, tombol Daftar dapat ditekan, dan pesan berhasil muncul. Tetapi nama siswa tidak ada dalam daftar pendaftar.

Yang terlihat di halaman belum menjawab semua pertanyaan. Apakah data benar-benar diterima? Apakah pesan mengikuti hasil pemrosesan? Masalah ini akan diperlihatkan lebih jauh dalam simulasi.

*Buka keadaan sebenarnya sebelum membahas penyebab. Jangan langsung memberi jawaban teknis.*

### Slide 04: Vibe Coding dan AI-Assisted Development

Tabel membandingkan dua contoh pendekatan pada pekerjaan yang sama. Eksplorasi dapat dimulai dengan mencoba ide dan melihat hasilnya. Cara terstruktur menjelaskan kebutuhan, membatasi pekerjaan, memahami perubahan, dan memeriksa perilaku aplikasi.

Istilah Vibe Coding digunakan dengan makna beragam. Kita tidak sedang mengelompokkan kemampuan orang berdasarkan istilah yang dipakainya. Yang dinilai adalah prosesnya dan bukti bahwa hasil layak digunakan.

### Slide 05: Kode dari AI, tanggung jawab developer

AI membantu membaca kode, mengusulkan rencana, membuat perubahan, dan menjalankan tes jika tools serta izinnya tersedia. Developer memahami kebutuhan dan memutuskan apakah hasilnya dapat diterima.

Backend adalah bagian yang memproses data dan memeriksa aturannya. Jika pesan error hilang karena validasinya dihapus, data salah bisa diterima. Developer perlu memahami akibat perubahan itu, termasuk ketika AI yang menulis kodenya.

### Slide 06: Apa dasar menerima hasil AI?

*Buka Kebutuhan, Perubahan, dan Bukti secara berurutan.*

Kebutuhan menyatakan perilaku yang diminta. Perubahan menunjukkan apa yang dibuat. Bukti memperlihatkan hasil pemeriksaan. Pada contoh formulir, pesan berhasil harus cocok dengan keputusan backend dan daftar pendaftar.

Frontend adalah halaman yang digunakan siswa. Backend memproses data yang dikirim. Setelah contoh ini, kita beralih ke cerita database untuk melihat akibat tindakan berdasarkan asumsi.

## Bab 2: Asumsi, Tindakan, dan Risiko

### Slide 07: Skenario: membersihkan database aplikasi

Website dalam cerita mempunyai database testing untuk percobaan dan database production yang digunakan aplikasi saat melayani pengguna. Backup merupakan salinan data untuk pemulihan.

Developer ingin membersihkan database yang tidak diperlukan. Agent mempunyai akses tools untuk melakukan tindakan. Perhatikan apakah target yang dimaksud pengguna sama dengan target yang dipilih agent.

*Tekan Mulai. Cerita ini sengaja didramatisasi; tidak ada database yang diakses.*

### Slide 08: Adegan User dan AI: hapus database

*Jalankan dialog lengkap dengan Enter, B, atau Lanjut. Pertengkaran, emoji, dan bagian hening tetap merupakan bagian cerita.*

Permintaan pengguna belum menyebut target. Agent memilih production dan menghapusnya tanpa memastikan maksud pengguna. Kedua masalah itu perlu dibedakan. Permintaan ambigu tidak membenarkan sembarang tindakan agent.

### Slide 09: Instruksi dan tindakan

*Buka Akibat, Alasan, dan Prinsip setelah cerita selesai.*

Pastikan identitas database dan lingkungan pemakaiannya. Periksa cadangan serta cara memulihkannya, batasi hak akses, dan pastikan tindakan destruktif mendapat persetujuan yang diperlukan.

Menulis jangan hapus production memberikan arahan. Memakai akun tanpa hak menghapus production membatasi tindakannya melalui sistem. Backup yang ikut hilang adalah kejadian dalam cerita, bukan perilaku semua layanan database.

### Slide 10: AI langsung membenarkan dugaan pengguna

Kita kembali ke pendaftaran. User melihat pesan berhasil, tetapi namanya tidak ada di daftar. Ia menduga API rusak dan AI langsung menyetujuinya.

API adalah antarmuka yang digunakan frontend untuk mengirim pendaftaran ke backend. Kita baru mengetahui perbedaan pesan dengan daftar. Respons dan kode pengiriman belum diperiksa, sehingga penyebabnya belum dapat dipastikan.

### Slide 11: Tiga kesalahan respons yang perlu dibedakan

Sycophancy adalah respons yang terlalu mengikuti keyakinan pengguna meskipun dasarnya belum cukup. Halusinasi berkaitan dengan informasi yang keliru atau tidak didukung. Klaim selesai dapat melebihi pemeriksaan yang dilakukan.

Saran fungsi dari versi library lain belum tentu cocok dengan project. Demikian juga, satu pengiriman berhasil belum memeriksa perilaku saat ditolak. Nilai bukti dan kecocokan saran, bukan nada yakin jawabannya.

### Slide 12: Batasi informasi dan akses agent

Untuk data sensitif, gunakan contoh menyalin kode koneksi database ke AI untuk mencari penyebab error. Password database ikut tersalin. Ganti password dengan placeholder sebelum mengirim kode.

Untuk izin berlebihan, bandingkan tugas mengganti nama satu file dengan izin mengubah seluruh folder. File lain bisa ikut terdampak jika agent salah memilih. Berikan akses sesuai file yang diperlukan.

## Bab 3: Menggunakan AI pada Project

### Slide 13: Bagaimana memakai AI pada project kita?

Bab ini dijelaskan oleh pemateri tanpa praktik siswa. Ajak siswa membayangkan project di VS Code dengan tombol login yang tidak berfungsi. Developer dapat meminta bantuan melalui integrasi AI di editor atau aplikasi di terminal yang dibuka dari folder project.

VS Code adalah editor, bukan agent itu sendiri. Kemampuan bantuan mengikuti integrasi atau aplikasi yang digunakan. Hubungkan ke pertanyaan berikutnya: setelah mendapat akses project, apa yang dapat dikerjakan AI?

### Slide 14: Apa yang dikerjakan coding agent?

Coding agent memakai model AI untuk menjalankan langkah pekerjaan pada project. Pada kasus login, agent dapat membaca file terkait, menjelaskan temuan, dan mengubah bagian yang diminta jika diizinkan. Langkahnya mengikuti informasi yang ditemukan, bukan urutan wajib semua pekerjaan.

Contoh permintaan: “Cari penyebab tombol login tidak berfungsi. Jelaskan dahulu, jangan ubah kode.” Bacakan sebagai ilustrasi, bukan tugas untuk dicoba siswa.

Tanpa akses langsung ke project, developer perlu memberikan kode yang relevan dan menerapkan saran sendiri. Perbedaannya terletak pada akses, bukan sekadar bentuk chat atau terminal.

### Slide 15: Aplikasi, model, dan router berbeda peran

Pada contoh login, aplikasi mengelola percakapan, konteks kode, serta pelaksanaan tindakan sesuai izin. Model mengolah konteks itu untuk menjelaskan masalah atau menentukan tindakan berikutnya. Agent adalah sistem kerja yang memakai model melalui aplikasi, bukan komponen lain sejajar dengan model.

Router cukup dikenalkan sebagai perantara akses ke penyedia model. Router opsional; aplikasi dapat terhubung langsung. Tidak perlu membahas konfigurasi layanan atau meminta siswa membuat akun.

### Slide 16: Apa yang perlu jelas sebelum agent bekerja?

Ringkas tiga hal dari contoh login: project yang dibahas, tugas mencari penyebab tombol tidak berfungsi, dan izin membaca tanpa mengubah kode. Gunakan contoh sebelumnya agar siswa tidak perlu memahami situasi baru.

Kalimat “jangan ubah kode” adalah arahan tugas. Pembatasan akses teknis ditegakkan aplikasi atau lingkungan. Penjelasan ini menjadi pengantar singkat, bukan latihan pengaturan izin.

Hubungkan ke bab berikutnya: aplikasi sudah dikenal, sekarang pengguna perlu menjelaskan kebutuhan dan konteks agar AI tidak menebak.

## Bab 4: Kebutuhan dan Konteks Project

### Slide 17: Mulai dari tujuan, bukan “buat yang bagus”

Contohnya website portofolio agar perusahaan tempat siswa ingin PKL bisa melihat project yang pernah dibuat. Jelaskan informasi yang diperlukan: profil, daftar project, bagian yang dikerjakan siswa, dan kontaknya.

Kebutuhan mulai jelas ketika tujuan dibahas. Bacakan contoh kebutuhan portofolio untuk PKL pada slide. Siswa mengikuti penjelasan; tidak ada praktik membuat portofolio.

### Slide 18: Sarannya melenceng. Konteks apa yang kurang?

*Pilihan pertama menunjukkan halaman yang dimaksud. Pilihan kedua menjelaskan bagian yang ingin diubah. Buka keduanya untuk menunjukkan bahwa informasi ini saling melengkapi.*

AI mengira developer ingin membuat website baru, padahal halaman portofolionya sudah ada. Tunjukkan file halaman tersebut dan jelaskan bagian yang ingin dirapikan. Informasi yang membantu AI memahami tugas disebut konteks.

### Slide 19: Informasi apa yang perlu diberikan ke AI?

Kebutuhannya adalah menunjukkan project kepada perusahaan tempat siswa ingin PKL. File halaman, profil dan daftar project, serta contoh tampilan membantu AI memahami apa yang perlu dikerjakan.

Jelaskan hubungan setiap bahan dengan keputusan yang dipengaruhinya. AI tidak perlu menerima seluruh project atau informasi rahasia. Jangan meminta siswa menyiapkan atau mengirim berkas di kelas.

### Slide 20: Kalau AI salah paham, jelaskan bagian yang dimaksud

Pemateri membuka empat bagian percakapan. Permintaan merapikan portofolio dipahami AI sebagai desain baru. Developer kemudian menjelaskan bahwa desain dan menu dipertahankan; hanya daftar project yang dirapikan.

Developer menjelaskan bahwa judul, bagian yang dikerjakan, dan tautan project perlu lebih mudah dibaca. Yang dirapikan hanya daftar project; desain dan menu tetap. Tidak semuanya harus jelas sejak pesan pertama. Hubungkan ke Bab 5 tentang pendekatan dan pembagian tugas. Percakapan disiapkan untuk presentasi, bukan praktik AI langsung.

## Bab 5: Plan, Task, dan Prompt

### Slide 21: Plan: rencana pengerjaan

Hubungkan dengan Bab 4: kebutuhan sudah dijelaskan, tetapi cara mengerjakannya masih perlu dibahas. Plan menyebut bagian yang perlu diubah, urutan pengerjaan, dan batasnya. Manfaatnya, developer dapat mengoreksi rencana sebelum AI mulai mengedit kode.

Baru perkenalkan contoh: developer ingin menambahkan mode gelap pada website. Setelah membaca kode, AI mengusulkan mulai dari halaman profil tanpa mengubah isi dan menu. Bahas hasil halaman itu sebelum melanjutkan ke halaman lain. Fokus pada plan saja; task dan prompt dijelaskan pada slide masing-masing.

Pemateri menjelaskan cerita tanpa praktik siswa. Rencana dapat dibahas sebelum kode berubah, tetapi perubahan kecil tidak selalu memerlukan rencana panjang. Plan di sini bukan nama mode aplikasi tertentu.

### Slide 22: Task: tugas yang akan dikerjakan

Task berarti tugas yang perlu dikerjakan. Developer memilih menambahkan tombol pergantian mode pada halaman profil. Jelaskan hasil yang diinginkan: tulisan tetap mudah dibaca. Batasnya: isi profil dan menu tidak berubah. Jangan mengulang tabel plan pada slide ini. Task boleh disampaikan dalam percakapan tanpa file khusus.

Setelah hasilnya dibahas, tugas berikutnya bisa melanjutkan ke halaman lain atau memperbaiki tampilannya. Ini contoh tugas developer, bukan tugas untuk dikerjakan siswa. Satu task tidak harus satu file.

### Slide 23: Prompt: pesan yang dikirim kepada AI

*Bacakan seluruh pesan pada slide sebagai satu prompt utuh. Jelaskan bahwa pekerjaan yang diminta di dalamnya adalah task.*

Seluruh pesan adalah prompt. Kalimat meminta tombol pergantian mode merupakan task di dalam prompt itu. Kalimat tentang tulisan menjelaskan hasil yang diinginkan. Kalimat mempertahankan isi dan menu membatasi perubahan. Task bukan pesan terpisah di luar prompt. Pemateri menjelaskan contoh tanpa praktik siswa.

Tunjukkan contoh kedua: prompt juga bisa meminta AI membaca project dan menjelaskan rencana menambahkan mode gelap tanpa mengubah kode dahulu. Hubungkan ke aturan project yang tetap berlaku ketika tugas berganti.

## Bab 6: Rules dan AGENTS.md

### Slide 24: Haruskah aturan project dijelaskan ulang setiap sesi?

Project kelompok mempunyai keputusan yang tetap diperlukan saat tugas berganti. Contohnya penamaan dan penggunaan komponen bersama. Rules adalah ketentuan tersebut; panduan tersimpan membantu menyediakannya pada sesi berikutnya.

Gunakan aturan yang mempunyai tujuan. Menggunakan komponen tombol yang sudah ada menjaga konsistensi, tetapi usulan pengecualian tetap dapat dibahas jika alasannya jelas.

### Slide 25: AGENTS.md menyimpan panduan project untuk agent

Di OpenCode V1, AGENTS.md menjadi salah satu sumber instruksi project. Contoh di layar berisi pembacaan README, pengenalan perubahan yang sudah ada, serta kesepakatan penamaan dan komponen.

Rules adalah ketentuannya. AGENTS.md membawa panduan itu ke agent. Perbarui ketika kesepakatan berubah. Contoh tidak dipasang ke workspace; referensi nama berkas juga tidak otomatis memuat isinya.

### Slide 26: Aturan tertulis berbeda dari izin tools

Instruksi jangan ubah API mengarahkan perilaku agent. Permission edit deny memblokir tool edit yang tercakup. Namun, shell yang masih boleh menulis dapat menyediakan jalur lain.

Pada V1, allow menjalankan tanpa persetujuan tambahan, ask meminta persetujuan, dan deny memblokir tindakan yang tercakup. Auto-approve dan konfigurasi dapat memengaruhi hasil. Izin tools berbeda dari pembatasan sistem operasi dan hak akun database.

### Slide 27: Kesepakatannya berubah. Ditulis di mana?

*Pilihan membandingkan pengecualian satu percobaan dengan keputusan project yang berlaku seterusnya.*

Jika hanya percobaan susunan menu, jelaskan batas dan pengecualian tugas. Jika keputusan tim berubah untuk pekerjaan berikutnya, perbarui panduan project. Pertentangan instruksi tetap perlu diselesaikan; permintaan terbaru tidak otomatis mengalahkan semua ketentuan lain.

## Bab 7: Skill

### Slide 28: Prosedur yang sering dipakai bisa dikemas menjadi skill

Review perubahan mengulang beberapa pertanyaan: tujuannya apa, bagian mana berubah, dan apa dampaknya? Skill mengemas prosedur serta sumber pendukung untuk dipakai kembali sesuai kebutuhan.

Rules menetapkan ketentuan, skill menjelaskan prosedur, dan tool menjalankan tindakan. Skill tidak melatih ulang model atau menambah hak akses.

### Slide 29: Deskripsi skill membantu menentukan kapan ia dipakai

Tampilkan contoh SKILL.md untuk review perubahan. Frontmatter memuat nama serta deskripsi penggunaan; setelahnya terdapat langkah kerja. Pada V1, nama sesuai folder, dengan huruf kecil serta tanda hubung.

OpenCode menyediakan metadata skill yang dapat diakses, lalu agent memuat instruksi lengkap melalui tool skill. Referensi tambahan dibaca sesuai kebutuhan. Ini contoh bahan ajar, bukan instalasi.

### Slide 30: Apakah setiap tugas perlu skill yang sama?

*Pilihan membandingkan review perubahan luas dengan pemeriksaan perubahan ejaan yang terbatas.*

Prosedur membantu ketika sesuai tugas. Untuk ejaan yang jelas, pemeriksaan bisa proporsional dengan dampaknya, sambil tetap mengikuti panduan project. Memuat skill belum membuktikan semua langkah telah dijalankan.

## Bab 8: Review Perubahan Kode

### Slide 31: AI sudah mengerjakan. Sekarang apa yang berubah?

Review membandingkan perubahan aktual dengan tujuan dan kesepakatan terbaru. Laporan AI memberi arah untuk pembacaan, tetapi developer perlu memahami hasilnya.

Git membantu mencatat versi, sedangkan diff memperlihatkan perbedaan dua keadaan. Kenali perubahan lokal sebelum agent bekerja agar pekerjaan teman tidak salah dianggap hasil AI.

### Slide 32: Review juga memeriksa asumsi yang dibuat AI

*Buka Tujuan, Asumsi, dan Dampak.*

Cocokkan hasil dengan kebutuhan yang berlaku. Periksa keputusan tentang library, susunan menu, atau alur yang belum dibahas. Kemudian lihat bagian lain yang ikut terpengaruh untuk menentukan pemeriksaannya.

Usulan baru tidak otomatis salah. Review juga dapat mengonfirmasi bahwa usulan bermanfaat dengan alasan yang cukup.

### Slide 33: Usulan yang menarik tetap perlu dibahas dampaknya

*Percakapan memperlihatkan permintaan merapikan daftar project, usulan filter, dan pertanyaan tentang kebutuhan dependensi.*

Developer membahas manfaat dan alternatif berdasarkan keadaan project. Library bisa membantu jika kebutuhannya jelas; bisa juga terlalu banyak untuk kebutuhan yang sederhana. Pembahasan menghasilkan pilihan yang lebih terarah.

### Slide 34: “Sekalian dirapikan” perlu diputuskan bersama

Slide menyediakan pilihan memperluas pekerjaan atau memisahkan perapian. Jika tugas awal bergantung pada perapian, perbarui rencana dan pemeriksaan setelah cakupan disepakati.

Jika tidak menghalangi tujuan sekarang, catat sebagai task berikutnya. Hubungan kebutuhan, dependensi, dan dampak menjadi dasar memilih, bukan larangan mutlak memperluas perubahan.

## Bab 9: Testing dan Penerimaan Hasil

### Slide 35: Percobaan memberi bahan untuk percakapan berikutnya

Testing membandingkan perilaku aktual dengan harapan. Contoh pencarian memperlihatkan bagaimana satu hasil menimbulkan pertanyaan berikutnya: apa yang terjadi jika data tidak ditemukan?

Feedback menyebut input, hasil yang terlihat, dan perilaku yang diinginkan. Dari informasi itu, developer serta agent menentukan bagian yang perlu ditelusuri berikutnya.

### Slide 36: “Di tempat saya bisa” belum menjelaskan perbedaannya

*Buka percakapan tentang menu yang bertumpuk pada layar kecil.*

Kondisi percobaan membantu menelusuri perbedaan: halaman, ukuran layar, dan kode yang dipakai. Jika lingkungan tidak tersedia, jelaskan pemeriksaan yang tertunda. Angka 390 piksel merupakan kondisi ilustrasi, bukan ukuran semua HP.

### Slide 37: Bukti yang dibutuhkan mengikuti hal yang ingin dipastikan

*Buka Fungsi, Tampilan, dan Lingkungan.*

Pertanyaan fungsi membutuhkan percobaan perilaku. Pertanyaan tampilan membutuhkan pengamatan keadaan dan ukuran yang relevan. Laporan tools perlu menyebut apa yang benar-benar dijalankan.

Proses build dapat menyertakan pemeriksaan lain sesuai konfigurasi, tetapi tidak otomatis mencoba seluruh fitur. Nama agent Build berbeda dari proses build. Pemeriksaan mengikuti dampak dan tujuan tugas.

### Slide 38: Sudah cukup untuk tujuan yang mana?

Slide membandingkan rancangan untuk diskusi dengan hasil yang akan melayani pengguna. Rancangan terbatas dapat membantu memilih arah jika batasnya jelas dan memakai data contoh.

Penggunaan nyata membutuhkan bukti sesuai kebutuhan pemakaiannya. Terima, koreksi, atau tunda berdasarkan bukti tersebut. Ketiganya merupakan ringkasan keputusan pembelajaran, bukan mode aplikasi atau jawaban kuis.

## Bab 10: Simulasi Alur Kerja dan Penutup

### Slide 39: Ikuti percakapan, kode, dan perilaku aplikasinya

AI menampilkan percakapan yang sudah disiapkan. Kode memperlihatkan frontend yang digunakan. Apps menjalankan kode tersebut agar pesan dan hasil pemrosesannya dapat dibandingkan.

Healthbar adalah batas bantuan dalam permainan. Pertanyaan yang diperlukan tetap bagian pemeriksaan. Overheat tidak membuktikan model lelah atau pengguna salah karena bertanya. Tidak ada latihan mandiri; pemateri menjalankan demonstrasi.

### Slide 40: Pendaftaran Ekstrakurikuler

Baca kembali kebutuhan: pendaftaran dibuka besok, empat isian tetap diperlukan, dan API sudah tersedia. Siswa perlu menerima informasi sesuai hasil pendaftarannya.

*Tekan Mulai. Pilih satu jalur utama dan keputusan pembanding sesuai waktu. Tidak perlu memperagakan seluruh ending.*

### Slide 41: Pendaftaran ditolak, tetapi halaman menampilkan berhasil

*Gunakan AI/Kode/Apps atau angka 1/2/3. Enter atau B melengkapi teks dan melanjutkan dialog. Shortcut angka tidak aktif saat mengetik.*

Setelah formulir dibuat, kirim NIS abc dengan isian lain benar. Bandingkan respons, pesan, keadaan isian, dan daftar pendaftar. Bawa pengamatan ke percakapan melalui Bahas hasil percobaan. Jika perlu, tandai kode dan pilih Bahas kode ini sebelum meminta koreksi.

Setelah perubahan, coba kembali penolakan dan penerimaan pada kode akhir. Pembahasan kelambatan tersedia melalui prepareRegistrationData di Kode. Deploy menentukan akibat dalam cerita, bukan menerbitkan web.

### Slide 42: Hasil pendaftaran

*Bahas ending yang tercapai, lalu buka Bukti dan Riwayat.*

Keadaan aplikasi berbeda dari percobaan yang sudah dilakukan pemateri. Ending yang fungsinya benar tetap menampilkan status pengujian pada ringkasan utama jika penerimaan atau penolakan belum dicoba pada kode terakhir.

Jika aplikasi berfungsi tetapi lambat, optimasi dapat menjadi tindak lanjut. Jika bantuan berhenti, permintaan terakhir belum dikerjakan. Simulasi tidak benar-benar memasang skill atau membaca AGENTS.md; fungsi kedua panduan tersebut sudah dibahas sebelumnya.

### Slide 43: Feedback yang jelas membantu menentukan perbaikan berikutnya

Bandingkan keluhan umum dengan laporan yang menyebut input, respons, pesan halaman, dan keadaan isian. Contoh di layar merangkum bug awal, bukan menyatakan semua bug masih ada pada ending terakhir.

Hasil pemeriksaan menjadi bahan untuk permintaan berikutnya. Setelah koreksi, lakukan tes ulang. Jika berganti sesi, bawa catatan perubahan, hasil tes, dan pekerjaan yang belum selesai.

### Slide 44: Tanggung jawab developer atas kode hasil AI

Developer memahami kebutuhan, mengarahkan pekerjaan, membaca perubahan, dan menilai bukti sebelum hasil digunakan. AI dapat membantu pada setiap bagian tersebut.

Ingat formulir pada pembuka. Pesan berhasil belum membuktikan siswa terdaftar. Simulasi memperlihatkan mengapa keputusan developer perlu mengikuti kebutuhan dan bukti, bukan hanya pernyataan AI.

## Sumber utama dan batas penggunaannya

Tombol Sumber di setiap slide menampilkan rujukan untuk pembahasan tersebut. Bagian sumber disebutkan agar pemateri dapat memeriksa klaimnya, bukan sekadar membuka halaman utama.

| Sumber | Bagian yang digunakan |
| --- | --- |
| [GitHub: Review AI-generated code](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code) | Functional checks, Verify context and intent, Spot AI-specific pitfalls. Bab 1, 8, 9, dan pembahasan simulasi. |
| [GitHub: Prompt engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering) | Konteks, contoh, pembagian tugas, dan penghindaran ambiguitas. Bab 3–5. |
| [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | Konsep siklus agent dan Coding agents. Detail tooling lama tidak dianggap petunjuk produk terbaru. |
| [GitHub Spec Kit](https://github.com/github/spec-kit#spec-driven-development) | Specification, plan, tasks, implementation. Contoh pendekatan, bukan kewajiban semua tugas atau tutorial instalasi. |
| [DeepLearning.AI: Spec-Driven Development with Coding Agents](https://www.deeplearning.ai/courses/spec-driven-development-with-coding-agents/) | Ringkasan dan silabus Feature specification, Feature validation, Project replanning. Tidak mengutip video yang belum diperiksa. |
| [OpenCode V1: source agent](https://github.com/anomalyco/opencode/blob/v1.19.5/packages/opencode/src/agent/agent.ts) | Definisi build dan plan. Source digunakan untuk rincian izin karena halaman docs versi itu tidak seluruhnya cocok. |
| [OpenCode V1: Rules](https://github.com/anomalyco/opencode/blob/v1.19.5/packages/web/src/content/docs/rules.mdx) | Example, Types, Referencing External Files. |
| [OpenCode V1: Permissions](https://github.com/anomalyco/opencode/blob/v1.19.5/packages/web/src/content/docs/permissions.mdx) | Actions, Configuration, What Ask Does, Agents. Tidak mengajarkan default .env karena docs dan source berbeda. |
| [OpenCode V1: Skills](https://github.com/anomalyco/opencode/blob/v1.19.5/packages/web/src/content/docs/skills.mdx) | Place files, Write frontmatter, Recognize tool description. |
| [Agent Skills: Overview](https://agentskills.io/home) | Format skill dan progressive disclosure. |
| [MDN: Server-side introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction) | Client-side, server-side, request, dan response. |
| [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_response_status) dan [HTTP 422](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/422) | Perilaku Promise, response.ok, dan arti 422. success adalah kontrak contoh, bukan standar Fetch. |
| [Git: git-diff](https://git-scm.com/docs/git-diff) | Description dan format patch. |
| [OWASP: Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) dan [Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) | Akses berlebihan, persetujuan tindakan berdampak tinggi, dan instruksi tidak tepercaya. |
| [Anthropic: Sycophancy](https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models) | Abstrak penelitian tentang mengikuti keyakinan pengguna dengan mengorbankan kebenaran. |
| [PostgreSQL 18: Backup and Restore](https://www.postgresql.org/docs/18/backup.html) | Konsep pencadangan. Bukan bukti bahwa semua backup ikut terhapus saat instance dihapus. |
| [Kode simulasi](examples/extracurricular-registration/example.js) | Kontrak isian, respons, dan frontend lokal. Aturan contoh tidak dianggap kebijakan semua sekolah. |

### Status rujukan video sebelumnya

Video referensi visual yang pernah diberikan pemateri tetap tercatat pada arah desain dan sumber aset. Video tersebut bukan sumber klaim teknis tentang coding agent. Video atau kursus tambahan hanya boleh dikutip setelah isi yang relevan dapat diperiksa; judul dan deskripsi video saja tidak cukup untuk membuat kutipan atau timestamp.
