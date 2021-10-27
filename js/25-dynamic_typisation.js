// Динамическая типизация

// 1. В строку
console.log(typeof (String(null)));

let num = 5;
console.log(typeof (num + ''));
console.log('https://vk.com/catalog/' + num);

const fontSize = 15 + 'px';
console.log('fontsize: ' + fontSize + ";");

// 2. В число
console.log(typeof (Number('5')));
console.log(typeof (+'5'));
console.log(typeof (parseInt('fontsize: 15px;', 10)));

// 3. В логическую переменную

function toggle(switcher) {
    if (switcher) {
        console.log('Working....');
    }
}

toggle(1);