# Naskah Pemateri: AI-Assisted Development

Naskah ini mengikuti 37 slide presentasi aktif, termasuk pembaruan bab 7 tentang kendali perubahan kode dan bab 8 tentang efisiensi serta kesimpulan.

Paragraf biasa merupakan contoh ucapan pemateri. Bagian bercetak miring merupakan arahan pengoperasian atau penekanan, tidak perlu dibacakan. Gunakan naskah sebagai pegangan berbicara dan sesuaikan pilihan kata dengan cara penyampaian sendiri.

Pada slide dengan selector, buka bagian yang disebut sebelum menjelaskannya. Pada dialog, biarkan percakapan menyampaikan ceritanya. Naskah pemateri memberi pengantar dan pembahasan, bukan menggantikan seluruh ucapan karakter.

## Bab 1: AI-Assisted Development

### Slide 01: AI-Assisted Development

Kalian mungkin sudah pernah meminta AI menjelaskan error, membuat fungsi, atau memperbaiki tampilan. Kali ini, kita membahas bagaimana menggunakan bantuan itu dalam pekerjaan pengembangan aplikasi yang hasilnya benar-benar perlu dipertanggungjawabkan.

Misalnya, AI membuat halaman login dan halamannya bisa dibuka. Itu baru menunjukkan bahwa tampilannya tersedia. Kita masih perlu memahami bagaimana login diperiksa, bagaimana kegagalan ditampilkan, dan apakah perubahan tersebut mengganggu bagian lain.

Selama materi ini, perhatikan tiga hal: apa yang kita minta, apa yang benar-benar diubah, dan apa dasar kita menerima hasilnya. AI bisa membantu banyak langkah, tetapi keputusan memakai kode tersebut tetap berada pada developer.

Kita mulai dari dua cara bekerja yang sama-sama memakai AI, tetapi berbeda dalam cara memahami dan menerima perubahan.

### Slide 02: Vibe Coding dan AI-Assisted Development

Bayangkan kita meminta AI membuat formulir. Setelah tampil, kita memberi instruksi lagi berdasarkan apa yang terlihat: tombolnya dipindah, warnanya diganti, lalu pesannya diperbaiki. Jika detail kodenya tidak ditinjau, pendekatan itu sesuai dengan gambaran Vibe Coding pada slide ini.

Dalam AI-Assisted Development, kita juga boleh bekerja cepat dan mencoba gagasan. Bedanya, sebelum hasil digunakan, kita berusaha memahami perubahan serta memeriksa apakah perilakunya sesuai kebutuhan.

Jadi, perbedaannya bukan siapa yang mengetik lebih banyak. Menggunakan AI untuk hampir seluruh penulisan kode pun masih membutuhkan pemahaman developer atas hasilnya. Sebaliknya, menulis sebagian kode sendiri belum membuktikan seluruh perubahan sudah ditinjau.

Saat kode akan digunakan orang lain, penilaian kita harus melampaui kesan bahwa aplikasinya sudah terlihat berjalan.

### Slide 03: Kode dari AI, tanggung jawab developer

AI dapat membantu mencari berkas, mengusulkan perbaikan, dan menjalankan pemeriksaan jika tools serta izinnya tersedia. Namun, AI tidak otomatis mengetahui seluruh kebutuhan aplikasi dan keputusan yang pernah dibuat tim.

Developer perlu menentukan apa yang ingin dicapai dan apa yang tidak boleh berubah. Setelah ada hasil, developer juga yang menilai apakah penjelasannya masuk akal dan pemeriksaannya cukup.

Misalnya, AI menghapus suatu validasi agar pesan error hilang. Error memang tidak terlihat lagi, tetapi mungkin data yang sebelumnya ditolak justru sekarang diterima. Kita perlu bisa menjelaskan mengapa perubahan itu benar, bukan hanya siapa yang menyarankannya.

Kalimat “kode ini dibuat AI” menjelaskan asal kode. Kalimat itu belum menjadi alasan bahwa kode layak digunakan. Karena itu, kita membutuhkan dasar penerimaan yang lebih jelas.

### Slide 04: Apa dasar menerima hasil AI?

*Buka Kebutuhan, Perubahan, lalu Bukti.*

Pada bagian **Kebutuhan**, kita membandingkan hasil dengan masalah semula. Jika yang diminta adalah memperbaiki pencarian, tampilan baru yang menarik belum menjawab apakah pencariannya sudah benar.

Pada bagian **Perubahan**, kita melihat bagaimana solusi dibuat. Apakah perbaikannya memang berada pada logika yang bermasalah? Apakah ada data, dependensi, atau akses tambahan yang ikut berubah?

Pada bagian **Bukti**, kita melihat hasil pemeriksaan. Build berhasil menunjukkan bahwa proses build tersebut selesai, tetapi belum membuktikan semua alur pengguna benar. Klaim harus sesuai dengan kondisi yang benar-benar dicoba.

Tiga bagian ini saling mendukung. Hasil bisa terlihat sesuai, tetapi implementasinya bermasalah. Implementasi bisa terlihat masuk akal, tetapi belum diperiksa. Berikutnya, kita melihat akibat ketika instruksi dan tindakan tidak memiliki dasar yang cukup.

## Bab 2: Asumsi, tindakan, dan risiko

### Slide 05: Skenario: membersihkan database aplikasi

Sekarang kita masuk ke sebuah cerita. Ada website yang memiliki database testing dan production. Developer ingin membersihkan database yang sudah tidak diperlukan, lalu meminta bantuan AI yang memiliki akses tools pengembangan.

