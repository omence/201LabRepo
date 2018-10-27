'use strict';

var score = 0;
var userNme = prompt('what is your name?');

// inital instructions to user
var initialAlert = alert('PLEASE ANSWER QUESTIONS WITH (YES or NO )');

function question(varible1, varible2) {
  if (varible1 === varible2) {
    alert('correct');
    score++;
  } else {
    alert('wrong');
  }
  console.log(' ');
  return quesOneAns;
}
var quesOne = prompt('Was I born on mars?').toUpperCase();
var quesOneAns = 'NO';
question(quesOne, quesOneAns);

var quesTwo = prompt('Am I just a tad bit over weight?').toUpperCase();
var quesTwoAns = 'YES';
question(quesTwo, quesTwoAns);

var quesThree = prompt('Do I exist?').toUpperCase();
var quesThreeAns = 'YES';
question(quesThree, quesThreeAns);

var quesFour = prompt('DO I have an age?').toUpperCase();
var quesFourAns = 'YES';
question(quesFour, quesFourAns);

var quesFive = prompt('Are my toes growing from my face?').toUpperCase();
var quesFiveAns = 'NO';
question(quesFive, quesFiveAns);

function guessNumberQuestion() {
  var ansSix = '5';
  var quesSix = prompt('What is my favoriate number between one and ten?');
  if (quesSix === ansSix) {
    alert('correct');
    score++;
  } else if (quesSix !== ansSix) {
    var counter = 0;
    while (counter < 3 && quesSix !== ansSix) {
      quesSix = prompt('no try again');
      counter++;
    }
    if (quesSix === ansSix) {
      alert('correct');
      score++;
    }
  }
}

guessNumberQuestion();

function guessCityQuestion() {
  var answers = ['SEATTLE', 'FRESNO', 'VISALIA', 'HANFORD'];
  var quesSeven = prompt(
    'Guess one of 4 cities I have lived in.'
  ).toUpperCase();
  var answer = false;
  var turnCount = 5;

  while (turnCount && answer === false) {
    for (var i = 0; i < answers.length; i++) {
      if (answers[i] === quesSeven) {
        answer = true;
      }
      if (answer) {
        alert('correct');
        score++;
        break;
      } else {
        quesSeven = prompt('No please try again').toUpperCase();
        turnCount--;
      }
    }
  }
}

guessCityQuestion();

var scoreDisp = alert('You scored ' + score + ' good job ' + userNme);
