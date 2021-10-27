'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button'),

    // Чистовой размер
    // width = box.offsetWidth,
    // heigth = box.offsetHeight;

    // Размер без учета скроллбара
    // width = box.clientWidth,
    // heigth = box.clientHeight;

    // Полный размер текста
    // width = box.scrolltWidth,
    boxHeigth = box.scrollHeight;

// console.log(width, heigth);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

// console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);