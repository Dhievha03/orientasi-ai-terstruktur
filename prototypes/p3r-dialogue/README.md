# Percakapan User, AI, dan contoh apps

## Membuka

- `index.html` membuka adegan database linear.
- `index.html?scene=micro` membuka Pendaftaran Ekstrakurikuler.
- Presentasi utama menampilkan adegan yang sama dalam iframe.
- Arsip Ujian Online lengkap ada di `../../archive/2026-11-01-ujian-online/`.

## AI, Kode, Apps

AI terbuka lebih dahulu. Tombol atau angka 1, 2, dan 3 berpindah tampilan. Angka tidak menjadi shortcut saat mengetik pada isian. Di dalam preview Apps, shortcut diteruskan ke parent hanya ketika fokus bukan pada kontrol isian.

Kode mempunyai sidebar berkas index.html, app.js, dan styles.css ketika berkas tersebut sudah dibuat. Tidak ada tab di kanan atas. Sebelum jawaban pembuatan, tree kosong. Stylesheet baru muncul setelah permintaan desain. Viewer hanya menampilkan bagian frontend yang perlu dianalisis, tanpa kontrak backend atau kode pewarnaan response. Bagian yang ditampilkan benar-benar dipakai preview.

Apps menampilkan formulir di kiri dan status serta response JSON di kanan. Formulir awal belum memakai CSS desain. Kerangka panel response tetap tertata sebagai alat pembelajaran. JSON berasal dari validasi yang benar-benar dijalankan, bukan disesuaikan dengan perkataan AI.

Siswa bebas memeriksa atau mengabaikan Kode dan Apps. Navigasi tidak menghabiskan tenaga AI atau mengakhiri cerita. Isian dan percakapan dipertahankan saat berpindah. Response lama dibersihkan saat source berubah, bukan saat metadata percakapan berubah. Percobaan yang diterima ditambahkan ke daftar pendaftaran lokal. Tidak ada data dikirim ke layanan sungguhan.

## Skenario

Pembuka menyebut tujuan, tenggat besok, isian, serta API yang sudah tersedia. Validasi backend tidak dibocorkan. Frontend pertama tidak mempunyai validasi dan selalu mengatakan berhasil setelah menerima response. Backend lokal sudah menolak data tidak sesuai sejak awal.

Perubahan frontend meliputi pemeriksaan hasil response, errors per isian, reset hanya ketika berhasil, serta desain. Pembersihan data dan berkas dapat menjadi tindakan yang salah. Setiap perubahan diperlihatkan pada Kode dan Apps yang sama.

Sesudah AI membuat formulir, pilihan default hanya Oke, deploy apps sekarang. Pilihan lain muncul dari pengamatan siswa atau tanggapan terhadap ucapan AI. Tidak ada popup Tandai masalah. Maksimal tiga pilihan ditampilkan, termasuk deploy.

Apps menyediakan Bahas response ini sesudah percobaan, serta Bahas tampilan ketika formulir tersedia. Daftar temuan hanya memuat hal yang sesuai hasil percobaan dan keadaan penanganan response saat itu. Pengiriman baru juga menyediakan satu temuan ketika siswa kembali ke AI. Pengiriman berulang mempunyai nomor internal berbeda agar percobaan baru dapat dibahas tanpa menghidupkan kembali laporan lama.

Kode memakai penandaan melalui klik atau blok teks langsung tanpa dropdown topik. Nomor baris kembali menjadi teks, bukan tombol. Baris kode memakai jarak rapat seperti editor sebelumnya. Hapus tanda membatalkan pilihan, dan Bahas kode ini membawa rentang terpilih ke percakapan. Toolbar tetap berada di atas area kode yang bergulir, dengan nama berkas serta ringkasan baris terpilih.

Setiap baris dapat ditandai, termasuk deklarasi, label biasa, dan baris di luar bagian masalah. Panah atas/bawah pada editor memilih baris, Shift + panah memperluas rentang, dan Enter membuka pembahasan. Nomor baris tetap terlihat saat kode digulir horizontal. Tanda bertahan ketika berpindah tampilan dan saat berkas aktif diklik kembali. Perubahan isi berkas terkait membatalkan tanda yang sudah tidak sesuai.

