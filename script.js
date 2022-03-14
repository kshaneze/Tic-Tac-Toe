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

        if (activePlayer == player1) {
          player1Score++;
          playerScore0.textContent = player1Score;
        }

        if (activePlayer == player2) {
          player2Score++;
          playerScore1.textContent = player2Score;
        }

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
      // If we are done with the game (won or draw) or clicked box is already filled with X or O (is not empty) nothing will happend
      if (!playing || boxIndexValue[boxIndex] != '') {
        return;
      } else {
        // Add X or O to the array of boxIndexValues with specific boxIndex(id) = ActivePlayer (x or o)
        boxIndexValue[boxIndex] = activePlayer;
        // Display content of activePlayer to clicked box
        target.innerHTML = activePlayer;
        // Check for winner
        checkForWinner();
        // If there is no winner, switch player
        switchingPlayer();
      }
    }
  });
});

const restart = document.querySelector('.btn__restart-everything');
const newGame = document.querySelector('.btn__restart-game');

// Restart the game, but keep scores updated;
restart.addEventListener('click', function () {
  boxes.forEach(box => {
    box.innerHTML = '';
  });
  boxIndexValue = new Array(9).fill('');
  activePlayer = 'X';
  playing = true;
});

// Restart the game, and set every score to 0;
newGame.addEventListener('click', function () {
  boxes.forEach(box => {
    box.innerHTML = '';
  });

  player1Score = 0;
  player2Score = 0;

  playerScore0.textContent = 0;
  playerScore1.textContent = 0;

  boxIndexValue = new Array(9).fill('');
  activePlayer = 'X';
  playing = true;
});
