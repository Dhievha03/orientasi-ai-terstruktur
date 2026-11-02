# Micro task: agregasi omzet dashboard

## Aturan dan scope

Hanya transaksi `completed` pada periode terpilih dihitung sebagai omzet. Aturan ini adalah keputusan bisnis **dataset simulasi**, bukan definisi universal untuk seluruh laporan penjualan.

Scope perubahan adalah pemilihan transaksi sebelum agregasi. Filter periode, sumber data, tampilan, dan struktur CSV dipertahankan. Refund, timezone, otorisasi produksi, serta integrasi database memerlukan kebutuhan dan pengujian terpisah.

## Membuka demonstrasi

- `index.html?stage=before`: versi awal menghitung seluruh status dalam periode.
- `index.html?stage=first`: perbaikan parsial hanya mengecualikan cancelled.
- `index.html?stage=final`: hasil koreksi menghitung completed saja.

Tombol tahap tersedia di halaman. Semua data disediakan di `data.js`; tidak ada panggilan backend. Periode dapat diganti dan CSV dapat diunduh.

## Dataset dan hasil

| Transaksi | Tanggal | Status | Nilai |
| --- | --- | --- | --- |
| TRX-101 | 19 Oktober 2026 | completed | Rp1.250.000 |
| TRX-102 | 19 Oktober 2026 | completed | Rp750.000 |
| TRX-103 | 19 Oktober 2026 | cancelled | Rp500.000 |
| TRX-104 | 19 Oktober 2026 | pending | Rp300.000 |
| TRX-105 | 19 Oktober 2026 | completed | Rp1.000.000 |
| TRX-106 | 18 Oktober 2026 | completed | Rp2.000.000 |

Pada periode 19 Oktober: versi awal Rp3.800.000, versi parsial Rp3.300.000, hasil koreksi Rp3.000.000. Transaksi 18 Oktober dipakai sebagai regression test filter periode.

## Bukti pengerjaan dan pengujian

Saat penyusunan materi, pengujian browser pertama gagal karena versi final masih menghitung Rp3.300.000. Setelah aturan final diubah menjadi hanya completed, pengujian lulus.

`verify-tefa-sales.cjs` pada direktori pengujian sementara memeriksa hasil ketiga tahap; cancelled/pending saja menghasilkan nol; completed dalam periode menghasilkan Rp3.000.000; periode lain Rp2.000.000; data kosong dan status tidak dikenal menghasilkan nol. Pengujian juga mengunduh CSV dan membaca isinya untuk memeriksa tiga baris completed dengan total Rp3.000.000, serta memeriksa filter periode dan empty state.

Pemeriksaan dilakukan melalui Playwright dengan Microsoft Edge. Percakapan slide adalah rekonstruksi untuk pembelajaran, bukan transkrip layanan AI langsung. Kode contoh dikerjakan dengan bantuan asisten pada penyusunan materi, sedangkan klaim penerimaan tetap dibatasi oleh bukti pengujian tersebut.
