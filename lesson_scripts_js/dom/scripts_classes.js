"use strict";


let a = document.querySelector('a');
let oldHref = a.getAttribute('href');

a.setAttribute('href', 'https://ya.ru/');
a.setAttribute('title', 'Click for go to Yandex');
a.textContent = 'Yandex';

console.log();


let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');


box1.classList.add('red');

let hasClass =  box2.classList.contains('blue');

console.log(hasClass);

if (hasClass) {
    box2.classList.remove('blue')
} else {
    box2.classList.add('blue')
}