Perhatikan bagaimana permintaan disampaikan dan bagaimana AI memutuskan tindakannya. Dalam pekerjaan seperti ini, kita tidak hanya berurusan dengan teks jawaban. Tindakan yang dilakukan bisa memengaruhi keadaan aplikasi.

Adegan ini merupakan dramatisasi. Presentasi tidak sedang menghapus database sungguhan. Kita gunakan ceritanya untuk membahas cara mengambil keputusan saat sebuah instruksi belum cukup jelas.

Mari kita lihat percakapannya dahulu. Pembahasan tentang target dan akibat tindakannya kita lakukan setelah adegan selesai.

*Tekan Mulai. Jangan menjelaskan akhir cerita sebelum dialog diputar.*

### Slide 06: Adegan User dan AI: hapus database

*Sampaikan pengantar singkat berikut, lalu jalankan dialog secara manual.*

Perhatikan titik ketika sebuah permintaan berubah menjadi keputusan tindakan. Kita akan melihat apakah pihak yang memberi instruksi dan pihak yang menjalankan instruksi memiliki pemahaman yang sama.

*Biarkan seluruh dialog berjalan, termasuk bagian hening di akhir. Gunakan Enter atau B sesuai kontrol dialog. Hindari menyela setiap ucapan karena pembahasan tersedia pada slide berikutnya.*

*Setelah dialog selesai, gunakan penghubung berikut.*

Di sini kita melihat dua masalah sekaligus. Permintaan awal belum menetapkan target, lalu AI memilih target dan menjalankan tindakan tanpa memastikan maksudnya. Cara mereka saling membalas dalam cerita memang dibuat berlebihan. Yang perlu kita bawa ke pekerjaan nyata adalah bagaimana ketidakjelasan target berubah menjadi akibat pada aplikasi.

### Slide 07: Instruksi dan tindakan

*Buka Akibat dalam cerita, Alasan dan asumsi, lalu Prinsip pelaksanaan.*

Pada **Akibat dalam cerita**, database production dan cadangan otomatis ikut hilang sehingga website tidak bisa digunakan. Itu adalah keadaan dalam skenario, bukan aturan bahwa semua layanan database memiliki perilaku penghapusan yang sama.

Pada **Alasan dan asumsi**, bedakan tanggung jawab kedua pihak. User belum menyebut target dengan jelas. AI juga tidak memiliki dasar untuk memilih production dan menghapus instance. Instruksi yang kurang lengkap tidak otomatis membenarkan tindakan apa pun.

Pada **Prinsip pelaksanaan**, target, lingkungan, cakupan tindakan, dan pemulihan harus diperjelas sebelum penghapusan. Nama yang mengandung kata testing pun belum cukup tanpa pemeriksaan pemakaiannya.

Kejadian ini juga menunjukkan bahwa kemampuan menggunakan tools perlu disertai batas akses dan penilaian tindakan. Setelah ini, kita membahas risiko lain yang lebih halus: jawaban AI yang langsung membenarkan dugaan kita.

### Slide 08: Dugaan penyebab langsung disetujui

User mengatakan login gagal dan langsung menyimpulkan library autentikasinya bermasalah. AI membenarkan kesimpulan itu serta menyarankan penggantian library.

Padahal, informasi yang tersedia baru gejala: login gagal. Belum diketahui apakah penyebabnya konfigurasi, akun, jaringan, atau kode yang baru berubah. Mengganti library pada tahap ini bisa menambah pekerjaan tanpa menyelesaikan penyebab sebenarnya.

Jawaban yang menyetujui kita memang terasa meyakinkan, terutama saat kita sudah memiliki dugaan kuat. Tetapi persetujuan tidak menambahkan bukti baru. Kita perlu memisahkan apa yang diamati dari kesimpulan yang belum diperiksa.

Jadi, contoh ini bukan tentang larangan mengganti library. Penggantian bisa diperlukan jika hasil penelusuran mendukungnya. Masalahnya adalah keputusan tersebut sudah dibuat sebelum ada dasar yang cukup.

### Slide 09: Persetujuan bukan verifikasi

*Buka Dugaan, Respons, lalu Tindakan.*

Pada **Dugaan**, mulai dari kondisi kegagalan. Apakah semua akun gagal login atau hanya satu akun? Apakah masalah muncul setelah perubahan tertentu? Informasi seperti ini membantu mempersempit penelusuran.

Pada **Respons**, kita mengenal sycophancy: kecenderungan AI terlalu menyetujui pengguna. Kita tidak perlu menganggap setiap jawaban yang setuju sebagai kesalahan. Yang diperiksa adalah apakah persetujuan itu didukung alasan dan temuan.

Pada **Tindakan**, pilih perbaikan setelah penelusuran memberi dasar. Jika masalahnya ternyata konfigurasi yang keliru, mengganti seluruh library memperluas perubahan secara tidak perlu.

Kita bisa meminta AI memisahkan temuan, dugaan penyebab, dan hal yang belum diperiksa. Pemisahan itu membantu kita menilai jawaban dengan lebih tenang, tanpa mengikuti nada yakin dari jawabannya saja.

### Slide 10: Tiga risiko, tiga cara memeriksa

*Jelaskan ketiga selector sebagai masalah yang berbeda.*

**Sycophancy** berhubungan dengan persetujuan terhadap dugaan. Cara memeriksanya adalah meminta dasar persetujuan dan mempertimbangkan bukti yang mungkin membantah dugaan tersebut.

**Halusinasi** berhubungan dengan informasi yang keliru atau tidak didukung fakta. Dalam programming, contohnya adalah menyebut fungsi library yang tidak ada pada versi yang kita gunakan. Pemeriksaannya perlu melihat dokumentasi dan versi yang sesuai.

