# Pendaftaran Ekstrakurikuler dengan AI, Kode, dan Apps

## Acuan

Rencana dan script disepakati dalam percakapan pemateri. Semua aturan dialog, ekspresi, penutup manual, dan bahasa visual yang masih berlaku dipertahankan. Implementasi langsung dalam folder presentasi. Pengguna menguji sendiri. Tidak menjalankan browser, pemeriksaan sintaks, tes otomatis, review subagent, commit, atau publish.

## Struktur

- `archive/2026-11-01-ujian-online/` memuat snapshot presentasi dan percakapan sebelum penggantian. Sumber, font, aset, dan modul disalin dengan struktur relatif yang sama. Namespace localStorage arsip dipisahkan. Snapshot tar mempertahankan berkas sebelum perubahan namespace.
- `examples/extracurricular-registration/example.js` menghasilkan sumber HTML/CSS/JS dan preview dari satu definisi serta kontrak backend lokal.
- `prototypes/p3r-dialogue/observations.js` menormalisasi pengamatan, bukti percobaan, fokus pembahasan, dan riwayat aktivitas.
- `prototypes/p3r-dialogue/registration-scenario.js` mendefinisikan percakapan berbasis pengamatan, patch frontend, prioritas deploy, dan adegan akibat.
- `workspace.js` menangani navigasi tiga tampilan, source viewer, isian, percobaan, response, kontrol pembahasan kontekstual, dan healthbar.
- `workspace.css` mengatur navigasi bersudut, area kode, healthbar, dan kelompok siswa.
- Flow dan host menerima workspace serta evidence yang dinormalisasi bersama snapshot.

## Pekerjaan

- [x] Arsipkan percakapan Ujian Online sebelum sumber aktif diganti.
- [x] Formulir empat isian, combo box, frontend awal tanpa validasi, dan backend tetap dengan validasi lengkap.
- [x] Preview menggunakan HTML/CSS/JS yang sama dengan halaman Kode. Status dan JSON berasal dari response backend lokal.
- [x] AI menjadi tampilan awal. Klik atau angka 1/2/3 berpindah, tanpa mengambil angka ketika mengetik.
- [x] Kode dan Apps opsional, tidak menghabiskan penggunaan AI atau menentukan ending sendiri.
- [x] Percobaan tercatat berdasarkan keadaan frontend. Laporan tidak ditawarkan tanpa bukti yang sesuai.
- [x] Pengamatan response, bagian kode, atau tampilan membuka pilihan terarah, tanpa popup diagnosis, input bebas, atau model AI sungguhan.
- [x] Percakapan membahas response, rincian errors, reset, desain, dan tindakan berlebihan.
- [x] Healthbar tanpa angka, penggunaan ke-9 overheat, dan nuklir tetap mendapat prioritas.
- [x] Deploy menentukan akibat dari kondisi apps. Prioritas fungsi lebih tinggi daripada desain.
- [x] Adegan akibat menampilkan aktor terkait serta ekspresi User, tanpa pilihan reaksi tambahan. Narator memberi penutup, lalu pembahasan.
- [x] Tiga portrait siswa diperoleh dan diperiksa sebagai gambar. Nama karakter hanya dicatat pada sumber aset.
- [x] Materi, versi progres, dokumentasi, dan panduan pembahasan diselaraskan dengan alur pengamatan.

## Keputusan teknis

Preview memakai srcdoc dalam iframe sandbox allow-scripts allow-forms. Izin forms ditambahkan pada koreksi setelah laporan pengiriman tidak berjalan. Tidak memakai fetch file lokal sehingga dapat dibuka dari file URL. Fungsi request mengembalikan objek Response dari backend lokal. Tidak ada AI sungguhan atau API key.

Input dinormalisasi sebelum disimpan dan ditanam sebagai JSON dengan karakter pembuka tag diloloskan. Pesan preview diperiksa sumber iframenya. Hasil percobaan dihitung ulang melalui kontrak backend. Frontend dan backend tidak menggunakan source terpisah yang dapat tidak sesuai.

Belum ada aturan sekolah tentang kuota atau satu NIS boleh mengikuti berapa kegiatan. Contoh menilai setiap pengiriman secara mandiri, tanpa mengarang kebijakan duplikasi.

## Status pemeriksaan

Arsip dibuat melalui tar dan daftar isinya dibaca. Sumber integrasi dan gambar portrait dibaca. Python tidak tersedia saat pencarian aset, sehingga hash nama berkas dihitung dengan Node tanpa membaca atau mengubah sumber. Aset normal-visual resmi mula-mula diunduh, lalu diganti portrait galeri agar sejenis dengan portrait yang sudah dipakai. Sumber akhir tercatat di SOURCES.md.

Pada tahap awal belum ada pengujian runtime, browser, sintaks, keyboard, responsivitas, atau kontras. Pemateri kemudian mengizinkan pengujian versi sebelum refactor pengamatan, lalu menghentikan pengulangan uji rute. Hasil pengujian sebelumnya tetap historis dan tidak membuktikan revisi pengamatan aktif.

## Catatan penyelesaian revisi pengamatan

- Pilihan default sesudah pembuatan hanya deploy. Topik lain berasal dari pengamatan siswa atau tanggapan atas ucapan AI.
- Memilih baris source belum mengirim chat. Kontrol Bahas bagian ini, Bahas response ini, dan Bahas tampilan menjadi penghubung dengan pilihan ucapan User.
- Bukti menyimpan keadaan penanganan response saat percobaan dilakukan. Identitas percobaan baru memungkinkan pembahasan ulang tanpa memakai laporan lama sebagai bukti revisi.
- Riwayat menggabungkan aktivitas workspace dengan pilihan chat dan keputusan pada urutan jawaban terkait.
- Tombol diagnosis lama dan pemeriksaan opsi diagnosis pada renderer dihapus.
- Pesan preview membawa penanda revisi dokumen. Sumber iframe dan penanda diperiksa sebelum workspace menerima pesan.
- Susunan siswa mengikuti referensi terbaru, dengan dua portrait belakang dan satu tengah depan lebih rendah.
- README, DESIGN, serta notes materi diperbarui. Angka pengujian lama ditandai sebagai hasil versi sebelumnya.

