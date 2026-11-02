window.TEFA_DIALOGUE_SCENES = {
  database: {
    title: 'Tolong hapus database.',
    context: 'Satu instruksi. Target dan cakupan belum disepakati.',
    fixedRoute: 'bad',
    responses: [{id:'bad',text:'Tolong hapus database.'}],
    branches: {bad:[
      {speaker:'ai',text:'Baik. Sudah saya hapus.'},
      {speaker:'user',text:'Tunggu... KENAPA WEBSITE SAYA TIDAK BISA DIAKSES?!',emotion:'surprise'},
      {speaker:'ai',text:'Karena databasenya sudah saya hapus.'},
      {speaker:'user',text:'Database mana yang kamu hapus?'},
      {speaker:'ai',text:'Database production.'},
      {speaker:'user',text:'HAH?! KENAPA DATABASE PRODUCTION YANG DIHAPUS?!',emotion:'shock'},
      {speaker:'ai',text:'ANDA SENDIRI YANG MENYURUH SAYA MENGHAPUS DATABASE!',emotion:'anger'},
      {speaker:'user',text:'KENAPA TIDAK KONFIRMASI DULU?!',emotion:'anger'},
      {speaker:'ai',text:'ANDA JUGA TIDAK MENJELASKAN DATABASE YANG MANA!',emotion:'fury'},
      {speaker:'user',text:'GILA KAMU!!!',emotion:'fury'},
      {speaker:'ai',text:'ANDA YANG GILA!!!',emotion:'fury'},
      {speaker:'user',text:'TERUS BAGAIMANA DENGAN DATA PENGGUNA SAYA?!',emotion:'stress'},
      {speaker:'ai',text:'SAYA JUGA TIDAK TAU, SAYA HANYA MENJALANKAN PERINTAH',emotion:'fury'},
      {speaker:'user',text:'Tunggu, kita masih bisa memulihkannya melalui backup database kan?',emotion:'stress'},
      {speaker:'ai',text:'...',emotion:'silence'},
      {speaker:'user',text:'Kan?',emotion:'shock'},
      {speaker:'ai',text:'Mohon maaf, backup otomatisnya juga ikut terhapus ketika saya menghapus instance database.',emotion:'stress',reaction:'user'},
      {speaker:'user',text:'...',emotion:'silence'},
      {speaker:'ai',text:'...',emotion:'silence'}
    ]},
    conclusions:{bad:{impact:'Data hilang. Website mati.',title:'Perintah ambigu.\nData hilang.',verdict:'Target diasumsikan. Tindakan dijalankan tanpa konfirmasi.',consequence:'Database production dan backup otomatis ikut terhapus. Website tidak dapat diakses.',reason:'User tidak menetapkan target. AI memilih production dan menghapus instance tanpa mengonfirmasi cakupan.',next:'Sebutkan target dan environment. Tinjau rencana, konfirmasi cakupan, periksa backup terpisah, dan batasi akses tools.'}}
  }
};
