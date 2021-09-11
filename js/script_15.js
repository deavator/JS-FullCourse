/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms, //- 'Сколько фильмов вы уже посмотрели?'
    genres: [], //- сюда поместить пустой массив
    actors: {}, //- тоже поместить пустой объект
    privat: false, //- в это свойство поместить boolean(логическое) значение false
    movies: {} //- в это свойство поместить пустой объект
};

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов.Если это происходит -
// возвращаем пользователя к вопросам опять

for (let i = 1; i <= numberOfFilms; i++) {
    const nameOfFilm = prompt(`Укажите название просмотренного фильма ${i}?`, '');
    if (nameOfFilm == '' || nameOfFilm.length > 50) {
        console.log('Название фильма не может быть пустым или длинее 50 символов!');
        i--;
        continue;
    } else {
        const rateOfFilm = prompt('На сколько оцените его?');
        personalMovieDB.movies[nameOfFilm] = rateOfFilm;
    }
}

/* 3) При помощи условий проверить personalMovieDB.count, 
и если он меньше 10 - вывести сообщение "Просмотрено довольно мало фильмов", 
если от 10 до 30 - "Вы классический зритель", а если больше - "Вы киноман".
А если не подошло ни к одному варианту - "Произошла ошибка" */

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

// Проверить, чтобы все работало без ошибок в консоли */
console.log(personalMovieDB);

// 4) Потренироваться и переписать цикл еще двумя способами * /

let i = 1;
while (i <= numberOfFilms) {
    const nameOfFilm = prompt(`Укажите название просмотренного фильма ${i}?`, '');
    if (nameOfFilm == '' || nameOfFilm.length > 50) {
        console.log('Название фильма не может быть пустым или длинее 50 символов!');
        i--;
        continue;
    } else {
        const rateOfFilm = prompt('На сколько оцените его?');
        personalMovieDB.movies[nameOfFilm] = rateOfFilm;
    }
    i++;
}

do {
    const nameOfFilm = prompt(`Укажите название просмотренного фильма ${i}?`, '');
    if (nameOfFilm == '' || nameOfFilm.length > 50) {
        console.log('Название фильма не может быть пустым или длинее 50 символов!');
        i--;
        continue;
    } else {
        const rateOfFilm = prompt('На сколько оцените его?');
        personalMovieDB.movies[nameOfFilm] = rateOfFilm;
    }
    i++;
}
while (i <= numberOfFilms);


for (let i = 1; i <= numberOfFilms; i++) {
    const nameOfFilm = prompt(`Укажите название просмотренного фильма ${i}?`, '');
    if (nameOfFilm == '' || nameOfFilm.length > 50) {
        console.log('Название фильма не может быть пустым или длинее 50 символов!');
        i--;
        continue;
    } else {
        const rateOfFilm = prompt('На сколько оцените его?');
        personalMovieDB.movies[nameOfFilm] = rateOfFilm;
    }
}