Keputusan pelaksanaan tahap tersebut: pekerjaan dilanjutkan langsung pada folder presentasi sesuai instruksi pemateri. Tidak membuat worktree, menjalankan uji rute, memakai subagent, atau melakukan commit. Pemeriksaan tahap itu terbatas pada pembacaan sumber.

## Tindak lanjut penandaan kode, dropdown, dan batas ending

- [x] Baris biasa dan rentang source dapat ditandai lewat klik, blok, atau keyboard. AI menjawab bahwa bagian tersebut tidak bermasalah tanpa patch.
- [x] Rentang disimpan pada fokus pembahasan dan riwayat, lalu diperiksa kembali terhadap source serta versinya.
- [x] Dropdown Kode/Apps memakai gaya P3R, state fokus dan nonaktif, serta picker bertema pada browser yang mendukung base-select.
- [x] Instruksi perbaikan mendapat konfirmasi Baik, sudah saya perbaiki dengan bagian yang diubah.
- [x] Permintaan terbaru pemateri untuk memeriksa ending dijalankan melalui model. Sebanyak 18 pemeriksaan lulus.

Rute model: false-success 1, difficult 2 atau 3, postponed 3, missing 4, data 4, nuclear 4, ready dengan desain rapi 5, design 6. Rute ready yang membahas ketiga bug sebelum perbaikan, merapikan desain, dan mencoba kedua hasil pendaftaran tercapai pada request 8. Pembuka dihitung sebagai request 1. Overheat pada request 9, penolakan patch ke-9, dan prioritas nuklir pada request 9 juga diperiksa. Perbaikan dan percobaan tidak otomatis mengakhiri cerita sebelum deploy.

Pemeriksaan memakai `C:/Users/aryad/AppData/Local/Temp/opencode/check-observed-registration-endings.cjs`. Pemeriksaan konfirmasi perbaikan mula-mula gagal, lalu lulus setelah dialog diperbarui. Tidak menjalankan browser, pengujian visual dropdown, subagent, commit, atau publish pada tindak lanjut ini.

## Implementasi diskusi multipart dan UI penandaan

Spesifikasi berasal dari koreksi pemateri dalam percakapan: pembahasan kode harus melalui pertanyaan lalu penjelasan sebelum opsi perbaikan, textbox pilihan tetap terlihat, User dan AI dapat mempunyai beberapa textbox untuk satu request, kelompok siswa diperbesar dan ditumpuk, serta penandaan tidak memerlukan dropdown topik. Pemateri menyetujui pelaksanaan langsung.

- [x] Tambahkan describeCode untuk menjelaskan fungsi bagian yang ditandai serta menentukan tindak lanjut yang sesuai.
- [x] Pertanyaan kode tidak menjalankan patch. Pilihan perbaikan terbuka setelah seluruh respons AI.
- [x] Pisahkan ucapan User dan AI menjadi bagian dengan messageId, partIndex, dan partCount. Hanya bagian pertama User membawa selection, dan request bertambah sekali sebelum seluruh kelompok.
- [x] Tampilkan pengantar kontekstual pada textbox User saat pilihan terbuka. Pengantar tidak masuk Log atau menambah request.
- [x] Hapus dropdown kode. Tambahkan tombol nomor baris, pemilihan lewat drag, Shift + klik, Perluas pilihan, Hapus tanda, serta navigasi keyboard.
- [x] Simpan rentang pilihan bersama berkas dan versi source. Pertahankan saat berpindah tampilan, lalu batalkan ketika source terkait berubah.
- [x] Samakan tinggi portrait siswa dengan User/AI. Tumpuk badan, pertahankan tiga kepala, dan pindahkan simbol marah belakang yang sempat tertutup.
- [x] Hapus border, inset shadow, dan outline pointer pada berkas aktif/hover. Pertahankan outline fokus keyboard.
- [x] Perbarui versi deck, notes pemateri, README, dan DESIGN.

Pemeriksaan model memakai `node C:/Users/aryad/AppData/Local/Temp/opencode/check-discussion-contract.cjs`. Kasus pertanyaan sebelum patch, konteks pilihan, dan multipart mula-mula gagal. Setelah implementasi, 15 pemeriksaan lulus. Sembilan jenis ending tercapai. Good ending dengan tiga pembahasan kode, tiga instruksi perbaikan, desain rapi, dan percobaan diterima/ditolak tercapai pada request 8. Overheat tetap 9, dan nuklir tetap mendapat prioritas pada 9.

Pemeriksaan UI memakai `node C:/Users/aryad/AppData/Local/Temp/opencode/check-discussion-ui.cjs`. Kasus textbox pilihan dan toolbar tanpa dropdown mula-mula gagal. Pengujian lanjutan menemukan outline berkas dari aturan fokus dasar, simbol marah belakang tertutup, serta kontrol sekunder yang masih menyamai tindakan utama. Perbaikan diuji kembali. Hasil akhir 16 pemeriksaan lulus, mencakup lebar 390/768/1366/1920 dan layar sentuh. Tidak ada error JavaScript pada pemeriksaan tersebut. Syntax content.js juga diperiksa dengan node --check.

