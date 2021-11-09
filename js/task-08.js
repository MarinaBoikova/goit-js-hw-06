const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('label[name="email"]'),
    password: document.querySelector('label[name="password"]'),
    submit: document.querySelector('button[type="submit"]')
}

const onFormSubmit = evt => {
evt.preventDefault();

const passwordInput = refs.form.elements.password;
const emailInput = refs.form.elements.email;

const userEmail = Object.fromEntries(new FormData(refs.form));
console.log(userEmail);

if (emailInput.value === '' || passwordInput.value === ''){
alert('all fields must be filled');
}
refs.form.reset();
}

refs.form.addEventListener('submit', onFormSubmit);


