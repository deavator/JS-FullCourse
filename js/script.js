'use strict';
var jsText = "some text"; // объявляем переменную и присваиваем значение

// 1. ТИПЫ ДАННЫХ
// 1.1 Объекты

// let obj = {
//     name: 'John',
//     age: 23,
//     isMarried: false
// };

// console.log(obj.isMarried);
// console.log(obj['isMarried']);

// let arr = ['pic.jpg', 34, {a: 2, isTrue: false}, []];
// console.log(arr[2]);

// 2. ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ
// alert('Hello');

// const responce = confirm('Are you ready?');
// console.log(responce);

// const responce = prompt('Have you already been to London?', "Yes");
// console.log(responce);
// console.log(typeof(responce));

// const answers = [];
// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('How old are you?', '');
// answers[2] = prompt('Are you maried?', '');
// // console.log(answers);
// document.write(answers);

// const url = 'https://someurl.com/';
// console.log(`${url}toys`);

// const isChecked = true,
//     isClosed = true;


// ************* УСЛОВИЯ *****************
// if (4 == 4) {
//     jsText = "Условие выполняется";
// } else {
//     jsText = "Условие не выполняется";
// }

// Пример:
// const num = 50;
// const userNum = 70;

// if (num < userNum) {
//     console.log('Слишком много');
// } else if (num > userNum) {
//     console.log('Слишком мало');
// } else {
//     console.log('Верно!');
// }

// Тернарный вид условия
// (num < userNum) ? console.log('Слишком много'): console.log('Слишком мало');

// Конструкция switch
// switch (num) {
//     case 49:
//         console.log('Слишком много');
//         break;
//     case 50:
//         console.log('Слишком много');
//         break;
//     default:
//         case 49:
//         console.log('Слишком много');
//         break;
// }

// Циклы
let count = 0;

// while (count < 10) {
//     count++;
//     console.log(count);
// }

// do {
//     count++;
//     console.log(count);
// }
// while (count < 10);

// for (count; count < 10; count++) {
//     if (count == 8) {
//         console.log('exit out');
//         // break; // прерывает цикл
//         continue; // пропускает шаг цикла

//     }
//     console.log(count);
// }