Pemeriksaan akhir dilakukan penulis melalui pembacaan sumber, model, dan UI. Pelaksanaan tetap pada folder presentasi sesuai permintaan pemateri. Tidak memakai subagent, membuat worktree, melakukan commit, atau publish. Hasil historis sebelum bagian ini tidak dianggap bukti untuk kontrak multipart yang baru.

## Revisi limit 12 dan bukti percobaan

Persetujuan pemateri meliputi batas 12, gangguan yang makin parah mendekati limit dan dapat muncul di tengah dialog, pemicu kehilangan data sesuai percobaan, asap kartun dengan beberapa bentuk, serta pilihan respons ringkas beralas navy dan pita putih. Textbox dialog dan penandaan teks langsung dipertahankan.

- [x] Catat input dan valuesAfter. Laporan reset memerlukan nilai yang benar-benar hilang, lalu dibedakan berdasarkan errors backend.
- [x] Pisahkan semua isian kosong, semua isian salah, satu benar dengan sisanya salah, satu salah dengan sisanya benar, kehilangan sebagian, penolakan yang mempertahankan nilai, dan reset setelah diterima.
- [x] Gunakan requestLimit 12 dan heatLevel bersama bagi engine serta healthbar. Request 8–9 mulai tersendat, 10–11 memburuk, 12 menolak patch. Nuklir tetap mendapat prioritas pada batas.
- [x] Sisipkan gangguan secara deterministik pada kata bahasa alami di berbagai posisi dan bagian respons. Pertahankan identifier kode dan hitungan satu request per kelompok.
- [x] Buat empat simbol asap sendiri berdasarkan arahan pemateri. Sebarkan sampai enam kepulan di kepala dan bahu, dengan gerak kurang dari lima detik dan mode statis.
- [x] Ganti pilihan selebar textbox dengan daftar navy ringkas dan satu pita putih bersudut. Pertahankan teks mendatar dan keyboard.
- [x] Perbarui notes, dokumentasi, serta versi deck.

Pemeriksaan awal check-limit12-evidence.cjs menemukan kegagalan pada klasifikasi kehilangan nilai, bukti pascasubmit, serta batas lama 9. Setelah revisi, 16 pemeriksaan lulus. check-discussion-contract.cjs diselaraskan dengan bukti valuesAfter dan batas 12, kemudian 15 pemeriksaan lulus. Seluruh sembilan ending tercapai pada model. Good ending dengan tiga pembahasan kode, tiga perbaikan, dan desain rapi tetap memakai 8 request.

Pemeriksaan UI menemukan timer pencatatan mendahului penyelesaian handler dan membuat valuesAfter masih sama dengan input meskipun form.reset dijalankan. Pencatatan dipindahkan ke MutationObserver pesan hasil. Bukti setelah reset lalu sesuai pada submit nyata. check-limit12-ui.cjs lulus 18 pemeriksaan. Regresi check-alignment-text-selection.cjs lulus 7 pemeriksaan. Ukuran pilihan 390/768/1366/1920, alignment 1534/1024/390, animasi serta reduced-motion diperiksa. Tidak ada error JavaScript pada pemeriksaan tersebut.

Pelaksanaan tetap langsung pada folder presentasi. Pemeriksaan sumber dan visual akhir dilakukan penulis tanpa subagent. Tidak melakukan commit atau publish. Hasil lama dalam dokumen ini dipertahankan sebagai riwayat, bukan bukti kelulusan batas 12.

## Audit redaksi, penilaian ending, dan alignment atas–bawah

Pemateri menyetujui daftar audit 37 temuan yang telah dilokasikan menurut bab dan slide. Ketentuan tambahan: title HTML tidak berubah saat navigasi, judul tambahan Pembahasan percakapan dihapus, isi tab sesuai ending akhir, dan alignment mencakup sisi atas, awal isi, serta sisi bawah kedua kolom.

| Temuan audit | Lokasi slide keseluruhan | Pelaksanaan |
| --- | --- | --- |
| 1–5 | Bab 1, slide 1–4 | Judul metadata, heading Vibe Coding, peran developer, kecukupan akses, dan penghapusan petunjuk berulang diperbarui. |
| 6–8 | Bab 2, slide 7/9/10 | Awalan judul konklusi, sycophancy, dan penjelasan halusinasi diperbarui. |
| 9–12 | Bab 3, slide 11/12/14 | Keterangan model/tools, pemilihan alat, dan judul alur koneksi diperjelas. |
| 13–16 | Bab 4, slide 15–18 | Kebutuhan konteks, ketidakpastian, petunjuk berulang, dan hasil kosong diperjelas. |
| 17–20 | Bab 5, slide 19/20/22 | Cakupan rules dan pencatatan keputusan sebelum berpindah sesi diperjelas. |
| 21–27 | Bab 6, slide 25/26/28/29 | Judul tambahan dihapus, hasil mengikuti ending, istilah pesan validasi diperjelas, serta redaksi micro task/cakupan/koreksi diperbarui. |
| 28–33 | Bab 7, slide 30/31/33/34 | Pertanyaan pemeriksaan, batas perubahan, rencana pengujian, dan penerimaan tanpa asumsi diperbarui. |
| 34–35 | Bab 8, slide 35/36 | Judul laporan dan tindak lanjut diperbarui. |
| 36–37 | Catatan slide 1/31 | Catatan tanpa kode diganti agar sesuai peninjauan kode dan formulir aktif. |