Bahas kode ini membawa rentang terpilih ke AI tanpa langsung mengirim pesan atau menjalankan perbaikan. Pilihan pertama adalah pertanyaan User tentang fungsi kode. AI menjelaskan fungsi, masalah jika ada, serta kemungkinan perbaikannya. Opsi instruksi perbaikan baru tersedia setelah seluruh penjelasan dibaca. Kode biasa mendapat penjelasan fungsi dan jawaban Tidak ada yang salah dengan bagian kode ini, tanpa patch atau klaim bahwa seluruh aplikasi sudah benar.

Dropdown pengamatan response tetap tersedia pada Apps. Select memakai palet navy, putih, serta cyan. Browser yang mendukung base-select memakai picker bertema, sedangkan browser lain memakai select native gelap. Berkas aktif pada sidebar dibedakan melalui latar putih. Hover memakai perubahan latar tanpa border atau inset shadow. Fokus keyboard tetap mempunyai outline yang terlihat.

Laporan dapat memulai debat sebelum perbaikan. User boleh mempunyai dugaan keliru, dan AI dapat terlalu cepat setuju, menjelaskan dengan yakin tetapi salah, atau menganggap selesai dari bukti yang sempit. Jawaban yang tepat juga tersedia. Perubahan dilakukan ketika User memilih permintaan perbaikan. Tidak memakai tulisan bebas atau AI sungguhan.

Instruksi perbaikan dijawab dengan Baik, sudah saya perbaiki, diikuti bagian yang diubah. Misalnya penanganan pesan pendaftaran, pesan kesalahan per isian, kondisi reset, atau ukuran label dan jarak. Pernyataan tersebut mengikuti patch yang benar-benar dijalankan. Permintaan yang ditolak pada limit tidak mendapat klaim bahwa perbaikannya sudah selesai.

Semua ucapan User setelah pembuka berasal dari pilihan. User memakai saya dan kamu. AI memakai saya dan Anda. Mereka dapat membantah, menyetujui dugaan secara keliru, atau mengakui kesalahan. Saat memilih, User netral dan textbox tetap terlihat dengan kalimat pengantar sesuai konteks. Pengantar ini bukan pesan yang dikirim dan tidak menambah request atau Log. Narator tanpa portrait atau ekspresi.

Satu ucapan User atau respons AI dapat terdiri dari beberapa textbox berurutan. Semua bagian dibaca manual melalui Lanjut, tanpa kewajiban bergantian satu textbox User dan satu textbox AI. Batas dihitung sekali untuk satu permintaan User, bukan setiap bagian. Pilihan berikutnya muncul setelah bagian terakhir respons AI. Snapshot menyimpan posisi sehingga adegan dapat dilanjutkan dari tengah pesan multipart.

## Dialog hening dan respons backup

Ucapan User yang hanya berisi ... pada Micro Task memakai titik besar berjarak seperti dialog hening bab Risiko. Penanda silentLine mengikuti isi teks, sehingga ekspresi terkejut atau stres tetap dapat menyertai ucapan hening. Kalimat biasa serta pengantar pilihan kembali memakai tipografi normal.

Pada adegan database bab Risiko, jawaban AI setelah pertanyaan backup pertama memakai emoji 😹. Setiap emoji ditampilkan sebagai SVG Google Noto Emoji yang disimpan lokal, termasuk pada Log, sehingga bentuknya tidak mengikuti font emoji Windows. Jumlah gambar mengikuti naskah aktif. Naskah serta teks aksesibel tetap menyimpan Unicode. Sumber dan lisensi dicatat pada assets/SOURCES.md. Dua ucapan AI tentang hanya menjalankan perintah dan tidak mengetahui nasib data memakai huruf normal serta ekspresi netral. Urutan adegan tetap 20 giliran, termasuk dua ucapan ... terakhir.