**Klaim selesai** berhubungan dengan laporan pekerjaan. AI mungkin mengatakan semua sudah dites, tetapi kita masih perlu mengetahui tes apa yang dilakukan dan bagaimana hasilnya. Pernyataan selesai tidak menggantikan hasil pemeriksaan.

Ketiganya bisa muncul bersamaan, tetapi cara menilainya tidak persis sama. Memperbaiki prompt juga bukan jaminan seluruh risiko hilang. Kita tetap membutuhkan tools yang sesuai dan proses kerja yang dapat diperiksa.

## Bab 3: Pemilihan Tools AI

### Slide 11: Model, aplikasi, dan tools berbeda peran

Saat orang mengatakan memakai AI tertentu, sering kali nama aplikasi, model, dan tools tercampur. Padahal, ketiganya menjelaskan bagian yang berbeda.

**Aplikasi** mengelola tempat kita bekerja: percakapan, konteks, dan alur agent. **Model** menghasilkan respons berdasarkan informasi yang diterimanya. **Tools** memungkinkan agent melakukan tindakan seperti membaca berkas atau menjalankan pemeriksaan.

Misalnya, model yang sama dipakai di dua aplikasi. Salah satunya memiliki akses berkas dan terminal, sedangkan yang lain hanya menerima teks yang kita kirim. Kemampuan memeriksa aplikasi kita tentu tidak sama.

Karena itu, nama model saja belum cukup untuk menilai apakah AI bisa menyelesaikan suatu pekerjaan. Kita juga perlu melihat integrasi, izin, dan lingkungan tempat model tersebut digunakan.

### Slide 12: Pilih alat AI sesuai pekerjaan

*Buka Chat, Editor, lalu Agent.*

Untuk **Chat**, contoh paling sederhana adalah memahami pesan error. Kita bisa memberikan pesan dan potongan kode yang relevan. Jika tujuannya penjelasan, izin mengubah berkas tidak diperlukan.

Pada **Editor**, bantuan berada dekat kode yang sedang dikerjakan. Ini memudahkan kita membandingkan saran dengan fungsi terkait. Namun, menerima saran pada satu baris tetap perlu mempertimbangkan alur di sekitarnya.

Pada **Agent**, pekerjaan bisa mencakup membaca beberapa berkas, mengusulkan perubahan, mengedit, dan menjalankan pemeriksaan. Kemampuan tersebut berguna jika tugas memang membutuhkan rangkaian tindakan itu.

Pembagian ini bukan aturan kaku berdasarkan tampilan. Agent dapat berada di editor atau browser. Yang kita pilih adalah kemampuan yang diperlukan, dengan akses yang sesuai dan biaya kerja yang masuk akal.

### Slide 13: Kemampuan agent mengikuti akses

Kalimat pentingnya adalah: dapat menjawab belum tentu dapat memeriksa. AI bisa menjelaskan kemungkinan penyebab dari pesan error, tetapi belum tentu sudah membaca konfigurasi aplikasi kita.

**Akses baca** menentukan informasi yang dapat ditelusuri. **Izin ubah** menentukan bagian yang boleh diedit. **Akses menjalankan tools** menentukan pemeriksaan apa yang bisa benar-benar dilakukan.

Misalnya, agent hanya menerima satu fungsi. Jawabannya tentang seluruh aplikasi perlu dibaca sebagai kesimpulan dengan keterbatasan informasi, bukan hasil pemeriksaan semua berkas.

Kembali ke cerita database, prompt yang hati-hati tetap perlu didukung pengaturan akses yang sesuai. Sebaliknya, akses luas tidak berarti setiap tindakan sudah diizinkan oleh kebutuhan tugas. Kita perlu menilai kemampuan dan izin sebagai bagian dari cara kerja.

### Slide 14: Alur koneksi ke model

*Ikuti urutan OpenCode, 9router, dan Penyedia model.*

Susunan ini menunjukkan salah satu cara permintaan sampai ke model. OpenCode mengelola konteks dan tools di sisi aplikasi agent. Jika menggunakan router, permintaan dapat melewati perantara tersebut sebelum diteruskan ke penyedia model.

Router bersifat opsional. Beberapa susunan dapat menggunakan koneksi langsung yang didukung aplikasinya. Jadi, gambar ini menjelaskan lapisan, bukan daftar produk yang wajib dipakai.

Perhatikan juga letak panduan kerja. Rules dan skill dimuat oleh aplikasi agent sesuai dukungannya. Memakai router yang sama tidak otomatis membuat seluruh aplikasi berbagi aturan, izin, atau riwayat percakapan.

Setelah mengetahui siapa yang mengelola konteks, kita masuk ke informasi apa yang sebenarnya perlu diberikan untuk suatu tugas.

## Bab 4: Konteks dan standar hasil

### Slide 15: Konteks apa yang dibutuhkan untuk tugas ini?

Kita kembali ke kasus database. Tujuannya masih sama, tetapi sekarang kita melihat informasi yang dibutuhkan sebelum tindakan dapat dinilai.

Pertama, ada **aturan** tentang target yang boleh dihapus dan bagian yang harus dipertahankan. Kedua, ada **alur aplikasi**: database mana yang benar-benar digunakan oleh koneksi dan layanan yang masih aktif. Ketiga, ada **bukti pendukung**, termasuk nama target, lingkungan, dan keadaan cadangan.

Nama database saja belum menjelaskan penggunaannya. Database yang namanya terlihat seperti percobaan bisa saja masih dipakai aplikasi tertentu. Itulah sebabnya konteks perlu berkaitan dengan keadaan aplikasi, bukan hanya istilah yang terdengar masuk akal.