- [x] Tetapkan browserTitle di content.js dan gunakan sekali pada app.js. Hapus penggantian judul per slide serta per adegan. Title HTML utama dan mandiri sama.
- [x] Definisikan labels melalui summarize supaya mode presentasi dan mandiri selalu memakai penilaian ending yang sama.
- [x] Good ending menjelaskan perilaku akhir yang benar. Bukti membedakan belum diuji, diterima saja, ditolak saja, dan kedua hasil pada kode akhir. Tindak lanjut tidak mengulang perbaikan yang sudah selesai.
- [x] Masalah yang masih ada menentukan perbaikan, termasuk CSS buruk yang belum dikerjakan saat overheat atau kegagalan parsial. Ending kehilangan data/halaman/nuklir tidak memakai percobaan lama sebagai bukti halaman akhir.
- [x] Catat perilaku AI sebelumnya sebagai reviewNote pada selection lalu tampilkan di Riwayat, tanpa menambahkannya ke penilaian hasil yang sudah baik.
- [x] Gunakan tiga baris grid bersama untuk judul/tab, awal ringkasan/bacaan, dan batas bawah tombol ulang/viewport. Teks serta riwayat bergulir di dalam area baca. Gunakan susunan vertikal pada layar kecil.
- [x] Perbaiki margin collapse mode mandiri dengan flow-root setelah pengujian menemukan header menutupi tab.
- [x] Selaraskan README serta DESIGN dan tandai hasil iterasi sebelumnya sebagai historis.

check-ending-review.cjs mula-mula gagal pada label good ending, kesalahan historis, perbaikan parsial, redaksi, dan struktur hasil. Pemeriksaan tambahan menemukan desain yang belum selesai tidak tercantum pada overheat. Setelah koreksi, 21 pemeriksaan model lulus. check-ending-layout-copy.cjs lulus 14 pemeriksaan UI: empat tab di 1520/1366/1024/390, semua 37 slide dengan title tetap, isi sesuai ending, riwayat, serta alur mandiri sampai good ending. Tidak ditemukan error JavaScript pada pemeriksaan tersebut.

Regresi check-discussion-contract.cjs dan check-limit12-evidence.cjs lulus 31 pemeriksaan. Sintaks app.js, content.js, story-slides.js, serta prototypes/p3r-dialogue/story.js diperiksa. Jumlah slide, bab, dan durasi tetap 37/8/150. Pemeriksaan akhir dilakukan penulis tanpa subagent. Tidak melakukan commit atau publish.

## Koreksi konten terpusat dan panel tanpa ruang kosong

Permintaan terbaru pemateri mengutamakan isi di tengah vertikal, dengan panel ringkas dan ruang kosong yang tidak dipaksakan. Ketentuan ini menggantikan alignment tiga baris atas/awal isi/bawah yang sebelumnya disetujui.

- [x] Hapus tinggi tetap 64dvh serta grid pengisi ruang pada hasil Micro Task, termasuk mode mandiri.
- [x] Jadikan kolom kiri dan panel kanan kelompok konten utuh. Sejajarkan titik tengah vertikalnya dan pusatkan komposisi pada area yang tersedia.
- [x] Kembalikan tombol ulang dekat ringkasan. Biarkan tinggi panel kanan mengikuti tab, teks, dan padding.
- [x] Batasi tinggi area baca hanya untuk isi panjang. Riwayat bergulir tanpa memanjangkan seluruh slide.
- [x] Pertahankan label sesuai ending, judul tab tetap, serta layout vertikal pada ponsel.
- [x] Selaraskan README serta DESIGN dengan kriteria baru.

check-centered-ending-ui.cjs mula-mula gagal pada tujuh kasus desktop dan mode mandiri karena tinggi tetap serta display:contents menghilangkan kelompok konten. Setelah perubahan, 10 pemeriksaan lulus: ending false-success dan ready melalui keempat tab di 1534/1366/1024/390, mode mandiri, dan ketiadaan error JavaScript. Posisi tengah dibandingkan dengan area slide yang tersedia. Tinggi panel pendek dibandingkan dengan tinggi tab, isi, gap, dan padding. Riwayat panjang diverifikasi benar-benar bergulir.

Pemeriksaan check-ending-layout-copy.cjs diselaraskan dengan kriteria tengah vertikal, menggantikan asersi garis atas/bawah yang sudah tidak berlaku. Keempat belas pemeriksaan regresi lulus, termasuk seluruh 37 slide dengan judul tab tetap, isi sesuai ending, navigasi, serta mode mandiri. Tidak ada error JavaScript. Implementasi hanya mengubah CSS pembahasan dan dokumentasi. Tidak memakai subagent, commit, atau publish.

## Koreksi penomoran komponen

Pemateri meminta nomor pada daftar dan card konsisten, lalu memperjelas bahwa bullet baru tidak diperlukan dan desain sebelumnya sudah sesuai. Eksperimen klasifikasi content-list dibatalkan sebelum diselesaikan. Struktur renderer lama dikembalikan untuk brief, kriteria, peran, kategori, review, dan laporan. Flag ordered yang sempat ditambahkan dibatalkan.

- [x] Pertahankan desain card, list, dan selector sebelumnya tanpa menambahkan bullet.
- [x] Gunakan helper itemNumber serta numberedLabel untuk format 01/02/03 yang sama.
- [x] Samakan font, bobot, ukuran, lebar kolom, dan jarak nomor. Letakkan nomor di kiri label atau judul item.
- [x] Pertahankan counter bab, slide, dan baris kode di luar penomoran item konten.
- [x] Periksa interaksi selector dan seluruh slide, lalu dokumentasikan koreksi ruang lingkup.

