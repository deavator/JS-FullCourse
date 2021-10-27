/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// ---------------- ФУНКЦИИ -------------------
// Объявляем функцию, создающую список фильмов
function createMovieList(films, parent) {
    // сортируем фильмы в базе по алфавиту
    // sortArr(films);
    films.sort();

    parent.innerHTML = '';

    // динамически передаем список в html код
    films.forEach((film, i) => {

        // проверяем длину названия фильма, введенного пользователем
        if (film.length > 21) {
            film = film.substr(0, 21) + "...";
        }
        // выводим список на страницу
        parent.innerHTML += `
        <li class = "promo__interactive-item"> ${i + 1}. ${film}
            <div class = "delete"></div>
        </li>
    `;
    });

    // при нажатии на корзинку (кнопка класс .delete) удаляется элемент
    // для каждой кнопоки группы прослушиваются событие
    // нажатия на иконку, при этом удаляется родительский элемент (надпись фильма)
    // и фильм под индексом элемента из базы данных фильмов (списка фильмов)
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            // вновь выводим список фильмов воhtml
            createMovieList(movieDB.movies, movieList);
        });

    });
}

// Удаление рекламы
const deleteAdv = (advs) => {
    advs.forEach(element => {
        element.remove();
    });
};

// сортировка списка
const sortArr = (arr) => {
    arr.sort();
};
//  ------------ КОНЕЦ ФУНКЦИИ -----------------

// ------------- ПЕРЕМЕННЫЕ --------------------
const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    },

    siteAdvs = document.querySelectorAll(".promo__adv img"),
    movieList = document.querySelector(".promo__interactive-list"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre");

// ---------------- КОНЕЦ ПЕРЕМЕННЫЕ -------------

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
deleteAdv(siteAdvs);

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = "драма";

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg".Оно лежит в папке img.
poster.style.backgroundImage = 'url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
// 5) Добавить нумерацию выведенных фильмов 



// создаем список фильмов на html странице
createMovieList(movieDB.movies, movieList);

// ЗАДАНИЕ 033
// Получаем нужные элементы формы
const addForm = document.querySelector('form.add'),
    addFormInput = addForm.querySelector('input.adding__input'),
    addFormChkBox = addForm.querySelector('[type="checkbox"]');

// Устанавливаем обработчик событий
addForm.addEventListener('submit', (event) => {
    // отменяем стандартное событие (при нажатии на кнопку)
    event.preventDefault();

    // сохраняем в переменной значение поля input после ввода пользователя
    const NewFilm = addFormInput.value;
    // сохраняем в переменную значение chkbox
    const favoriteFilm = addFormChkBox.checked;

    // 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
    // "Добавляем любимый фильм"
    if (favoriteFilm) {
        console.log("Добавляем любимый фильм");
    }

    // если не название фильма не пустая строка
    if (NewFilm) {
        // добавляем элемент в объект (базу данных фильмов)
        movieDB.movies.push(NewFilm);
        // создаем список фильмов на html странице
        createMovieList(movieDB.movies, movieList);
    }

    // сбросить данные формы
    addForm.reset();
    // ИЛИ event.target.remove();

});