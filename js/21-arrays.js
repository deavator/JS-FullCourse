// Урок 21. Массивы и псевдомассивы

'use strict';

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop();
// arr.push(10);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// let str = 'строка';

// for (let value of str) {
//     console.log(str[2]);
// }

// arr.forEach(function (itemValue, itemIndex, arr) {
//     console.log(itemValue, itemIndex, arr);
// });

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));