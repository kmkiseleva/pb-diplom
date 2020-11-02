let players = ['x', 'o'];
let activePlayer;
let gameCounter = 0;
let board;

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  activePlayer = 0;  
  renderBoard(board);
};

function check() {
  let marker = players[activePlayer];

  for (let i = 0; i < 3; i++) {
    if (board[i][0] == marker && board[i][1] == marker && board[i][2] == marker) {
      showWinner(activePlayer);
      }
  }

  for (let k = 0; k < 3; k++) {
    if (board[0][k] == marker && board[1][k] == marker && board[2][k] == marker) {
      showWinner(activePlayer);
      }
  }

  if (board[0][0] == marker && board[1][1] == marker && board[2][2] == marker ||
      board[2][0] == marker && board[1][1] == marker && board[0][2] == marker) {
    showWinner(activePlayer);
    }
}

function click(row,col) {
  if (gameCounter % 2 === 0) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }

  board[row][col] = players[activePlayer];
  renderBoard(board);
  check();
  gameCounter++;
};