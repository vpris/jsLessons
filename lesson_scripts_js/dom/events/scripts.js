"use strict";

let divs = document.querySelectorAll('div');
let link = document.querySelector('a');


for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function () {
        console.log(this.getAttribute('id'))
    }, true)
}

link.addEventListener('click', handleLinkClick)

function handleLinkClick(event) {
    event.preventDefault();

    let div = divs[0];

    // if (div.style.display === 'flex') {
    //     div.style.display = 'none'
    // } else {
    //     div.style.display = 'flex'
    // }

    //Равносильная запись, но короче (if - else)

    div.style.display = div.style.display === 'flex'
        ? 'none'
        : 'flex'


    console.log(div.style.display);
}