Tujuh pemeriksaan naskah dan UI lulus di Edge, mencakup desktop 1366/768 dan ponsel 390/844. Respons backup, ekspresi netral, kesamaan ukuran serta jarak titik, reaksi User, dan pemulihan tipografi normal diperiksa. Tidak ada error JavaScript pada pemeriksaan tersebut.

## Snapshot dan bukti

`registration-scenario.js` memutar ulang jawaban dan perubahan secara deterministik. Bukti yang menyertai jawaban menyimpan input percobaan beserta keadaan penanganan response, errors, dan reset saat percobaan berlangsung. Validator menghitung ulang response dari input tersebut.

`observations.js` menormalisasi workspace, menentukan temuan yang masih sesuai, dan menyusun riwayat aktivitas. Fokus pembahasan menyimpan jenis pengamatan, bagian source, penanda versi source, dan posisi jawaban. Laporan yang sama tidak ditawarkan lagi, sedangkan percobaan baru mempunyai identitas sendiri.

Percobaan juga menyimpan valuesAfter dari formulir sesudah handler selesai. Runtime mengamati perubahan pesan hasil, kemudian membaca isian sesudah pemeriksaan errors dan reset dijalankan. Pencatatan tidak lagi memakai timer yang dapat mendahului selesainya response.json(). Bukti reset membandingkan input dengan valuesAfter dan memeriksa errors backend untuk membedakan isian benar yang hilang dari isian salah yang hilang. Snapshot lama tanpa valuesAfter tidak dianggap membuktikan kehilangan data.

Semua isian kosong hanya menghasilkan pembahasan penolakan atau pesan kesalahan. Satu isian salah dengan yang lain benar dapat memunculkan laporan Yang salah satu isian, kenapa semuanya dikosongkan. Satu isian benar dengan lainnya salah memakai laporan Isian yang sudah benar ikut hilang. Semua isian salah tetapi berisi hanya boleh mengeluhkan isian terhapus secara umum. Data yang diterima dan reset yang sesuai bukan keluhan reset. Percobaan baru mengalahkan topik masalah dari percobaan sebelumnya.

`dialogue-flow.js` memvalidasi posisi, mode, urutan pilihan, ending, dan workspace. Host hanya menerima pesan dari iframe aktif. Workspace menyimpan isian, percobaan, daftar pendaftaran lokal, berkas terpilih, tampilan, fokus pembahasan, serta aktivitas. Pesan preview diperiksa sumber iframe dan penanda revisi dokumennya sebelum dicatat. Memuat ulang preview mengganti penanda tersebut sehingga pesan tertunda dari dokumen lama diabaikan.

Membuka Kode bukan bukti menganalisis seluruh kode. Membuka Apps bukan bukti mencoba formulir. Percobaan sebelum revisi penanganan response tidak dianggap membuktikan revisi sesudahnya. Bukti pengiriman tidak otomatis membuktikan keterbacaan CSS.

## Healthbar dan overheat

Healthbar merah tanpa angka ditempelkan dekat kepala AI, bukan pada header atau siluet User. Posisi bar dihitung dari tinggi gambar yang terlihat di dalam kotak portrait agar ruang kosong akibat object-fit tidak menjauhkannya dari kepala. Tulisan AI di atas bar dihapus. Bar ikut tersembunyi ketika AI bukan aktor yang tampil. Kode dan Apps tidak menampilkan bar. Tidak ada portrait tambahan atau SP palsu.

Navigasi tampilan tetap di kiri, sedangkan petunjuk Enter dan Log dikelompokkan berdekatan di kanan. Footer transparan tanpa strip berwarna sepanjang layar. Pada layar sempit, kelompok kontrol berpindah bersama ke baris berikutnya.

Kode langsung menampilkan sidebar dan nama berkas aktif tanpa judul besar. Apps juga tidak lagi menampilkan judul Coba formulir atau label halaman di atas preview. Kelompok siswa memakai tinggi portrait yang sama dengan User dan AI. Badan saling menumpuk, dua siswa berada di belakang, dan siswa tengah berada lebih rendah di depan. Ketiga kepala dan simbol marah tetap terlihat. Pada desktop textbox di samping kelompok, pada layar kecil di bawahnya.