Konteks yang baik cukup untuk membantu tugas dan dapat ditelusuri sumbernya. Menambahkan seluruh berkas tanpa memilih relevansinya belum tentu membantu.

### Slide 16: Banyak konteks belum tentu relevan

*Buka Relevansi, Kebaruan, lalu Ketidakpastian.*

Pada **Relevansi**, pilih informasi yang mengubah keputusan. Untuk menghapus database, informasi koneksi dan pemakaiannya lebih penting daripada berkas tampilan halaman yang tidak berkaitan.

Pada **Kebaruan**, pastikan informasi masih mewakili keadaan sekarang. Catatan lama bisa mengatakan sebuah database tidak dipakai, tetapi konfigurasi terbaru mungkin sudah berubah. Kita tidak boleh memperlakukan semua catatan sebagai keadaan terkini.

Pada **Ketidakpastian**, sebutkan hal yang belum diketahui. Jika target atau cara pemulihan belum jelas, langkah yang benar adalah meminta penjelasan dan pemeriksaan tambahan yang relevan.

Dengan cara ini, konteks tidak hanya menjadi kumpulan informasi. Kita mengetahui informasi mana yang dipakai sebagai dasar dan bagian mana yang masih belum dapat dipastikan.

### Slide 17: Prompt: tujuan, konteks, dan hasil

*Buka Tujuan dan konteks, Batas tindakan, lalu Standar hasil. Setelah menjelaskan ketiganya, buka Instruksi lengkap sebagai contoh gabungan.*

Prompt adalah cara menyampaikan instruksi atau pertanyaan kepada AI. Kita tidak harus memakai kalimat yang rumit. Yang penting, pekerjaan dapat dipahami dan hasilnya dapat dinilai.

Pada **Tujuan dan konteks**, jelaskan mengapa pekerjaan dilakukan dan keadaan aplikasinya. Di sini, database testing sudah tidak diperlukan, sedangkan production masih dipakai.

Pada **Batas tindakan**, bedakan kegiatan memeriksa dengan izin menghapus. Permintaan mengidentifikasi target belum berarti AI boleh langsung menjalankan penghapusan.

Pada **Standar hasil**, jelaskan keadaan akhir yang diinginkan: target yang disepakati dihapus, website tetap berfungsi, dan hasil pemeriksaan dilaporkan.

Contoh lengkap menggabungkan unsur tersebut. Panjangnya mengikuti dampak pekerjaan. Mengganti teks tombol tidak memerlukan penjelasan sepanjang penghapusan data, tetapi tetap perlu jelas.

### Slide 18: Acceptance criteria dapat diperiksa

Acceptance criteria adalah syarat untuk menentukan apakah hasil sudah sesuai kebutuhan. Kita menetapkannya sebagai tujuan yang nanti perlu diperiksa, bukan daftar keberhasilan yang dianggap sudah terjadi.

Dalam contoh database, ada tiga keadaan akhir. **Target** yang disepakati benar-benar dihapus. **Perlindungan** terhadap production dan cadangannya tetap terjaga. **Regresi** diperiksa dengan memastikan website dan koneksinya masih berfungsi.

Kalimat “sudah dibersihkan” terlalu luas untuk membuktikan ketiganya. Kita perlu mengetahui apa yang dibersihkan dan bagaimana keadaan bagian yang seharusnya dipertahankan.

Bedakan juga syarat hasil dengan cara memeriksanya. “Website tetap dapat diakses” adalah hasil yang diinginkan. Langkah untuk memeriksa akses dan koneksi merupakan bagian pelaksanaan. Bukti baru ada setelah pemeriksaannya dilakukan.

## Bab 5: Prompt, rules, dan skill

### Slide 19: Prompt, rules, dan skill saling melengkapi

Ketiganya sama-sama dapat berbentuk teks, jadi perbedaannya bukan sekadar nama berkas. Perhatikan fungsi panduannya dalam pekerjaan.

**Prompt** menjelaskan tugas saat ini. Contohnya, kita meminta AI mengidentifikasi database testing dan menjelaskan rencana penghapusannya.

**Rules** menetapkan ketentuan selama bekerja. Misalnya, penghapusan database harus mendapat persetujuan. Ketentuan itu tetap perlu diikuti saat AI menjalankan tugas yang berkaitan.

**Skill** menyimpan prosedur yang dapat digunakan kembali. Saat perlu memeriksa database sebelum penghapusan, agent dapat memakai panduan langkah pemeriksaan yang sesuai.

Dalam aplikasi yang mendukungnya, rules dapat dimuat dari berkas seperti `AGENTS.md`, sedangkan skill dapat memakai panduan seperti `SKILL.md`. Mekanismenya mengikuti aplikasi masing-masing. Nama berkas bukan jaminan bahwa isinya sudah dibaca, dijalankan, atau selalu dipatuhi.

### Slide 20: Rules: aturan yang jelas dan sesuai cakupan

*Buka Penulisan, Cakupan, lalu Konflik.*

Pada **Penulisan**, bandingkan harapan umum dengan tindakan yang dapat diperiksa. “Bekerja efisien” bisa ditafsirkan berbeda. Aturan tentang mulai dari berkas terkait dan memperluas pemeriksaan jika ada dampak bersama memberi arah yang lebih jelas.

Pada **Cakupan**, bedakan aturan pengembangan aplikasi, batas tugas tertentu, dan preferensi pengguna. Aturan penamaan bisa berlaku luas dalam satu aplikasi. Batas penghapusan database berlaku pada pekerjaan yang berkaitan dengan data tersebut.

