'use strict';

const lang = prompt('Введите значение переменной lang');
const namePerson = prompt('Введите имя');

const langArr = [];

if (lang === 'ru') {
    console.log('ПН, ВТ, СР, ЧТ, ПТ, СБ, ВС');
} else if (lang === 'en') {
    console.log('Sun, Mon, Tue, Wed, Thu, Fri, Sat');
} else {
    console.log('Неверное значение');
}

switch (true) {
    case lang === 'ru':
		console.log('ПН, ВТ, СР, ЧТ, ПТ, СБ, ВС');
        break;
    case lang === 'en':
        console.log('Sun, Mon, Tue, Wed, Thu, Fri, Sat');
        break;
    default:
            console.log('Неверное значение');
}


langArr['ru'] = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];
langArr['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];


let functionName = (namePerson === 'Артем') ? 'директор' : (namePerson === 'Александр') ? 'преподаватель' : 'студент' ;


console.log(langArr[lang]);
console.log(functionName);
  