"use strict";

function loginForm() {
    let userLogin = document.querySelector('.userLogin');
    let userPass = document.querySelector('.userPass1');
    let userLoginLength = userLogin.value.length >= 5 && userLogin.value.length <= 8;
    let userPassLength = userPass.value.length < 1;

    let userLoginCorrect = userLogin.value.includes('rua') || userLogin.value.includes('ost');
    let userLoginNotMail = userLogin.value.includes('@');

    if (userLoginLength) {
    } else {
        userLogin.classList.remove('.userLogin');
        userLogin.classList.add('userLoginActive');
        alert('Длина логина должна быть от 5 до 8 символов');
        return false;
    }

    if (userLoginCorrect) {
    } else {
        userLogin.classList.remove('.userLogin');
        userLogin.classList.add('userLoginActive');
        return false;
    }

    if (!userLoginNotMail) {
    } else {
        userLogin.classList.remove('.userLogin');
        userLogin.classList.add('userLoginActive');
        alert('Email вводить не нужно :)');
        return false;
    }

    if (userPassLength) {
        userPass.classList.remove('.userPass1');
        userPass.classList.add('userPass1Active');
        alert('Нужно ввести пароль');
        return false;
    }


}

loginForm();