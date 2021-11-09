const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
  if (inputRef.value.length === Number(inputRef.dataset.length)){
    updateClass('valid', 'invalid')
  }
  else {
    updateClass('invalid', 'valid')
  }
})
function updateClass(addCl, remCl){
    inputRef.classList.remove(remCl);
    inputRef.classList.add(addCl);
};