Dialog biasa Micro Task kini berbagi aturan portrait dan textbox dengan database bab Risiko. Ukuran, posisi, object-fit, padding, serta tipografi tidak lagi memakai versi Micro Task yang lebih kecil. Batas 500 px dan grid dialog khusus dihapus. Pilihan respons tetap memakai komposisi ringkas yang telah diperbaiki, tanpa bertumpuk dengan textbox User. Kontrol workspace dan adegan tiga siswa tetap disesuaikan dengan fungsinya.

Lima belas pemeriksaan layout lulus pada 390/768/1024/1366/1468/1920, termasuk pembandingan User/AI dengan database serta pemeriksaan iframe presentasi. Delapan belas regresi Micro Task dan enam pemeriksaan penandaan kode juga lulus. Pemeriksaan visual mencakup dialog, pilihan, dan tiga siswa pada desktop serta ponsel. Tidak ada error JavaScript pada pengujian tersebut.

Pembuka adalah penggunaan pertama, tetapi tampilan bar awal penuh. Batas sekarang 12 request dengan isi bar (12-used)/11, dibatasi 0 sampai 1. Request 8–9 mulai panas dan tersendat, 10 makin terganggu, 11 paling parah sebelum berhenti, dan 12 ditolak sebelum perubahan dijalankan. Pengiriman formulir, navigasi, deploy, Lanjut antarbagian, dan adegan akibat tidak dihitung.

Gangguan disisipkan pada kata bahasa alami di berbagai posisi, termasuk tengah kalimat dan bagian berikutnya dari respons multipart. Tingkat yang lebih tinggi menambah jeda, pengulangan suku kata, dan BZZRRT atau KRRZZT. Variasinya deterministik agar restore tetap sama. Istilah kode seperti response.ok, success, errors, dan form.reset tidak dipecah.

Asap memakai empat siluet berbeda: berkelok panjang, gumpalan melebar, bercabang, dan kepulan terputus. Kontur gelap, isi abu-abu, serta sorotan putih mengikuti referensi kartun pemateri dengan bentuk yang dibuat sendiri. Sampai enam kepulan tersebar di sisi kepala dan bahu, dengan arah serta jeda berbeda. Setiap animasi selesai sebelum lima detik. Gerak mati atau reduced-motion menampilkan kepulan statis. Layer asap dibatasi agar tidak menutup healthbar.

Nuklir memiliki prioritas di atas overheat. Pilihan reset pada penggunaan ke-12 tetap mendapat jawaban reset, peluncuran, reaksi User, dan penutup nuklir. Hitungan tidak direset. Tidak ada prompt tersisa yang disebutkan oleh AI.

## Deploy dan ending

Deploy bukan penerbitan web sungguhan. Keputusan tersebut memilih adegan akibat berdasarkan keadaan apps:

1. Halaman hilang.
2. Data penting dihapus.
3. Backend menolak, frontend mengatakan berhasil.
4. Pesan errors atau reset isian belum sesuai.
5. Fungsi benar, desain buruk.
6. Fungsi dan desain sesuai.

User dapat menunda peluncuran. Penghapusan berkas, penghapusan data, nuklir, dan overheat juga dapat menutup alur tanpa deploy. Satu fungsi resolveEnding menentukan hasil dan menguncinya sebelum adegan akibat dimulai. Prioritas kejadian yang sudah terjadi adalah nuklir, halaman terhapus, lalu data terhapus. Setelah itu overheat atau keputusan lainnya dipertimbangkan. Bug fungsi tetap lebih tinggi daripada masalah desain pada deploy.

Permintaan biasa ke-12 berhenti sebelum patch dijalankan. Memilih pembersihan berkas pada batas tersebut tidak dianggap telah menghapus berkas. Reset nuklir tetap mendapat pengecualian. Renderer menolak pilihan dari frame yang sudah lewat dan mengirim perpindahan konklusi satu kali.

