'use strict'

// always try to use const

const scores = [20, 30, -5, -1, 100, -3, 50]
const betterScores = []; //it is dynamic
let NN = 0;

// remove negatives
for(const s of scores){
    if(s>0)
    betterScores.push(s);
}

NN = scores.length - betterScores.length;

// //  remove 2 mins
// let minScore = Math.min(...betterScores);
// let index = betterScores.indexOf(minScore);
// betterScores.splice(index, 1) // in place removal

// // redeclaring gives error!
// minScore = Math.min(...betterScores);
// index = betterScores.indexOf(minScore);
// betterScores.splice(index, 1)

//not numerical but alphabetically [1,2, 10, 3] ->[1,10,2,3]
//in order to sort we need  our method for it
betterScores.sort((a,b)=>a-b); // you should give lambda function
betterScores.shift(); //in line anonymous function, lambda, arrow function remove from the begginning as it is lowest number
betterScores.shift();

//find average of the rest of the positive numbers
let avg = 0;
for(const s of betterScores){
    avg += s;
}
avg /= betterScores.length
avg = Math.round(avg) //round to the closest integer

for( let i=0; i<NN+2; i++){
    betterScores.push(avg);
}

console.log(scores);
console.log(betterScores);