check-original-numbering.cjs lulus sembilan pemeriksaan UI di Edge: struktur lama, daftar tanpa bullet, konsistensi metrik nomor dan alignment pada 390/768/1366/1920, interaksi, 37 slide dengan judul tab tetap, dan ketiadaan error JavaScript. Sintaks app.js serta content.js lulus. check-list-components.cjs mencatat eksperimen klasifikasi yang dibatalkan dan tidak menjadi kontrak tampilan aktif. Tidak memakai subagent, commit, atau publish.

## Koreksi selector yang terlewat dan margin/padding nomor

Laporan pemateri menunjukkan rencana-verifikasi masih memakai counter pada card, context-selektif tidak mempunyai nomor pada pilihan, sedangkan urutan-micro-task bernomor di selector. Akar cakupannya adalah renderer explorer tidak ikut memakai numberedLabel dan pemeriksaan lama hanya memeriksa elemen nomor yang sudah ada.

- [x] Satukan explorer, focus, dan prompt melalui renderer materialSelector.
- [x] Wajibkan satu nomor 01/02/03 di setiap pilihan materi. Hapus explorer-position dari markup card.
- [x] Perkecil kolom angka dan gap, nolkan margin/padding angka, dan samakan padding tombol tanpa mengganti bentuk serta warna desain sebelumnya.
- [x] Sejajarkan angka dan label secara vertikal serta gunakan tabular-nums.
- [x] Uji semua pilihan dalam setiap keadaan, bukan hanya tampilan awal atau elemen yang kebetulan sudah bernomor.

check-all-material-selectors.cjs mula-mula gagal pada enam pemeriksaan yang mencakup counter card serta pilihan tanpa nomor. Setelah koreksi, tujuh pemeriksaan lulus dengan 120 keadaan pilihan: 10 slide × 3 pilihan × 4 lebar 390/768/1468/1920. Seluruh 37 slide diperiksa untuk counter ganda, struktur heading, dan judul tab tetap. Pemeriksaan tambahan memastikan margin/padding angka nol, padding tombol sama, gap konsisten, serta alignment vertikal. Tidak ada error JavaScript.

Regresi check-original-numbering.cjs diselaraskan dengan penomoran explorer yang sekarang berada di pilihan, lalu sembilan pemeriksaan lulus pada 390/768/1366/1920. Ketiga contoh yang dilaporkan diperiksa melalui gambar browser. Sintaks app.js lulus. Tidak memakai subagent, commit, atau publish.

## Koreksi struktur selector mengikuti daftar Social Link

Pemateri menolak bentuk outline yang baru dibuat karena tidak mengikuti struktur referensi. Iterasi ini menggantinya dengan kartu dua tingkat dengan tag nomor besar yang menumpuk. Ini menggantikan kriteria tombol satu baris dan inset nomor di dalam tombol pada bagian sebelumnya.

- [x] Tambahkan caption ringkas dari isi yang tersedia pada seluruh 30 pilihan di 10 slide.
- [x] Renderer materialSelector menghasilkan judul utama dan pita caption sebagai dua tingkat yang berbeda.
- [x] Kartu tidak aktif memakai massa navy solid dan pita cyan. Kartu aktif memakai putih dengan garis merah serta pita navy.
- [x] Perbesar tag nomor, buat dua lapis bingkai, dan posisikan menumpuk di sisi kiri. Sisakan ruang tepi agar tag tidak keluar layar atau menutup judul.
- [x] Susun semua selector vertikal pada desktop dan letakkan isi di kanan. Pada layar kecil keduanya ditumpuk.
- [x] Pertahankan state tunggal dan cue keyboard. Hilangkan background hover lama yang sempat muncul di luar bentuk kartu sebagai sayap persegi cyan.
- [x] Periksa langsung gambar browser dan perbarui dokumentasi.

check-two-tier-selector.cjs mula-mula gagal pada tujuh kasus karena tidak ada hierarki judul/caption serta tag belum menumpuk. Setelah implementasi, sembilan pemeriksaan lulus. Kasus meliputi semua caption, warna pita, massa solid, state aktif, hover, keyboard, dan tag pada 390/768/1468/1920. Penulis memeriksa gambar browser ketiga contoh yang dilaporkan setelah perbaikan hover.

check-all-material-selectors.cjs diselaraskan untuk caption serta ukuran tag baru. Ketujuh pemeriksaan lulus dengan 120 keadaan pilihan. Geometri tag yang berotasi dibandingkan sampai dua desimal untuk menghindari selisih floating-point rasterisasi yang lebih kecil dari 0,001 px. Font, bobot, warna state, padding, dan margin tetap diperiksa langsung. Seluruh 37 slide mempertahankan judul tab yang sama. Tidak ada error JavaScript. Sintaks app.js dan content.js lulus. Tidak memakai subagent, commit, atau publish.

## Padding, alur koneksi, dan referensi tag Romawi

- [x] Perbesar jarak isi terhadap aksen merah atas/kanan, dengan padding desktop 12/22/12/10 px dan ponsel 12/18/12/10 px.
- [x] Gunakan material-card bersama untuk selector dan tiga kartu statis koneksi. Pertahankan judul, keterangan, note, dan panah.
- [x] Sejajarkan tinggi kartu pada desktop. Susun vertikal pada lebar 1100 px ke bawah.
- [x] Terapkan koreksi lanjutan pemateri: tag bersudut dengan sambungan bawah dan angka Romawi I/II/III, menggantikan persegi dua bingkai dengan 01/02/03.
- [x] Gunakan pratinjau hover tunggal yang tidak mengganti isi atau aria-pressed. Pertahankan klik, keyboard, dan sentuhan.
- [x] Periksa gambar desktop/ponsel dan selaraskan README serta DESIGN.

