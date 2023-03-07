'use strict ';
// console.log(f);

// print('hello');

// hoisting
// b22=99;
// console.log(b22);
// let b22;


let  a = 6;
let b= '6';
let e = `template literal`;
const c = 3.14;
let d = true;

var f =0; // methodology is called oisting 

console.log(b);

// converts types
if(a==b){
    console.log('a and b are equals');
}

// checks as is, by type also
if(a===b){
    console.log('a and b are equals');
}
else{
    console.log('they are not equal')
}

const c12 = [1,2,3];
c12[0] =999;
console.log(c12);