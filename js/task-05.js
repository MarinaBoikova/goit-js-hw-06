const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
};

refs.input.addEventListener('input', () => {

    if(refs.input.value === ""){
        refs.output.textContent = 'Anonymous';
        return;
    }
    refs.output.textContent = refs.input.value.trim();
});




// const inputRef = document.querySelector('#name-input');
// const outputNameRef = document.querySelector('#name-output');

// const handleNameInput = (event) => {
//         outputNameRef.textContent = event.currentTarget.value;
//     };
   
// inputRef.addEventListener('input', handleNameInput);