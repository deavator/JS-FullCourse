// События на мобильных устройствах
'use strict';

// Виды событий:
//touchstart - событие на косание экрана
//touchmove - событие на движение пальцев
//touchend - событие срабатывает при отрыве пальца от экрана
//touchenter - событие срабатывает при наскальзывании пальца на элемент
//touchleave - событие срабатывает при уходе пальца с элемента
//touchcancel - событие срабатывает при уходе пальца c области

// Выполняет скрипт когда структура готова, но страница еще загр
document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    //touchstart - событие на косание экрана
    // box.addEventListener('touchstart', (event) => {
    //     event.preventDefault();
    //     console.log('touchstart!');
    //     console.log(event.touches);
    //     console.log(event.targetTouches);
    //     console.log(event.changedTouches);
    // });

    //touchmove - событие на движение пальцев
    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
        console.log('touchmove!');
        console.log(event.targetTouches[0].pageX, event.targetTouches[0].pageY);

    });

    // //touchend - событие срабатывает при отрыве пальца от экрана
    // box.addEventListener('touchend', (event) => {
    //     event.preventDefault();
    //     console.log('touchend!');
    // });
});