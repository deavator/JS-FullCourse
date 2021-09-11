'use strict';

// =============== MAIN DATABASE ===================//

const personalMovieDB = {
    count: 0, //- Сколько фильмов посмотрели
    genres: [], //- сюда поместить пустой массив
    actors: {}, //- тоже поместить пустой объект
    privat: false, //- открытые или закрытые данные
    movies: {} //- в это свойство поместить пустой объект
};

// =============== CONSTANTS ===================//

//- (false) отображать или (true) скрывать базу данных
personalMovieDB.privat = false;


// =============== FUNCTIONS ===================//

// Проверка корректного ввода числовых данных
function userCheckNum(question) {
    let answer = prompt(question, '');

    while (answer == '' || answer == null || isNaN(answer)) {
        answer = prompt(question, '');
    }

    return +answer;
}


// Проверка корректного ввода строчных данных
function userCheckStr(question) {
    let answer = prompt(question, '');

    while (answer == '' || answer == null || answer.length > 50) {
        answer = prompt(question, '');
    }

    return answer;
}


// Определяет уровень киномана
function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// Проверяет выводить в консоль базу или нет
function showMyDB(hiden) {
    if (!hiden) {
        console.log(personalMovieDB);
    }
}


// =============== START ===================//

function start() {
    // Добавить количество просмотренных фильмов
    personalMovieDB.count = userCheckNum('Сколько фильмов вы уже посмотрели?');

    // Добавить названия фильмов и их оценка
    let nameOfFilm;

    for (let i = 1; i <= personalMovieDB.count; i++) {
        nameOfFilm = userCheckStr(`Укажите название просмотренного фильма ${i}?`);
        personalMovieDB.movies[nameOfFilm] = userCheckNum('На сколько оцените его?');
    }

    // Добавить любимые жанры в базу
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = userCheckStr(`Ваш любимый жанр под номером ${i+1}`);
    }

    // Вывести базу в консоль если она открытая (personalMovieDB.privat = false)
    showMyDB(personalMovieDB.privat);

    // Вывести уровень кинолюбителя
    detectPersonalLevel();
}

start();