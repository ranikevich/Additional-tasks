'use strict';

let arr = ['35353','4562', '24563','65656','2555','54544','4551'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, 1) === '2' || arr[i].slice(0, 1) === '4'){
        console.log(arr[i]); 
    }
}

let num = 100;
for (let i = 2; i <= num; i++) {
    let check = 1;
    for (let j = 2; (j <= i / 2) && (check == 1); j++) {
       if (i % j == 0) {
           check = 0;}
      }
   if (check == 1) {
       console.log(i, ":делители этого числа 1 и ", i);}
}