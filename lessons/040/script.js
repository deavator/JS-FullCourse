const now = new Date();
// const now = new Date(2021, 10, 7, 20);
const fullYear = now.getFullYear(); // получить год
const month = now.getMonth(); // получить месяц
const date = now.getDate(); // получить число (день)
const day = now.getDay(); // получить день недели
const time = now.getTime('1974-05-30T17:00:00.737Z'); // получить число (день)

// Тренеруюсь с датами. Получить дату будущего дня
const dayGap = 3; // дедлайн через 3 дня
const futureDay = now + (dayGap * 24 * 3600 * 1000); // сегодня + 3 дня вперед
console.log(futureDay);

let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let finish = new Date();
console.log(`Скрипт отработал за ${finish - start} млс`);