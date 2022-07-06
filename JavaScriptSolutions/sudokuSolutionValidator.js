function validSolution(board){
  // Check for any zeros in solution
  if (containsZeros(board)) {
    return false;
  }
  // check if rows contain 1-9
  // and cols contain 1-9
  // and subgrids contain 1-9
  if (rowsValid(board) && colsValid(board) && subGridsValid(board)) {
    return true;
  } else {
    return false;
  }
}

function containsZeros(board) {
  for (let i=0; i<board.length; i++) {
    if (board[i].includes(0)) {
      return true;
    }
  }
  return false;
}

// check if rows contain 1-9
function rowsValid(board) {
  // Grabs each row
  for (let row=0; row<board.length; row++) {
    // puts current row into an array
    let rowArray = board[row].map(x => x);
    // sort the array
    rowArray.sort();
    // check if sorted array equals 1,2,3,4,5,6,7,8,9
    for (let col=0; col<rowArray.length; col++) {
      if (rowArray[col] != col+1) {
        return false;
      }
    }
  }
  return true;
}

// check is cols contain 1-9
function colsValid(board) {
  // Grab each column
  for (let col=0; col<board.length; col++) {
    let colArray = [];
    // Put current column into an array
    for (let row=0; row<board.length; row++) {
      colArray.push(board[row][col]);
    }
    // sort the array
    colArray = colArray.sort();
    // check if array equals 1,2,3,4,5,6,7,8,9
    for (let i=0; i<colArray.length; i++) {
      if (colArray[i] != i+1) {
        return false;
      }
    }
  }
  return true;
}

// check if each 3x3 grid contain 1,2,3,4,5,6,7,8,9
function subGridsValid(board) {
  let rowStart = 0;
  let colStart = 0;
  // It starts are position [0][0]
  while (rowStart < board.length) {
    while (colStart < board.length) {
      let subGrid = [];
       // Starting with the first 3 rows and 3 cols, put values into an array
      for (let row=rowStart; row<rowStart+3; row++) {
        for (let col=colStart; col<colStart+3; col++) {
          subGrid.push(board[row][col]);
        }
      }
      // sort array
      subGrid.sort();
      // check if the array equals 1,2,3,4,5,6,7,8,9
      for (let i=0; i<subGrid.length; i++) {
        if (subGrid[i] != i+1) {
          return false;
        }
      }
      // move down 3 columns
      colStart += 3;
    }
    // once we have reach the end the columns
    //  move down 3 rows and reset cols to 0
    rowStart += 3;
    colStart = 0;
  }
  // returns true if there were no invalid subgrids
  return true;
}
