# Arsip panduan web sebelum materi v0.7

Web presentasi statis khusus pemateri, dengan **25 slide dalam 9 bab**. Materi diadaptasi dari PDF Sharing TEFA draft v0.3 yang diberikan pemateri. Jumlah slide mengikuti keterbacaan materi.

## Arah visual

Revisi visual mengacu pada menu pause Persona 3 Reload dalam [studi rekreasi UI Adrian Kowalik](https://adrian-kowalik.com/projects/persona-3-reload-ui-recreation) dan screenshot dari pemateri:

- Menu bab memakai huruf condensed besar, susunan miring/asimetris, dan label cyan.
- Satu selektor putih dengan irisan merah bergerak mengikuti hover, fokus keyboard, atau bab aktif. Label lain bergeser untuk memberi ruang.
- Hover dan fokus hanya memindahkan selektor. Klik atau Enter membuka bab; panah kiri/kanan berpindah slide.
- Materi menggunakan kolom terbuka, tabel, serta lembar contoh. Kontrol pemateri berada di action bar bawah.
- Latar air dibuat secara prosedural dengan shader WebGL: kontur pantulan organik, peralihan cyan–biru, dan pergerakan halus. Semua pola dihitung langsung tanpa gambar/tekstur. Aksen Full Moon menggunakan putih keemasan.
- Gerakan air aktif secara default dan memiliki tombol **Laut / L** sendiri, terpisah dari **Transisi / T**. Preferensi lama yang mematikan transisi tidak mematikan laut. Preferensi kurangi gerakan perangkat tetap dihormati.
- WebGL menggunakan domain warping untuk riak yang mengalir; jika WebGL tidak tersedia, Canvas 2D tetap menganimasikan refleksi organik. Resolusi serta laju render dibatasi dan animasi berhenti saat tab tidak terlihat.
- Transisi bab mengikuti struktur pergantian hari P3R: latar navy, pita biru menurun, garis putih menaik, deretan nomor bab dengan fase bulan, pergeseran ke nomor aktif, dan pulse lingkaran setelah tiba. Slot tanggal diganti nomor bab, tanpa tanggal kalender atau jam.
- Susunan dan urutan gerak diperiksa dari [gameplay pergantian hari P3R](https://www.youtube.com/watch?v=5mFNA35uIE8&t=3438). Ini referensi visual; video dan aset game tidak dimasukkan ke aplikasi. Bab 8 memakai bulan penuh serta aksen putih keemasan dalam komposisi yang sama.
- Judul/menu memakai font sistem lokal Impact, dengan fallback condensed/sans-serif; isi materi memakai Arial/sans-serif. Tidak ada font atau aset game yang disalin.

## Membuka presentasi

Buka **`index.html`** langsung di Chrome, Edge, atau Firefox modern. Tidak perlu instalasi, build, server, API key, maupun internet. Semua kode, ikon, dan bentuk visual tersimpan lokal. Tautan referensi membuka situs dokumentasi hanya jika dipilih.

Posisi slide, status pembahasan kasus, preferensi catatan, mode bersih, dan transisi disimpan di `localStorage`. Penyimpanan file lokal mengikuti dukungan/kebijakan browser; gunakan browser dan lokasi file yang sama untuk melanjutkan. Jika penyimpanan tidak tersedia, presentasi tetap berjalan dan menampilkan pemberitahuan.

Bila ingin menyajikan melalui hosting statis, unggah `index.html`, `styles.css`, `content.js`, `water.js`, `app.js`, dan `favicon.svg` dalam folder yang sama. Tidak ada backend.

## Kendali pemateri

| Kontrol | Fungsi |
| --- | --- |
| `←` / `→` | Slide sebelumnya / berikutnya |
| Tab bab | Langsung ke slide pertama bab tersebut |
| `↑` / `↓` saat fokus pada menu | Memilih fokus menu bab; `Enter` membuka bab |
| `N` | Buka/tutup catatan pemateri |
| `P` | Masuk/keluar mode presentasi bersih |
| `Esc` | Keluar mode bersih, lewati transisi, atau tutup panel |
| `F` | Masuk/keluar layar penuh (jika didukung browser) |
| `T` | Aktifkan/nonaktifkan transisi |
| `L` | Aktifkan/jeda gerak laut, terpisah dari transisi |
| `B` | Tampilkan/sembunyikan pembahasan di slide utama studi kasus |
| `Home` | Kembali ke awal dan sembunyikan pembahasan kasus |
| `?` | Panduan pintasan |

Pada transisi bab, tombol **Lewati transisi**, `Enter`, `Spasi`, atau `Esc` langsung membuka bab tujuan. Transisi biasa berlangsung sekitar 1,3 detik; transisi masuk Bab 8 sekitar 3 detik. Perpindahan slide selalu manual. Preferensi sistem `prefers-reduced-motion` menonaktifkan gerakan dan overlay transisi.

Mode bersih menyembunyikan menu bab, action bar tambahan, dan catatan pada halaman yang sama. Navigasi sebelumnya/berikutnya serta tombol **Keluar mode bersih · Esc** tetap tersedia. Catatan yang dibuka sebelum mode bersih akan kembali tersedia setelah keluar.

## Struktur

```text
index.html    Kerangka halaman, ikon SVG orisinal, kontrol, dialog
styles.css    Visual diagonal, layout responsif, transisi, mode bersih
content.js    Data bab, materi slide, catatan pemateri, sumber
app.js        Renderer dan interaksi; tidak mengambil data dari jaringan
water.js      Material air prosedural, pengaturan gerakan, dan pemulihan WebGL
favicon.svg   Ikon geometris orisinal
README.md     Panduan pemakaian dan penyuntingan
```

## Menyunting materi

Ubah `window.TEFA_DECK` pada `content.js`:

- `chapters`: nama lengkap, label ringkas `menu`, pergeseran horizontal `indent`, urutan, label fase, dan nilai visual bulan (`0` hingga `1`).
- `slides`: urutan slide, `chapter`, `type`, judul, isi, `takeaway`, dan `notes`.
- `sources`: atribusi dan rujukan pada dialog Referensi.

Karakter `|` pada judul membentuk baris beraksen. `id` slide harus unik dan stabil karena dipakai untuk menyimpan posisi. `chapter` harus cocok dengan ID bab. Menambah slide dari tipe yang sudah tersedia tidak perlu mengubah logika navigasi. Untuk jenis susunan baru, tambahkan renderer pada `app.js` dan gaya pada `styles.css`.

Tipe yang tersedia: `hero`, `pillars`, `scope`, `toolmap`, `toolchoice`, `compare`, `decision`, `workflow`, `criteria`, `checkpoints`, `prompt`, `bugbrief`, `mechanisms`, `skill`, `skillScope`, `loop`, `review`, `testplan`, `case`, `caseAction`, `report`, `habits`, dan `closing`.

## Catatan materi

- Contoh berkelanjutan: aplikasi tugas TEFA untuk satu pengguna pada satu browser.
- Semua pengamatan, hasil uji, prompt, dan prosedur skill di slide merupakan ilustrasi pembelajaran, bukan klaim pengujian aplikasi tugas nyata.
- Ketercapaian sesi adalah pemahaman konsep. Kemampuan praktik mandiri memerlukan penilaian pada kesempatan lain.
- Detail produk yang dipakai telah dibandingkan dengan dokumentasi resmi OpenCode Rules/Agent Skills, Claude Code Overview/Skills, GitHub Copilot About, dan repositori resmi 9router. Tautannya terdapat pada dialog Referensi dan `content.js`.
- Kerangka Utilize AI – kejar.id dan bacaan OpenAI tentang halusinasi diatribusikan sesuai rujukan PDF pemateri.
- Seluruh visual dibuat dengan CSS, SVG, dan shader WebGL orisinal. Tidak ada aset, logo, karakter, musik, atau audio resmi game.

## Pemeriksaan manual ringkas

1. Gunakan tombol dan panah melewati seluruh slide; periksa batas awal/akhir.
2. Pilih tiap bab; periksa fase bulan, nomor slide lokal, dan transisinya.
3. Masuk Bab 8; lewati transisi dan buka/tutup pembahasan.
4. Buka catatan, masuk mode bersih, keluar dengan Esc, lalu coba layar penuh.
5. Ubah preferensi transisi dan muat ulang; posisi dan preferensi harus kembali.
6. Coba lebar laptop/proyektor dan layar kecil. Area materi dapat digulir ketika ruang vertikal berkurang atau catatan dibuka.
7. Aktifkan pengaturan sistem kurangi gerakan; perpindahan bab harus langsung tanpa overlay.
