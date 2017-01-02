'use strict'

function sum(){
   var result = 0,
       i = 0,
       len = arguments.length;

   while (i < len) {
       result += arguments[i];
       i++;
   }
   return result;
}

console.log(sum(2,8));
console.log(sum(10,100,1000,10000));
console.log(sum(undefined));
console.log(sum(-2,10));
