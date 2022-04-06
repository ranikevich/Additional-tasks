'use strict';

let str;
let num;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
    do {
    str = prompt('Введите число');
} while (!isNumber(str));
    if (str) {
    str = str.trim();
    str = +str;
    console.log(str, typeof(str));
    } 
};

asking();