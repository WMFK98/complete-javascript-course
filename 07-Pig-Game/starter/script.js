'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scoreP0El = document.getElementById('score--0');
const scoreP1El = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');

let activePlayer, currentScore, scorePlayer, playing;

const innit = function () {
  playing = true;
  activePlayer = 0;
  currentScore = 0;
  scorePlayer = [0, 0];

  current0.textContent = 0;
  current1.textContent = 0;
  scoreP0El.textContent = 0;
  scoreP1El.textContent = 0;

  diceEl.classList.add('hidden');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.add('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active'); // toggle ถ้ามี class นั่น จะลบ แต่ถ้าไม่มีจะเพิ่ม
  player1.classList.toggle('player--active');
};

innit();

btnRoll.addEventListener('click', function () {
  if (playing) {
    const pointDice = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${pointDice}.png`;
    console.log(pointDice);

    if (pointDice !== 1) {
      currentScore += pointDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; //ถ้าใสตัวนี้มันจะเรียกให้อัติโนมัติไม่ต้องเติม text
    } else {
      switchPlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    scorePlayer[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scorePlayer[activePlayer];
    if (scorePlayer[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  innit();
});
