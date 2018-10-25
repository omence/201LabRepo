'use strict';

var score = 0;
var userNme = prompt('what is your name?');

// inital instructions to user
var initialAlert = alert(
  'PLEASE ANSWER QUESTIONS WITH (y, Y, yes, YES or n, N, no, NO )'
);

function question( varible1, varible2) {
if ( varible1 === varible2 ){
 alert( 'correct'); score++; } 
else { alert ('wrong') }
console.log(' ')
return quesOneAns;
}
var quesOne = prompt('Was I born on mars?').toUpperCase();
var quesOneAns = 'N'
question( quesOne, quesOneAns);


var quesTwo = prompt('Am I just a tad bit over weight?').toUpperCase();
var quesTwoAns = 'Y'
question( quesTwo, quesTwoAns);


var quesThree = prompt('Do I exist?').toUpperCase();
var quesThreeAns = 'Y'
question( quesThree, quesThreeAns);

// var quesFour = prompt('DO I have an age?').toUpperCase();

// if (quesFour === 'Y' || quesFour === 'YES') {
//   alert('correct');
//   score++;
// } else {
//   alert('Wrong');
// }

// console.log('q1 should return undefined', quesFive);
// var quesFive = prompt('Are my toes growing from my face?').toUpperCase();

// if (quesFive === 'N' || quesFive === 'NO') {
//   alert('correct');
//   score++;
// } else {
//   alert('Wrong');
// }

// var ansSix = '5';
// var quesSix = prompt('What is my favoriate number between one and ten?');
// if (quesSix === ansSix) {
//   alert('correct');
//   score++;
// } else {
//   var counter = 0;
//   while (counter < 3 && quesSix !== ansSix)
//     prompt('no try again');
//       counter++;
//     } if (quesSix === ansSix) {alert('correct');
//       score++;
//     }
  


// var turnsLeft = 6;
// var stop = true;
// while (turnsLeft > 0) {
//   var answers = ['seattle', 'fresno', 'visalia', 'hanford'];
//   var quesSeven = prompt('Guess one of 4 cities I have lived in.');
//   for (var i = 0; i < answers.length; i++) {
//     if (answers[i] === quesSeven && stop === true) {
//       alert('correct');
//       score++;
//       break;
//       stop = false;
//     } else {
//       quesSeven = prompt('wrong try again');
//       turnsLeft--;
//     }
//   }
// }

// var scoreDisp = alert('You scored' + score + 'good job' + userNme);
