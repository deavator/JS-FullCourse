// Урок 037 ClassList и делегирование событий

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // 2 (blue some)
// console.log(btns[0].classList.item("1")); // some
// console.log(btns[1].classList.add('red')); // присваивает объекту класс 'red'
// console.log(btns[0].classList.remove('blue')); // удаляет у объекта класс 'blue'
// console.log(btns[0].classList.toggle('blue')); // включает у объекта класс 'blue'

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

// btns[1].addEventListener('click', () => {
//     btns[1].classList.toggle('blue');
//     console.log('blue');
// });

// for (const btn of btns) {
//     btn.addEventListener('click', (event) => {
//         btn.classList.toggle('blue');
//     });
// }

wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.tagName == "BUTTON") {
    if (event.target && event.target.matches('button.blue')) {
        console.log('New Button created!');
        const newBtn = document.createElement('button');
        newBtn.classList.add('red');
        wrapper.append(newBtn);
    } else {
        console.log('Something pressed!');
    }
});