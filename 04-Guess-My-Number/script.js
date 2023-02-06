'use strict';

const minValue = 1;
const maxValue = 20;

document.querySelector('.guess').setAttribute('min', minValue);
document.querySelector('.guess').setAttribute('max', maxValue);

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);

  if (!guessValue) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else {
  }
});
