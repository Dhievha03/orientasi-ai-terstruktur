# Sumber aset prototipe

Seluruh gambar karakter berasal dari artwork Persona 3 Reload. Tidak ada gambar generatif AI. Berkas disimpan lokal agar prototipe dapat dibuka tanpa koneksi internet.

## Emoji Google

- `google-noto-cat-tears-of-joy.svg`: Google Noto Emoji, U+1F639 (Cat with Tears of Joy), versi v2.047.
- Sumber SVG resmi yang dipatok versinya: https://raw.githubusercontent.com/googlefonts/noto-emoji/v2.047/svg/emoji_u1f639.svg .
- Atribusi: Copyright 2013 Google LLC. Gambar dan warna tidak digambar ulang. Format whitespace dipadatkan dan ukuran intrinsik 128 × 128 ditambahkan.
- README upstream mencatat sebagian besar sumber gambar memakai Apache License 2.0: https://github.com/googlefonts/noto-emoji/blob/v2.047/README.md#license . Salinan lisensi disertakan pada `google-noto-emoji-LICENSE.txt`.

Setiap emoji respons backup ditampilkan sebagai gambar lokal pada dialog dan Log, dengan jumlah mengikuti naskah aktif. Teks Unicode tetap dipakai pada naskah serta teks aksesibel. Bentuk visual tidak bergantung pada font emoji Windows dan tidak meminta aset melalui jaringan saat presentasi berjalan.

## Portrait

- `aigis.webp`: portrait dalam game, dicatat di Megami Tensei Wiki sebagai `P3RE Portrait Aigis.png`. Sumber: https://megamitensei.fandom.com/wiki/Aigis/Gallery . Berkas: https://static.wikia.nocookie.net/megamitensei/images/9/9d/P3RE_Portrait_Aigis.png/revision/latest?cb=20240412013536 . CDN mengirim WebP meskipun nama sumber berakhiran PNG.
- `makoto.webp`: portrait dalam game, dicatat sebagai `Protagonist Portrait (Reload).png`. Sumber: https://megamitensei.fandom.com/wiki/Makoto_Yuki/Gallery . Berkas: https://static.wikia.nocookie.net/megamitensei/images/c/ce/Protagonist_Portrait_%28Reload%29.png/revision/latest?cb=20240409165034 . CDN mengirim WebP.

Portrait merupakan artwork asli game yang disalin oleh galeri komunitas, bukan unduhan dari situs penerbit. Hak artwork tetap milik pemegang hak Persona 3 Reload. Prototipe ini tidak memberikan lisensi baru atas gambar tersebut.

## Kelompok siswa pada skenario ekstrakurikuler

Tiga portrait Reload berikut dipakai sebagai siluet kelompok siswa. Nama karakter tidak tampil di percakapan. Tidak ada gambar generatif atau penggambaran ulang. Berkas utuh dipertahankan dan ditumpuk menggunakan CSS.

- `yukari.webp`: `P3RE Portrait Yukari.png`, https://static.wikia.nocookie.net/megamitensei/images/c/cd/P3RE_Portrait_Yukari.png/revision/latest . Galeri: https://megamitensei.fandom.com/wiki/Yukari_Takeba/Gallery .
- `junpei.webp`: `P3RE Portrait Junpei.png`, https://static.wikia.nocookie.net/megamitensei/images/f/fc/P3RE_Portrait_Junpei.png/revision/latest . Galeri: https://megamitensei.fandom.com/wiki/Junpei_Iori/Gallery .
- `akihiko.webp`: `P3RE Portrait Akihiko.png`, https://static.wikia.nocookie.net/megamitensei/images/a/a5/P3RE_Portrait_Akihiko.png/revision/latest . Galeri: https://megamitensei.fandom.com/wiki/Akihiko_Sanada/Gallery .

Unduhan normal-visual dari situs SEGA diperiksa dahulu, lalu diganti dengan portrait galeri di atas agar jenis artwork sesuai portrait User/AI. Tiga gambar aktif diperiksa melalui pembacaan gambar, bukan pengujian browser. Hak artwork tetap milik pemegang hak Persona 3 Reload.

Versi ini memakai satu portrait asli per karakter, ditampilkan sebagai siluet hitam menggunakan CSS `brightness(0)`. Berkas sumber tidak digambar ulang atau diubah. Efek SVG berupa urat marah, tanda seru/tanya, serta garis stres ditambahkan terpisah sesuai permintaan pemateri. Simbol tidak diklaim sebagai aset resmi game. Tidak ada gambar generatif AI.

## Latar