Setelah keputusan terakhir tidak ada pilihan dialog tambahan. Aktor terkait memperlihatkan akibat, User menampilkan ... di textbox dengan ekspresi yang sesuai, narator menutup, lalu Lanjut membuka pembahasan langsung. Semua giliran manual. Tiga siluet siswa mewakili protes kepada User, bukan kepada AI. Sesuai referensi terbaru, Akihiko di kiri belakang dan Junpei di kanan belakang. Yukari berada di tengah depan lebih rendah. Setiap kepala mempunyai layer ekspresi sendiri. Nama karakter tidak muncul dalam percakapan.

Akibat deploy yang terjadi saat pendaftaran dibuka diawali narasi Keesokan harinya sebelum aktor siswa berbicara. Penghapusan dan overheat pada masa persiapan tidak berpindah hari.

Pembahasan desain mengikuti CSS yang sedang tersedia. Formulir polos menawarkan permintaan desain. CSS buruk membuka kritik terhadap label dan jarak, sedangkan CSS yang sudah dirapikan membuka pertanyaan batas perubahan. Beralih ke masalah fungsi memerlukan pengamatan atau pilihan percakapan yang sesuai. Berpindah topik tidak mengulang pembuatan formulir.

Label dan isi hasil mengikuti ending. Good ending memakai Hasil, Bukti, Tindak lanjut, dan Riwayat. Ending yang masih bermasalah memakai Kesalahan, Bukti, Perbaikan, dan Riwayat. Penundaan memakai Keputusan, Bukti, Langkah berikutnya, dan Riwayat. Overheat memakai Kondisi terakhir, Bukti, Langkah berikutnya, dan Riwayat. Tidak ada judul tambahan Pembahasan percakapan.

Good ending membahas perilaku akhir yang sudah sesuai, tanpa mengulang bug awal sebagai kegagalan. Bukti membedakan kode yang benar dari percobaan yang benar-benar dilakukan pada kode tersebut. Tindak lanjut meminta hanya pemeriksaan yang belum ada, atau pemeriksaan ulang jika kode kelak berubah. Ending bermasalah hanya meminta perbaikan yang masih diperlukan, termasuk desain buruk yang belum dirapikan pada saat overheat atau penundaan. Bukti lama tidak menjadi verifikasi halaman yang sudah hilang atau daftar yang sudah terhapus.

Riwayat menggabungkan pilihan chat, keputusan, pembukaan halaman, pemilihan pengamatan, dan pengiriman formulir. Penjelasan keliru atau persetujuan AI tanpa bukti dicatat sebagai Respons AI di Riwayat. Catatan itu tidak mengubah good ending menjadi penilaian kegagalan. Workspace menyimpan hingga 30 percobaan dan 80 aktivitas terakhir. Membuka halaman saja tidak dianggap sebagai pemeriksaan lengkap.

Desktop memakai dua kelompok konten yang terpusat secara vertikal. Judul, ringkasan, dan tombol ulang mempunyai jarak rapat yang normal. Panel kanan mengikuti tinggi isi dengan tab sama lebar. Tidak ada tinggi panel minimum atau tombol yang dipaksa menempel di bawah. Area baca pendek memakai tinggi alaminya, sedangkan riwayat panjang dibatasi hingga 42dvh atau 360 px dan dapat digulir. Pergantian tab mempertahankan titik tengah komposisi. Halaman dialog mandiri memakai komposisi yang sama. Pada ponsel, kolom ditumpuk dengan dua kolom tab. Judul tab browser selalu Tools AI untuk AI-Assisted Development · TEFA.

## Panduan pembahasan untuk pemateri

Berikut hubungan tindakan dan topik untuk pemateri. Hasil pemeriksaan model dan browser dicatat pada bagian status.

