let num = 266219;
let result = 1;
let temp;

while (num) {
    temp = num % 10;
    result *= temp;
    num = (num - temp) / 10;
}

console.log (result);
result = result ** 3;
console.log (String(result).slice(0,2));
