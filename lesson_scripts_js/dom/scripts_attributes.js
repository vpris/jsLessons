"use strict";


let a = document.querySelector('a');
let oldHref = a.getAttribute('href');

a.setAttribute('href', 'https://ya.ru/');
a.textContent = 'Yandex';

console.log();