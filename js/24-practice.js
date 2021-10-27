/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// =============== MAIN DATABASE ===================//

const personalMovieDB = {
    count: 0, //- Сколько фильмов посмотрели
    genres: [], //- сюда поместить пустой массив
    actors: {}, //- тоже поместить пустой объект
    privat: false, //- открытые или закрытые данные
    movies: {}, //- в это свойство поместить пустой объект

    // Проверка корректного ввода числовых данных
    userCheckNum: function (question) {
        let answer = prompt(question, '');

        while (answer == '' || answer == null || isNaN(answer)) {
            answer = prompt(question, '');
        }

        return +answer;
    },

    // Проверка корректного ввода строчных данных
    userCheckStr: function (question) {
        let answer = prompt(question, '');

        while (answer == '' || answer == null || answer.length > 50) {
            answer = prompt(question, '');
        }

        return answer;
    },

    // Определяет уровень киномана
    detectPersonalLevel: function () {

        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function (hiden) {
        if (!hiden) {
            console.log(personalMovieDB);
        }
    },

    // Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat.Если оно false - он
    // переключает его в true, если true - переключает в false.Протестировать вместе с showMyDB.
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};


// =============== START ===================//

function start() {
    // Добавить количество просмотренных фильмов
    personalMovieDB.count = personalMovieDB.userCheckNum('Сколько фильмов вы уже посмотрели?');

    // Добавить названия фильмов и их оценка
    let nameOfFilm;

    for (let i = 1; i <= personalMovieDB.count; i++) {
        nameOfFilm = personalMovieDB.userCheckStr(`Укажите название просмотренного фильма ${i}?`);
        personalMovieDB.movies[nameOfFilm] = personalMovieDB.userCheckNum('На сколько оцените его?');
    }

    // Добавить любимые жанры в базу
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = personalMovieDB.userCheckStr(`Ваш любимый жанр под номером ${i+1}`);
    }

    // forEach вывести в консоль сообщения в таком виде:
    //     "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)" * /

    personalMovieDB.genres.forEach(
        (item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        }
    );

    // Если база закрытая, делаем открытой, и наоборот
    personalMovieDB.toggleVisibleMyDB();

    // Вывести базу в консоль если она открытая (personalMovieDB.privat = false)
    personalMovieDB.showMyDB(personalMovieDB.privat);

    // Вывести уровень кинолюбителя
    personalMovieDB.detectPersonalLevel();
}

start();