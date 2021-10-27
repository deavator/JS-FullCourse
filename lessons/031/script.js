// 031 События
const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay'),
    link = document.querySelector('a');
// НЕ ИСПОЛЬЗУЕТСЯ Т.к. СОБЫТИЕ ПЕРЕЗАПИСЫВАЕТСЯ
// btns[0].onclick = function () {
//     alert('hello 1!');
// };

// btns[2].onclick = function () {
//     alert('hello 2!');
// };


// btns[0].addEventListener('click', () => {
//     alert('Нажали на кнопку 1');
// });

// MOUSEENTER - событие наведения мышки на объект
// btns[1].addEventListener('mouseenter', (event) => {
//     alert('Навели на кнопку 2');
//     console.log(event.target);
//     // btns[1].remove();
// });

// Функция устанавливает контроль события и
// удаляет его после выполнения

// let i = 0;

const deleteElement = (event) => {
    // event.target.remove();
    console.log(event.currentTarget);
    console.log(event.type);
    // console.log(btns);
    // i++;
    // if (i == 1) {
    //     btns[0].removeEventListener('click',
    //         deleteElement);
    // }
};

// btns[0].addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target);
});

btns.forEach(btn => {
    btn.addEventListener('mouseenter', function (event) {
        console.log(event.target);
    });
});