check-card-spacing-route.cjs mula-mula gagal pada tujuh kasus karena padding lama dan kartu koneksi belum memakai struktur baru. Setelah perubahan, delapan pemeriksaan lulus. check-all-material-selectors.cjs kemudian gagal pada lima kasus setelah ekspektasi diganti ke angka Romawi. Setelah markup diperbaiki, tujuh pemeriksaan lulus dengan 120 keadaan pilihan.

Verifikasi akhir: check-card-spacing-route.cjs 8/8, check-selector-hover.cjs 7/7, check-two-tier-selector.cjs 9/9, dan check-all-material-selectors.cjs 7/7. Alur koneksi diperiksa pada 390/768/1024/1468/1920, sedangkan selector pada 390/768/1468/1920. Seluruh 37 slide dibuka. Tidak ada error JavaScript. node --check app.js lulus. Gambar scope-panduan dan koneksi-tools dibaca langsung pada desktop, serta koneksi-tools pada ponsel. Tidak memakai subagent, commit, atau publish.

## Tindak lanjut tonjolan tag, hover berkedip, dan border kode

- [x] Hapus tonjolan bawah tag yang ditandai pemateri pada gambar. Jadikan ketiga kartu koneksi selalu bergaya aktif tanpa menambahkan interaksi palsu.
- [x] Reproduksi highlight yang kembali ke pilihan lama saat pointer melewati celah. Gunakan is-hovered yang bertahan dalam daftar, lalu bersihkan pada pointer keluar.
- [x] Hapus underline selector materi dan pilihan dialog. Pertahankan indikator fokus yang sesuai tiap komponen.
- [x] Hapus outline editor, garis inset baris terpilih, dan outline tombol penandaan. Gunakan bidang warna serta status penandaan sebagai indikator.
- [x] Verifikasi klik, blok native, rentang keyboard, clear, navigasi, dan Bahas kode ini.

check-hover-boundaries.cjs gagal pada kasus celah dan underline sebelum perbaikan, lalu lulus 5/5. check-code-marking-border.cjs mereproduksi underline dialog, garis inset baris, outline editor, dan outline tombol sebelum perbaikan, lalu lulus 6/6. Regresi check-selector-hover.cjs 7/7 dan check-two-tier-selector.cjs 9/9 lulus setelah kontrak underline diganti sesuai permintaan. Total terbaru 27 pemeriksaan, tanpa error JavaScript. node --check app.js lulus. Pengujian alur/padding sebelumnya juga lulus 8/8 setelah kartu koneksi dibuat aktif. Tidak memakai subagent, commit, atau publish.

## Navigasi panah atas/bawah pada selector

Pemateri meminta pilihan materi dapat dibuka dengan panah atas/bawah. Handler memakai changeStep untuk langsung memilih dan menampilkan item, dengan batas pertama/terakhir. Guard menu bab, dialog, dan isian dipertahankan. Hover diubah dari pointerover menjadi pointermove karena pergantian DOM saat keyboard dapat memicu pointerover tanpa gerakan mouse dan mengambil kembali highlight.

check-selector-arrow-keys.cjs mula-mula gagal pada empat kasus. Setelah handler ditambahkan, tersisa konflik highlight mouse diam yang direproduksi oleh tes. Pergantian ke pointermove menyelesaikannya. Verifikasi akhir: keyboard 7/7, batas hover 5/5, regresi hover 7/7, serta node --check app.js. README dan petunjuk kontrol presentasi diperbarui. Tidak ada error JavaScript.

## Penyamaan tata letak Micro Task dengan bab 2

- [x] Bandingkan portrait dan textbox database serta Micro Task pada enam lebar layar.
- [x] Hapus override ukuran/posisi User dan AI serta grid textbox dialog biasa. Gunakan aturan bersama bab Risiko.
- [x] Pertahankan pilihan respons ringkas, workspace, healthbar, asap, penandaan kode, dan tiga siswa.
- [x] Sesuaikan penempatan healthbar dengan tinggi gambar yang terlihat dan textbox tiga siswa dengan ruang kelompok.
- [x] Uji mode mandiri, iframe presentasi, dialog User/AI, pilihan, serta adegan siswa. Periksa gambar hasil desktop dan ponsel.

check-dialogue-layout-parity.cjs mula-mula gagal pada enam perbandingan ukuran layar. Setelah perubahan styles.css serta workspace.css, 15/15 pemeriksaan lulus pada 390/768/1024/1366/1468/1920, termasuk iframe pada 390/1366. check-code-marking-border.cjs lulus 6/6.

check-limit12-ui.cjs akhirnya lulus 18/18. Tes asap lama mempertahankan transisi host nonaktif sambil mengirim motion:true langsung ke iframe. Tes diselaraskan untuk mengaktifkan transisi melalui kontrol presentasi, lalu menunggu animasi di konteks frame Playwright. Perubahan ini hanya pada tes sementara, tanpa mengubah perilaku animasi produksi. Tidak ada error JavaScript pada hasil akhir. README root, README dialog, dan DESIGN diperbarui. Tidak memakai subagent, commit, atau publish.

## Koreksi bingkai fokus selector

Bingkai cyan saat navigasi panah dihapus sesuai gambar pemateri. Fokus ditandai melalui perubahan bidang tag angka. Tes panah mula-mula gagal pada empat kasus yang masih memiliki outline solid. Setelah koreksi, check-selector-arrow-keys.cjs 7/7, check-hover-boundaries.cjs 5/5, check-selector-hover.cjs 7/7, dan check-two-tier-selector.cjs 9/9 lulus. Total 28 pemeriksaan, tanpa error JavaScript.

