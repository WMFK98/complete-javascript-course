'use strict';

// document.querySelector('.message').textContent = 'CorrectNumber!'; //DOM เปลี่ยน text มีคลาส message

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 22; //input ใช้กับ value

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let heightscore = 0;
let displayMassage = function (massage) {
  document.querySelector('.message').textContent = massage;
};

document.querySelector('.check').addEventListener('click', function () {
  // addEventListener สร้างเหตุการขึ้นมา เมื่อ click ,ทำเหตุกาiนั้น

  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guess) {
      // 0 = false
      displayMassage('⛔ No Number!');
    } else if (guess === number) {
      displayMassage('🎉 Correct Number!');
      correctNumber();
    } else if (guess !== number) {
      displayMassage(guess < number ? '🔽 To Low!' : '🔼 To height!');
      down();
    }
    console.log(number);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMassage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

function down() {
  score--;
  document.querySelector('.score').textContent = score;
  if (score === 0) {
    // document.querySelector('.message').textContent = '💥 You lose the game !';
    displayMassage('💥 You lose the game !');
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'red';
  }
}
function correctNumber() {
  if (score > heightscore) {
    heightscore = score;
    document.querySelector('.highscore').textContent = heightscore;
  }
  document.querySelector('.number').textContent = number;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#60b347'; //add inline in html
  document.querySelector('.number').style.width = '30rem'; //ตัวใสค่าต้องเป็น string ตลอด
}
