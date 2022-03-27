let num = 266219;
let mult;
let temp;

while (num) {
    temp = num % 10;
    console.log (temp);
    mult *= temp;
    console.log (typeof mult);
    console.log (mult);
    num = (num - temp) / 10;
}

let result = mult ** 3;

console.log (typeof num);
console.log (mult);
console.log (result.substring(0,2));
