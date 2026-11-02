# Revisi adegan linear, Micro Task bercabang, dan transisi

## Permintaan

- Nomor pada tombol tetap terlihat saat hover/focus.
- Hapus disclaimer dan caption aset dari layar percakapan.
- Gunakan latar yang mengikuti slide, bukan foto game.
- Bab Risiko langsung menampilkan dialog database tanpa pilihan.
- Bab Micro Task menampilkan requirement dahulu, lalu pilihan dialog yang menentukan good/bad ending.
- Haluskan transisi percakapan.
- Pengujian tetap dilakukan pengguna, bukan AI.

## Perubahan

- [x] Nomor selector fokus dan prompt mengikuti warna teks tombol saat hover/focus. Penyebab sebelumnya: nomor cyan di atas latar hover cyan.
- [x] Ganti latar dialog dengan gradient biru dan bidang diagonal slide; hilangkan disclaimer/caption serta sublabel DIALOG pada nameplate.
- [x] Generalisasi sumber data menjadi `TEFA_DIALOGUE_SCENES.database` dan `.micro`.
- [x] Database memakai fixed route 18 giliran. Dalam embed, adegan mulai langsung dari instruksi pertama. Ulang tidak membuka pilihan.
- [x] Requirement katalog bersama slide/adegan: kombinasi filter, Reset, batas tampilan/pencarian/dependency.
- [x] Tambah slide requirement, dialog Micro Task, dan konklusi. Dua jalur masing-masing 12 giliran; konklusi hanya setelah percakapan selesai.
- [x] Pisahkan progres dan validasi snapshot menurut identitas adegan; gunakan identitas yang sama pada pesan host/frame.
- [x] Transisi teks 190–260 ms, nameplate 260 ms, portrait netral 340 ms. Pergantian pembicara mengubah posisi textbox dengan easing, tanpa menggandakan teks. Animasi giliran sebelumnya dibatalkan saat berganti/reset; reduced-motion mematikannya.
- [x] Perbarui dokumentasi aktif menjadi 38 slide dan versi `ai-assisted-scenes-150-8`.
- [ ] Pengujian pengguna.

## Isi cabang Micro Task

Bad ending: USER meminta seluruh requirement sekaligus beserta perombakan katalog. Tampilan dan dependency berubah; pencarian lama rusak; pemeriksaan per unit belum tersedia. Pekerjaan tidak diterima.

Good ending: USER membatasi micro task pertama pada kombinasi filter, meninjau rencana, meminta bukti, dan menjaga perilaku lama. Reset tetap menjadi micro task berikutnya. Good ending tidak mengklaim seluruh requirement telah selesai.

## Status pemeriksaan

Hanya pembacaan sumber untuk menyesuaikan data, event, dan selector. Tidak ada browser, pengujian otomatis, pemeriksaan sintaks, atau subagent review dijalankan sesuai instruksi pengguna.
