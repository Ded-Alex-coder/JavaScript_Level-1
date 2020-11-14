// Раота с переменными:

let tCelsius = prompt('Сколько сейчас градусов по Цельсию', '');
const tFahrenheit = (9/5) * tCelsius + 32;
alert ('Это равняется ' + tFahrenheit + ' по Фаренгейту');

const name = 'Василий';
let admin = 'null';

admin = name;
alert ('admin - ' + admin);

// Работа с функцией: 

function showAdmin () {
    admin = 'Василий';
    let message = 'admin - ' + admin;
    console.log(message);
}
showAdmin ();


function sum (a, b) {
    console.log ('JS-выражение ' + (a+b));
}
sum (1000, '108');

function showFahrenheit () {    
    const tFahrenheit = (9/5) * tCelsius + 32;
    console.log ('Температура ' + tFahrenheit + ' по Фаренгейту')
}
showFahrenheit ()