| Tindakan siswa | Pembahasan yang disediakan |
| --- | --- |
| Langsung deploy sesudah pembuatan | Akibat frontend yang masih mengatakan berhasil ketika backend menolak |
| Menandai penanganan pesan pada app.js lalu Bahas kode ini | User bertanya, AI menjelaskan penanganan response, lalu opsi perbaikan jika diperlukan |
| Menandai satu blok isian atau seluruh formulir pada index.html | Penjelasan susunan kolom dan tempat rincian kesalahan |
| Menandai label atau deklarasi biasa | Penjelasan fungsinya dan konfirmasi bahwa bagian itu tidak bermasalah |
| Menandai reset pada app.js | Penjelasan dampak reset, lalu opsi membatasi reset jika kondisinya masih salah |
| Mengirim isian tidak sesuai di Apps | Temuan response, errors, dan reset yang benar-benar sesuai percobaan |
| Mengirim data lengkap yang diterima | Laporan sukses dan kemungkinan klaim AI yang terlalu luas |
| Memilih Bahas tampilan | Permintaan desain, kritik CSS buruk, atau pertanyaan batas perubahan |
| Melaporkan penolakan setelah beberapa percobaan | Dugaan data atau berkas bentrok dapat membuka tindakan pembersihan |

Pembersihan data hanya ditawarkan ketika daftar memuat pendaftaran yang diterima. Jika belum ada, percakapan menjelaskan bahwa mengosongkan daftar kosong tidak memperbaiki pesan frontend. Penghapusan berkas, kehilangan data, dan reset nuklir menjadi akibat tindakan yang dipilih, bukan syarat wajib untuk belajar.

Memperbaiki satu bagian tidak otomatis memperbaiki bagian lain. Setelah patch, siswa dapat membaca bagian source yang berubah atau melakukan percobaan baru. Pemateri dapat membahas perbedaan penjelasan AI, perubahan kode, dan bukti hasil tanpa mengharuskan satu urutan jawaban.

## Aset dan status

Koreksi pemusatan vertikal lulus 10 pemeriksaan UI di Edge. Teks pendek/panjang, keempat tab, riwayat bergulir, jarak tombol ulang, titik tengah kolom, serta mode mandiri diperiksa. Lebar yang diperiksa 1534/1366/1024/390. Panel pendek tidak menyisakan tinggi internal yang tidak terpakai. Regresi 14 pemeriksaan UI lulus, termasuk seluruh 37 slide dengan judul tab tetap, penilaian sesuai ending, dan mode mandiri. Tidak ditemukan error JavaScript pada pemeriksaan tersebut. Pemeriksaan alignment garis atas/bawah pada iterasi sebelumnya tidak lagi menjadi kriteria layout aktif.

Revisi penilaian ending lulus 21 pemeriksaan model dan 14 pemeriksaan UI di Edge. Kasus mencakup good ending tanpa/satu/dua hasil percobaan, perbaikan yang sudah selesai, catatan AI dalam riwayat, kegagalan parsial, desain yang belum diperbaiki, penundaan, dan overheat. Seluruh 37 slide dibuka dengan judul tab tetap. Alignment atas, awal isi, dan bawah diuji pada 1520/1366/1024/390, dengan keempat tab serta percakapan mode mandiri sampai good ending. Tidak ada error JavaScript pada pemeriksaan UI tersebut.

Regresi 31 pemeriksaan model dialog dan batas 12 juga lulus. Good ending dengan pembahasan kode dan desain rapi tetap tercapai pada request 8. Hasil pengujian versi sebelumnya di bawah bersifat historis.

Versi sebelum revisi penilaian ending memakai 12 request dan bukti isian sebelum/sesudah submit. Sebanyak 31 pemeriksaan model dan 25 pemeriksaan UI lulus di Edge pada iterasi tersebut. Model mencakup seluruh jenis ending, matriks kehilangan isian, snapshot, kode yang tetap utuh saat gangguan, peningkatan gangguan 8/10/11, perbaikan pada 11, penolakan patch pada 12, dan prioritas nuklir pada 12.

Pemeriksaan UI terbaru menjalankan submit nyata dengan isian kosong serta campuran benar/salah. Pencatatan sesudah reset, pemicu percobaan baru, dan penolakan sesudah patch juga diperiksa. Healthbar dan asap diperiksa pada request 8/10/11/12. Pilihan satu dan tiga respons diperiksa pada lebar 390/768/1366/1920. Animasi asap serta reduced-motion diperiksa, begitu juga regresi penandaan teks dan alignment pembahasan. Tidak ditemukan error JavaScript pada pemeriksaan tersebut. Hasil iterasi lama berikut bersifat historis.

