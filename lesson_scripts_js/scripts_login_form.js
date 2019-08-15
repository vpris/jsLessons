"use strict";





function registerForm() {
    let userLogin = document.getElementById('userLogin');
    let userLoginLength = userLogin.value.length >= 5 && userLogin.value.length <= 16;

    let userMail = document.getElementById('userMail');
    let userMailCorrect = userMail.value.includes('@');

    let password1 = document.getElementById('userPass1');
    let password2 = document.getElementById('userPass2');
    let passwordLength = password1.value.length >= 8 && password1.value.length <= 16 || password2.value.length >= 8 && password2.value.length;

    if (userLoginLength) {

    } else {
        alert('Длина логина неверна');
        return false;
    }


    if (userMailCorrect) {
//        alert('Email прекрасен');
    } else {
        alert('Email не подходит по требованиям.');
        return false;
    }

    if (password1.value !== password2.value) {
        alert('Пароли не совпадают');
        return false;
    } else if (password1.value == '') {
        alert('Нужно ввести пароль');
        return false;
    } else {
//        password1.value  = alert('Пароли - ок');
    }

    if (passwordLength) {

    } else {
        alert('Длина пароля не подходит');
        return false;
    }

    
}
registerForm();