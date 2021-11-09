function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  color: document.querySelector('.color'),
  changeColor: document.querySelector('.change-color'),
}
const onChangeColorClick = evn => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.color.textContent = color;
}
refs.changeColor.addEventListener('click', onChangeColorClick);
