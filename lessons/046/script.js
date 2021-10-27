// 'use strict';

// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return (a + b);
//     }

//     sum(console.log(sum()));
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name, surname);
// }

// const user = {
//     name: 'Dmitry'
// }

// применям объект user для контекстной функции sayName
// sayName.call(user, 'Vasiliev');
// или 
// sayName.apply(user, ['Vasiliev']);

// function count(num) {
//     return this*num
// }

// const double = count.bind(2) // 2 передается в this

// console.log(double(3));
// console.log(double(256));

// T.е double - новая функция с жестко привязанным контекстом "2"


//1) Если режим use strict - this = undefined
// Если простой режим - this = Window

// Если мы используем метод внутри объекта, то контекст вызова будет ссылаться 

// РЕЗЮМЕ
// 1) Обычная функция: this = window, если "use strict" = undefined
// 2) Контекст у методов вызова "this" - сам этот объект
// 3) "this" в конструкциях и классах - новый экземпляр объекта
/* Например let user = new User('dima', 23) - this это new User dima */
// 4) Ручная привязка this - call, apply и bind

const btn = document.querySelector('button');

// В этом случае (не стрелочная callback функция) контекст вызова будет сам элемент, на который подвешано событие
// т.е. button (тоже самое, что и event.target...)
// btn.addEventListener('click', function() {
// console.log(this); // -> <button></button>
//     this.style.backgroundColor = 'blue';
//     this.style.color = 'white';
// })

// У стрелочной callback функции нет своего контекстного вызова. 
// Она будет брать у родителя. Т.е. Window (Если нет "use strict").
// В этом случае (стрелочная callback функция) контекст вызова будет window
// Если есть use strict вывод будет undefined

// btn.addEventListener('click', () => {
//     console.log(this);
// })

const obj = {
    num: 5,
    sayNum: function () {
        const say = () => {
            console.log(this.num);
        };

        say();
    }

};

obj.sayNum();

// Классический вариант стрелочной функции
const double = (a) => {
    return a * 2;
};

// Можно сократить код выше
const double2 = (a) => a * 2;

// Можно сократить код выше
const double3 = a => a * 2;