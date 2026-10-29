/* Arsip lengkap materi web sebelum pembaruan v0.7: 25 slide, 9 bab, seluruh catatan dan sumber. Tidak dimuat oleh presentasi aktif. */
window.TEFA_DECK = {
  title: 'Orientasi Penggunaan AI Tools Terstruktur untuk Calon AI Engineer',
  source: 'Diadaptasi dari materi Sharing TEFA, draft v0.3 yang diberikan pemateri.',
  chapters: [
    { id: 'fondasi', name: 'Orientasi & fondasi', menu: 'FONDASI', indent: 13, phase: 'New Moon', moon: 0 },
    { id: 'tools', name: 'Peta AI tools', menu: 'AI TOOLS', indent: 38, phase: 'Crescent', moon: 0.16 },
    { id: 'pendekatan', name: 'Dua pendekatan', menu: 'PENDEKATAN', indent: 0, phase: 'Crescent', moon: 0.30 },
    { id: 'alur', name: 'Alur kerja', menu: 'ALUR KERJA', indent: 27, phase: 'Quarter', moon: 0.50 },
    { id: 'prompt', name: 'Prompt & konteks', menu: 'KONTEKS', indent: 52, phase: 'Quarter', moon: 0.50 },
    { id: 'skills', name: 'Rules & skills', menu: 'RULES / SKILLS', indent: 0, phase: 'Gibbous', moon: 0.72 },
    { id: 'human', name: 'Human in the Loop', menu: 'HUMAN LOOP', indent: 18, phase: 'Gibbous', moon: 0.88 },
    { id: 'kasus', name: 'Full Moon: studi kasus', menu: 'STUDI KASUS', indent: 0, phase: 'Full Moon', moon: 1 },
    { id: 'penutup', name: 'Refleksi & penutup', menu: 'REFLEKSI', indent: 31, phase: 'Full Moon', moon: 1 }
  ],
  sources: [
    { name: 'Materi utama · Sharing TEFA, draft v0.3', detail: 'Materi PDF dari pemateri. Kerangka, batas penjelasan, dan contoh kasus disesuaikan untuk presentasi.' },
    { name: 'Utilize AI · kejar.id', url: 'https://firtera.tailad9333.ts.net/utilizeai/', detail: 'Rujukan kerangka pada PDF: memahami pekerjaan, standar hasil, konteks, dan verifikasi.' },
    { name: 'OpenAI · Why language models hallucinate', url: 'https://openai.com/index/why-language-models-hallucinate/', detail: 'Bacaan tambahan pada PDF tentang keterbatasan kebenaran keluaran model.' },
    { name: 'Claude Code · Overview', url: 'https://code.claude.com/docs/en/overview', detail: 'Dokumentasi resmi diperiksa: coding agent dan antarmuka terminal, IDE, desktop, serta web.' },
    { name: 'OpenCode · Rules', url: 'https://opencode.ai/docs/rules/', detail: 'Dokumentasi resmi diperiksa: instruksi proyek dan global pengguna melalui AGENTS.md.' },
    { name: 'OpenCode · Agent Skills', url: 'https://opencode.ai/docs/skills/', detail: 'Dokumentasi resmi diperiksa: SKILL.md, lokasi proyek/pengguna, pemuatan sesuai kebutuhan dan izin.' },
    { name: 'Claude Code · Skills', url: 'https://code.claude.com/docs/en/skills', detail: 'Dokumentasi resmi diperiksa: prosedur skill dan cakupan proyek/pengguna mengikuti aplikasi.' },
    { name: '9router · Repositori resmi proyek', url: 'https://github.com/decolua/9router', detail: 'Dokumentasi proyek diperiksa: peran router/gateway antara aplikasi dan penyedia model.' },
    { name: 'GitHub · About GitHub Copilot', url: 'https://docs.github.com/en/copilot/get-started/what-is-github-copilot', detail: 'Dokumentasi resmi diperiksa: bantuan coding dan kemampuan agent sesuai klien, paket, serta kebijakan.' }
  ],
  slides: [
    {
      id: 'orientasi', chapter: 'fondasi', type: 'hero', kicker: 'SHARING TEFA / AI-ASSISTED DEVELOPMENT',
      title: 'Orientasi Penggunaan AI Tools Terstruktur untuk Calon AI Engineer',
      subtitle: 'Memahami pekerjaan. Memberi konteks. Membuktikan kualitas.',
      tags: ['Penjelasan', 'Contoh konkret', 'Bedah kasus'],
      takeaway: 'AI membantu mengerjakan software. Developer memegang kendali.',
      notes: ['Buka dengan tujuan: menggunakan AI secara terstruktur, bukan sekadar menghasilkan banyak kode.', 'Peserta diharapkan mampu menjelaskan peran tools, membandingkan pendekatan, menguraikan alur kerja, dan menilai bukti pada contoh.', 'Diskusi memberi indikasi pemahaman konsep. Kemampuan review, debugging, dan testing mandiri perlu dinilai melalui praktik di kesempatan lain.', 'Materi diadaptasi dari PDF Sharing TEFA draft v0.3 dan pengembangan kerangka Utilize AI – kejar.id. Semua kasus merupakan ilustrasi pembelajaran.']
    },
    {
      id: 'empat-fondasi', chapter: 'fondasi', type: 'pillars', kicker: '01 / FONDASI BERPIKIR',
      title: 'Pakai AI.|Tetap pegang kendali.',
      lead: 'AI-Assisted Development memakai AI untuk membantu pekerjaan software; manusia memahami masalah, meninjau perubahan, dan bertanggung jawab atas hasil.',
      items: [
        { title: 'Pahami pekerjaan', text: 'Siapa pengguna, apa masalahnya, bagaimana data mengalir, dan di mana batas sistem?' },
        { title: 'Tentukan ukuran hasil', text: 'Contoh: judul yang hanya berisi spasi ditolak dengan pesan yang jelas.' },
        { title: 'Pecah pekerjaan', text: 'Pisahkan validasi input, perubahan status, penyimpanan, dan pengujian.' },
        { title: 'Tetapkan referensi', text: 'Tunjukkan contoh sesuai dan tidak sesuai, beserta alasan penilaiannya.' }
      ],
      takeaway: 'Prompt yang jelas mengurangi ambiguitas, tetapi tidak menjamin keluaran benar.',
      notes: ['Hubungkan empat fondasi dengan kerangka Utilize AI pada materi sumber.', 'Halusinasi adalah keluaran yang terdengar masuk akal tetapi tidak benar. Keterbatasan model dan informasi juga memengaruhi hasil.', 'AI dapat meminta klarifikasi; developer tetap memastikan pertanyaan penting terjawab.', 'Contoh: form rapi tetapi tiga spasi tetap tersimpan. Keputusan: belum layak diterima karena validasi gagal. Tindakan: perbaiki penolakan spasi dan uji ulang.', 'Calon AI Engineer juga perlu kompetensi lebih luas: data, integrasi model, evaluasi, dan pengoperasian solusi AI. Menggunakan coding agent adalah salah satu bekal.']
    },
    {
      id: 'kasus-berkelanjutan', chapter: 'fondasi', type: 'scope', kicker: 'SATU CONTOH / SEPANJANG PERJALANAN',
      title: 'Daftar tugas TEFA.|Scope yang jelas.',
      lead: 'Aplikasi pencatatan tugas untuk satu pengguna di satu browser. Contoh penjelasan, bukan proyek praktik.',
      features: ['Menambah tugas', 'Menandai selesai', 'Menghapus tugas', 'Menyimpan tugas & status setelah refresh'],
      boundary: 'Data contoh · HTML, CSS, JavaScript · localStorage. Login, kolaborasi, dan sinkronisasi lintas perangkat berada di luar scope.',
      takeaway: 'AI-Assisted Development adalah bekal calon AI Engineer; cakupan AI Engineer lebih luas.',
      notes: ['Gunakan nama tugas “Membuat laporan” secara konsisten. Referensikan kasus ini pada prompt, review, debugging, testing, dan skill.', 'localStorage pada contoh hanya menyimpan data demonstrasi pada browser yang sama; bukan rancangan penyimpanan data sensitif atau lintas pengguna.', 'Tujuan penggunaan AI: membantu memahami kode, menyusun rencana, membuat perubahan, dan merancang pemeriksaan. Keputusan penerimaan tetap milik developer.']
    },
    {
      id: 'lapisan-tools', chapter: 'tools', type: 'toolmap', kicker: '02 / PAHAMI LAPISANNYA',
      title: 'Nama tool bukan|seluruh kemampuannya.',
      lead: 'Bedakan peran komponen. Satu produk dapat menggabungkan beberapa fungsi.',
      rows: [
        ['Model AI', 'Menghasilkan respons dari konteks.', 'Model bahasa dari penyedia AI'],
        ['Aplikasi chat', 'Tempat berdiskusi dan meminta penjelasan.', 'ChatGPT, Claude, aplikasi chat lainnya'],
        ['Editor', 'Lingkungan membaca dan menyunting kode.', 'VS Code; dapat dipasangi bantuan AI'],
        ['Coding agent', 'Mengelola langkah kerja dan memakai tools sesuai izin.', 'OpenCode, Claude Code; fitur agent GitHub Copilot'],
        ['Gateway / router', 'Meneruskan permintaan ke penyedia model.', '9router']
      ],
      takeaway: 'Kemampuan mengikuti integrasi, konteks, lingkungan eksekusi, dan izin.',
      notes: ['Jelaskan perbedaan model dengan aplikasi yang membungkusnya. Model saja tidak identik dengan kemampuan membaca file atau menjalankan perintah.', 'Browser, terminal/CLI, dan editor adalah antarmuka. CLI berarti antarmuka baris perintah.', 'Claude Code tersedia melalui beberapa antarmuka, termasuk terminal dan browser. GitHub Copilot menyediakan bantuan coding dan kemampuan agent; ketersediaannya mengikuti klien, paket, dan kebijakan.', 'Git menyimpan riwayat, test runner menjalankan pengujian, dan linter memeriksa aturan tertentu. Mereka melengkapi tools AI.', 'Buka Referensi untuk dokumentasi resmi yang mendasari klaim produk. Materi tidak menjadi tutorial instalasi satu produk.']
    },
    {
      id: 'memilih-tools', chapter: 'tools', type: 'toolchoice', kicker: 'PILIH FUNGSI / BUKAN SEKADAR MEREK',
      title: 'Tool mengikuti|pekerjaan.',
      diagram: [ ['Aplikasi agent', 'OpenCode / Claude Code'], ['Router opsional', 'Contoh: 9router'], ['Penyedia model', 'Koneksi yang didukung'] ],
      items: [
        { title: 'Tugas', text: 'Penjelasan error: chat bisa cukup. Perubahan lintas file: agent dapat membantu.' },
        { title: 'Konteks', text: 'Sertakan file relevan dan langkah reproduksi, bukan seluruh data tanpa seleksi.' },
        { title: 'Kontrol', text: 'Tinjau perubahan lokal dan izin tindakan sebelum memperluas akses.' },
        { title: 'Kelayakan', text: 'Gunakan akun yang diizinkan sekolah dan data contoh.' }
      ],
      takeaway: 'Dalam contoh OpenCode + 9router: agent mengelola pekerjaan, router menangani koneksi model.',
      notes: ['Diagram adalah salah satu susunan, bukan ketergantungan wajib. Agent dapat menggunakan koneksi langsung yang didukung penyedia.', 'Contoh keputusan: untuk menelusuri input spasi di beberapa file, pilih agent dengan konteks proyek dan izin terbatas. Alasan: perlu membaca aliran validasi. Tindakan: berikan requirement, file relevan, dan langkah reproduksi.', 'Akses lebih luas menambah kemampuan sekaligus kebutuhan review. Jangan menilai kemampuan aplikasi hanya dari nama model.']
    },
    {
      id: 'dua-pendekatan', chapter: 'pendekatan', type: 'compare', kicker: '03 / POLA KERJA, BUKAN LABEL ORANG',
      title: 'Vibe Coding ×|AI-Assisted Development',
      lead: 'Perbedaan utamanya ada pada cara menilai hasil dan memahami perubahan.',
      headings: ['Aspek', 'Vibe Coding', 'AI-Assisted Development'],
      rows: [
        ['Pola pikir', 'Mengeksplorasi hasil yang cepat terlihat.', 'Menyelesaikan kebutuhan dengan kriteria.'],
        ['Instruksi', 'Berkembang lewat percobaan dan respons.', 'Memuat konteks, batasan, dan kriteria selesai.'],
        ['Pemahaman kode', 'Dapat terbatas selama iterasi cepat.', 'Memahami logika dan dampak penting.']
      ],
      takeaway: 'Vibe Coding berguna untuk eksplorasi ide dan prototipe cepat.',
      notes: ['Definisi Vibe Coding di sesi ini: iterasi berorientasi hasil cepat dengan pemeriksaan kode yang dapat terbatas. Praktik nyata berada pada spektrum.', 'Jangan memberi label bahwa orang atau praktik tertentu selalu buruk. Developer bisa mengubah pendekatan ketika konteks berubah.', 'Contoh: mencoba susunan tampilan daftar tugas dengan data dummy dapat membantu eksplorasi. Saat data harus persisten, kriterianya perlu dibuat eksplisit.']
    },
    {
      id: 'perbandingan-validasi', chapter: 'pendekatan', type: 'compare', kicker: 'DARI HASIL TERLIHAT / KE HASIL TERBUKTI',
      title: 'Apa yang dilakukan|saat hasilnya datang?',
      headings: ['Aspek', 'Vibe Coding', 'AI-Assisted Development'],
      rows: [
        ['Code review', 'Bisa berhenti pada tampilan akhir.', 'Membaca diff dan alasan perubahan.'],
        ['Debugging', 'Meminta percobaan perbaikan berikutnya.', 'Mereproduksi dan menelusuri penyebab.'],
        ['Testing', 'Dapat berhenti pada input normal.', 'Menguji normal, gagal, dan regresi.'],
        ['Tanggung jawab', 'Tetap pada pengguna / developer.', 'Dinyatakan melalui keputusan dan bukti.']
      ],
      takeaway: 'Proses terstruktur memberi dasar keputusan yang jelas, tetapi tetap dapat menghasilkan bug.',
      notes: ['Diff berarti perbedaan kode sebelum dan sesudah perubahan. Regresi adalah perilaku yang sebelumnya benar lalu rusak setelah perubahan.', 'Bandingkan dua respons saat tiga spasi tersimpan: “coba betulkan” versus “reproduksi input spasi, periksa validasi setelah trim, dan uji ulang input normal”.', 'Tanggung jawab tidak hilang pada salah satu pendekatan. Perbedaannya ada pada seberapa eksplisit pemahaman dan pembuktian dilakukan.']
    },
    {
      id: 'kapan-pendekatan', chapter: 'pendekatan', type: 'decision', kicker: 'CONTOH KEPUTUSAN / PILIH SESUAI KONTEKS',
      title: 'Cepat mengeksplorasi.|Terstruktur menerima.',
      items: [
        { label: 'EKSPLORASI', title: 'Mencoba ide tampilan', text: 'Gunakan data dummy untuk membandingkan susunan daftar tugas.', reason: 'Iterasi cepat membantu melihat kemungkinan.', action: 'Pilih arah desain, lalu tulis kebutuhan sebelum membangun perilaku final.' },
        { label: 'FITUR YANG AKAN DIPAKAI', title: 'Menyimpan tugas & status', text: 'Data harus tetap benar setelah refresh pada browser yang sama.', reason: 'Tampilan yang berjalan belum membuktikan integritas data.', action: 'Tinjau diff, uji kosong/spasi dan refresh, lalu catat hasil aktual.' }
      ],
      takeaway: 'Kecepatan eksplorasi dan ketelitian validasi dapat saling melengkapi.',
      notes: ['Kelebihan Vibe Coding: membantu prototipe dan eksplorasi. Batasnya: ketidakpastian ketika kode dan perilaku belum ditinjau.', 'AI-Assisted Development membutuhkan usaha memahami dan menguji. Manfaatnya adalah keputusan yang dapat dijelaskan.', 'Situasi: AI membuat form rapi tetapi input spasi diterima. Keputusan: belum selesai. Alasan: melanggar kriteria validasi. Tindakan: perbaikan terarah dan pengujian ulang.']
    },
    {
      id: 'alur-terstruktur', chapter: 'alur', type: 'workflow', kicker: '04 / ALUR KERJA TERSTRUKTUR',
      title: 'Tujuan dulu.|Kode kemudian.',
      lead: 'Setiap tahap menghasilkan sesuatu yang bisa diperiksa sebelum pekerjaan diteruskan.',
      steps: [
        ['Kebutuhan', 'Lanjutkan daftar tugas setelah halaman dibuka ulang.'],
        ['Kriteria penerimaan', 'Judul valid; tugas dan status bertahan setelah refresh.'],
        ['Rencana', 'Asumsi, file terdampak, batas perubahan, cara uji.'],
        ['Implementasi kecil', 'Pisahkan validasi, status, dan penyimpanan.'],
        ['Review', 'Cocokkan kebutuhan dengan diff yang sebenarnya.'],
        ['Pengujian', 'Jalankan skenario, perbaiki, lalu uji ulang.'],
        ['Dokumentasi', 'Catat hasil aktual dan bagian yang belum diuji.']
      ],
      takeaway: 'Developer mengendalikan kebutuhan, batas perubahan, dan keputusan penerimaan.',
      notes: ['Bacakan alur lengkap: Kebutuhan → Kriteria penerimaan → Rencana → Implementasi kecil → Review → Pengujian → Dokumentasi.', 'Implementasi kecil memudahkan review dan pemulihan jika perubahan bermasalah.', 'Rencana sebaiknya menyatakan bagian proyek yang perlu dibaca, bukan langsung menambah fitur. Review rencana sebelum scope diperluas.']
    },
    {
      id: 'kriteria-bukti', chapter: 'alur', type: 'criteria', kicker: 'UKURAN KEBERHASILAN / BUKAN KESAN',
      title: '“Sudah bagus”|belum cukup spesifik.',
      lead: 'KPI menilai keberhasilan tujuan. Kriteria penerimaan menyatakan syarat konkret agar fitur diterima.',
      headings: ['Pernyataan umum', 'Kriteria penerimaan', 'Bukti yang dicari'],
      rows: [
        ['Input harus bagus.', 'Tolak judul kosong setelah trim.', 'Uji teks biasa, kosong, dan spasi.'],
        ['Data jangan hilang.', 'Tugas dan status bertahan setelah refresh.', 'Bandingkan data sebelum / sesudah.'],
        ['Tahan error.', 'Data rusak tidak membuat layar kosong.', 'Uji data tidak valid dan pesan error.'],
        ['Tampilan konsisten.', 'Ikuti tombol dan pesan yang sudah ada.', 'Bandingkan dengan referensi proyek.']
      ],
      takeaway: 'Target performa juga memerlukan operasi, perangkat, jumlah data, dan cara ukur yang jelas.',
      notes: ['Trim membuang spasi di awal dan akhir. Judul tiga spasi menjadi kosong setelah trim.', 'Contoh sesuai: tidak menambah data dan menampilkan pesan. Tidak sesuai: menyimpan judul kosong lalu hanya menyembunyikan barisnya. Alasannya adalah integritas data.', 'Situasi: AI menyatakan cepat setelah mencoba satu tugas. Keputusan: belum ada dasar klaim kecepatan. Alasan: kondisi pengukuran belum ditetapkan. Tindakan: sepakati operasi, perangkat, ukuran data, kondisi jaringan bila relevan, dan metode ukur.', 'Klaim tanpa downtime memerlukan cakupan dan periode pengamatan. Jangan menyalin target referensi sebagai janji proyek.']
    },
    {
      id: 'checkpoint', chapter: 'alur', type: 'checkpoints', kicker: 'CHECKPOINT / KEMBALIKAN KE KEBUTUHAN',
      title: 'Jangan menerima|seluruh paket sekaligus.',
      items: [
        ['Sebelum perubahan', 'AI berencana menambah login.', 'Kembalikan ke scope satu pengguna di satu browser.'],
        ['Sesudah validasi', 'Tiga spasi ditolak dan pesan tampil.', 'Catat bukti untuk kasus ini; jangan menggeneralisasi semua fitur.'],
        ['Sesudah penyimpanan', 'Tugas ada, tetapi status hilang setelah refresh.', 'Perbaiki penyimpanan status, lalu ulangi pengujian terkait.'],
        ['Sebelum penyerahan', 'Validasi lulus; persistensi gagal; data rusak belum diuji.', 'Tunda penerimaan dan lengkapi pemeriksaan.']
      ],
      takeaway: 'Jika perbaikan berulang gagal, kumpulkan bukti baru atau minta review pendamping.',
      notes: ['Semua pengamatan di slide ini adalah ilustrasi keputusan, bukan hasil pengujian aplikasi nyata.', 'Terangkan pola: situasi → keputusan → alasan → tindakan. Alasan penundaan adalah adanya kriteria gagal dan bukti yang belum lengkap.', 'Menambah prompt tanpa meninjau hasil dapat memperbesar perubahan yang tidak dipahami.']
    },
    {
      id: 'prompt-spesifik', chapter: 'prompt', type: 'prompt', kicker: '05 / INSTRUKSI YANG BISA DITINDAKLANJUTI',
      title: 'Bukan sekadar panjang.|Beri informasi relevan.',
      bad: 'Buat aplikasi tugas yang bagus dan jangan error.',
      quote: 'Tambahkan penyimpanan tugas dan status pada aplikasi HTML, CSS, JavaScript ini dengan localStorage. Tolak judul kosong setelah trim; contoh: tiga spasi tidak menambah tugas. Data tetap ada setelah refresh dan data rusak ditangani dengan pesan jelas. Pertahankan tampilan, tanpa dependensi baru. Jelaskan asumsi dan rencana sebelum mengubah file. Laporkan perubahan, hasil uji aktual, dan bagian yang belum diuji.',
      elements: ['Tujuan', 'Konteks proyek', 'Batasan', 'Contoh', 'Kriteria selesai', 'Bentuk hasil'],
      takeaway: 'Konteks yang lengkap berarti cukup dan konsisten, bukan memasukkan semua hal.',
      notes: ['Tunjukkan keenam unsur: tujuan penyimpanan; konteks HTML/CSS/JS; batas localStorage, tampilan, dependensi; contoh tiga spasi; kriteria validasi/persistensi/data rusak; bentuk hasil rencana dan laporan.', 'Prompt yang panjang tetap bisa ambigu. Instruksi spesifik membantu, tetapi tidak menjamin kebenaran hasil.', 'localStorage di materi adalah pilihan rancangan contoh untuk satu pengguna di browser yang sama.']
    },
    {
      id: 'konteks-debug', chapter: 'prompt', type: 'bugbrief', kicker: 'CONTOH / KONTEKS UNTUK MEMPERBAIKI BUG',
      title: 'Bawa bukti.|Jangan hanya “masih salah”.',
      facts: [
        ['Situasi', 'Form tugas sudah tampil. Input tiga spasi masih tersimpan.'],
        ['Reproduksi', 'Buka daftar → masukkan tiga spasi → pilih Tambah.'],
        ['Diharapkan', 'Tidak ada tugas baru; pesan validasi ditampilkan.'],
        ['Aktual', 'Satu baris tugas tanpa judul terlihat muncul.']
      ],
      quote: 'Periksa file form dan aliran validasinya. Tolak nilai kosong setelah trim tanpa mengubah tampilan. Uji teks biasa, kosong, dan spasi. Jika asumsi penting belum jelas, nyatakan atau tanyakan sebelum lanjut.',
      takeaway: 'Sertakan file relevan dan pesan error bila ada. Samarkan kredensial serta data sensitif.',
      notes: ['Contoh keputusan: minta perbaikan terbatas pada validasi. Alasan: gejala sudah dapat direproduksi dan tampilan lain sesuai. Tindakan: berikan file relevan, langkah reproduksi, expected/actual, lalu tinjau perubahan.', 'Tidak ada pesan error pada ilustrasi ini; jangan mengarang log yang tidak ada.', 'Konteks harus tersedia di aplikasi agent yang digunakan. Akses proyek dan tools mengikuti integrasi dan izin.']
    },
    {
      id: 'prompt-rules-skills', chapter: 'skills', type: 'mechanisms', kicker: '06 / TIGA LAPIS INSTRUKSI',
      title: 'Tugas saat ini.|Kebiasaan yang konsisten.',
      items: [
        { label: 'PROMPT', title: 'Kerjakan ini', text: 'Permintaan untuk tugas sekarang.', example: '“Perbaiki validasi judul kosong setelah trim.”' },
        { label: 'RULES', title: 'Ikuti aturan ini', text: 'Konvensi dan batasan kerja.', example: '“Ikuti struktur proyek. Pertahankan gaya UI. Hindari dependensi baru.”' },
        { label: 'SKILL', title: 'Gunakan prosedur ini', text: 'Langkah berulang dengan referensi atau script bila perlu.', example: '“Review fitur TEFA terhadap kebutuhan, diff, dan bukti pengujian.”' }
      ],
      takeaway: 'Rules dan skills adalah instruksi yang efektivitasnya tetap perlu diperiksa.',
      notes: ['Skill di sini adalah paket instruksi agent, bukan kompetensi manusia.', 'Format, prioritas instruksi, dan cara pemuatan mengikuti aplikasi. Jangan menganggap semua aplikasi memiliki mekanisme identik.', 'Contoh rule OpenCode: AGENTS.md di proyek, atau ~/.config/opencode/AGENTS.md untuk global pengguna. Detail diverifikasi lewat dokumentasi resmi.']
    },
    {
      id: 'skill-review', chapter: 'skills', type: 'skill', kicker: 'CONTOH SKILL / REVIEW FITUR TEFA',
      title: 'Prosedur yang|bisa dipakai ulang.',
      trigger: 'Pemicu: pengguna meminta review fitur terhadap requirement.',
      steps: [
        ['Baca', 'Kebutuhan, kriteria penerimaan, dan diff.'],
        ['Telusuri', 'Validasi judul serta aliran tugas dan status.'],
        ['Cocokkan', 'Hasil uji aktual dengan setiap kriteria.'],
        ['Laporkan', 'Lokasi, dampak, bukti, dan saran perbaikan.']
      ],
      example: 'Temuan: validasi sebelum penyimpanan belum menolak nilai setelah trim. Dampak: tugas kosong tersimpan. Bukti ilustratif: input tiga spasi menambah baris. Saran: tolak nilai kosong dan uji ulang. Persistensi: belum diperiksa.',
      takeaway: 'Pisahkan temuan terkonfirmasi dari hal yang belum diperiksa. Tes yang tidak dijalankan bukan “lulus”.',
      notes: ['Ini contoh prosedur konseptual, bukan file skill yang diinstal atau dijalankan selama sesi.', 'Prosedur menilai requirement, bukan hanya memberi komentar umum pada kode. Temuan lokasi harus merujuk file/baris aktual bila proyek tersedia; jangan mengarang lokasi.', 'Perubahan di luar scope membutuhkan keputusan developer. Baca, uji, dan perbarui skill sendiri maupun pihak lain saat prosedur berubah.', 'Contoh tindakan lanjutan: buat perbaikan validasi kecil, jalankan uji terkait, dan lengkapi pemeriksaan persistensi.']
    },
    {
      id: 'cakupan-skill', chapter: 'skills', type: 'skillScope', kicker: 'CAKUPAN / PROYEK DAN GLOBAL PENGGUNA',
      title: 'Global di pengguna.|Bukan otomatis ke semua.',
      lead: 'Contoh lokasi yang didukung OpenCode. Simbol ~ berarti direktori home pengguna.',
      paths: [
        { label: 'PROYEK', path: '.opencode/skills/<nama>/SKILL.md', text: 'Prosedur khusus proyek dalam konteks penemuan skill aplikasi.' },
        { label: 'GLOBAL PENGGUNA', path: '~/.config/opencode/skills/<nama>/SKILL.md', text: 'Tersedia lintas proyek pada lingkungan pengguna tersebut.' }
      ],
      diagram: [ ['Agent', 'Menemukan & memuat skill'], ['9router', 'Routing permintaan model'], ['Model', 'Merespons konteks'] ],
      takeaway: 'Router model tidak otomatis menyebarkan skill ke aplikasi atau komputer lain.',
      notes: ['Dokumentasi resmi OpenCode memuat lokasi-lokasi tambahan yang kompatibel; dua lokasi di sini adalah contoh, bukan daftar lengkap.', 'Skill dimuat sesuai kebutuhan dan izin. Global bukan berarti tersedia otomatis pada semua komputer siswa.', 'Rules juga dapat berada pada cakupan proyek atau global pengguna. Konvensi dan mekanisme dukungan mengikuti aplikasi agent.', 'Model dapat menerima instruksi skill dalam konteks yang disusun agent, tetapi itu berbeda dari router memasang skill di semua aplikasi.', 'Detail teknis dirujuk ke OpenCode Rules, OpenCode Agent Skills, dan repositori resmi 9router melalui tombol Referensi.']
    },
    {
      id: 'human-loop', chapter: 'human', type: 'loop', kicker: '07 / MANUSIA PADA TITIK KEPUTUSAN',
      title: 'AI mengusulkan.|Developer mengevaluasi.',
      lead: 'Human in the Loop menempatkan manusia pada evaluasi, koreksi, izin, dan penerimaan hasil.',
      steps: [ ['Instruksi', 'Tujuan & batas'], ['Hasil AI', 'Kode & asumsi'], ['Verifikasi', 'Kriteria & bukti'], ['Koreksi', 'Masalah spesifik'], ['Uji ulang', 'Perbaikan & regresi'] ],
      quote: 'Input tiga spasi masih menambah tugas. Kriteria meminta penolakan setelah trim. Perbaiki validasi tanpa mengubah tampilan, lalu ulangi uji kosong, spasi, dan teks biasa.',
      takeaway: 'Feedback memperbarui konteks kerja; tidak otomatis melatih ulang bobot model secara permanen.',
      notes: ['AI dapat menjalankan pemeriksaan yang tersedia. Developer menilai kecukupan bukti terhadap kebutuhan dan dampak kegagalan.', 'Koreksi membantu selama informasinya tersedia dalam konteks atau mekanisme penyimpanan aplikasi. Dokumentasikan keputusan berulang melalui rules atau skill yang sesuai.', 'Alasan feedback terarah lebih membantu: menyebut bukti, expected behavior, batas perubahan, dan pemeriksaan berikutnya.']
    },
    {
      id: 'review-debugging', chapter: 'human', type: 'review', kicker: 'CONTOH / REVIEW DAN DEBUGGING',
      title: 'Baca perubahannya.|Telusuri penyebabnya.',
      items: [
        { label: 'CODE REVIEW', title: 'Cocokkan diff dengan tujuan', text: 'AI mengaku hanya mengubah validasi. Periksa apakah diff juga mengubah penghapusan atau tampilan.', reason: 'Penjelasan AI harus sesuai dengan perubahan aktual.', action: 'Minta alasan untuk perubahan tambahan; batasi atau pulihkan bagian yang tidak diperlukan.' },
        { label: 'DEBUGGING', title: 'Dari gejala ke penyebab', text: 'Tiga spasi masih tersimpan. Ulangi langkahnya dan telusuri nilai sebelum penyimpanan.', reason: 'Penyebab belum terbukti hanya dari gejala. Hipotesis: pengecekan dilakukan sebelum trim.', action: 'Periksa hipotesis pada kode, perbaiki bagian penyebab, lalu uji ulang normal / kosong / spasi.' }
      ],
      takeaway: 'Review memeriksa logika perubahan. Testing memeriksa perilaku pada kondisi tertentu.',
      notes: ['Ini pembahasan cara mengambil keputusan, bukan praktik coding siswa. Tidak ada diff proyek nyata yang diklaim telah ditinjau.', 'Jika hipotesis validasi tidak terbukti, kumpulkan bukti tambahan alih-alih meminta perubahan acak.', 'Kebutuhan review meningkat ketika perubahan menyentuh data penting, hak akses, banyak file, atau sistem yang dipakai orang lain.']
    },
    {
      id: 'rencana-pengujian', chapter: 'human', type: 'testplan', kicker: 'RENCANA UJI / BUKAN HASIL AKTUAL',
      title: 'Uji requirement.|Bukan hanya kasus normal.',
      headings: ['Skenario', 'Hasil yang diharapkan'],
      rows: [
        ['Judul “Membuat laporan”', 'Tepat satu tugas baru muncul.'],
        ['Judul kosong dan tiga spasi', 'Tidak ada tugas baru; pesan validasi tampil.'],
        ['Tandai selesai, lalu refresh', 'Tugas dan status selesai tetap tersimpan.'],
        ['Hapus tugas, lalu refresh', 'Tugas yang dihapus tidak muncul lagi.'],
        ['Data simpanan rusak', 'Error tertangani dengan pesan yang jelas.']
      ],
      takeaway: 'Catat kondisi, langkah, hasil aktual, serta status: lulus, gagal, atau belum diuji.',
      notes: ['Tabel merupakan rencana, bukan bukti bahwa pengujian telah dijalankan. Semua skenario adalah rancangan pembelajaran.', 'Lint dan build yang berhasil belum membuktikan semua kebutuhan pengguna terpenuhi. Pengujian buatan AI juga perlu ditinjau terhadap requirement.', 'Regresi: setelah memperbaiki validasi, ulangi input normal dan perilaku terkait agar perbaikan tidak merusak fitur lain.', '“Belum diuji” adalah status pengetahuan, bukan sinonim gagal. Jangan mengubahnya menjadi lulus berdasarkan dugaan.']
    },
    {
      id: 'izin-tanggungjawab', chapter: 'human', type: 'pillars', kicker: 'KONTROL / BAGIAN DARI PEKERJAAN DEVELOPER',
      title: 'Tinjau akses.|Jaga data dan keputusan.',
      items: [
        { title: 'Izin tindakan', text: 'Pahami perintah, penghapusan file, dependensi, dan potensi pengiriman data.' },
        { title: 'Data & kredensial', text: 'Gunakan data contoh. Jangan kirim token, password, atau data klien ke layanan tak berwenang.' },
        { title: 'Riwayat perubahan', text: 'Gunakan version control agar diff dapat ditinjau dan perubahan dapat dipulihkan.' },
        { title: 'Pelaporan jujur', text: 'Sebut bantuan AI, keputusan, hasil lulus/gagal, serta bagian yang belum diuji.' }
      ],
      takeaway: 'Jika dampak perubahan belum dipahami, minta bantuan pendamping sebelum menerima hasil.',
      notes: ['Contoh situasi: agent meminta menghapus folder atau memasang dependensi saat hanya diminta validasi. Keputusan: periksa kebutuhan tindakannya. Alasan: dampak lebih luas dari scope. Tindakan: minta penjelasan dan pilih akses yang sesuai kebutuhan.', 'Hindari menyimpan rahasia dalam commit. Riwayat membantu pemulihan tetapi bukan alasan untuk menerima perubahan tanpa review.', 'Klaim “AI mengatakan selesai” tidak menggantikan bukti pengujian.']
    },
    {
      id: 'full-moon-kasus', chapter: 'kasus', type: 'case', kicker: '08 / FULL MOON · TITIK KEPUTUSAN',
      title: 'AI bilang selesai.|Buktinya berkata apa?',
      lead: 'AI menyatakan aplikasi pencatatan tugas TEFA sudah selesai. Pemateri kemudian menemukan tiga hal berikut.',
      observations: [ ['01', 'Judul biasa berhasil', '“Membuat laporan” berhasil ditambahkan.'], ['02', 'Input spasi tersimpan', 'Tiga spasi tetap menjadi tugas baru.'], ['03', 'Refresh belum dicoba', 'Penyimpanan tugas dan status belum diperiksa.'] ],
      question: 'Apakah hasil ini sudah layak diterima?',
      discussion: [
        { label: 'KEPUTUSAN', text: 'Hasil belum layak diterima. Kasus normal ini lulus, validasi gagal, dan persistensi belum diuji.' },
        { label: 'ALASAN', text: 'Input spasi melanggar kriteria. Satu kasus yang berhasil tidak membuktikan seluruh fitur benar.' },
        { label: 'TINDAKAN', text: 'Perbaiki validasi input, lengkapi pengujian persistensi, lalu ulangi pengujian fitur yang terdampak.' }
      ],
      takeaway: 'Ilustrasi pembelajaran · seluruh pengamatan kasus ini adalah contoh.',
      notes: ['Bacakan situasi dahulu. Gunakan tombol “Tampilkan pembahasan” atau B untuk membuka contoh keputusan, alasan, dan tindakan.', 'Tidak ada pengumpulan jawaban. Diskusi dapat dilakukan secara lisan setelah contoh dijelaskan.', 'Tekankan perbedaan gagal dan belum diuji: validasi terbukti tidak sesuai; persistensi belum punya bukti.', 'Keputusan lengkap yang dapat dibacakan: “Hasil belum layak diterima. Perbaiki validasi input, lengkapi pengujian persistensi, lalu ulangi pengujian fitur yang terdampak.”']
    },
    {
      id: 'koreksi-kasus', chapter: 'kasus', type: 'caseAction', kicker: 'FULL MOON / KOREKSI BERDASARKAN BUKTI',
      title: 'Koreksi yang jelas.|Perubahan yang terarah.',
      quote: 'Tolak judul kosong setelah trim. Pertahankan tampilan. Uji input normal, kosong, dan spasi. Periksa apakah tugas serta statusnya bertahan setelah refresh. Laporkan hasil aktual dan bagian yang belum diuji.',
      steps: [ ['Perbaiki', 'Validasi kosong dengan pesan jelas.'], ['Uji ulang', 'Input normal, kosong, dan spasi.'], ['Periksa regresi', 'Status, hapus, dan refresh.'], ['Lengkapi', 'Penanganan data simpanan rusak.'] ],
      takeaway: 'Bukti masalah + perilaku yang diharapkan + batas perubahan + cara memeriksa.',
      notes: ['Situasinya tetap sama: input tiga spasi tersimpan, tampilan lain sudah sesuai.', 'Contoh feedback yang lebih lengkap dapat menambahkan: “Input tiga spasi masih membuat tugas baru. Jangan menambah dependensi.”', 'Alasannya: feedback menunjuk masalah nyata dan membatasi perbaikan agar tidak melebar.', 'Contoh keputusan: tinjau diff perbaikan, lalu ulangi kasus yang gagal dan perilaku terkait. Jangan menerima hanya karena AI memberi laporan baru.']
    },
    {
      id: 'laporan-kasus', chapter: 'kasus', type: 'report', kicker: 'FULL MOON / CONTOH FORMAT LAPORAN',
      title: 'Jujur pada hasil.|Jelas pada keterbatasan.',
      lead: 'Bayangkan pemeriksaan lanjutan menghasilkan laporan ilustratif berikut.',
      results: [ ['Kosong & spasi ditolak', 'lulus'], ['Teks biasa ditambahkan', 'lulus'], ['Status bertahan setelah refresh', 'lulus'], ['Penghapusan bertahan setelah refresh', 'lulus'], ['Penanganan data rusak', 'belum diuji'] ],
      decision: 'Penerimaan penuh belum dapat disimpulkan.',
      reason: 'Masih ada kriteria yang belum diperiksa. Lengkapi uji data rusak dan catat hasil aktual sebelum keputusan akhir.',
      takeaway: 'Ini contoh pelaporan, bukan klaim pengujian aplikasi nyata.',
      notes: ['Jangan membacakan daftar status ini sebagai hasil pengujian web presentasi atau aplikasi nyata; semuanya ilustrasi format laporan.', 'Pertanyaan pembahasan: apa yang belum diketahui? Contoh jawaban: penanganan data rusak. Alasan: belum ada pemeriksaan. Tindakan: jalankan skenario itu dan perbarui laporan.', 'Bedakan proses menerima semua hasil secara langsung dengan proses meninjau diff, mereproduksi error, serta menyediakan hasil uji dan keterbatasan.']
    },
    {
      id: 'tiga-kebiasaan', chapter: 'penutup', type: 'habits', kicker: '09 / BAWA PULANG TIGA KEBIASAAN',
      title: 'Lebih terarah.|Lebih bisa dijelaskan.',
      items: [
        { title: 'Tujuan sebelum kode.', text: 'Tulis kebutuhan dan kriteria yang bisa diamati sebelum meminta implementasi.', example: '“Judul spasi ditolak; tugas dan status bertahan setelah refresh.”' },
        { title: 'Perubahan yang dipahami.', text: 'Pahami logika, diff, dan dampak penting dari perubahan.', example: '“Saya bisa menjelaskan mengapa validasi diperiksa setelah trim.”' },
        { title: 'Bukti sebelum penerimaan.', text: 'Dasarkan keputusan pada hasil aktual dan nyatakan keterbatasan.', example: '“Persistensi belum diuji; saya belum menyatakan fitur selesai.”' }
      ],
      takeaway: 'Tool mengikuti pekerjaan. Developer tetap mengendalikan proses.',
      notes: ['Rangkum bahwa instruksi membutuhkan konteks, perubahan harus dapat dijelaskan, dan penerimaan membutuhkan bukti.', 'Contoh refleksi: pada tugas TEFA berikutnya, tulis kriteria input normal, kosong, dan refresh sebelum meminta kode. Alasan: kriteria itu dapat menjadi daftar pemeriksaan penyerahan. Tindakan: gunakan kembali saat review.']
    },
    {
      id: 'penutup', chapter: 'penutup', type: 'closing', kicker: 'FULL MOON / PERJALANAN BERIKUTNYA',
      title: 'AI membantu bekerja.|Kamu tetap developer-nya.',
      lead: 'Pahami masalah, kendalikan proses, dan pertanggungjawabkan hasilnya.',
      question: 'Bukti apa yang kamu perlukan sebelum menerima hasil AI?',
      answer: '“Saya perlu melihat diff dan hasil uji: penolakan spasi, penyimpanan setelah refresh, serta perubahan status. Jika data rusak belum diuji, saya catat dan lengkapi pemeriksaannya.”',
      action: 'Kebiasaan berikutnya: tulis kriteria sebelum meminta kode, lalu gunakan sebagai dasar review dan pengujian.',
      takeaway: 'Tujuan → perubahan yang dipahami → bukti.',
      notes: ['Contoh jawaban sudah tersedia agar pembahasan tetap berjalan tanpa menunggu respons peserta.', 'Alasan jawaban: menyebut kebutuhan, bukti yang relevan, serta bagian yang belum diketahui. Tindakan berikutnya: lengkapi pemeriksaan dan perbarui keputusan.', 'Terima contoh lain jika alasan dan buktinya jelas. Diskusi tidak membuktikan kemampuan praktik mandiri.', 'Bacaan tambahan dan atribusi materi tersedia melalui tombol Referensi. Tombol Kembali ke awal atau Home memulai ulang perjalanan.']
    }
  ]
};
