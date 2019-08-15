"use strict";


// let p = document.querySelectorAll('p');

// for (let i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function (event) {
//         event.target.style.color = 'blue'
//
//     })
// }


let wrapper = document.getElementById('wrapper').addEventListener('click', function (event) {
    console.log(event.target)

/*    if (event.target.style.color === 'blue') {
        event.target.style.color = 'black';
    } else{
        event.target.style.color = 'blue';
    }*/

    let tagName = event.target.tagName.toLowerCase()

    if (tagName === 'p') {
        event.target.style.color = 'blue';
    }

});

