"use strict";


let str = '1,2,3,4,5,6,7,8';

let array = str.split(',');

// console.log(array);
// console.log(array.join(';'));
// console.log(array.reverse())

// array.splice(1, 0, '12')

let newArray = array.concat(1, 2)

// console.log(newArray)

let objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 19},
    {name: 'Serheo', age: 22}
]



let foundPerson = objArr.find(function (person) {
    return person.age === 19
})
console.log(foundPerson.name);

let oddArray = [1,2,3,4,5,6,7,8,9].filter(function (i) {
    return i % 2 !== 0
})

let numArray = array.map(function (i) {
    return i * 2
})

console.log(numArray)