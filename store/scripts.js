"use strict";


// let item_title = document.querySelector('.item_title');
// let product = document.getElementById('#1');


let products = [
        {id: 1, trademark: 'Apple', device: 'notebook', model: 'Macbook Pro 15', price: 102800},
        {id: 2, trademark: 'Lenovo', device: 'notebook', model: 'Yoga 5', price: 61200},
        {id: 3, trademark: 'Samsung', device: 'notebook', model: 'NP538', price: 54900},
        {id: 4, trademark: 'Samsung', device: 'notebook', model: 'NP548', price: 59900},
        {id: 5, trademark: 'Samsung', device: 'notebook', model: 'NP558', price: 54900},
        {id: 6, trademark: 'Samsung', device: 'notebook', model: 'NP568', price: 57900}
    ];

let bucket = [

        {id: 1, trademark: 'Apple', device: 'notebook', model: 'Macbook Pro 15', img: '1.jpeg', price: 102800, count: 3, residue: 0},
        {id: 2, trademark: 'Lenovo', device: 'notebook', model: 'Yoga 5', img: '2.png', price: 61200, count: 2, residue: 20},
        {id: 4, trademark: 'Apple', device: 'notebook', model: 'Macbook Air', img: '1.jpeg', price: 79000, count: 1, residue: 0},
        {id: 4, trademark: 'Apple', device: 'notebook', model: 'Macbook Air', img: '1.jpeg', price: 79000, count: 1, residue: 0},
        {id: 5, trademark: 'Samsung', device: 'notebook', model: 'NP558', img: '3.jpg', price: 54900, count: 4, residue: 19},
        {id: 3, trademark: 'Samsung', device: 'notebook', model: 'NP538', img: '4.jpeg', price: 54930, count: 1, residue: 10},
        {id: 3, trademark: 'Samsung', device: 'notebook', model: 'NP538', img: '4.jpeg', price: 54930, count: 1, residue: 10},
        {id: 3, trademark: 'Samsung', device: 'notebook', model: 'NP538', img: '4.jpeg', price: 54930, count: 1, residue: 10},
        {id: 4, trademark: 'Apple', device: 'notebook', model: 'Macbook Air', img: '1.jpeg', price: 79000, count: 1, residue: 0},
];

function countPrice() {
    let summ = 0;

    for (let r = 0; r < bucket.length; r++) {

        summ += bucket[r].price * bucket[r].count;
    }
    let ms = '<p> Сумма заказа: ' + summ + ' руб.</p>';
    return ms;
}

const cartPriceBlock = document.querySelector('.bucketSumm');
cartPriceBlock.innerHTML = countPrice();

let setCounts = document.querySelector('.set_counts');
setCounts.innerHTML = '<p> Выбранные товары: </p>';

function productsFromBucket() {
    let numbersOfProduct = bucket.length;

    const cartContentBlock = document.getElementById('cart_content');

    for (let i = 0; i < numbersOfProduct; i++) {
        const cartContentItemBlock = document.createElement('div');
        cartContentItemBlock.setAttribute('class', 'item_box')

        let md =
                '<div class="image_box">' +
                    '<img src="' +  bucket[i].img + '" alt="' + [i] + '">' +
                '</div>' +
                '<div class="item_text">' +
                    '<h2 class="item_title">' + bucket[i].trademark + ' ' + bucket[i].model + '</h2>' +
                    '<p class="item_title">Выбрано: ' + bucket[i].count + ' шт.</p>' +
                    '<p> Цена: ' + '<span class="item_price">' + bucket[i].price + '</span>' + ' RUB</p>' +
                '</div>';

        cartContentItemBlock.innerHTML = md;
        cartContentBlock.appendChild(cartContentItemBlock);

    }
}
productsFromBucket();