Pada **Konflik**, jangan menganggap pesan terbaru selalu boleh menghapus semua ketentuan sebelumnya. Prioritas mengikuti sistem aplikasi agent. Jika instruksi yang relevan belum dapat diselaraskan, konfliknya perlu dijelaskan sebelum tindakan berjalan.

Rules juga perlu memberi ruang untuk keadaan yang memang berbeda. Memeriksa komponen terkait cukup untuk revisi warna, tetapi perubahan yang memengaruhi banyak pemakai mungkin memerlukan penelusuran lebih luas.

### Slide 21: Gunakan skill untuk prosedur berulang

*Buka Penggunaan, Prosedur, lalu Hasil.*

Skill berguna ketika ada cara kerja yang ingin digunakan kembali. Contohnya debugging: masalahnya bisa berbeda, tetapi kita tetap perlu mengulangi kegagalan, menelusuri penyebab, memperbaiki bagian terkait, dan memeriksa hasilnya.

Pada **Penggunaan**, tuliskan kapan skill diperlukan dan informasi apa yang dibutuhkan. Jangan memuat semua prosedur hanya karena tersedia. Pilih yang berhubungan dengan tugas.

Pada **Prosedur**, langkah perlu mencakup keputusan. Dalam pemeriksaan database, target yang belum jelas berarti perlu klarifikasi. Rencana yang belum disetujui berarti penghapusan belum dijalankan. Jadi, skill tidak selalu berupa urutan yang terus maju tanpa melihat keadaan.

Pada **Hasil**, tentukan apa yang harus diperiksa dan dilaporkan. Jika suatu langkah tidak dapat dilakukan, catat keterbatasannya. Nama skill yang disebut dalam jawaban belum membuktikan bahwa langkahnya sudah dikerjakan.

Skill menyediakan panduan, bukan pelatihan ulang model atau tambahan izin tools. Kita tetap menilai kecocokan prosedur dan pelaksanaannya.

### Slide 22: Catat keputusan sebelum berpindah sesi

Saat percakapan panjang atau kita pindah sesi, jangan mengandalkan ingatan bahwa semua keputusan sebelumnya pasti masih tersedia. Ringkasan perlu membantu pekerjaan berikutnya dimulai dari keadaan yang benar.

Bagian **Sudah diputuskan** mencatat tujuan dan batas yang berlaku. Misalnya, perbaikan hanya menyentuh penanganan respons dan tidak mengganti kontrak API.

Bagian **Sudah dilakukan** menyebut perubahan serta hasil pemeriksaan yang masih relevan. Hasil tes lama perlu dibedakan dari hasil setelah kode terbaru berubah.

Bagian **Belum selesai** menyebut ketidakpastian dan langkah berikutnya. Dengan begitu, sesi baru tidak mengulang pekerjaan yang sudah tuntas atau menganggap pekerjaan tersisa sudah selesai.

Ringkasan membantu membawa konteks. Ia bukan bukti bahwa seluruh riwayat tetap tersedia, dan koreksi dalam percakapan tidak otomatis menjadi pembelajaran permanen model.

## Bab 6: Micro task dan feedback loop

### Slide 23: Pendaftaran Ekstrakurikuler

Sekarang kita melihat contoh yang lebih dekat dengan aplikasi yang bisa kalian buat. Pendaftaran ekstrakurikuler akan dibuka besok. User menyiapkan halaman yang memakai API yang sudah tersedia.

Kebutuhannya mencakup identitas siswa, pilihan kegiatan, dan informasi hasil pendaftaran. Nama, NIS, kelas, serta kegiatan bukan hanya elemen tampilan. Nilai tersebut dibutuhkan dalam proses pendaftaran.

Perhatikan bahwa kebutuhan terakhir tidak sekadar berbunyi “tampilkan pesan”. Peserta perlu menerima informasi sesuai hasil pendaftarannya. Halaman yang menampilkan tulisan berhasil belum tentu membuktikan pendaftarannya diterima.

Di adegan berikutnya, kita akan melihat percakapan AI, kode, dan percobaan formulir. Gunakan hubungan ketiganya untuk memahami keadaan aplikasi. Ini simulasi lokal. Percakapannya sudah disiapkan dan tidak menghubungi layanan AI sungguhan.

*Tekan Mulai. Jangan menjelaskan seluruh bug atau ending sebelum percobaan.*

### Slide 24: Pendaftaran ditolak, tetapi halaman menampilkan berhasil

*Gunakan naskah berikut sesuai tahap yang sedang ditampilkan. Tidak perlu membuka semua cabang dalam satu pemaparan.*

**Saat formulir selesai dibuat**

AI sudah memberikan hasil awal dan kita bisa langsung mengambil keputusan deploy. Tetapi kita belum memiliki alasan yang cukup untuk menerima hasilnya. Saya akan membuka Apps untuk melihat apa yang terjadi ketika formulir digunakan.

**Saat membandingkan pengiriman dengan hasil halaman**

Perhatikan isian yang dikirim, respons yang diterima, pesan yang tampil, dan keadaan isian setelahnya. Empat hal itu bisa tidak selaras. Proses kirim yang selesai tidak otomatis berarti pendaftaran disetujui backend.

*Coba kondisi yang relevan dengan jalur pembahasan. Hindari menyatakan penolakan data tidak valid sebagai bug. Data lengkap juga perlu dicoba setelah perbaikan.*

**Saat membuka Kode**

Sekarang kita telusuri bagian yang menentukan pesan. Membuka kode belum berarti kita sudah menganalisis semuanya. Tandai bagian yang berhubungan dengan masalah, lalu bahas fungsinya sebelum memilih perubahan.

