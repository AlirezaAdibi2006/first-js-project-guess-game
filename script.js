'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ عددی وارد نکردید!';

    //When players win!
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'درست بود آفریننن🤌🏻🥳';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor =
      'linear-gradient(135deg, #00ffbf38 0%, #003692ff 50%, #0a0a0a 100%);';

    document.querySelector('.number').style.width = '30rem';
    if(highscore < score){
    highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    /// when guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈خیلی زیاده!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥متاسفانه باختی!';
      document.querySelector('.score').textContent = score - 1;
    }

    /// when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 خیلی کمه!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥متاسفانه باختی!';
      document.querySelector('.score').textContent = score - 1;
    }
  }
});
// when click on again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'شروع کنید به حدس زدن...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //Style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
});
