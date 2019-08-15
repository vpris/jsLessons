"use strict";

let randNumb = parseInt(Math.random() * 100);
guess(randNumb);

function guess(num) {
    let answer = parseInt(prompt("Угадай число от 0 до 100:"));
    if (answer > num || answer > 100) {
        alert ("Число слишком большое")
    } else if (answer < num || answer < 0) {
        alert ("Число слишком маленькое");
    } else if (answer == num) {
        alert ("Вы угадали!");
        return;
    } else {
        alert ("Нужно ввести число");
    } 
    guess(num);
}










/*


function inputLength(userPassw) {
    return userPassw.length >= 3 && userPassw.length <=12;
}

function inputSymbols(userPassw) {
    return userPassw.includes('&') || userPassw.includes('@') || userPassw.includes('*') || userPassw.includes('_') || userPassw.includes('!') || userPassw.includes('.') || userPassw.includes('$');
}

function checkPassword(userPassw) {
    if (inputLength(userPassw) && inputSymbols(userPassw)) {
        alert('Пароль корректный');
    } else {
        alert('Пароль некорректный');
    }
    checkPassword(userPassw);
}



let userPassw = prompt('Введите пароль');
let userLogin = prompt('Введите логин');




let userMail = prompt('Введите свой email');

checkCorrectMail(userMail);

function checkCorrectMail(uM) {
    return uM.includes('@');
}


function checkMail(userMail) {
    if (checkCorrectMail(userMail)) {
        alert('Email корректный')
    } else {
        alert('Email некорректный!');
    }

}


checkMail(userMail);



*/