Koreksi berikutnya menghapus warna biru khusus tag keyboard karena pemateri meminta tampilan sama dengan hover. Fokus kini menyorot satu kartu dengan warna hover yang identik, termasuk isi tag navy dan angka putih. Pemeriksaan perbandingan langsung keyboard/hover mula-mula gagal, lalu lulus pada seluruh 10 selector. Keempat rangkaian di atas kembali lulus 28/28, tanpa error JavaScript.

## Instruksi rancu, source lengkap, dan nuklir

- [x] Pertahankan pilihan awal deploy saja dan sediakan Reset semua saja secara kontekstual.
- [x] Hapus opsi serta ending tunda. Delapan ending aktif tetap dapat dicapai.
- [x] Hubungkan permintaan muat satu layar ke CSS padat dan permintaan yang penting-penting saja ke HTML tanpa kelas/ekstrakurikuler.
- [x] Sediakan koreksi kedua kesalahan dan sesuaikan bukti dengan susunan formulir terakhir.
- [x] Perlengkap source JS dengan lifecycle pengiriman yang dipakai Apps. Beautify CSS langsung pada sumber preview.
- [x] Pertahankan asap/petir selama giliran AI, termasuk antartextbox dan ketika menunggu Lanjut.
- [x] Tambahkan guncangan setelah narasi peluncuran, User terkejut, lalu ucapan kapital dengan ekspresi anger sesuai redaksi final.
- [x] Verifikasi reduced-motion, delapan ending, source/preview, bukti reset, pengiriman ganda, kegagalan transport, penandaan kode, serta layout.

Keputusan pelaksanaan: guncangan nuklir berjalan satu kali 650 ms setelah teks narator lengkap. Tombol Lanjut dikunci selama guncangan dan aktif kembali setelah selesai atau gerak dinonaktifkan. Tidak ada perpindahan dialog otomatis. Efek overheat berakhir dalam keadaan terlihat, bukan mengulang animasi tanpa batas. JavaScript berisi 66–79 baris sesuai kebutuhan fungsi, tanpa penambahan baris pengisi untuk mengejar perkiraan awal 70–100.

Model revisi mula-mula gagal pada sembilan kontrak baru, kemudian lulus. Pemeriksaan tambahan mereproduksi salah klasifikasi pembersihan pesan sebagai masalah response, lalu lulus setelah deteksi topik dipersempit. UI mula-mula gagal karena efek menghilang, elemen dibangun ulang antartextbox, dan guncangan belum tersedia. Restore kemudian disesuaikan agar efek diinisialisasi ulang ketika sesi dipulihkan, sedangkan perpindahan textbox AI tetap mempertahankan efek.

Pemeriksaan diff oleh pelaksana menemukan dua masalah tambahan pada pemetaan kode: rentang response berhenti pada baris pembersihan pesan yang lebih awal, serta judul HTML biasa ikut ditawari perbaikan isian yang hilang. Dua pemeriksaan mereproduksi kegagalan sebelum koreksi, kemudian lulus setelah rentang response dibatasi ke fungsi hasil dan pembahasan struktur dibatasi ke topik isian/pilihan.

Hasil akhir: check-dialogue-revision-model.cjs 13/13, check-discussion-contract.cjs 15/15, check-dialogue-revision-ui.cjs 17/17, check-limit12-ui.cjs 18/18, check-code-marking-border.cjs 6/6, serta check-dialogue-layout-parity.cjs 15/15. Total 84 pemeriksaan, tanpa error JavaScript pada browser. Gambar nuklir, overheat, CSS, formulir padat, dan formulir kehilangan isian diperiksa. Versi konten dinaikkan agar snapshot/rentang kode dari naskah lama tidak dipulihkan pada kontrak baru.

## Efek acak dan dialog hasil yang konkret

- [x] Ubah efek yang sebelumnya menetap menjadi siklus muncul, bergerak, hilang, dan muncul lagi secara acak.
- [x] Pertahankan controller antartextbox AI, batasi slot, dan batalkan siklus lama pada User/reset/akhir dialog.
- [x] Tambahkan Jeda efek/Lanjutkan efek serta tangani gerak host, reduced-motion, Kode/Apps/Riwayat, dan visibilitas dokumen.
- [x] Bentuk dialog penolakan dari isian serta errors aktual, lalu sediakan langkah pemeriksaan berikutnya yang konkret.
- [x] Ganti label panjang menjadi Mulai, Lanjutkan, Ulangi, Lihat hasil, Ke awal, Riwayat, dan Bahas hasil percobaan.
- [x] Periksa pengulangan nyata, fungsi kontrol, dialog melalui Apps, serta komposisi desktop/ponsel.

Keputusan pelaksanaan: slot SVG digunakan ulang. Setiap animasi mempunyai fade-out penuh dan completion handler yang menjadwalkan siklus berikutnya. Generation guard mencegah handler lama memulai ulang animasi setelah dibatalkan. Tidak menambahkan timer berulang yang berjalan di belakang Kode/Apps atau Riwayat. Tombol pause dipindah ke footer setelah tes membuktikan kontrol fokus host menutup posisinya di kanan atas. Ulangi diposisikan di kiri atas setelah tabrakan dengan kontrol fokus dan healthbar ponsel direproduksi.

Tes dialog mula-mula gagal pada tujuh kasus karena naskah memakai frasa abstrak. Tes visual mula-mula menemukan satu siklus dengan gambar menetap, tidak ada pause, dan gerak tidak pulih setelah dinyalakan kembali. Setelah koreksi, pengamatan sebelas detik menunjukkan beberapa siklus smoke/spark, posisi dan bentuk berbeda, opacity kembali nol, serta jumlah slot terbatas. Fixture dialog melalui Apps diperpendek agar memeriksa redaksi tanpa tercampur glitch overheat yang memang aktif pada request 8.

