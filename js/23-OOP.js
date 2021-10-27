// Урок 23. Основы ООП. Прототипно-ориентированое наследование
'use strict';

const soldier = {
    health: 100,
    armour: 300,
    sayHello: function () {
        console.log("Hello!");
    }
};

// const john = {
//     health: 50
// };

// Object.setPrototypeOf(john, soldier);

// john.sayHello();

const john = Object.create(soldier);
console.log(john.health, john.armour, john.sayHello);