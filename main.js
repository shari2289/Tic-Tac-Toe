/*----- constants -----*/
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/*----- app's state (variables) -----*/
let board;
let turn = X;
let winner;
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll("#board div"));
/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleTurn);
/*----- functions -----*/
function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  render();

  function render() {
    board.forEach(function (mark, index) {
      squares[index].textContent = mark;
    });
    messages.textContent =
      win === "P"
        ? `That's a tie, that's so not Fetch!`
        : win
        ? `${win} Won! You GO Glen Coco!`
        : `It's ${turn}'s turn!`;
  }

  function getWinner() {
    let winner = null;
    winningCombos.forEach(function (combo, index) {
      if (
        board[combo[0]] &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[0]] === board[combo[2]]
      )
        winner = board[combo[0]];
    });
    return winner ? winner : board.includes("") ? null : "P";
  }

  function getWinner() {
    let winner = null;
    winningCombos.forEach(function (combo, index) {
      if (
        board[combo[0]] &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[0]] === board[combo[2]]
      )
        winner = board[combo[0]];
    });
    return winner ? winner : board.includes("") ? null : "P";
  }

  function handleTurn() {
    let idx = squares.findIndex(function (box) {
      return box === event.target;
    });
    board[idx] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();
    render();
  }
}

init();
