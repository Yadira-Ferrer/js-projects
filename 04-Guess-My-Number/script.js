'use strict';

const getRandomNumber = max => Math.trunc(Math.random() * max) + 1;

const minValue = 1;
const maxValue = 20;

let secretNumber = getRandomNumber(maxValue);
let score = 20;
let highScore = 0;

//* Set min and max value of input
let scoreSpan = document.querySelector('.score');
let inputGuess = document.querySelector('.guess');
inputGuess.setAttribute('min', minValue);
inputGuess.setAttribute('max', maxValue);

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const changeNumber = (number, width) => {
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').textContent = number;
};

const changeBodyColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

//* Check button 'click' event
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);

  //? When there is no input
  if (!guessValue) {
    displayMessage('⛔ No Number!');
    //? When player wins
  } else if (guessValue === secretNumber) {
    displayMessage('🎉 Correct Number!!!');
    changeNumber(secretNumber, '30rem');
    changeBodyColor('#60b347');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //? When guess value is different
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessValue > secretNumber ? '⬆️ Too high...' : '⬇️ Too low...'
      );
      score--;
      scoreSpan.textContent = score;
    } else {
      displayMessage('☹️ You lost the game!');
      scoreSpan.textContent = 0;
    }
  }
});

//* Again button 'click' event
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = getRandomNumber(maxValue);
  inputGuess.value = '';
  scoreSpan.textContent = score;
  changeNumber('?', '15rem');
  displayMessage('🤔 Start guessing...');
  changeBodyColor('#222');
});
