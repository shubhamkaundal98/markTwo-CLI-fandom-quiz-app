var readlineSync = require('readline-sync');
const chalk = require("chalk");

var score =0;
var userName = readlineSync.question("What is your Name?");

console.log(
  chalk.yellowBright(
    `Hello ${userName}, Enter a / b / c to answer the questions. For each right answer, you'll get 1 point.\n`
  )
);

console.log("Welcome "+userName+ " Are you Dragon Ball Z fan?");

function play(question,answer){

var userAnswer = readlineSync.question(question);

if(userAnswer.toUpperCase() === answer.toUpperCase()){

console.log(chalk.green("You're right!"));
score++;

}
else {
  console.log(chalk.red("You're Wrong!"));
}
console.log("Current Score : ",score);
console.log("-----------")
}

var questions = [{
  question: "What race is Goku? \na.Android \nb.Saiyan \nc.Earthling ",
  answer: "b",
  },
  {
    question:"Who is Goku's brother?\na.Vegeta \nb.Gohan \nc.Raditz ",
    answer:"c"
  },
  {
    question:"Where does Goku live?\na.Planet Vegeta \nb.Earth \nc.Alpha ",
    answer:"b"
  },
  {
    question:"Who is Goku's eldest son?\na.Gohan \nb.Piccolo \nc.Krillin ",answer:"a"
  },
  {
    question:"Who is Goku's wife?\na.Pan \nb.Bulma \nc.Chi-Chi ",answer:"c"
  },]

for(var i=0;i<questions.length;i++){

  var currenQuestion = questions[i];

  play(currenQuestion.question,currenQuestion.answer);

}
console.log("Your final Score is: ",score);