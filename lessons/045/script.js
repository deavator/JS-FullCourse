// 045 ФУНКЦИИ - КОНСТРУКТОРЫ (ОБЪЕКТОВ)

'use strict';

// Функция как объект: 
//ФУНКЦИЯ - КОСТРУКТОР по созданию людей
// c уникальными именами, номерами и общим свойством 'human'

function User(name, id) {
    // У каждого пользователя будет свой name и id
    // Здесь "this" - в контексте "каждый"
    this.name = name;
    this.id = id;
    // У каждого объекта будет общее свойство "Human"
    this.human = true;

    // Добавим методы
    this.hello = function () {
        console.log(`Hello ${this.name}!`)
    };
}

// Создаем нового пользователя
const dima = new User('Dmitry', 47);
const ivan = new User('Ivan', 28);

dima.hello();
ivan.hello();

User.prototype.exit = function () {
    console.log(`Goodby ${this.name}!`);
};

dima.exit();

