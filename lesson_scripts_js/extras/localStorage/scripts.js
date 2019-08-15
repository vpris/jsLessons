"use strict";

document.querySelector('button').addEventListener('click', function (event) {
    let value = document.querySelector('input').value

    let obj = {
        text: value
    }

    localStorage.setItem('headerText', JSON.stringify(obj))

})

document.addEventListener('DOMContentLoaded', function () {

    let obj

    try {
        obj = JSON.parse(localStorage.getItem('headerText'))
    } catch (e) {
        obj = {}
    }
    


    if (obj && obj.text && obj.text.trim()) {
        document.querySelector('h1').textContent = obj.text
    }

})