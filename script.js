const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const boxes = document.querySelectorAll('.box');
const playerScore0 = document.querySelector('.player_score--0');
const playerScore1 = document.querySelector('.player_score--1');

// Displaying X and O on the click

const winningConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 9],
  [1, 2, 3],
];

let activePlayer = 'X';

const player1 = 'X';
const player2 = 'O';

let player1Elements = [];
let player2Elements = [];

// Function swap the player
const switchingPlayer = function () {
  activePlayer = activePlayer === 'X' ? 'O' : 'X';
};

boxes.forEach(box => {
  box.addEventListener('click', function (e) {
    if (activePlayer === player1) {
      box.textContent = player1;

      let id1 = box.getAttribute('id');
      player1Elements.push(id1);

      console.log(player1Elements);
      switchingPlayer();
    } else {
      box.textContent = player2;
      let id2 = box.getAttribute('id');
      console.log(id2);
      switchingPlayer();
    }

    let id = box.getAttribute('id');
  });
});

//
