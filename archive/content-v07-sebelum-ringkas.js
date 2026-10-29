/* Arsip materi v0.7 sebelum pemadatan tampilan: 31 slide. Tidak dimuat oleh presentasi aktif. */
window.TEFA_DECK = {
  version: 'v0.7',
  title: 'Belajar Menggunakan AI untuk Membantu Coding',
  source: 'Panduan pemateri Sharing TEFA draft v0.7, 24 halaman, diberikan oleh pemateri.',
  sections: [
    { id: 1, name: 'Orientasi penggunaan AI tools', description: 'Orientasi penggunaan AI Tools terstruktur untuk calon AI Engineer.' },
    { id: 2, name: 'Simulasi micro-task', description: 'Simulasi pengerjaan micro-task dengan AI Assistant.' }
  ],
  chapters: [
    { id: 'peran', name: 'Pengantar', menu: 'PENGANTAR', indent: 13, section: 1, phase: 'New Moon', moon: 0 },
    { id: 'masalah', name: 'Masalah Awal', menu: 'MASALAH AWAL', indent: 38, section: 1, phase: 'Crescent', moon: .16 },
    { id: 'alat', name: 'Alat AI', menu: 'ALAT AI', indent: 9, section: 1, phase: 'Crescent', moon: .30 },
    { id: 'instruksi', name: 'Instruksi AI', menu: 'INSTRUKSI AI', indent: 26, section: 1, phase: 'Quarter', moon: .50 },
    { id: 'panduan', name: 'Aturan Kerja', menu: 'ATURAN KERJA', indent: 0, section: 1, phase: 'Gibbous', moon: .64 },
    { id: 'pemeriksaan', name: 'Pemeriksaan', menu: 'PEMERIKSAAN', indent: 22, section: 1, phase: 'Gibbous', moon: .78 },
    { id: 'microtask', name: 'Tugas Kecil', menu: 'TUGAS KECIL', indent: 5, section: 2, phase: 'Gibbous', moon: .90 },
    { id: 'perbaikan', name: 'Perbaikan', menu: 'PERBAIKAN', indent: 0, section: 2, phase: 'Full Moon', moon: 1, climax: true },
    { id: 'percobaan', name: 'Uji Coba', menu: 'UJI COBA', indent: 26, section: 2, phase: 'Full Moon', moon: 1 },
    { id: 'laporan', name: 'Hasil Kerja', menu: 'HASIL KERJA', indent: 34, section: 2, phase: 'Full Moon', moon: 1 }
  ],
  glossary: [
    ['Requirement', 'Kebutuhan yang harus dipenuhi aplikasi. Contohnya, pengguna wajib mengisi nama.'],
    ['Acceptance criteria / AC', 'Syarat untuk memeriksa apakah pekerjaan sudah selesai sesuai permintaan.'],
    ['Scope', 'Bagian yang dikerjakan dalam satu pekerjaan. Pada demo, kita hanya memperbaiki pengecekan nama.'],
    ['Prompt', 'Instruksi atau pertanyaan yang kita kirim ke AI.'],
    ['Konteks', 'Informasi yang membantu AI memahami pekerjaan, seperti kode dan pesan error.'],
    ['Micro-task', 'Pekerjaan kecil yang jelas, misalnya memperbaiki satu kolom pada formulir.'],
    ['Validasi', 'Pemeriksaan isian. Contohnya, mengecek apakah Nama sudah diisi.'],
    ['Diff', 'Tampilan perbandingan kode sebelum dan sesudah diubah.'],
    ['Code review', 'Memeriksa perubahan kode dan menilai apakah sudah sesuai kebutuhan.'],
    ['Testing', 'Menjalankan fungsi atau aplikasi, lalu membandingkan hasilnya dengan yang diharapkan.'],
    ['Debugging', 'Mencari penyebab kesalahan pada program dan memperbaikinya.'],
    ['Regression testing', 'Mencoba kembali bagian yang sebelumnya sudah bekerja agar tidak rusak setelah perubahan.'],
    ['Handler', 'Kode yang dijalankan ketika terjadi sesuatu, misalnya saat pengguna mengeklik Daftar.'],
    ['Human in the Loop', 'Manusia ikut mengarahkan, memeriksa, dan memutuskan selama AI bekerja.']
  ],
  sources: [
    { id: 1, name: 'Bahan pengguna · Utilize AI', url: 'https://firtera.tailad9333.ts.net/utilizeai/', detail: 'Bahan awal dari pengguna. Dokumen v0.7 menandainya belum terverifikasi langsung; bagian spesifik belum dikonfirmasi.' },
    { id: 2, name: 'OpenCode · Agent Skills', url: 'https://opencode.ai/docs/skills/', detail: 'Overview; Place files; Understand discovery. Bab 3 dan 5: SKILL.md, skill proyek/pengguna, dan pemuatan sesuai kebutuhan.' },
    { id: 3, name: 'decolua/9router · README', url: 'https://github.com/decolua/9router', detail: 'How It Works. Bab 3 dan 5: perantara koneksi aplikasi ke penyedia model. Materi tidak menjanjikan kuota, harga, atau ketersediaan layanan.' },
    { id: 4, name: 'Anthropic · Claude Code Overview', url: 'https://code.claude.com/docs/en/overview', detail: 'Overview; Get started. Bab 3: contoh coding agent; kemampuan bergantung pada lingkungan dan izin.' },
    { id: 5, name: 'GitHub Docs · About GitHub Copilot', url: 'https://docs.github.com/en/copilot/get-started/about-github-copilot', detail: 'How Copilot works; What you can do with Copilot. Bab 3: fitur dapat berbeda menurut aplikasi, paket, dan kebijakan akun.' },
    { id: 6, name: 'MDN · String.prototype.trim()', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim', detail: 'Description; Return value. Bab 8 dan 9: trim menghasilkan teks baru dan tidak mengubah teks asal secara langsung.' },
    { id: 7, name: 'IEEE Computer Society · SWEBOK Guide v4.0a', url: 'https://ieeecs-media.computer.org/media/education/swebok/swebok-v4.pdf', detail: 'Software Requirements §4.3 (PDF 54–55); Software Testing §2.1, §2.2.5 (PDF 124), §5.1.4 (PDF 135). Bab 2, 4, 7, 9, 10: kebutuhan, syarat selesai, tes, dan catatan hasil. AC1–AC6 dan T1–T8 disusun untuk TEFA.' },
    { id: 8, name: 'GitHub Docs · Best practices for using GitHub Copilot', url: 'https://docs.github.com/en/copilot/get-started/best-practices', detail: 'Check Copilot’s work. Bab 1 dan 6: pahami, baca, dan uji kode yang disarankan AI.' },
    { id: 9, name: 'GitHub Docs · Prompt engineering for GitHub Copilot', url: 'https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering', detail: 'Start general, then get specific; Give examples; Break complex tasks into simpler tasks; Provide relevant context; Experiment and iterate. Bab 2, 4, 6, 8: instruksi, contoh, konteks, dan tugas kecil.' },
    { id: 10, name: 'Google Engineering Practices · Small CLs', url: 'https://google.github.io/eng-practices/review/developer/small-cls.html', detail: 'Why Write Small CLs?; What is Small?; Keep related test code in the same CL. Bab 2, 7, 8: perubahan kecil yang fokus beserta tes terkait. CL berarti kumpulan perubahan.' },
    { id: 11, name: 'Google Engineering Practices · What to look for in a code review', url: 'https://google.github.io/eng-practices/review/reviewer/looking-for.html', detail: 'Functionality; Complexity; Tests. Bab 6 dan 9: kesesuaian fungsi, kode yang dapat dipahami, serta tes yang berguna.' },
    { id: 12, name: 'Google Engineering Practices · Writing good CL descriptions', url: 'https://google.github.io/eng-practices/review/developer/cl-descriptions.html', detail: 'Pembuka What/Why; Body is Informative. Bab 10: apa yang berubah, alasannya, serta informasi penting bagi pembaca. Contoh TEFA bukan format resmi Google.' },
    { id: 13, name: 'NIST · AI Risk Management Framework (AI RMF 1.0)', url: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf', detail: 'GOVERN 3.2 (PDF 28); MAP 3.5 (PDF 32); Appendix C. Bab 1 dan 6: peran manusia dalam mengawasi AI. Panduan bersifat sukarela, bukan kewajiban persetujuan pada setiap langkah semua sistem.' },
    { id: 14, name: 'NSW Department of Education, CESE · Cognitive load theory in practice', url: 'https://education.nsw.gov.au/about-us/education-data-and-research/cese/publications/practical-guides-for-educators/cognitive-load-theory-in-practice.html', detail: 'Teaching strategies, strategi 1–3. Dasar demo langkah demi langkah dan penjelasan alasan. Menyimak demo belum membuktikan kemampuan bekerja mandiri.' },
    { id: 15, name: 'Martin Fowler · Vibe Coding', url: 'https://martinfowler.com/bliki/VibeCoding.html', detail: 'Definisi pembuka dan perbedaan dengan peninjauan kode. Bab 1 mengikuti penjelasan Fowler; post awal Karpathy belum dibuka langsung dalam revisi PDF.' },
    { id: 16, name: 'Anthropic Engineering · Effective context engineering for AI agents', url: 'https://www.anthropic.com/research/effective-context-engineering-for-ai-agents', detail: 'Context engineering vs. prompt engineering; The anatomy of effective context. Bab 4 dan 6: informasi yang membantu AI menjawab; konteks chat berbeda dari pelatihan ulang model.' },
    { id: 17, name: 'OpenCode · Rules', url: 'https://opencode.ai/docs/rules/', detail: 'Overview; Types. Bab 5: aturan kerja melalui AGENTS.md. Nama file dan cara pemakaian dapat berbeda antaralat.' }
  ],
  demo: {
    defaultClass: 'XI PPLG',
    prompt: 'Saat saya hanya menekan spasi di kolom Nama lalu mengeklik Daftar, aplikasi tetap menampilkan pesan “Pendaftaran berhasil”. Seharusnya pengguna diminta mengisi nama.\n\nPeriksa fungsi validateName dan kode yang menggunakan hasilnya. Jika nama belum diisi atau isinya hanya spasi, tampilkan pesan “Nama belum diisi” dan jangan lanjutkan pendaftaran.\n\nJika ada spasi sebelum atau sesudah nama, hapus spasi tersebut. Spasi di antara kata, seperti pada “Rina Putri”, harus tetap ada.\n\nJangan mengubah tampilan atau kolom lain. Tidak perlu menambah library. Bentuk hasil fungsi juga jangan diubah agar kode yang memakainya tetap bekerja.\n\nBaca kodenya terlebih dahulu dan jelaskan rencana perbaikannya. Setelah rencananya kita periksa, baru ubah kode. Terakhir, jelaskan apa yang sudah dicoba dan apakah masih ada masalah.',
    code: {
      before: 'function validateName(raw) {\n  if (raw.length === 0) {\n    return { ok: false, error: "Nama belum diisi" };\n  }\n  return { ok: true, name: raw };\n}',
      fixed: 'function validateName(raw) {\n  const name = raw.trim();\n  if (name.length === 0) {\n    return { ok: false, error: "Nama belum diisi" };\n  }\n  return { ok: true, name };\n}',
      ignored: 'function validateName(raw) {\n  raw.trim();\n  if (raw.length === 0) {\n    return { ok: false, error: "Nama belum diisi" };\n  }\n  return { ok: true, name: raw };\n}',
      handler: 'const result = validateName(raw);\n\n// Kesalahan: hasil ok tidak diperiksa.\nshowSuccess();\n\n// Seharusnya: jika ok false,\n// tampilkan error dan jangan lanjutkan.'
    },
    criteria: [
      ['AC1', 'Setelah nama “Rina” diisi dan Daftar diklik, muncul pesan berhasil.'],
      ['AC2', 'Jika Nama kosong atau hanya berisi spasi, pendaftaran tidak dilanjutkan.'],
      ['AC3', 'Jika nama belum diisi, muncul pesan “Nama belum diisi”.'],
      ['AC4', 'Spasi sebelum dan sesudah nama dihapus. Spasi di antara kata tetap ada.'],
      ['AC5', 'Fungsi mengembalikan ok dan name untuk nama yang terisi, atau ok dan error jika nama kosong.'],
      ['AC6', 'Kolom Kelas, tombol Reset, dan pengiriman dengan Enter tetap bekerja seperti sebelumnya.']
    ],
    tests: [
      { id: 'T1', ac: 'AC1, AC5', label: 'Nama biasa', steps: 'Ketik “Rina”, lalu klik Daftar.', expected: 'Pesan berhasil muncul. Fungsi mengembalikan nama “Rina”.' },
      { id: 'T2', ac: 'AC2, AC3', label: 'Nama kosong', steps: 'Biarkan Nama kosong, lalu klik Daftar.', expected: 'Muncul “Nama belum diisi”. Pesan berhasil tidak muncul.' },
      { id: 'T3', ac: 'AC2, AC3', label: 'Spasi saja', steps: 'Tekan spasi tiga kali di Nama, lalu klik Daftar.', expected: 'Muncul “Nama belum diisi”. Pesan berhasil tidak muncul.' },
      { id: 'T4', ac: 'AC4', label: 'Spasi di tepi', steps: 'Tambahkan dua spasi sebelum dan sesudah “Rina”.', expected: 'Fungsi menghasilkan “Rina” tanpa spasi tambahan itu.' },
      { id: 'T5', ac: 'AC4', label: 'Spasi di tengah', steps: 'Ketik “Rina  Putri” dengan dua spasi di tengah.', expected: 'Dua spasi di antara kata tetap ada pada hasil fungsi.' },
      { id: 'T6', ac: 'AC1–AC3', label: 'Salah lalu benar', steps: 'Klik Daftar saat Nama kosong, lalu isi “Rina” dan klik lagi.', expected: 'Pesan kesalahan hilang dan pesan berhasil muncul.' },
      { id: 'T7', ac: 'AC6', label: 'Tombol Reset', steps: 'Isi Nama dan Kelas, lalu klik Reset.', expected: 'Formulir kembali seperti saat pertama dibuka.' },
      { id: 'T8', ac: 'AC6', label: 'Kirim dengan Enter', steps: 'Isi nama dan tekan Enter. Ulangi dengan spasi saja.', expected: 'Nama yang terisi diterima; spasi saja ditolak. Perlu menekan Enter secara manual.' }
    ]
  },
  slides: [
    {
      id: 'v07-pembuka', chapter: 'peran', type: 'hero', kicker: 'SHARING TEFA / ORIENTASI + SIMULASI',
      title: 'Belajar Menggunakan AI untuk Membantu Coding',
      hero: { pretitle: 'Belajar Menggunakan', lines: ['AI UNTUK', 'MEMBANTU CODING'], audience: 'Bekal untuk calon AI Engineer' },
      subtitle: 'AI membantu menulis kode. Kita tetap memahami perubahan dan mencoba hasilnya.',
      parts: [['Materi 1', 'Orientasi penggunaan AI tools'], ['Materi 2', 'Simulasi micro-task bersama AI']],
      takeaway: 'Contoh sesi: memperbaiki kolom Nama pada formulir pendaftaran.', refs: [8,13,14,15],
      notes: ['Materi utama: PDF Sharing TEFA draft v0.7. Materi 1 berjudul resmi “Orientasi penggunaan AI Tools terstruktur untuk calon AI Engineer”; Materi 2 adalah “Simulasi pengerjaan micro-task dengan AI Assistant”.', 'AI bisa membantu menulis kode, tetapi kita tetap perlu memahami apa yang dibuat dan mencoba aplikasinya sebelum menyebut pekerjaan selesai.', 'Siswa menyimak penjelasan dan demo pemateri. Tidak ada tugas praktik siswa pada sesi ini.', 'Seluruh nama, kelas, dan tampilan pendaftaran hanya contoh lokal. Demo tidak mengirim data ke server atau layanan AI.', 'Untuk menilai kemampuan mandiri, sediakan latihan pada pertemuan lain. Dasar pengajaran: worked examples dari CESE [14].']
    },
    {
      id: 'v07-peran', chapter: 'peran', type: 'pillars', kicker: 'MATERI 1 / BAB 01',
      title: 'Apa peran kita saat memakai AI?',
      lead: 'AI dapat membantu menulis kode dan menjelaskan pesan error. Kita menentukan pekerjaan dan memeriksa hasilnya.',
      items: [
        { title: 'Jelaskan masalahnya', text: 'Pengguna bisa melanjutkan tanpa mengisi nama.' },
        { title: 'Tentukan hasilnya', text: 'Jika nama belum diisi, aplikasi harus meminta pengguna mengisinya.' },
        { title: 'Periksa perubahan', text: 'Baca kode yang diubah AI, lalu coba formulirnya lagi.' },
        { title: 'Ceritakan hasilnya', text: 'Sampaikan yang masih salah dan bagian yang belum dicoba.' }
      ],
      takeaway: 'Tampilan yang rapi dan nama “Rina” yang berhasil belum cukup: coba juga kolom kosong dan spasi.', refs: [8,13,15],
      notes: ['Bacakan contoh: “Silakan gunakan AI untuk membantu coding. Tetapi sebelum hasilnya dipakai, pahami perubahan yang dibuat dan coba sendiri aplikasinya.”', 'Situasi: tampilan rapi, Rina berhasil, tetapi spasi juga dianggap berhasil. Keputusan: masih perlu diperbaiki. Alasannya: pengguna belum mengisi nama. Tindakan: periksa pengecekan Nama dan coba lagi.', 'AI-Assisted Developer di sini berarti developer yang memakai AI sambil memahami dan memeriksa hasilnya. Ini bukan nama sertifikasi dan belum mencakup seluruh kemampuan AI Engineer.']
    },
    {
      id: 'v07-dua-cara', chapter: 'peran', type: 'compare', kicker: 'MATERI 1 / BAB 01 LANJUTAN',
      title: 'Dua cara menggunakan AI saat coding',
      lead: 'Pada AI-Assisted Development, kita menggunakan AI sambil membaca bagian kode yang penting dan memeriksa hasilnya.',
      headings: ['Pekerjaan', 'Vibe Coding', 'AI-Assisted Development'],
      rows: [
        ['Instruksi', 'Minta sesuatu, lalu sesuaikan sambil mencoba.', 'Jelaskan kebutuhan, batas perubahan, dan hasil yang diharapkan.'],
        ['Membaca kode', 'Tidak memeriksa kode yang dihasilkan.', 'Baca perubahan kode dan pahami alasannya.'],
        ['Ada masalah', 'Minta AI mencoba memperbaikinya lagi.', 'Tunjukkan kejadiannya, cari penyebab, lalu perbaiki.'],
        ['Mencoba hasil', 'Bisa berhenti saat tampilan terasa sesuai.', 'Coba beberapa kondisi, termasuk isian yang salah.'],
        ['Tanggung jawab', 'Tetap pada orang yang memakai atau menyerahkan hasil.', 'Tetap pada developer yang memeriksa dan menyerahkan hasil.']
      ],
      takeaway: 'Vibe Coding bisa membantu mencoba ide tampilan. Sebelum dipakai sungguhan, periksa kode dan cara kerjanya.', refs: [8,13,15],
      notes: ['Definisi Vibe Coding mengikuti penjelasan Martin Fowler [15]: iterasi tanpa memeriksa kode yang dihasilkan. Menggunakan AI atau menulis kode dengan cepat tidak otomatis Vibe Coding.', 'Contoh: membuat tampilan formulir untuk memulai diskusi dengan teman dapat berguna. Saat formulir akan dipakai, lanjutkan pemeriksaan kode dan percobaan isian.', 'Tabel membantu pembahasan, bukan pembagian profesi resmi. Pemeriksaan teliti juga tidak menjamin semua bug sudah ditemukan.']
    },
    {
      id: 'v07-jelaskan-masalah', chapter: 'masalah', type: 'bugbrief', kicker: 'MATERI 1 / BAB 02',
      title: 'Jelaskan dulu masalahnya',
      lead: 'Ceritakan masalahnya seperti sedang berbicara kepada teman satu tim.',
      facts: [
        ['Yang terjadi', 'Hanya menekan spasi lalu mengeklik Daftar, tetapi muncul “Pendaftaran berhasil”.'],
        ['Seharusnya', 'Aplikasi meminta pengguna mengisi nama. Pesan berhasil belum boleh muncul.'],
        ['Yang diperbaiki', 'Pemeriksaan kolom Nama. Tampilan dan kolom lain tetap seperti sebelumnya.'],
        ['Contohnya', '“Rina” boleh melanjutkan. Nama kosong atau spasi saja harus ditolak.']
      ],
      quote: 'Saat saya hanya menekan spasi di kolom Nama lalu mengeklik Daftar, aplikasi tetap menampilkan pesan berhasil. Tolong perbaiki agar pengguna diminta mengisi nama terlebih dahulu.',
      takeaway: 'Pemeriksaan isi kolom seperti ini disebut validasi.', refs: [7,9,10],
      notes: ['Empat hal ini dirangkum dari beberapa sumber, bukan satu framework resmi.', 'Jelaskan kejadian di layar sebelum istilah validasi. Siswa perlu melihat kegunaannya terlebih dahulu.', 'Situasi konkret sudah ada di tabel. Keputusan: perbaiki pemeriksaan Nama. Alasannya: perilaku saat spasi belum sesuai. Tindakan: sertakan kejadian dan hasil yang diinginkan pada instruksi.']
    },
    {
      id: 'v07-instruksi-awal', chapter: 'masalah', type: 'prompt', kicker: 'MATERI 1 / BAB 02 LANJUTAN',
      title: 'Tambahkan kejadian yang kita lihat',
      bad: 'Tolong perbaiki formulir ini.',
      quote: 'Saat saya hanya menekan spasi di kolom Nama lalu mengeklik Daftar, aplikasi tetap menampilkan pesan berhasil. Seharusnya pengguna diminta mengisi nama terlebih dahulu.',
      elements: ['Kejadian', 'Isian spasi', 'Pesan yang muncul', 'Hasil yang diinginkan'],
      takeaway: '“Perbaiki formulir” belum menjelaskan bagian mana yang bermasalah.', refs: [7,9,10],
      notes: ['Bandingkan dua instruksi dengan menunjuk informasi yang ditambahkan, bukan sekadar panjang kalimatnya.', 'Contoh keputusan: gunakan instruksi kedua. Alasan: AI mendapat kejadian dan hasil yang diminta. Tindakan: sertakan kode yang berhubungan.']
    },
    {
      id: 'v07-peta-alat', chapter: 'alat', type: 'toolmap', kicker: 'MATERI 1 / BAB 03',
      title: 'Mengenal alat yang kita gunakan',
      lead: 'OpenCode dan 9router bisa dipakai bersama, tetapi kegunaannya berbeda.',
      headings: ['Istilah', 'Kegunaannya', 'Contoh'],
      rows: [
        ['Model AI', 'Menghasilkan jawaban dari instruksi dan informasi yang diberikan.', 'Model yang dipilih di aplikasi AI.'],
        ['Chat assistant', 'Tempat bertanya dan berdiskusi dengan AI.', 'Chat untuk penjelasan pesan error.'],
        ['Coding agent', 'Membaca/mengubah file; sebagian bisa menjalankan perintah jika diizinkan.', 'OpenCode, Claude Code, fitur agent pada Copilot.'],
        ['Router', 'Meneruskan permintaan aplikasi ke penyedia model AI.', '9router.'],
        ['Alat pendukung', 'Melihat perubahan kode dan mencoba aplikasi.', 'Git, browser, alat pengujian proyek.']
      ],
      takeaway: 'Kemampuan alat bergantung pada versi, akun, lingkungan, dan izin yang diberikan.', refs: [2,3,4,5],
      notes: ['Model tidak sama dengan aplikasi agent. Browser, terminal, dan editor adalah tempat berinteraksi; kemampuan membaca file dan menjalankan perintah mengikuti integrasi serta izin.', 'Untuk satu pesan error, chat dan potongan kode bisa cukup. Untuk perubahan file proyek, coding agent bisa lebih sesuai.', 'Tidak semua agent membutuhkan router. Saat demo, jelaskan alat yang sudah disiapkan tanpa mengubah sesi menjadi tutorial instalasi.']
    },
    {
      id: 'v07-opencode-router', chapter: 'alat', type: 'toolchoice', kicker: 'MATERI 1 / BAB 03 LANJUTAN',
      title: 'Contoh OpenCode dan 9router',
      diagram: [['OpenCode', 'Tempat memberi instruksi dan mengerjakan proyek'], ['9router · opsional', 'Perantara permintaan ke model'], ['Penyedia model', 'Model menghasilkan jawaban']],
      items: [
        { title: 'Untuk berdiskusi', text: 'Chat bisa membantu memahami satu pesan error beserta potongan kodenya.' },
        { title: 'Untuk mengubah file', text: 'Agent bisa lebih sesuai jika diberi akses ke file proyek yang diperlukan.' },
        { title: 'Untuk koneksi model', text: 'Jika OpenCode memakai 9router, permintaannya melewati router tersebut.' },
        { title: 'Untuk kontrol', text: 'Pahami tindakan agent dan izin yang diberikan.' }
      ],
      takeaway: 'Kita berinteraksi dengan OpenCode untuk pekerjaan kode. 9router menjadi perantara koneksinya.', refs: [2,3,4,5],
      notes: ['Diagram menggambarkan salah satu susunan. Koneksi langsung yang didukung aplikasi juga dapat digunakan.', 'Gunakan data contoh dan alat yang sudah siap. Login serta koneksi disiapkan sebelum siswa melihat demo.']
    },
    {
      id: 'v07-isi-instruksi', chapter: 'instruksi', type: 'criteria', kicker: 'MATERI 1 / BAB 04',
      title: 'Menulis instruksi yang mudah dipahami AI',
      lead: 'Instruksi disebut prompt. Informasi tambahan yang membantu AI memahami pekerjaan disebut konteks.',
      headings: ['Yang disertakan', 'Contohnya'],
      rows: [
        ['Masalah yang terlihat', 'Spasi saja masih membuat pesan berhasil muncul.'],
        ['Kode yang berhubungan', 'validateName dan kode saat tombol Daftar diklik.'],
        ['Hasil yang diinginkan', 'Jika nama belum diisi, muncul “Nama belum diisi”.'],
        ['Batas perubahan', 'Tampilan formulir dan kolom lain tetap seperti sebelumnya.'],
        ['Laporan setelah selesai', 'Kode yang berubah, hasil percobaan, dan bagian yang belum diperiksa.']
      ],
      takeaway: 'Tentukan syarat selesai dari awal. Syarat ini disebut acceptance criteria dan dipakai saat memeriksa hasil.', refs: [7,9,16],
      notes: ['Contoh syarat selesai: Rina diterima; kolom kosong dan spasi saja ditolak. Daftar AC1–AC6 dibahas pada Bab 7.', 'Prompt tidak harus panjang. Sertakan informasi yang diperlukan dan hindari perintah yang bertentangan.', 'Jika AI belum dapat membaca file yang diperlukan, minta penjelasan sebelum perubahan dimulai.']
    },
    {
      id: 'v07-prompt-formulir', chapter: 'instruksi', type: 'prompt', kicker: 'MATERI 1 / BAB 04 LANJUTAN',
      title: 'Contoh instruksi untuk memperbaiki formulir',
      bad: 'Tolong perbaiki formulir pendaftaran ini.',
      quote: 'Saat saya hanya menekan spasi di kolom Nama lalu mengeklik Daftar, aplikasi tetap menampilkan pesan “Pendaftaran berhasil”. Seharusnya pengguna diminta mengisi nama.\n\nPeriksa validateName dan kode yang memakai hasilnya. Jika Nama kosong atau hanya spasi, tampilkan “Nama belum diisi” dan jangan lanjutkan. Hapus spasi di awal/akhir nama, tetapi pertahankan spasi di antara kata seperti “Rina Putri”.',
      elements: ['Masalah', 'Kode terkait', 'Pesan yang diminta', 'Aturan spasi'],
      takeaway: 'Berikan akses ke file yang diperlukan atau kirim potongan kodenya.', refs: [7,9,16],
      notes: ['Bacakan bagian masalah dan hasil yang diinginkan terlebih dahulu. Perlihatkan bahwa spasi awal/akhir berbeda dari spasi di antara kata.', 'Sertakan cara menjalankan aplikasi. Gunakan nama contoh, bukan data pribadi atau password.']
    },
    {
      id: 'v07-batas-prompt', chapter: 'instruksi', type: 'prompt', kicker: 'MATERI 1 / BAB 04 LANJUTAN',
      title: 'Lengkapi instruksi dengan batas pekerjaan',
      quote: 'Jangan mengubah tampilan atau kolom lain. Tidak perlu menambah library. Bentuk hasil fungsi juga jangan diubah agar kode yang memakainya tetap bekerja.\n\nBaca kodenya terlebih dahulu dan jelaskan rencana perbaikannya. Setelah rencananya kita periksa, baru ubah kode. Terakhir, jelaskan apa yang sudah dicoba dan apakah masih ada masalah.',
      elements: ['Bagian yang diubah', 'Bagian lainnya', 'Rencana dulu', 'Laporan hasil'],
      copyPrompt: true,
      takeaway: 'Jika AI mengusulkan fitur tambahan, arahkan kembali ke masalah kolom Nama.', refs: [7,9,16],
      notes: ['Tombol salin mengambil instruksi lengkap dari materi v0.7, termasuk masalah, aturan spasi, batas, rencana, dan laporan.', 'Salin dapat dipakai pemateri pada agent yang sudah disiapkan. Web presentasi tidak terhubung ke layanan AI.', 'Nama produk, fungsi, nama file, dan bentuk hasil kode ditulis sesuai aslinya agar dapat dikenali saat demo.']
    },
    {
      id: 'v07-prompt-rules-skills', chapter: 'panduan', type: 'mechanisms', kicker: 'MATERI 1 / BAB 05',
      title: 'Prompt, rules, dan skills',
      lead: 'Perbedaannya ada pada kapan dan untuk apa arahan itu digunakan.',
      items: [
        { label: 'PROMPT', title: 'Pekerjaan saat ini', text: 'Instruksi untuk pekerjaan yang sedang kita minta.', example: '“Perbaiki formulir agar nama tidak boleh kosong.”' },
        { label: 'RULES', title: 'Aturan kerja', text: 'Aturan yang diterapkan selama AI mengerjakan proyek.', example: '“Ikuti susunan file. Jangan ubah tampilan tanpa diminta.”' },
        { label: 'SKILL', title: 'Panduan berulang', text: 'Panduan untuk pekerjaan yang sering dilakukan, supaya langkahnya tidak perlu ditulis ulang.', example: 'Panduan memeriksa perubahan kode.' }
      ],
      takeaway: 'Rules dan skills membantu memberi arahan. Pekerjaan AI tetap perlu diperiksa.', refs: [2,17],
      notes: ['Jelaskan kegunaan melalui contoh sebelum membahas lokasi file.', 'Cara memasang rules dan skills dapat berbeda antaralat. Skill di sini adalah panduan untuk agent, bukan kemampuan pribadi siswa.']
    },
    {
      id: 'v07-contoh-skill', chapter: 'panduan', type: 'skill', kicker: 'MATERI 1 / BAB 05 LANJUTAN',
      title: 'Contoh panduan di dalam skill',
      trigger: 'Saat diminta memeriksa kode, AI diarahkan untuk:',
      steps: [['Baca', 'Permintaan awal.'], ['Lihat', 'Bagian kode yang diubah.'], ['Cek', 'Apakah perubahan sesuai permintaan.'], ['Coba', 'Tes yang berkaitan, jika alatnya tersedia.'], ['Laporkan', 'Masalah dan bagian yang belum diperiksa.']],
      example: 'Contoh hasil pemeriksaan: pengguna masih bisa melanjutkan dengan spasi saja. Periksa hasil trim dan kode yang memakai hasil fungsi. Tombol Reset belum dicoba.',
      takeaway: 'Panduan yang dapat dipakai ulang membantu menjaga urutan pemeriksaan.', refs: [2,17],
      notes: ['Ini contoh panduan pembelajaran, bukan klaim bahwa sebuah agent telah menjalankan pemeriksaan tersebut.', 'Jika alat pengujian tidak tersedia atau tes belum dijalankan, AI harus melaporkannya. Jangan menulis lulus untuk hal yang belum dicoba.']
    },
    {
      id: 'v07-lokasi-skill', chapter: 'panduan', type: 'skillScope', kicker: 'MATERI 1 / BAB 05 LANJUTAN',
      title: 'Skill untuk proyek dan pengguna',
      lead: 'OpenCode dapat membaca panduan dari SKILL.md. Cara menyiapkannya mengikuti aplikasi yang digunakan.',
      paths: [
        { label: 'SATU PROYEK', path: '.opencode/skills/review-form/SKILL.md', text: 'Panduan disimpan di proyek yang membutuhkan langkah pemeriksaan ini.' },
        { label: 'PENGATURAN PENGGUNA', path: '~/.config/opencode/skills/review-form/SKILL.md', text: 'Contoh lokasi OpenCode untuk panduan yang dapat dipakai pada beberapa proyek pengguna.' }
      ],
      diagram: [['OpenCode', 'Membaca panduan skill'], ['9router', 'Meneruskan permintaan model'], ['Model AI', 'Menghasilkan jawaban']],
      takeaway: 'Memakai 9router yang sama tidak otomatis membuat beberapa aplikasi memakai skill yang sama.', refs: [2,3,17],
      notes: ['Simbol ~ berarti direktori home pengguna. Dokumentasi OpenCode juga memuat lokasi lain; dua lokasi ini adalah contoh.', 'Skill tetap disiapkan pada aplikasi yang membacanya, dimuat sesuai kebutuhan serta izin. Pengaturan pengguna tidak otomatis dibagikan ke komputer lain.', 'Contoh rules OpenCode memakai AGENTS.md. Nama file dan cara penggunaannya tidak otomatis sama pada semua alat.']
    },
    {
      id: 'v07-human-loop', chapter: 'pemeriksaan', type: 'loop', kicker: 'MATERI 1 / BAB 06',
      title: 'Tetap periksa pekerjaan AI',
      lead: 'Manusia ikut mengarahkan, memeriksa, dan memutuskan selama AI bekerja. Ini sering disebut Human in the Loop.',
      steps: [['Masalah', 'Pastikan AI memahaminya'], ['Rencana', 'Cek bagian yang diubah'], ['Perubahan', 'Baca kodenya'], ['Percobaan', 'Jalankan formulir'], ['Hasil', 'Cocokkan dengan permintaan']],
      quote: 'Saya sudah mencoba lagi. Saya menekan spasi tiga kali di kolom Nama, lalu mengeklik Daftar. Pesan “Pendaftaran berhasil” masih muncul. Seharusnya muncul “Nama belum diisi”. Tolong periksa lagi.',
      takeaway: 'Sebutkan langkah dan hasil yang dilihat agar AI dapat menindaklanjuti koreksi.', refs: [8,9,11,13,16],
      notes: ['Jika AI terus gagal, berhenti sejenak dan periksa kembali kode serta hasil percobaannya.', 'NIST membahas peran manusia dalam mengawasi AI. Urutan pada slide dibuat untuk demo, bukan aturan wajib untuk semua sistem.', 'Koreksi chat menambah informasi untuk jawaban berikutnya; tidak otomatis melatih ulang model.']
    },
    {
      id: 'v07-tiga-pemeriksaan', chapter: 'pemeriksaan', type: 'verifyLayers', kicker: 'MATERI 1 / BAB 06 LANJUTAN',
      title: 'Apa yang perlu kita periksa?',
      headings: ['Pemeriksaan', 'Contohnya', 'Yang belum bisa disimpulkan'],
      rows: [
        ['Baca kode', 'Lihat apakah spasi di tepi dihapus sebelum nama diperiksa.', 'Belum tentu pesan di layar sudah benar.'],
        ['Jalankan fungsi', 'Panggil validateName dengan nama, teks kosong, dan spasi.', 'Belum tentu tombol Daftar memakai hasilnya dengan benar.'],
        ['Coba formulir', 'Isi kolom, klik tombol, lalu lihat pesannya.', 'Belum berarti semua kemungkinan sudah diperiksa.']
      ],
      summary: '“Nama Rina, kolom kosong, dan spasi saja sudah dicoba. Tombol Reset belum saya coba.”',
      takeaway: 'Sesuai harapan: lulus. Berbeda: gagal. Belum dicoba: belum diuji.', refs: [8,9,11,13,16],
      notes: ['Baca kode dan coba aplikasi sama-sama diperlukan. Masalah dapat ada pada fungsi atau kode yang memakai hasilnya.', 'Instruksi yang baik tidak menjamin jawaban selalu benar. Jangan menganggap bagian yang belum dicoba pasti benar.']
    },
    {
      id: 'v07-data-izin', chapter: 'pemeriksaan', type: 'pillars', kicker: 'MATERI 1 / BAB 06 LANJUTAN',
      title: 'Gunakan data contoh dan perhatikan izin',
      items: [
        { title: 'Gunakan nama contoh', text: 'Pakai “Rina” dan kelas contoh saat menjelaskan formulir.' },
        { title: 'Jaga data pribadi', text: 'Jangan menyertakan password atau data pribadi dalam permintaan kepada AI.' },
        { title: 'Pahami perintah', text: 'Sebelum agent menjalankan perintah, pahami apa yang akan dilakukannya.' },
        { title: 'Lihat riwayat kode', text: 'Gunakan Git untuk melihat perubahan dan kembali ke versi sebelumnya bila diperlukan.' }
      ],
      takeaway: 'Laporkan sesuai yang benar-benar dicoba, termasuk bagian yang belum diperiksa.', refs: [8,9,11,13,16],
      notes: ['Contoh tanggapan: nama, kosong, dan spasi sudah dicoba; Reset belum. Pernyataan ini lebih berguna daripada “semua sudah benar”.', 'Riwayat percakapan membantu selama informasinya tersedia, tetapi bukan bukti bahwa model dilatih ulang secara permanen.']
    },
    {
      id: 'v07-microtask-ac', chapter: 'microtask', type: 'acceptance', kicker: 'MATERI 2 / BAB 07',
      title: 'Perbaiki satu masalah dulu',
      lead: 'Micro-task adalah satu pekerjaan kecil yang jelas. Di sini, kita memperbaiki pemeriksaan kolom Nama.',
      headings: ['ID', 'Perbaikan dianggap selesai jika...'],
      criteria: [0,1,2,3],
      takeaway: 'Formulir contoh sudah punya Nama, Kelas, Daftar, Reset, dan pengiriman dengan Enter.', refs: [7,10],
      notes: ['AC1–AC6 adalah penanda syarat pada demo, bukan standar nomor dari sumber. AC berarti acceptance criteria.', 'Ini contoh formulir di browser. Gunakan nama dan kelas contoh. Perbaikan tidak menambah server, mengubah tampilan, atau membuat aturan nama baru.']
    },
    {
      id: 'v07-kontrak-fungsi', chapter: 'microtask', type: 'contract', kicker: 'MATERI 2 / BAB 07 LANJUTAN',
      title: 'Bagian lain tetap bekerja',
      criteria: [4,5],
      shapes: [['Nama terisi', '{ ok: true, name: "Rina" }'], ['Nama kosong', '{ ok: false, error: "Nama belum diisi" }']],
      takeaway: 'Bentuk hasil fungsi tetap sama agar kode yang memakainya tetap bekerja.', refs: [7,10],
      notes: ['Terangkan ok sebagai penanda apakah nama diterima. name berisi nama yang sudah dirapikan; error berisi pesan ketika nama kosong.', 'Kolom Kelas, tombol Reset, dan Enter perlu dicoba juga. Mengecek agar bagian lama tidak rusak disebut regression testing.']
    },
    {
      id: 'v07-demo-masalah', chapter: 'perbaikan', type: 'lab', kicker: 'MATERI 2 / BAB 08 · DEMO PEMATERI',
      title: 'Memperbaiki formulir bersama AI',
      lead: 'Pilih Fungsi awal. Ketik “Rina”, lalu coba lagi dengan spasi saja dan lihat pesannya.',
      lab: 'intro',
      takeaway: 'Nama belum diketik, tetapi pesan berhasil muncul. Sekarang kita cari penyebabnya.', refs: [6,9,10],
      notes: ['Persiapan sebelum acara: siapkan salinan formulir, jalankan aplikasi dan agent, periksa koneksi, dan selesaikan login.', 'Siapkan rekaman atau gambar langkah penting sebagai cadangan; beritahukan siswa jika yang ditampilkan adalah rekaman. Besarkan teks dan tutup bagian lain yang tidak diperlukan.', 'Web ini menyediakan demo lokal untuk membantu penjelasan. Contoh rencana dan kode bukan jawaban dari koneksi AI langsung. Untuk demo agent sungguhan, gunakan alat yang sudah disiapkan.', 'Bacakan: “Saya tekan spasi tiga kali, lalu klik Daftar. Nama belum saya ketik, tetapi aplikasi mengatakan pendaftaran berhasil.”', 'Gunakan kelas contoh yang sama pada tiap percobaan. Siswa menyimak, tidak mengerjakan tugas praktik.']
    },
    {
      id: 'v07-rencana-ai', chapter: 'perbaikan', type: 'agentPlan', kicker: 'MATERI 2 / BAB 08 LANJUTAN',
      title: 'Minta AI membaca kode terlebih dahulu',
      quote: 'Baca validateName dan kode saat formulir dikirim. Cari tahu mengapa spasi saja masih diterima. Jelaskan rencana perbaikannya sesuai AC1–AC6. Jangan ubah file dulu.',
      steps: [['Rapikan tepi nama', 'Hapus spasi sebelum dan sesudah nama.'], ['Periksa hasilnya', 'Jika masih kosong, tampilkan “Nama belum diisi”.'], ['Gunakan nama itu', 'Jika terisi, lanjutkan dengan nama yang sudah dirapikan.']],
      correction: 'Jika rencana menghapus semua spasi, koreksi: “Rina Putri” tidak boleh berubah menjadi “RinaPutri”. Database baru tidak diperlukan.',
      approval: 'Rencananya sudah sesuai. Ubah bagian yang diperlukan, pertahankan tampilan dan bentuk hasil fungsi. Tunjukkan perubahan kode serta tes yang dijalankan.',
      takeaway: 'Contoh rencana ini perlu diperiksa sebelum AI mengubah kode.', refs: [6,9,10],
      notes: ['Contoh instruksi dan rencana dibuat untuk pembahasan TEFA. Ini bukan rekaman jawaban layanan AI.', 'Meminta rencana membantu siswa mengikuti alasan perbaikan. Tidak semua pekerjaan harus memakai urutan yang sama.', 'Jika informasi belum cukup, minta AI menyebut file atau penjelasan yang dibutuhkan.']
    },
    {
      id: 'v07-kode-awal', chapter: 'perbaikan', type: 'codeExample', kicker: 'MATERI 2 / BAB 08 LANJUTAN',
      title: 'Mengapa spasi dianggap sebagai nama?',
      codeKey: 'before', codeLabel: 'Sebelum diperbaiki',
      explanation: [['raw', 'Teks yang diketik pengguna.'], ['raw.length', 'Jumlah karakter. Tiga spasi tetap dihitung sebagai tiga karakter.'], ['Akibatnya', 'Pemeriksaan length === 0 tidak menolak isian yang hanya berisi spasi.']],
      takeaway: 'Tiga spasi tetap dihitung sebagai tiga karakter, sehingga raw.length bernilai 3.', refs: [6,9,10],
      notes: ['Fungsi menerima teks dari kolom Nama. Pembahasan tidak mencakup semua aturan penulisan nama atau jenis data lain.', 'Kode ini adalah contoh materi. Mode Fungsi awal pada demo lokal memakai perilaku yang sama.']
    },
    {
      id: 'v07-kode-perbaikan', chapter: 'perbaikan', type: 'codeExample', kicker: 'MATERI 2 / BAB 08 LANJUTAN',
      title: 'Periksa nama setelah spasi tepi dihapus',
      codeKey: 'fixed', codeLabel: 'Sesudah diperbaiki',
      explanation: [['trim()', 'Menghasilkan teks baru tanpa spasi di awal dan akhir.'], ['name', 'Menampung hasil trim. Jika hanya ada spasi, hasilnya teks kosong.'], ['ok', 'false berarti tampilkan error dan jangan lanjutkan. true berarti gunakan name.']],
      takeaway: 'Spasi di antara kata tetap ada. “Rina Putri” tetap “Rina Putri”.', refs: [6,9,10],
      notes: ['trim juga menghapus karakter seperti tab dan baris baru di kedua tepi teks. Fungsi tidak mengubah raw secara langsung.', 'Kode formulir harus memakai hasil fungsi dengan benar. Pengecekan fungsi dan percobaan tombol/pesan adalah dua pemeriksaan yang berbeda.']
    },
    {
      id: 'v07-diff', chapter: 'perbaikan', type: 'codeDiff', kicker: 'MATERI 2 / BAB 08 LANJUTAN',
      title: 'Baca perubahan kodenya',
      lead: 'Tampilan perbandingan sebelum dan sesudah perubahan disebut diff.',
      lines: [
        ['same', 'function validateName(raw) {'],
        ['add', '  const name = raw.trim();'],
        ['remove', '  if (raw.length === 0) {'],
        ['add', '  if (name.length === 0) {'],
        ['same', '    return { ok: false, error: "Nama belum diisi" };'],
        ['same', '  }'],
        ['remove', '  return { ok: true, name: raw };'],
        ['add', '  return { ok: true, name };'],
        ['same', '}']
      ],
      takeaway: 'Pastikan hasil trim dipakai untuk pemeriksaan dan nama yang dikembalikan.', refs: [6,9,10],
      notes: ['Tanda − adalah bagian lama yang dihapus. Tanda + adalah bagian yang ditambahkan. Jelaskan alasannya, bukan hanya warna kodenya.', 'Bentuk hasil tetap ok/name atau ok/error. Setelah membaca diff, jalankan formulir lagi.', 'Saat demo agent, bandingkan diff yang benar-benar dibuat dengan rencananya. Contoh di web ini disiapkan untuk penjelasan.']
    },
    {
      id: 'v07-coba-formulir', chapter: 'percobaan', type: 'lab', kicker: 'MATERI 2 / BAB 09 · DEMO PEMATERI',
      title: 'Coba formulir setelah diperbaiki',
      lead: 'Pilih Hasil perbaikan, lalu coba formulir. Catatan tes di bawah berasal dari percobaan demo lokal.',
      lab: 'tests',
      takeaway: 'T1–T7 dapat dijalankan lewat tombol. T8 perlu menekan Enter dua kali sesuai petunjuk.', refs: [7,11],
      notes: ['Jangan berhenti setelah membaca jawaban AI. Coba Nama, Kelas, Daftar, Reset, dan pengiriman dengan Enter.', 'Status tes di slide ini adalah hasil demo lokal, bukan hasil pengujian proyek pada OpenCode atau layanan pendaftaran sungguhan.', 'Mengganti mode kode mengosongkan hasil tes sebelumnya. Nilai Nama/Kelas dan catatan tes hanya berada di memori halaman, tidak dikirim atau disimpan sebagai data siswa.', 'Gunakan tombol Catatan tes untuk melihat langkah, harapan, hasil yang benar-benar muncul, mode kode, serta browser demo.']
    },
    {
      id: 'v07-tes-isian', chapter: 'percobaan', type: 'testMatrix', kicker: 'MATERI 2 / BAB 09 LANJUTAN',
      title: 'Coba beberapa isian Nama',
      testIds: ['T1','T2','T3','T4','T5'],
      takeaway: 'Untuk T4–T5, lihat nilai hasil fungsi. Tampilan HTML bisa merapatkan spasi.', refs: [7,11],
      notes: ['Tabel ini rencana percobaan, bukan laporan tes yang telah dijalankan.', 'T5 menggunakan dua spasi di antara Rina dan Putri. Hasil fungsi harus tetap mengandung keduanya.', 'Di demo lokal, hasil fungsi ditampilkan sebagai JSON dengan spasi dipertahankan agar perbedaannya terlihat.']
    },
    {
      id: 'v07-tes-alur', chapter: 'percobaan', type: 'testMatrix', kicker: 'MATERI 2 / BAB 09 LANJUTAN',
      title: 'Coba tombol dan alur formulir',
      testIds: ['T6','T7','T8'],
      takeaway: 'Mencoba kembali bagian yang sebelumnya berjalan disebut regression testing.', refs: [7,11],
      notes: ['Coba kolom Kelas seperti sebelum perbaikan. Gunakan kelas contoh yang sama.', 'Catat browser, versi kode/mode, langkah, dan hasil yang benar-benar didapat.', 'T8 tidak otomatis dinyatakan lulus dari tombol tes. Pemateri harus menekan Enter untuk nama biasa, kemudian Enter untuk spasi saja.']
    },
    {
      id: 'v07-debugging', chapter: 'percobaan', type: 'debugExample', kicker: 'MATERI 2 / BAB 09 LANJUTAN',
      title: 'Kalau masalahnya masih muncul',
      code: 'raw.trim();\nif (raw.length === 0) {\n  // Masih memakai raw yang lama.\n}',
      explanation: 'trim menghasilkan teks baru, tetapi tidak langsung mengganti raw. Jika hasilnya tidak dipakai, tiga spasi tetap dihitung sebagai tiga karakter.',
      quote: 'Saya mencoba spasi saja, tetapi pesan berhasil masih muncul. Hasil raw.trim() belum digunakan. Simpan hasilnya ke name, lalu gunakan name untuk memeriksa apakah kolom kosong. Setelah itu, coba formulir lagi.',
      steps: ['Ulangi kejadian dan catat pesannya.', 'Periksa raw, hasil trim, dan hasil fungsi.', 'Perbaiki bagian yang salah.', 'Ulangi tes yang gagal dan bagian terkait.'],
      takeaway: 'Jika fungsi sudah benar tetapi pesan masih salah, periksa kode yang memakai hasil ok.', refs: [6,7,11],
      notes: ['Mencari penyebab dan memperbaiki kesalahan disebut debugging.', 'Pada demo lokal, mode Hasil trim diabaikan menunjukkan contoh ini. Mode Hasil ok diabaikan menunjukkan fungsi yang benar tetapi alur kirim yang salah.', 'Contoh kesalahan ini tidak harus muncul saat demo agent. Jika tidak muncul, jelaskan sebagai contoh pembahasan.']
    },
    {
      id: 'v07-keputusan', chapter: 'percobaan', type: 'case', kicker: 'MATERI 2 / BAB 09 LANJUTAN',
      title: 'Apakah perbaikannya sudah selesai?',
      lead: 'Jawab berdasarkan hasil percobaan, bukan karena AI sudah berhenti menulis kode.',
      observations: [['01','Spasi masih diterima','“Rina” berhasil, tetapi spasi saja juga dianggap berhasil.'],['02','Baru mencoba fungsi','Nilai fungsi sudah benar, tetapi formulir belum dicoba.'],['03','Reset dan Enter belum','Nama sudah diperiksa, tetapi dua cara penggunaan itu belum dicoba.']],
      question: 'Apa yang perlu dilakukan selanjutnya?',
      discussion: [
        { label: 'MASIH SALAH', text: 'Masalah utama belum diperbaiki. Periksa kembali pengecekan Nama, lalu ulangi percobaannya.' },
        { label: 'BELUM TAHU', text: 'Fungsi benar belum membuktikan tombol dan pesan benar. Buka aplikasi dan coba formulir.' },
        { label: 'BELUM LENGKAP', text: 'Lanjutkan percobaan AC6: Kelas, Reset, dan Enter. Catat hasilnya sebelum menyatakan selesai.' }
      ],
      takeaway: 'Jika semua tes sesuai harapan dan perubahan dibaca, perbaikan dapat dianggap selesai untuk kondisi yang dicoba.', refs: [7,11],
      notes: ['Tiga situasi ini adalah contoh pembahasan. Tombol pembahasan tidak mengumpulkan jawaban siswa.', 'Contoh penjelasan: “Nama harus diisi sebelum melanjutkan. Saya sudah mencoba tombol Daftar. Reset dan pengiriman dengan Enter masih perlu dicoba.”', 'Perbaikan selesai untuk kondisi yang diuji tidak berarti seluruh aplikasi bebas masalah. Browser lain dan koneksi ke layanan pendaftaran sungguhan belum dicakup.']
    },
    {
      id: 'v07-laporan-panduan', chapter: 'laporan', type: 'reportGuide', kicker: 'MATERI 2 / BAB 10',
      title: 'Ceritakan hasil pekerjaan dengan jelas',
      lead: 'Jelaskan apa yang diperbaiki, apa yang sudah dicoba, dan bagian yang belum diperiksa.',
      items: [
        { title: 'Apa masalahnya?', text: 'Pengguna bisa melanjutkan hanya dengan menekan spasi.' },
        { title: 'Apa yang diubah?', text: 'Pemeriksaan Nama memakai hasil trim.' },
        { title: 'Apa yang dicoba?', text: 'Nama, kosong, spasi, Kelas, Reset, dan Enter—sesuai percobaan yang benar-benar dilakukan.' },
        { title: 'Apa yang belum?', text: 'Misalnya browser lain atau pendaftaran ke server.' }
      ],
      takeaway: 'Sebutkan file yang diubah dan browser yang dipakai. Tes yang belum dijalankan bukan tes yang berhasil.', refs: [7,12],
      notes: ['Google membahas deskripsi perubahan yang menjelaskan apa dan mengapa. Contoh TEFA bukan format laporan resmi Google.', 'Catatan demo lokal dapat dilihat untuk membedakan hasil percobaan halaman ini dari contoh laporan di slide berikutnya.']
    },
    {
      id: 'v07-contoh-laporan', chapter: 'laporan', type: 'reportExample', kicker: 'MATERI 2 / BAB 10 LANJUTAN · CONTOH LAPORAN',
      title: 'Contoh laporan kepada teman satu tim',
      paragraphs: [
        'Pengecekan kolom Nama sudah diperbaiki. Sebelumnya pengguna bisa melanjutkan hanya dengan menekan spasi. Sekarang muncul pesan “Nama belum diisi”.',
        'Nama “Rina” dan “Rina Putri” bisa dipakai. Spasi di awal dan akhir dihapus tanpa menghilangkan spasi di antara kata.',
        'Kolom Kelas, tombol Reset, dan pengiriman dengan Enter sudah dicoba dan masih bekerja seperti sebelumnya.',
        'Pengecekan baru dilakukan di browser demo. Browser lain dan pendaftaran ke server belum diperiksa.'
      ],
      takeaway: 'Ini contoh format laporan. Saat demo, sesuaikan isinya dengan hasil yang benar-benar didapat.', refs: [7,12],
      notes: ['Jangan membaca contoh ini sebagai hasil tes yang sudah dijalankan pada sesi ini.', 'Gunakan tombol Lihat catatan demo untuk meninjau status nyata T1–T8 di halaman ini. Semua berstatus belum diuji sampai dijalankan.', 'Nama file dan browser pada laporan proyek nyata harus mengikuti pekerjaan yang benar-benar dilakukan di agent.']
    },
    {
      id: 'v07-penutup', chapter: 'laporan', type: 'habits', kicker: 'MATERI 2 / BAB 10 PENUTUP',
      title: 'Tiga kebiasaan saat memakai AI',
      items: [
        { title: 'Jelaskan masalahnya', text: 'Sebelum meminta bantuan AI, beri contoh kejadian yang dilihat.', example: '“Spasi saja masih membuat pesan berhasil muncul.”' },
        { title: 'Baca dan coba hasilnya', text: 'Sesudah AI mengubah kode, baca perubahannya dan jalankan aplikasi.', example: '“Saya coba nama biasa, kosong, spasi, Reset, dan Enter.”' },
        { title: 'Ceritakan hasilnya', text: 'Sampaikan yang sudah dicoba dan yang masih perlu diperiksa.', example: '“Nama sudah diperiksa. Tombol Reset belum saya coba.”' }
      ],
      takeaway: 'AI membantu menulis kode. Kita tetap memahami, memeriksa, dan bertanggung jawab atas hasilnya.', refs: [7,8,12,14],
      notes: ['Ajak siswa menjelaskan kembali kasus formulir dengan kata-kata sendiri. Mereka tidak harus menghafal istilah untuk memahami alurnya.', 'Contoh pertanyaan: apa yang diperiksa sebelum menyebut selesai? Contoh jawaban: kode, beberapa isian, tombol, dan pesan. Alasan: satu nama yang berhasil belum membuktikan bagian lain benar. Tindakan: lengkapi percobaan yang belum dijalankan.', 'Demo memberi contoh cara kerja. Kemampuan mandiri perlu dilatih pada kesempatan berikutnya.', 'Daftar istilah dapat dibuka melalui tombol di bagian bawah halaman.']
    }
  ]
};
