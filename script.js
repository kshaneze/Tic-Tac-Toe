const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const boxes = document.querySelectorAll('.box');
const playerScore0 = document.querySelector('.player_score--0');
const playerScore1 = document.querySelector('.player_score--1');
const message = document.querySelector('.message');

// Every winning condition
let winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let boxIndexValue = new Array(9).fill('');
console.log(boxIndexValue);
let activePlayer = 'X';

const player1 = 'X';
const player2 = 'O';

let player1Score = 0;
let player2Score = 0;

let playing = true;

// Function switch the player
const switchingPlayer = function () {
  activePlayer = activePlayer === 'X' ? 'O' : 'X';
  message.textContent = `${activePlayer}-turns`;
};

const winnerMessage = () => alert(`${activePlayer} won`);

const checkWhoWon = function () {
  if (activePlayer == player1) {
    player1Score++;
  } else {
    player2Score++;
  }
};

const checkForWinner = function () {
  if (playing) {
    for (let i = 0; i <= 7; i++) {
      const winningCondition = winningConditions[i];
      if (
        boxIndexValue[winningCondition[0]] == '' ||
        boxIndexValue[winningCondition[1]] == '' ||
        boxIndexValue[winningCondition[2]] == ''
      ) {
        continue;
      }
      if (
        boxIndexValue[winningCondition[0]] ==
          boxIndexValue[winningCondition[1]] &&
        boxIndexValue[winningCondition[1]] == boxIndexValue[winningCondition[2]]
      ) {
        // winner message
        winnerMessage();
        checkWhoWon();
        playing = false;
        break;
      }
    }

    if (!boxIndexValue.includes('') && playing) {
      alert('draw');
    }
  }
};

// Displaying X and O on the click
boxes.forEach(box => {
  box.addEventListener('click', function (e) {
    let target = e.target;
    if (playing) {
      let boxIndex = box.getAttribute('id');

      if (!playing || boxIndexValue[boxIndex] != '') {
        return;
      } else {
        boxIndexValue[boxIndex] = activePlayer;
        target.innerHTML = activePlayer;
        checkForWinner();
        switchingPlayer();
      }
    }
  });
});
console.log(player1Score);
