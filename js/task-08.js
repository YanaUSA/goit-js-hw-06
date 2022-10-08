const formRef = document.querySelector('form.login-form')

// console.log(formRef)




formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert("Всі поля повинні бути заповнені!");
    };
    const dataToSend = {
        email: email.value,
        password: password.value,
    };    

    formRef.reset();

    // console.log(dataToSend)
})