*Gunakan panel AI, Kode, dan Apps sesuai kebutuhan. Setelah pembahasan kode atau hasil percobaan, baca penjelasan AI sebelum memilih koreksi. Jika ingin membahas kelambatan, jalurnya melalui penandaan kode terkait, bukan tombol di Apps.*

**Saat memberi koreksi dan mencoba lagi**

Kita memperbaiki satu perilaku dahulu, lalu mengulangi percobaan. Pesan ditolak perlu sesuai keputusan backend. Rincian kesalahan perlu membantu peserta, dan isian yang masih diperlukan tidak boleh hilang ketika peserta harus memperbaikinya.

**Sebelum deploy**

Keputusan ini kita ambil berdasarkan keadaan kode dan hasil percobaan terakhir. Bukan karena AI sudah berkali-kali menjawab, dan bukan karena tampilan sudah terlihat menarik.

### Slide 25: Hasil pendaftaran

*Gunakan pembahasan yang sesuai dengan ending aktual. Nama tab berbeda antara hasil berhasil, bermasalah, dan batas bantuan tercapai. Jangan membacakan semua kemungkinan seolah-olah semuanya terjadi.*

Sekarang kita pisahkan hasil, dasar penilaian, dan perjalanan menuju hasil tersebut. Keadaan akhir tidak hanya bergantung pada banyaknya pertanyaan. Isi perubahan dan keputusan yang diambil lebih penting.

*Jika fungsi sudah sesuai kebutuhan:*

Pesan pendaftaran sudah mengikuti keputusan backend, rincian kesalahan ditampilkan pada isian terkait, dan data tetap tersedia ketika peserta harus memperbaikinya. Berikutnya, lihat bukti percobaan pada kode terakhir. Keadaan kode yang benar dan percobaan yang sudah dilakukan adalah dua informasi yang perlu dibedakan.

*Jika hasil masih bermasalah:*

Kita lihat perilaku yang masih keliru. Apakah halaman mengaku berhasil saat data ditolak, petunjuk kesalahannya belum jelas, isiannya hilang, atau kebutuhan datanya justru dihapus? Perbaikan berikutnya harus berhubungan dengan masalah yang benar-benar terjadi.

*Jika formulir benar tetapi masih lambat:*

Ada temuan lanjutan pada proses pengiriman. Kode melakukan validasi isian secara berurutan, tetapi hasilnya tidak dipakai sebelum pendaftaran dikirim untuk divalidasi lagi. Ini dapat dibahas sebagai optimasi terpisah tanpa mengabaikan validasi backend.

*Jika jalur penghapusan, reset nuklir, atau batas bantuan tercapai:*

Hubungkan akibat dengan pilihan dan penafsiran dalam cerita. Tindakan yang belum dijalankan tidak boleh dianggap selesai. Fokus berikutnya adalah mencatat keadaan dan menentukan pemulihan atau pekerjaan yang masih diperlukan.

### Slide 26: Satu micro task, hasil yang dapat diperiksa

Simulasi tadi memuat beberapa masalah yang berkaitan, tetapi semuanya tidak harus dijadikan satu permintaan besar. Kita dapat menentukan satu unit pekerjaan yang hasilnya jelas.

Contohnya adalah membuat pesan pendaftaran mengikuti keputusan backend. Kita tahu apa yang perlu berubah dan keadaan apa yang perlu dicoba. Batasnya juga jelas: jangan menghilangkan isian peserta yang masih diperlukan saat pendaftaran gagal.

Micro task bukan sekadar tugas dengan sedikit baris kode. Satu baris bisa memiliki dampak besar. Yang dicari adalah tujuan terbatas yang dapat dipahami dan diperiksa.

Tugas dianggap selesai setelah perubahan dipahami dan hasilnya sesuai kebutuhan pada kondisi terkait. Selesainya satu tugas belum berarti seluruh fitur siap digunakan. Setelah perubahan digabungkan, hubungan dengan bagian lain tetap perlu diperiksa.

### Slide 27: Urutkan tugas menurut dependensi

*Buka Respons, Pesan kesalahan, lalu Isian.*

Pada **Respons**, kita lebih dahulu memahami bagaimana backend menyampaikan diterima atau ditolaknya pendaftaran. Dalam contoh ini, status HTTP dan nilai `success` ikut menentukan penanganannya.

Pada **Pesan kesalahan**, rincian dari `errors` perlu ditempatkan pada isian yang sesuai. Pesan untuk NIS tidak cukup ditampilkan sebagai pemberitahuan yang membuat peserta menebak kolom mana yang salah.

Pada **Isian**, keputusan mengosongkan formulir harus mengikuti hasil pendaftaran. Jika ditolak, peserta masih perlu memperbaiki data. Jika diterima, reset dapat dijalankan sesuai kebutuhan formulir.

Inilah maksud dependensi antartugas: ada pemahaman atau perubahan yang menjadi dasar pekerjaan berikutnya. Urutan ini membantu kita menemukan masalah dan menguji hasil dengan lebih terarah, bukan sekadar membagi pekerjaan berdasarkan HTML, CSS, dan JavaScript.

### Slide 28: Temuan lain tidak otomatis masuk cakupan

Dalam proses perbaikan, AI bisa menemukan hal lain dan menawarkan untuk sekalian membereskannya. Usulan seperti itu perlu dinilai hubungannya dengan tujuan.

Pada contoh ini, kita sedang memperbaiki pesan berhasil yang tidak sesuai dengan penolakan backend. Membersihkan data percobaan belum tentu memengaruhi logika pesan tersebut. Menghapus berkas juga dapat menimbulkan masalah baru jika hubungan penggunaannya belum diperiksa.

