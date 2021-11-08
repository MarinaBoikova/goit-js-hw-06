let counterValue = 0;

const btnDecrementRef = document.querySelector('.js-decrement');
const valueRef = document.querySelector('#value');
const btnIncrement = document.querySelector('.js-increment');

valueRef.textContent = counterValue;

const handlebtnDecrementclick = () => {
    valueRef.textContent = counterValue += -1;    
};
const handlebtnIncrementclick = () => {
    valueRef.textContent = counterValue += 1;
};
btnDecrementRef.addEventListener('click', handlebtnDecrementclick);
btnIncrement.addEventListener('click', handlebtnIncrementclick);
