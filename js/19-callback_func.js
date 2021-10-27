// Урок 19.
// Callback функция - позволять быть уверенным, что одна функция не начнется раньше другой

'use strict';

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log("Я прошел урок!");
}

learnJS("JavaScript", done);