const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Make test!');
    }
};

// console.log(options.colors.bg);

// delete options.name;
// console.log(options);

// for (let key in options) {
//     console.log(key, ':', options[key]);
// }

// console.log(Object.keys(options));
// console.log(Object.keys(options).length);

// options.makeTest();

const {
    border,
    bg
} = options.colors;

console.log(border);