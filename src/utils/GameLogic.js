export const checkResult = board => {
  const result =
    checkVertical(board) ||
    checkHorizontal(board) ||
    checkDiagonalRight(board) ||
    checkDiagonalLeft(board) ||
    checkDraw(board);
  return result && result;
};

const checkVertical = board => {
  for (let row = 3; row < 6; ++row) {
    for (let col = 0; col < 7; ++col) {
      if (board[row][col]) {
        if (
          board[row][col] === board[row - 1][col] &&
          board[row][col] === board[row - 2][col] &&
          board[row][col] === board[row - 3][col]
        ) {
          return board[row][col];
        }
      }
    }
  }
};

const checkHorizontal = board => {
  for (let row = 0; row < 6; ++row) {
    for (let col = 0; col < 4; ++col) {
      if (board[row][col]) {
        if (
          board[row][col] === board[row][col + 1] &&
          board[row][col] === board[row][col + 2] &&
          board[row][col] === board[row][col + 3]
        ) {
          return board[row][col];
        }
      }
    }
  }
};

const checkDiagonalRight = board => {
  for (let row = 3; row < 6; ++row) {
    for (let col = 0; col < 4; ++col) {
      if (board[row][col]) {
        if (
          board[row][col] === board[row - 1][col + 1] &&
          board[row][col] === board[row - 2][col + 2] &&
          board[row][col] === board[row - 3][col + 3]
        ) {
          return board[row][col];
        }
      }
    }
  }
};

const checkDiagonalLeft = board => {
  for (let row = 3; row < 6; ++row) {
    for (let col = 3; col < 7; ++col) {
      if (board[row][col]) {
        if (
          board[row][col] === board[row - 1][col - 1] &&
          board[row][col] === board[row - 2][col - 2] &&
          board[row][col] === board[row - 3][col - 3]
        ) {
          return board[row][col];
        }
      }
    }
  }
};

const checkDraw = board => {
  for (let row = 0; row < 6; ++row) {
    for (let col = 0; col < 7; ++col) {
      if (board[row][col] === null) {
        return null;
      }
    }
  }
  return "Tie";
};
