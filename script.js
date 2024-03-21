'use strict';
// variables declaration
let secretNum = Math.floor(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);
let guessNumber = document.querySelector('.number');
// function that return a message
const showMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};
// function that return a score value
const changeScore = function (score) {
  return (document.querySelector('.score').textContent = score);
};
// function that return NewHighScore
const setHighScore = function (highscore) {
  return (document.querySelector('.highscore').textContent = highscore);
};
// function that change the body background color
const changeBodyBackgroundColor = function (color) {
  return (document.querySelector('body').style.backgroundColor = color);
};
// at the click run this function
document.querySelector('.check').addEventListener('click', function () {
  // variable that represent user choice.
  let userChoice = Number(document.querySelector('.guess').value);

  // if user guess fill 0 or nothing into num input field
  if (!userChoice || userChoice < 0 || userChoice > 20) {
    if (!userChoice) showMessage('⛔ No number!');
    else showMessage('Number must be between 0 and 20! 😊');
    // if user hit right num
  } else if (userChoice === secretNum) {
    // if score > highscore, sign new highscore, else highscore still the same
    if (highscore < score) {
      highscore = score;
    }
    // document.querySelector('.highscore').textContent = highscore;
    setHighScore(highscore);
    showMessage('You win!🎉');
    changeBodyBackgroundColor('#60b347');
    guessNumber.style.width = '30rem';
    guessNumber.textContent = secretNum;
    // if the userChoice is less than secretNum do this;
  } else if (userChoice !== secretNum) {
    //if the score is > 1 stll count...
    if (score > 1) {
      showMessage(userChoice > secretNum ? '📈 Too high' : '📉 Too low');
      score--;
      changeScore(score);
      // if the score reach the value of one and you can't guess in the next try... game over
    } else {
      score = 0;
      changeScore(score);
      showMessage('Game over...');
    }
  }
});
// if user click again button, repeat the game and set default values, even the css
document.querySelector('.again').addEventListener('click', function () {
  guessNumber.textContent = '?';
  changeBodyBackgroundColor('#222');
  document.querySelector('.guess').value = '';
  score = 20;
  changeScore(score);
  secretNum = Math.floor(Math.random() * 20) + 1;
  showMessage('Start guessing...');
});
