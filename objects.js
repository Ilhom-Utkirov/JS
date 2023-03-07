'use strict';

const movie = {
    title: 'Inception',
    'title of the movie':'Inception as string', //bevare I cannot use dot notation
    genre: 'sci-fi',
    duration: 180
}
console.log(movie);

let genre = 'genre';
console.log(`access variable and put content to the array== ${movie[genre]}`);

console.log(movie['genre']);
console.log(movie['title of the movie']);
console.log(movie.genre);

// delte properties
delete movie.genre;
console.log(movie.genre); //undefined

for (const prop in movie){
    console.log(`${prop} is ${movie[prop]}`);
}

console.log(movie.keys);
console.log(movie.entries);

/* merge and duplicate objects  */
const anotherMovie1 = movie; //no copy but assignment
const anotherMovie = Object.assign({}, movie); //assign(target, source)

Object.assign(movie, {budget:'1 mln USD'}); //assign 2nd object to the first one NO RETURN!
console.log(movie);

const improvedMovie = Object.assign({}, movie, {cast : '...'}); //new object
console.log(improvedMovie);

const inceptionAgain = {... movie};

