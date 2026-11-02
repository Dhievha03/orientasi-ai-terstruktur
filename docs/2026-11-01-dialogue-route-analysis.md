# Analisis bug percakapan dan diagnosis

## Bug dan perbaikan

### Jarak portrait dan textbox

Anchor portrait dan lebar textbox sebelumnya dihitung terpisah. Jarak User mencapai sekitar 91 px pada lebar 1366 dan 352 px pada lebar 1920. Anchor keduanya kini mengikuti ukuran panel yang sama. Sedikit overlap berada pada badan, bukan wajah.

### Tumpukan siswa

Gambar sebelumnya memakai container tinggi dengan contain dan overlap sekitar 64%. Kepala tertutup, dan simbol marah diposisikan terhadap kelompok, bukan setiap karakter. Setiap siswa kini mempunyai wrapper berasio gambar dan layer ekspresi sendiri. Overlap sekitar 32,5%, dengan kepala bertingkat.

### Tombol lanjut pada reaksi

Saat textbox disembunyikan, tombol masih mengikuti ujung panel lama sehingga terlihat mengambang jauh dari User. Tombol sekarang mengikuti anchor portrait pada adegan reaksi desktop.

### Perpindahan hari tidak disebutkan

Keluhan saat pendaftaran dibuka langsung muncul tanpa pengantar waktu. Narator sekarang menyebut Keesokan harinya sebelum siswa berbicara. Kejadian saat persiapan tetap pada hari yang sama.

### Alur diagnosis kehilangan topik asal

Ketika diagnosis dibuka dari pembahasan desain, perbaikan fungsi membawa percakapan ke jalur fungsi tanpa menawarkan kembali ke topik desain. Topik asal sekarang disimpan. Setelah perbaikan, User dapat kembali ke desain atau melanjutkan penanganan hasil pendaftaran secara eksplisit.

Preview juga tidak lagi dibersihkan hanya karena metadata topik berubah. Response terakhir dipertahankan selama source tidak berubah.

## Hal yang tidak terulang pada pengujian akhir

- Tidak ada masalah yang sudah diperbaiki muncul lagi pada panel diagnosis.
- Tidak ada topik diagnosis yang menduplikasi pilihan utama.
- Memilih diagnosis tidak langsung memperbaiki source.
- Tidak ada ending ganda pada model atau pengujian double click di host.
- Nuklir pada permintaan ke-9 tetap mengalahkan overheat.
- Apps menghasilkan status 422 dan 200. Pesan berhasil palsu pada frontend awal adalah konflik pembelajaran yang disengaja, bukan kegagalan engine preview.

## Cakupan pemeriksaan

Microsoft Edge melalui Playwright. Model seluruh keadaan terjangkau mencakup 586 keadaan dan 14.790 transisi dengan enam profil bukti. Sembilan jenis ending dicapai melalui UI. Apps diperiksa pada 24 kombinasi source/desain. Pemeriksaan tambahan mencakup diagnosis, simpan isian, response terakhir, shortcut, ekspresi, healthbar, perpindahan hari, serta restore host. Layout diperiksa pada lebar 390, 768, 1366, dan 1920.

Seluruh pemeriksaan akhir lulus tanpa error JavaScript. Tidak ada lampiran screenshot atau log pada laporan ini. Browser lain belum diuji.
