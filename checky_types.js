'use strict';

// strange behaviours of JS

const type = typeof NaN;
console.log('Nan is a ' + type); //bool --- No its type is number
console.log(`Nan === NaN ? ${NaN === NaN}\n`); //true No false. why becase NaN is not equal into anything. even itself
console.log(`Nan == NaN ? ${NaN == NaN}\n`) //false;
console.log(`undefined === undefined ? ${undefined == undefined}\n`); //true

console.log(`null == false ${null == false}`); //true No false, null othing to be converted
console.log(`null == null? ${null == null}\n`); //true


console.log(`'' == false? ${'' == false}`); // true
console.log(`3 == true? ${3 == true}\n`); //true no false true is converted to 1 so 3 <> 1
console.log(`0 == -0? ${0 == -0}\n`); // true

console.log(`true + true = ${true + true}`); // 2 true converted to 1 
console.log(`true !== 1? ${true !== 1}`); // true no convertion

console.log(`5 + '10' = ${5 + '10'}\n`); //  510 string

console.log(`1 < 2 < 3? ${1 < 2 < 3}`); // true asc
console.log(`3 > 2 > 1? ${3 > 2 > 1}\n`); // false desc

console.log(`0.2 + 0.1 === 0.3? ${0.2 + 0.1 === 0.3}\n`); // False 0.30000004

console.log('b' + 'a' + (+ 'a') + 'a'); // baNaNa