Hasil akhir sesi ini: check-response-dialogue.cjs 7/7, check-dialogue-revision-model.cjs 13/13, check-discussion-contract.cjs 15/15, check-random-overheat-ui.cjs 16/16, check-dialogue-revision-ui.cjs 17/17, check-limit12-ui.cjs 18/18, check-code-marking-border.cjs 6/6, dan check-dialogue-layout-parity.cjs 15/15. Total 107 pemeriksaan. Kasus batas posisi Ulangi/healthbar kemudian diperkuat dan lulus pada 390/1366. Tidak ada error JavaScript pada browser. Versi konten ai-assisted-random-overheat-clear-dialogue-150-8.

## Biaya kode per kelipatan 15 baris

- [x] Hitung baris source tidak kosong dari rentang pertanyaan yang valid.
- [x] Terapkan ceil(baris/15), minimal 1 dan maksimal 2 poin.
- [x] Kenakan biaya ketika pertanyaan dikirim, sekali untuk seluruh pesan multipart.
- [x] Batasi total 12 dan pertahankan penolakan sebelum pemrosesan serta pengecualian nuklir.
- [x] Uji batas baris pada HTML/CSS/JS, penandaan keyboard, healthbar, Lanjut, dan restore.
- [x] Selaraskan versi, catatan pemateri, serta dokumentasi.

Biaya dihitung ulang dari source saat replay. Field requestCost dan codeLines pada selection menyimpan hasil perhitungan, bukan metadata biaya yang dikirim pada jawaban. Baris kosong diabaikan. Chat lain tetap 1 poin dan deploy 0. Math.min terhadap batas 12 mencegah total 13 ketika pertanyaan 2 poin dikirim pada total 11.

Tes awal mereproduksi biaya yang selalu 1 dan metadata biaya yang belum tersedia. Setelah perubahan, 25 model serta 6 UI baru lulus. Dua kontrak historis yang mengharapkan good ending 8 pada pembahasan seluruh HTML diselaraskan ke 9. Tes baru membuktikan rute dengan satu blok isian terarah tetap mencapai ready pada 8 poin.

Hasil revisi: check-code-budget-15.cjs 25/25, check-code-budget-15-ui.cjs 6/6, check-dialogue-revision-model.cjs 13/13, check-discussion-contract.cjs 15/15, check-response-dialogue.cjs 7/7, check-limit12-ui.cjs 18/18, dan check-dialogue-revision-ui.cjs 17/17. Total 101 pemeriksaan, tanpa error JavaScript pada browser. Versi konten ai-assisted-code-budget-15-150-8.

## Penggantian contoh instruksi dan konteks review

- [x] Gunakan kasus database bab 2 pada instruksi lengkap, konteks, brief, serta kriteria penerimaan bab 4.
- [x] Selaraskan contoh prompt/rules/skill dan batas tugas pada bab 5.
- [x] Gunakan micro task pendaftaran ekstrakurikuler pada seluruh materi bab 7 sesuai koreksi pemateri.

Instruksi database menetapkan target testing, pemeriksaan pemakaian serta cadangan, persetujuan rencana, dan batas penghapusan. Kriteria melindungi production, cadangan, serta akses website. Bab 7 membahas respons backend, errors, reset, kelengkapan formulir, serta bukti percobaan. Contoh laporan membedakan form yang dapat dibuka dari pendaftaran yang sudah diverifikasi.

- [x] Perbarui README dan DESIGN serta periksa hasil di browser.

Verifikasi: check-all-material-selectors.cjs 7/7, 120 keadaan pilihan, seluruh 37 slide. Pemeriksaan langsung mencakup 38 keadaan dari 11 slide pada 1366/390 px serta modal enam paragraf dengan scroll dan Escape. Pemeriksaan visual menemukan klaim panjang mendorong pembahasan ke bawah. Setelah kalimat diringkas, seluruh pembahasan muat pada desktop 1366×900 dan 1366×768. Ponsel 390×844 dapat menggulir ke pembahasan tanpa overflow horizontal. Tidak ada error JavaScript. content.js lulus node --check dan diff lolos pemeriksaan whitespace.

## Perbaikan tiga komponen visual

- [x] Perkuat review rencana dengan tiga panel bersudut, header navy, nomor cyan, dan isi putih.
- [x] Satukan kutipan, tombol, dan pembahasan koreksi dalam satu grid agar kolomnya sejajar.
- [x] Ubah inset border atas material-card dari 2 menjadi 4 px, dengan sisi kanan 6 px.
- [x] Periksa desktop/ponsel, toggle mouse/keyboard, serta hover dan panah selector.

Pengukuran awal menemukan panel review transparan dan pembahasan koreksi bergeser 93,39 px dari kutipan. Border atas masih 2 px. Setelah koreksi, kedua layout diperiksa pada enam ukuran 390/768/1024/1366/1534/1920. Panel review sejajar pada desktop. Kutipan rinci dan pembahasannya mempunyai batas kolom yang sama. Pembahasan muat di viewport desktop, termasuk tinggi 686 px, dan layar sempit dapat menggulir secara vertikal.

Hasil: check-card-spacing-route.cjs 8/8, check-selector-hover.cjs 7/7, check-all-material-selectors.cjs 7/7 dengan 120 keadaan pilihan dan 37 slide, serta check-selector-arrow-keys.cjs 7/7. Total 29 pemeriksaan regresi. Pemeriksaan langsung juga mengaktifkan/menutup pembahasan melalui mouse dan keyboard. Gambar review dan koreksi desktop/ponsel serta border selector diperiksa. Kontras teks dihitung, tanpa pasangan di bawah 4,5:1. Tidak ada error JavaScript. app.js lulus node --check.
