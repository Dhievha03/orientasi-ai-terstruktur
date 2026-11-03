# Pendaftaran Ekstrakurikuler

Contoh aktif berada dalam tiga tampilan AI, Kode, dan Apps. `index.html` membuka percakapan lebih dahulu. Siswa bebas membuka Kode atau Apps melalui tombol atau angka 1, 2, dan 3. Angka tidak menjadi shortcut saat mengetik pada isian.

## Sumber dan preview

`example.js` menghasilkan bagian HTML formulir, CSS desain, serta handler JS melalui `sources(state)`. Bagian yang sama menjadi isi halaman Kode dan dokumen srcdoc pada preview Apps. Kontrak API, pewarnaan JSON, dan kerangka dua panel merupakan alat pembelajaran, bukan source frontend yang harus dibaca siswa.

JavaScript awal berisi 66 baris dan versi lengkap 79 baris. Fungsi bacaIsian, aturPengiriman, bersihkanPesan, tampilkanHasil, bersihkanFormulir, serta kirimIsian dipakai langsung oleh handler submit. Tombol dinonaktifkan ketika pengiriman berlangsung, pengiriman ganda diabaikan, dan finally memulihkan tombol ketika proses berhasil ataupun gagal. Status penolakan 422 tetap menjadi bagian konflik penanganan response, bukan dianggap kegagalan transport.

CSS desain buruk maupun baik memakai indentasi dua spasi, satu deklarasi per baris, dan baris kosong antarblok. HTML juga menempatkan setiap option pada baris sendiri. Source terformat ini menjadi input preview, sehingga nomor baris viewer merujuk pada kode yang benar-benar dijalankan.

Sebelum AI menjawab instruksi pembuka, belum ada berkas dan Apps menampilkan keadaan belum dibuat. Jawaban pembuatan menghasilkan index.html dan app.js. Styles.css belum ada sampai permintaan desain dijalankan. Perbaikan response, errors, serta reset benar-benar mengubah baris kode yang terlihat, bukan sekadar mengubah flag pada kode solusi yang sudah tersedia sejak awal.

Formulir memuat nama lengkap, NIS sebagai teks, kelas, serta pilihan ekstrakurikuler. Pilihan awal kelas dan kegiatan mempunyai nilai kosong. HTML memakai novalidate tanpa required atau pattern. Sebelum diminta merapikan desain, formulir memakai tampilan standar browser tanpa stylesheet formulir. Panel response tetap ditata oleh kerangka pembelajaran. Frontend awal belum memvalidasi dan selalu menampilkan berhasil sesudah menerima response. Reset awal juga mengosongkan formulir sesudah setiap pengiriman.

Backend dijalankan secara lokal melalui fungsi backend(input). Kontrak validasinya tetap sepanjang cerita. Nama spasi ditolak, NIS harus digit dan nol awal dipertahankan, kelas serta ekstrakurikuler harus berasal dari daftar yang disediakan. Pengiriman yang ditolak menghasilkan status 422, success false, dan errors per isian. Data benar menghasilkan status 200 dan success true.

Tidak ada autentikasi, server sungguhan, API key, email, atau publikasi web. Istilah backend dan deploy di dalam cerita adalah konteks pembelajaran. Fungsi kirimPendaftaran disediakan oleh runtime alat pembelajaran dan mengembalikan objek Response dengan kontrak tersebut. Viewer menampilkan pemakaiannya pada event submit, bukan seluruh implementasi backend.

Iframe preview mengizinkan scripts dan forms. Pengiriman tetap ditangani JS lokal dan tidak menavigasi halaman. Larangan forms pada sandbox sebelumnya telah dilepas karena memblokir penggunaan formulir. Jika kode preview gagal dijalankan, panel menampilkan runtimeError dan catatan Apps menyampaikan pesan kesalahan. Keadaan itu dibedakan dari response 422 yang memang menjadi bahan analisis.

## Kebijakan pendaftaran

Contoh ini menilai setiap pengiriman secara mandiri. Belum ada aturan kuota, NIS duplikat, atau batas jumlah kegiatan per siswa. Itu bukan aturan sekolah yang diasumsikan. Jika diperlukan, kebijakan tersebut perlu ditentukan terpisah.

## Tampilan Apps

Formulir di kiri dengan proporsi 45%, response di kanan 55%. Layar kecil menyusun formulir di atas response. Status dan JSON menunjukkan hasil backend yang sebenarnya, meskipun pesan frontend salah. Daftar pendaftaran diterima hanya bertambah jika backend menerima data.

Mengubah penanganan response, errors, reset, atau desain mengganti sumber preview. Isian terakhir dipertahankan saat berpindah tampilan. Response lama dibersihkan setelah kode berubah. Reset formulir yang masih salah tetap dapat menghapus isian saat pengiriman, karena itu bagian konflik yang dipelajari.

Instruksi muat satu layar menghasilkan CSS yang memaksakan empat kolom dengan label dan isian kecil. Instruksi yang penting-penting saja mengubah HTML menjadi nama dan NIS saja. Backend tetap mewajibkan kelas serta ekstrakurikuler, sehingga pengiriman ditolak. Pilihan Kembalikan isian mengembalikan kedua kontrol. Keadaan simplified ikut disimpan dalam bukti agar percobaan dari susunan formulir berbeda tidak dianggap memeriksa HTML terbaru.

