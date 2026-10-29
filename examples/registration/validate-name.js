window.TEFA_NAME_CHECK = value => {
  const name=value.trim();
  return name?{ok:true,value:name,message:'Pendaftaran berhasil'}:{ok:false,value,message:'Nama belum diisi'};
};
