(() => {
  const form=document.querySelector('#registration'),name=document.querySelector('#name'),result=document.querySelector('#result');
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const check=window.TEFA_NAME_CHECK(name.value);
    result.dataset.state=check.ok?'accepted':'rejected';result.textContent=check.message;
    if(check.ok)name.value=check.value;
  });
  form.addEventListener('reset',()=>{result.removeAttribute('data-state');result.textContent='Isi nama, lalu pilih Daftar.'});
  form.querySelectorAll('button').forEach(button=>{button.disabled=false});
})();
