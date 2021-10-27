'use strict';

// 1) Получение элементов по id
const box = document.getElementById("box");
// console.log(box);

// 2) Получение элементов по имени тэга
// btns - html-коллекция - псевдомассив (массив, к которому нельзя применить методы массива)
// состоящий из всех кнопок страницы
const btns = document.getElementsByTagName("button");

// Получить доступ ко 2-й кнопке коллекции
// const btn2 = document.getElementsByTagName("button")[1];
// console.log(btns[1]);

// 3) Получение элементов по имени класса
const circles = document.getElementsByClassName("circle");
// console.log(circles);

// 3) Получение элементов по селектору
const hearts = document.querySelectorAll(".heart");
// console.log(hearts);
hearts.forEach(item => {
    // console.log(item);
});
// Получение элемента по селектору
const Aheart = document.querySelector(".heart"),
    wrapper = document.querySelector('.wrapper');

// 4) Урок 29. Меняем свойства объектов
// box.style.backgroundColor = 'blue';
box.style.cssText = "background-color: blue;";

btns[0].style.borderRadius = '100%';
circles[0].style.borderRadius = '0%';

hearts.forEach(item => {
    item.style.backgroudColor = 'blue';
});

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroudColor = "green";
    console.log(hearts[i]);
}

const div = document.createElement('div');
// div.style.backgroudColor = "green";
// const text = document.createTextNode('Hello!');
div.classList.add('black');
document.body.append(div);

wrapper.append(div); // вставляет блок вниз родительского блока
// document.querySelector('.wrapper').append(div);

wrapper.prepend(div); // вставляет блок вверх родительского блока

// hearts[2].before(div);
hearts[0].after(div);

btns[4].remove(); // удалить элемент (кнопку 5)

hearts[2].replaceWith(div); // заменить один элемент другим

// Создаем и добавляем элемент к классу
const block = document.createElement('div');
block.classList.add('text-block');
wrapper.append(block);
block.innerHTML = "<h1>Учебный блок 'block'</h1>";
// block.textContent = "Учебный блок 'block'";

block.insertAdjacentElement('',
    "<h1>Учебный блок 'block '</h1>");