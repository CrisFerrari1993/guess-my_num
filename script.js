'use strict';
// variables declaration (for guess num, score hightscore, message);
let secretNum = Math.floor(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);
let message = document.querySelector('.message');

// at the click run this function
document.querySelector('.check').addEventListener('click', function () {
  // variable that represent user choice.
  let userChoice = Number(document.querySelector('.guess').value);

  // if user guess fill 0 or nothing into num input field
  if (!userChoice) {
    message.textContent = '⛔ No number!';
    // if user hit right num
  } else if (userChoice === secretNum) {
    // if score > highscore, sign new highscore, else highscore still the same
    if (highscore < score) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
    message.textContent = 'You win!🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;
    // if the userChoice is less than secretNum do this;
  } else if (userChoice > secretNum) {
    //if the score is > 1 stll count...
    if (score > 1) {
      message.textContent = ' 📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
      // if the score reach the value of one and you can't guess in the next try... game over
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
      message.textContent = 'Game over!';
    }
    //if the score is < 1 stll count...
  } else if (userChoice < secretNum) {
    if (score > 1) {
      message.textContent = ' 📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
      // if the score reach the value of one and you can't guess in the next try... game over
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
      message.textContent = 'Game over!';
    }
  }
});
// if user click again button, repeat the game and set default values, even the css
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = 0;
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNum = Math.floor(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
});
