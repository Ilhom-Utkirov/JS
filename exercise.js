'use strict';

const dayjs = require('dayjs'); //not works by default in node.js

const currentDate = dayjs('2023-03-07');
console.log(currentDate);

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

const firstanswer = new Answer('Yes', 'Luca', '2023-02-15');
const secondanswer = new Answer('Yes', 'Luca', '2023-02-15');
const thirdanswer = new Answer('No', 'Luigi', '2023-02-15');

question.add(firstanswer);
question.add(secondanswer);
question.add(thirdanswer);

console.log(question);