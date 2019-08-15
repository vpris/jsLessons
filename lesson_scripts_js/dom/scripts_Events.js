"use strict";

let button = document.querySelector('button');
let h1 = document.querySelector('h1');
let input = document.querySelector('input');

function buttonHandler() {
    console.log('clicked!');
    h1.textContent = input.value;

}

h1.addEventListener('mouseenter', function () {
    this.style.color = 'red';
    this.style.background = 'black';
})

button.addEventListener('dblclick', buttonHandler);