Setelah jawaban pembuatan, pilihan default pada halaman AI hanya deploy. Percobaan yang baru dilakukan menyediakan temuan sesuai hasilnya. Bahas hasil percobaan memilih temuan pengiriman terakhir. Dialog menyebut isian yang ditolak dan pesan backend, misalnya NIS abc atau kelas yang belum dipilih. Penolakan yang sesuai dijelaskan sebagai perilaku yang benar. Saran berikutnya meminta pengiriman data lengkap jika belum ada, atau mengakui pengiriman diterima yang sudah dicoba. Bahas kode ini membawa rentang yang ditandai, sedangkan Bahas tampilan membuka pembicaraan tentang CSS yang sedang digunakan. Menandai baris belum mengirim chat atau mengubah kode.

Pembahasan kode dimulai dari pertanyaan User. AI menjelaskan fungsi bagian yang ditandai, kemudian kemungkinan perbaikan. Opsi instruksi perbaikan baru tersedia setelah penjelasan selesai. Bagian yang tidak bermasalah mendapat penjelasan fungsinya tanpa perbaikan palsu. Biaya pertanyaan kode adalah 1 poin per 15 baris tidak kosong dalam rentang terpilih, dibulatkan ke atas dan dibatasi 2 poin. Pembagian pertanyaan atau jawaban menjadi beberapa textbox tidak menambah biaya. Menandai kode dan membuka pilihan pertanyaan belum memakai poin.

Setiap dokumen preview mempunyai penanda revisi. Workspace memeriksa sumber iframe dan penanda tersebut sebelum menerima pesan hasil, isian, shortcut, atau kesalahan runtime. Pesan tertunda dari dokumen sebelumnya tidak dicatat pada preview pengganti. Metadata percakapan tidak memuat ulang preview.

Runtime mencatat input dan valuesAfter sesudah handler selesai mengubah pesan, errors, serta reset. MutationObserver pada pesan hasil menggantikan timer pencatatan yang dapat selesai sebelum response.json(). Formulir kosong tidak dianggap kehilangan data. Laporan tentang isian benar yang hilang hanya tersedia jika nilai tersebut benar menurut backend dan kosong sesudah submit. Nilai pascasubmit yang tidak tersedia tidak ditebak.

## Keadaan frontend

- checkResponse menentukan apakah halaman membaca response.ok dan success.
- fieldErrors menentukan apakah rincian errors tampil pada isian.
- keepValues menentukan apakah isian dipertahankan saat pendaftaran ditolak.
- simplified menentukan apakah isian kelas dan pilihan ekstrakurikuler telah dihapus akibat salah tafsir.
- design memilih plain, bad, atau good.
- filesAvailable menentukan apakah halaman tersedia setelah penghapusan.
- dataLost mencatat penghapusan seluruh daftar dalam alur cerita.

Tidak ada evaluasi string atau eksekusi input siswa sebagai kode. Source preview dibuat dari keadaan yang dipilih skenario. Isian dinormalisasi sebelum disimpan dan ditanam sebagai JSON yang meloloskan karakter pembuka tag.

## Status

Biaya per 15 baris diverifikasi pada source HTML/CSS/JS dengan batas 15/16/30/31, baris kosong, dan pemilihan satu file. Healthbar diuji melalui penandaan keyboard serta pengiriman pertanyaan di UI. Restore dan Lanjut tidak menagih ulang. Hasil gabungan revisi ini 60 model dan 41 browser. Hasil berikut mencatat iterasi sebelumnya.

Revisi dialog hasil percobaan diuji pada model untuk NIS bukan angka, NIS kosong, kelas belum dipilih, semua isian kosong, beberapa isian salah, dan percobaan diterima yang sudah tersedia. Alur NIS abc juga diuji melalui pengiriman Apps, Bahas hasil percobaan, dan pertanyaan lanjutan di AI. Hasil gabungan sesi ini 35 pemeriksaan model dan 72 browser, tanpa error JavaScript pada browser. Hasil berikut mencatat iterasi sebelumnya.

Revisi source dan instruksi rancu lulus 28 pemeriksaan model dan 56 browser, termasuk delapan ending aktif, lifecycle submit, pencegahan kirim ganda, kegagalan transport, pencatatan isian sesudah reset, serta penghapusan/pemulihan isian wajib. CSS viewer dibandingkan dengan source yang dipakai preview. Angka berikut mencatat iterasi sebelumnya.

Revisi batas 12 lulus 31 pemeriksaan model dan 25 pemeriksaan UI di Microsoft Edge. Model mencakup seluruh sembilan jenis ending dan good ending pada request ke-8 melalui pembahasan ketiga bug serta desain rapi. UI mencakup submit kosong, satu isian benar dengan sisanya salah, satu isian salah dengan sisanya benar, bukti sesudah reset, dan hilangnya keluhan reset setelah patch. Pengujian penandaan teks langsung dan alignment pembahasan juga lulus.

Pengujian Edge atas 24 kombinasi flags dan desain dilakukan sebelum integrasi pengamatan serta penanda revisi preview. Hasil tersebut bersifat historis. Pemeriksaan UI terbaru tidak mengulang seluruh matriks tersebut.
