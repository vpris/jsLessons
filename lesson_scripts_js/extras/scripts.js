"use strict";


document.querySelector('#alert').addEventListener('click', function () {
    alert('Вы успешно кликнули')
})


document.querySelector('#confirm').addEventListener('click', function () {
    let decision = confirm('Are your sure?');

    console.log(decision)

    if (decision) {
        alert('Вы успешно кликнули')
    }
})

document.querySelector('#prompt').addEventListener('click', function () {
    let hui = prompt('Ваш возраст:')
    console.log(hui)
})

console.warn('Hui')
console.info('Ne Hui')
console.error('Vse je hui')
throw new Error('Ошибочка вышла')