*Buka pembahasan setelah menjelaskan hubungan usulan dan tujuan.*

Jika tambahan itu tidak diperlukan, catat sebagai pekerjaan berikutnya. Jika ternyata diperlukan, jelaskan mengapa, apa dampaknya, dan bagaimana cakupan tugas berubah.

Membatasi pekerjaan tidak berarti mengabaikan akar masalah. Kita ingin perubahan yang punya alasan, bukan menumpuk tindakan yang terdengar membantu tetapi tidak dapat dikaitkan dengan penyebab.

### Slide 29: Koreksi menyebut kondisi dan hasil

Bandingkan koreksi “masih salah” dengan penjelasan yang menyebut status 422, nilai `success` yang false, dan pesan berhasil yang tetap muncul.

Pada koreksi kedua, AI mendapat kondisi yang bisa ditelusuri. Kita juga menyebut batas bahwa isian peserta tidak boleh dihapus. Jadi, perbaikan tidak hanya mengejar hilangnya satu gejala dengan mengorbankan kebutuhan lain.

*Buka Mengapa lebih membantu.*

Pola yang berguna adalah menjelaskan apa yang dicoba, apa yang terjadi, dan apa yang seharusnya terjadi. Setelah ada perubahan, kita mengulangi kondisi yang sebelumnya gagal dan pemeriksaan terkait.

Koreksi memperbaiki arahan pada pekerjaan saat itu. Ia belum membuktikan hasil berikutnya benar. Untuk menjaga kendali saat perubahan bertambah, kita perlu melihat jejak kode dan membandingkan hasilnya secara lebih jelas.

## Bab 7: Kendali atas perubahan kode

### Slide 30: Ketahui keadaan kode sebelum AI bekerja

*Buka Keadaan awal, Riwayat Git, lalu Batas tugas.*

Pada **Keadaan awal**, lihat pekerjaan yang sudah ada sebelum AI mulai mengedit. Jika ada perubahan milik kita atau teman satu tim yang belum selesai, jangan sampai perubahan itu dianggap hasil AI atau dibuang tanpa diketahui.

Pada **Riwayat Git**, commit membantu mencatat versi berkas yang dipilih. Catatan itu memberi titik pembanding. Namun, Git tidak otomatis menyimpan semua perubahan yang belum dicatat, jadi keadaan awal perlu dipahami terlebih dahulu.

Pada **Batas tugas**, sebutkan bagian yang akan dikerjakan dan bagian yang harus dipertahankan. Instruksi ini membantu proses peninjauan karena kita mengetahui apa yang semestinya berubah.

Tujuan memakai Git di sini adalah menjaga jejak dan pilihan pemulihan. Kita tidak perlu membuat direktori terlihat bersih dengan mencatat atau membuang perubahan yang belum dipahami.

### Slide 31: Baca diff, bukan hanya jawaban AI

*Buka Berkas, Logika, lalu Penjelasan.*

**Diff** memperlihatkan perbedaan antara dua keadaan kode. Mulailah dari berkas yang berubah, lalu lihat baris yang ditambah, dihapus, atau diganti. Setelah itu, pahami artinya terhadap perilaku aplikasi.

Misalnya, AI mengatakan sudah memperbaiki pesan kesalahan. Saat dilihat di diff, ada syarat validasi yang ikut dihapus. Hasil tampilan mungkin terlihat lebih tenang, tetapi data yang seharusnya ditolak bisa saja sekarang diterima.

Pada bagian **Penjelasan**, cocokkan laporan AI dengan perubahan sebenarnya. Jika laporan menyebut hanya teks yang berubah, konfigurasi dan dependensi yang ikut berubah perlu ditelusuri alasannya.

Jumlah baris bukan satu-satunya ukuran risiko. Satu kondisi yang berubah dapat berdampak besar. Diff membantu kita menemukan perubahan, sedangkan pengetahuan tentang alur aplikasi membantu menilai apakah perubahan itu benar.

### Slide 32: Pisahkan perbaikan dari perubahan tambahan

User meminta pesan kesalahan diperbaiki tanpa mengubah tampilan. Pada contoh ini, perbaikan penanganan respons sesuai dengan tujuan. Tetapi AI juga mengubah susunan halaman dan menambah library tampilan.

Kita tidak perlu langsung menganggap seluruh hasil salah. Mungkin ada perbaikan yang benar di dalamnya. Yang perlu dilakukan adalah menilai setiap perubahan berdasarkan alasan dan hubungannya dengan tugas.

*Buka Lihat keputusan.*

Jika perubahan tambahan tidak diperlukan, pisahkan atau kembalikan bagian itu sambil menjaga perbaikan yang memang benar. Jika bagian-bagiannya saling bergantung, periksa hubungannya dahulu sebelum membuang potongan tertentu.

Prinsipnya sama dengan batas micro task, tetapi sekarang kita melihat bukti pada perubahan kode. Membetulkan bug, mengubah tampilan, dan menambah dependensi memiliki dampak berbeda sehingga tidak otomatis diterima sebagai satu paket.

### Slide 33: Pulihkan kendali ketika hasil AI melenceng

*Buka Hentikan, Kembalikan, lalu Bedakan.*

Pada **Hentikan**, cegah perubahan terus bertambah saat kita belum memahami penyebab kerusakan. Catat gejalanya dan bandingkan dengan keadaan terakhir yang diketahui berfungsi.

Pada **Kembalikan**, gunakan diff dan riwayat Git untuk memilih bagian yang perlu dipulihkan. Membatalkan seluruh pekerjaan dapat menghilangkan perubahan lain yang benar atau belum selesai. Setelah pemulihan, periksa kembali perilakunya.