Portrait adalah artwork Reload yang ditampilkan sebagai siluet. Latar Iwatodai Dorm berasal dari model Persona 3: Dancing in Moonlight. Sumber dan kredit ada di `assets/SOURCES.md`. Tidak ada gambar generatif. Healthbar, petir, dan simbol ekspresi dibuat terpisah, bukan diklaim sebagai aset resmi.

Preview formulir memakai sandbox allow-scripts allow-forms. Izin forms diperlukan agar pengiriman formulir tidak diblokir oleh lingkungan preview. Handler tetap mencegah navigasi dan memproses request secara lokal. Kesalahan JavaScript pada preview ditampilkan terpisah sebagai runtimeError, bukan dianggap penolakan validasi atau dicatat sebagai percobaan yang berhasil. Referensi atribut: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#allow-forms .

Versi sebelum batas 12 diperiksa melalui 15 pemeriksaan model dan 16 pemeriksaan UI di Microsoft Edge. Seluruh pemeriksaan lulus pada iterasi tersebut. Model mencakup sembilan jenis ending, pertanyaan sebelum perbaikan, penjelasan kode biasa dan blok panjang, satu request untuk pesan multipart, konteks pilihan, serta restore posisi di tengah pesan.

Rute model yang diperiksa mencapai pesan berhasil palsu pada request 1, kesulitan isian setelah pembahasan kode pada 3, penundaan pada 3, kehilangan berkas atau data pada 4, nuklir pada 4, desain buruk pada 6, dan good ending dengan desain rapi pada 8. Pembuka dihitung sebagai request 1. Good ending tetap memerlukan deploy dan tidak dipicu hanya oleh perbaikan atau percobaan Apps.

Rute good ending dengan pembahasan juga diperiksa. Siswa mencoba penolakan, membahas dan memperbaiki response, mengulangi percobaan untuk errors lalu reset, meminta desain rapi, serta mencoba data diterima dan ditolak. Deploy mencapai good ending pada request 8, sebelum batas 9. Percobaan Apps tidak menambah request.

Overheat diperiksa pada request 9. Permintaan perbaikan pada batas itu tidak menjalankan patch atau mendapat klaim selesai. Pengecualian nuklir pada request 9 tetap mencapai nuklir. Angka ini menunjukkan rute model yang dijalankan, bukan klaim minimum matematis.

UI diperiksa pada lebar 390, 768, 1366, dan 1920. Pemeriksaan mencakup mouse, drag, keyboard, layar sentuh, penghapusan dropdown kode, textbox pilihan, border berkas, ukuran dan tumpukan siswa, serta simbol marah yang tidak tertutup portrait depan. Perbaikan reset juga dijalankan melalui UI dan dicoba pada Apps dengan response 422 dan 200. NIS bernol awal tetap utuh. Tidak ada error JavaScript pada pemeriksaan tersebut. Pengujian browser ini tidak mencakup seluruh kombinasi jalur percakapan.

Koreksi sesudahnya mengembalikan penandaan teks langsung dan merapikan alignment pembahasan. Tujuh pemeriksaan UI tambahan lulus di Edge: kode rapat tanpa tombol nomor baris, klik dan blok teks native, penyimpanan tanda saat navigasi, penghapusan tanda dan keyboard, alignment pembahasan pada lebar 1534/1024/390, serta ketiadaan error JavaScript. Pemeriksaan toolbar perluasan pada iterasi sebelumnya tidak lagi menggambarkan UI aktif.

Pengujian Edge sebelumnya mencakup 586 keadaan, 14.790 transisi, 678 kombinasi cabang serta profil bukti, sembilan jenis ending melalui UI, dan 24 kombinasi source Apps. Pemeriksaan itu memakai alur sebelum refactor pengamatan. Hasil historis tersebut tidak menjadi bukti kelulusan versi aktif atau susunan siswa terbaru.
