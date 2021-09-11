'use strict';

// 1. Классические ФУНКЦИИ
// Загружаются перед выполенение кода

// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage('Hello World!');

// Функция Калькулятор
// function calc(a, b, str) {
//     let res = 0;
//     if (str == "+") {
//         res = a + b;
//     } else if (str == "-") {
//         res = a - b;
//     } else if (str == "*") {
//         res = a * b;
//     } else {
//         res = a / b;
//     }
//     return res;
// }

// let a = +prompt('Enter num1', '');
// let str = prompt('Enter operator (+,-,*,/)', '');
// let b = +prompt('Enter num2', '');

// console.log(a, str, b, '=', calc(a, b, str));

// 2. ФУНКЦИИ ВЫРАЖЕНИЯ
// Загружаются по ходу выполнения кода
// const calc = function(a, b, str) {
//     //
// };

// 3. СТРЕЛОЧНЫЕ ФУНКЦИИ
const calc = (a, b) => {
    console.log('Выполнение функции');
    return a + b;
};

const calculator = (a, b) => a + b;