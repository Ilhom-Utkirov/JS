'use strict';
// import not works in nodejs
const dayjs = require('dayjs'); //not works by default in node.js


// let wow = dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009);
// print(wow)

// month not correct $M starts from 0
// one hour before $H start from UTC time Italy 1 hour before
const currentDate = dayjs('2023-03-07');
console.log(`current date = ${currentDate}`);

//why to the end score? 
// text, author,date (score null)then  date is written to the score
function Answer(text, name, date, score = 0){
    this.text = text;
    this.name = name;
    this.score = score;
    this.date = dayjs(date);
}

function Question(text, name, date){
    this.text = text;
    this.name = name;
    this.date = dayjs(date);
   this.answers = [];

   this.add = (answer) => {
    this.answers.push(answer);
   }

   this.findAll = (name)=>{
    const foundAnswer =[];
    for(const a of this.answers){
        if(a.name ===name)
            this.foundAnswer.push(a);
    }

    return foundAnswer;
   }

}

const question = new Question('is js better?', 'Luigi', '2023-02-97');

const firstanswer = new Answer('Yes', 'Luca', '2023-02-15', 4);
const secondanswer = new Answer('Yes', 'Luca', '2023-02-15');
const fourthanswer = new Answer('Never', 'Luca', '2023-02-15', -10);
const thirdanswer = new Answer('No in millin year', 'Luigi', '2023-02-15');

question.add(firstanswer);
question.add(secondanswer);
question.add(thirdanswer);
question.add(fourthanswer);

console.log(question);
console.log(firstanswer);