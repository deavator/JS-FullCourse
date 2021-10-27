// Динамические скрипты
'use strict';

// Добавляет скрипт test.js в html
const script = document.createElement('script');
script.src = 'test.js';
document.body.append(script);

// Добавим заголовок
const title = document.createElement('h1');
title.textContent = 'Динамический заголовок';
document.body.append(title);

// Добавим параграф
let text = document.createElement('p');
text.textContent = "Lorem ipsum, dolor sit amet " +
    "consectetur adipisicing elit. Quisquam aut necessitatibus" +
    "vitae exercitationem deleniti alias deserunt qui cupiditate" +
    "eum veritatis sunt quasi ipsum officiis, tempore esse libero error soluta dolorem.";
document.body.append(text);