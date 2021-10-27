// const timerId = setTimeout(function (text) {
//     console.log(text);
// }, 2000, 'Hello!');


const btn = document.querySelector('.btn');

let timerId, // создаем глобальную переменную
    i = 1; // счетчик 

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(greetings, 2000); // вызов функции нажатием кнопки с задержкой 2с 
//     console.log('Count started');
//     timerId = setInterval(greetings, 2000); // вызывает функцию с интервалом 2 с

// });


// function greetings() {
//     i++;
//     console.log(i);

//     if (i > 3) {
//         clearInterval(timerId); // очищаем с интервал 2с
//         console.log('Count ended');
//     }

// }

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    function frame() {
        if (pos == 300) {
            clearInterval(timerId);
        } else {
            pos++;
            elem.style.top = `${pos}px`;
            elem.style.left = `${pos}px`;
        }
    }

    timerId = setInterval(frame, 50);

}

btn.addEventListener('click', myAnimation);