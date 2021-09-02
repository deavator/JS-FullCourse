'use strict';

// Задание на урок 12:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

const personalMovieDB = {
    count: numberOfFilms, //- 'Сколько фильмов вы уже посмотрели?'
    genres: [], //- сюда поместить пустой массив
    actors: {}, //- тоже поместить пустой объект
    privat: false, //- в это свойство поместить boolean(логическое) значение false
    movies: {} //- в это свойство поместить пустой объект
};


// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

for (let i = 1; i <= numberOfFilms; i++) {
    const nameOfFilm = prompt(`Укажите название просмотренного фильма ${i}?`, ''),
        rateOfFilm = prompt('На сколько оцените его?');

    personalMovieDB.movies[nameOfFilm] = rateOfFilm;

}


// Проверить, чтобы все работало без ошибок в консоли */
console.log(personalMovieDB);
document.write(personalMovieDB);