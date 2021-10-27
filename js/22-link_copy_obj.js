// Урок 22. Передача по ссылке или по значению
'use strict';

const obj = {
    a: 1,
    b: 5,
    c: {
        d: 4,
        n: null
    }
};

function copy(mainObj) {
    let key;
    const copyObj = {};

    for (key in mainObj) {
        copyObj[key] = mainObj[key];
    }

    return copyObj;
}


const newObj = copy(obj);

newObj.c.d = 10;

// console.log(newObj);

const addObj = {
    e: 1,
    f: 5,
};

const addedObj = Object.assign(obj, addObj);
console.log(addedObj);

const clone = Object.assign({}, addedObj);
clone.f = 0;

console.log(clone);

const iniArray = [1, 4, 5];
const modArray = iniArray.slice();

const
    video = [
        'youtube',
        'vimeo ',
        'rutube'
    ],

    blogs = [
        'wordpress',
        'livejournal',
        'blogger'
    ],

    internet = [
        ...video,
        ...blogs,
        'vk',
        'facebook'
    ];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}

const numbers = [2, 5, 9];

log(...numbers);

const arr = ['a', 'b'];
const newArr = [...arr];

console.log(newArr);

const letters = {
    a: "a",
    b: "b"
};

const newLetters = {
    ...letters
};