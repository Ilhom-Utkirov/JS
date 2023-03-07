'use strict';

// class Movie {
//     constructor(title, genre, duration) {
//         this.title = title;
//         this.genre = genre;
//         this.time = duration;
//         this.isLong = () => this.time > 120; //check if longer than 120 true or false

//     }
// }

function Movie(title, genre, duration){
    this.title = title;
    this.genre = genre;
    this.time = duration;
    // this.isLong = () => this.time>120; //check if longer than 120 true or false
    this.isLong = (() => this.time >= 120)(); //ins instant one it checks once and remembers status
    this.toString();
}

let inception = new Movie('Inception', 'scifi', 180);
let it = new Movie('IT', 'horror', 90);

console.log(inception);


console.log(it);
console.log(`it =${it}`);
it.time = 200; //false cz it remembers first one
// console.log(it.isLong());
it.isLong = true;
console.log(it.isLong);
console.log(it.toString);
console.log(inception instanceof Movie);