Latar aktif kedua percakapan memakai ruang tengah Iwatodai Dorm yang kosong dari versi **Persona 3: Dancing in Moonlight**, sesuai pilihan pengguna. Ini render komunitas dari model game yang diekspor, bukan screenshot resmi Persona 3 Reload.

- Pembuat render, ekstraksi, port MMD, dan edit model: **ominous-words**.
- Model/tekstur dasar: **Atlus / Sega / P-Studio**, Persona 3: Dancing in Moonlight.
- Halaman sumber: https://www.deviantart.com/ominous-words/art/MMD-DL-Persona3-DMN-Iwatodai-Dorm-914875311 . Halaman tersebut mengidentifikasi lokasi dan versi game secara eksplisit.
- `iwatodai-dorm-p3d-source.png`: gambar pratinjau asli 2560×1440, diunduh dari https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/b43a04e8-401f-4fc8-92cd-6500fcd98111/df4oyb3-d1f72076-8e8c-4732-8b02-5ffbb109ec00.png .
- `iwatodai-dorm-p3d.webp`: panel bawah gambar sumber, dipotong pada x=0, y=724, lebar=2560, tinggi=716. Panel memperlihatkan ruang duduk, meja, sekat kaca, ruang makan, dan meja resepsionis tanpa karakter. Kredit visual pembuat pada panel tetap disertakan dalam berkas crop. CSS memakai cover dengan fokus 65% agar area sofa menjadi pusat latar.

Gambar hasil crop diperiksa langsung sebagai gambar: tidak ada orang atau karakter. Tidak ada penghapusan orang, inpainting, atau generasi gambar baru. Pembuat sumber menyebut waifu2x untuk perbaikan tekstur model; proyek ini hanya mengunduh, memotong panel, dan mengonversi format. Latar ditampilkan tanpa blur, dengan lapisan gelap ringan.

Ketentuan pembuat sumber dicatat bersama kredit: bagian/model boleh diedit dan di-port, tidak dijual, tidak diklaim sebagai karya sendiri, dan aturan penggunaan tetap disertakan. Kredit diapresiasi; pembuat meminta pemberitahuan penggunaan. Tidak ada pesan atau pemberitahuan yang dikirim oleh proyek ini.

### Berkas lama yang tidak digunakan

`lounge-source.webp` dan `lounge.webp` berasal dari screenshot SEGA https://asia.sega.com/p3r/en/resources/img/top/character_modal/ss/aegis_01_6b461ebb7013d5b322ae6cf979c8815a.webp . Gambar tersebut memuat banyak karakter dan sebelumnya keliru diidentifikasi sebagai latar ruang tengah Iwatodai Dorm. Kedua berkas dipertahankan sebagai catatan versi lama, tetapi tidak dimuat oleh adegan aktif.

## Referensi antarmuka

Komponen daftar materi juga merujuk gambar daftar Social Link Persona 3 Reload yang diberikan pemateri dalam percakapan: massa navy, pita informasi cyan, tag arcana yang menumpuk, serta pilihan putih dengan garis merah. Gambar hanya menjadi referensi visual dan tidak disalin ke aset presentasi. Adaptasi memakai nomor item dan keterangan materi, tanpa rank atau status game.

- Situs resmi: https://asia.sega.com/p3r/en/ .
- Screenshot pilihan respons, portrait protagonis di kanan: https://asia.sega.com/p3r/en/resources/img/top/character_modal/ss/hero_01_dc40daebeeafe93a3396a720ed6c9edc.webp .
- Trailer Aigis resmi SEGA Asia: https://www.youtube.com/watch?v=yrhTds293AU .

Referensi battle HUD yang dibaca langsung untuk revisi healthbar:
- Screenshot battle Junpei pada situs resmi SEGA: https://asia.sega.com/p3r/en/resources/img/top/character_modal/ss/junpei_03_953cc4971e0214b3c532254fdd16ccbb.webp . Tampak portrait di sisi kanan dan strip status yang miring naik ke kanan. Versi pembelajaran mengadaptasi satu strip HP tanpa angka, bukan menambahkan SP palsu.
- Screenshot dialog Yukari: https://asia.sega.com/p3r/en/resources/img/top/character_modal/ss/yukari_02_756afc4a4481ab18a7a6799c55a85580.webp . Gambar ini menunjukkan dialog, bukan battle HUD. Keduanya hanya referensi dan tidak dimuat pada materi aktif.

Archivo dan Source Sans 3 dimuat dari `../../../assets/fonts/`. Lisensi font ada di folder sumber tersebut. Font tidak diklaim sebagai font resmi game.
