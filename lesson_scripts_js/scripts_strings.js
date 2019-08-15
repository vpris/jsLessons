"use strict";

var message = 'Hello world!!!';

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.charAt(0));
console.log(message.toLowerCase().indexOf('world'));
console.log(message.indexOf('Cat'));
console.log(message.substr(1, 4));
console.log(message.substr(message.indexOf('world'), 5));
console.log(message.substring(1, 3));