Pada **Bedakan**, ingat bahwa kode dan data aplikasi tidak selalu tersimpan di tempat yang sama. Mengembalikan berkas koneksi dari Git tidak otomatis mengembalikan database yang sudah dihapus.

Tidak ada satu tindakan pembatalan yang tepat untuk semua keadaan. Kita perlu mengetahui apa yang tercatat, apa yang berubah, dan apa yang ingin dipulihkan. Dari situ, kita bisa melanjutkan pekerjaan dengan dasar yang lebih jelas.

### Slide 34: Simpan perubahan yang sudah dipahami

*Buka Pisahkan, Catat di Git, lalu Lanjutkan.*

Pada **Pisahkan**, kelompokkan perubahan berdasarkan tujuan. Jika perbaikan bug tidak bergantung pada perombakan tampilan, memisahkannya akan memudahkan peninjauan dan pemulihan.

Pada **Catat di Git**, commit versi yang sudah ditinjau dengan memilih berkas atau bagian yang memang dimaksud. Pesannya menjelaskan tujuan perubahan. Hasil pemeriksaan yang relevan tetap perlu diketahui, bukan diasumsikan ada karena commit berhasil dibuat.

Pada **Lanjutkan**, tinggalkan catatan singkat tentang perubahan, hasil pemeriksaan, dan hal yang masih tersisa. Catatan ini membantu orang lain atau sesi berikutnya memahami keadaan kode.

Commit lokal, pengiriman ke repositori jarak jauh, dan deployment merupakan tindakan yang berbeda. Beberapa lingkungan menghubungkannya lewat otomatisasi, tetapi hubungan itu bergantung pada konfigurasi. Menyimpan riwayat kode bukan berarti seluruh aplikasi sudah siap diterbitkan.

## Bab 8: Efisiensi dan kesimpulan

### Slide 35: Gunakan bantuan AI sesuai kebutuhan

*Buka Ukuran tugas, Konteks, lalu Bantuan.*

Pada **Ukuran tugas**, sesuaikan proses dengan dampaknya. Mengganti warna tombol tidak otomatis membutuhkan pembacaan seluruh aplikasi. Sebaliknya, perubahan autentikasi perlu mempertimbangkan alur dan akses yang lebih luas.

Pada **Konteks**, pertahankan informasi yang berkaitan dengan tugas. Ringkasan membantu saat percakapan panjang atau berganti topik. Compact dapat mengurangi riwayat yang dibawa, tetapi detail yang hilang perlu disediakan kembali jika diperlukan. Pembacaan baru juga tetap menambah konteks.

Pada **Bantuan**, pilih kemampuan yang dibutuhkan. Penjelasan pesan error tidak selalu memerlukan agent dengan izin edit. Tugas lintas berkas mungkin memerlukan tools yang lebih lengkap.

Jawaban akhir yang singkat belum tentu berarti penggunaan token sedikit. Instruksi, informasi dari tools, dan langkah pekerjaan juga dapat menambah pemakaian. Cara perhitungan biaya, cache, dan kuota mengikuti penyedia. Efisiensi berarti proses yang cukup untuk mencapai hasil, dengan pemeriksaan yang tetap sesuai dampaknya.

### Slide 36: Kesimpulan: developer tetap memegang kendali

*Buka Arahkan, Pahami, lalu Putuskan. Gunakan slide ini untuk merangkum hubungan antarbab.*

**Arahkan** berarti kita menetapkan tujuan, memilih tools yang sesuai, dan memberikan konteks yang relevan. Prompt menjelaskan tugas. Rules memberi ketentuan. Skill membantu menjalankan prosedur yang diperlukan.

**Pahami** berarti kita mengetahui perubahan dan alasannya. Micro task membantu menjaga tujuan tetap terbatas. Diff serta riwayat kode membantu melihat apa yang berubah dan bagaimana kembali jika hasilnya melenceng.

**Putuskan** berarti developer menilai hasil berdasarkan pemeriksaan. Kita bisa menerima bagian yang benar, meminta koreksi, atau menunda penggunaan ketika dasar penilaiannya belum cukup.

Seluruh materi ini membentuk satu cara kerja. AI membantu pelaksanaan, sedangkan developer menjaga arah, memahami dampak, dan menentukan hasil yang boleh dipakai. Inilah yang menghubungkan penggunaan tools dengan tanggung jawab profesional.

### Slide 37: Tanggung jawab developer atas kode hasil AI

*Berikan jeda agar perhatian tertuju pada bagian PESAN UTAMA. Ucapkan kalimat berikut dengan lebih pelan.*

**Kode hasil AI tetap menjadi tanggung jawab developer yang menggunakannya.**

Kita boleh meminta bantuan AI untuk banyak bagian pekerjaan. Tetapi ketika kode itu digunakan, kita tetap perlu memahami kebutuhan yang dilayani, perubahan yang dibuat, dan hasil pemeriksaannya.

Jika ada masalah, menyebut bahwa kodenya dibuat AI belum menjelaskan penyebab atau cara memperbaikinya. Yang membantu adalah kemampuan kita menelusuri perubahan, menjaga keadaan aplikasi, dan mengambil keputusan yang tepat.

Jadi, gunakan bantuan AI dengan tujuan yang jelas. Tinjau perubahan sebelum menerimanya dan periksa hasil sebelum kode digunakan. Kemampuan developer tetap diperlukan untuk menentukan apakah bantuan tersebut menghasilkan solusi yang layak.

*Akhiri setelah pesan utama tersampaikan. Jika tersedia sesi pertanyaan, persilakan peserta bertanya tanpa membuka topik materi baru.*
