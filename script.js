'use strict';

const str = prompt('Введите значение');

const changeString = function(variable) {
    if (typeof variable === 'string') {
        variable = variable.trim();
        if (variable.length > 30) {
            variable = variable.slice(0, 30) + '...';
        }
        console.log(variable);

    } else {
        console.log('В качестве аргумента передана не строка');
    }
};

changeString (str);