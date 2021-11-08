const inputRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

const handleNameInput = (event) => {
outputNameRef.textContent = event.currentTarget.value;
}

inputRef.addEventListener('input', handleNameInput);