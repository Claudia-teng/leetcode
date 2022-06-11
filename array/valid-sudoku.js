// version 1

var isValidSudoku = function(board) {
  let map = {};
  
  // row
  for (let row=0; row<9; row++) {
    for (let col=0; col<9; col++) {
      let num = board[row][col];
      if (num === '.') continue;
      if (!map[num]) {
        map[num] = true;
      } else {
        return false;
      }
    }
    map = {};
  }
  
  // col
  for (let col=0; col<9; col++) {
    for (let row=0; row<9; row++) {
      let num = board[row][col];
      if (num === '.') continue;
      if (!map[num]) {
        map[num] = true;
      } else {
        return false;
      }
    }
    map = {};
  }
  
  // block
  let block = [];
  for (let i=0; i<9; i++) {
    for (let row=0; row<3; row++) {
      for (let col=0; col<3; col++) {
        let num = board[Math.floor(i/3)*3+row][(i%3)*3+col];
        if (num === '.') continue;
        if (!block.includes(num)) {
          block.push(num);
        } else {
          return false;
        }   
      }
    }
    block = [];
  }
  return true;
};

// version 2

var isValidSudoku = function(board) {
  // create an empty set for each row/col/square
  const rowRules = new Array(9).fill().map(() => new Set());
  const colRules = new Array(9).fill().map(() => new Set());
  const mixedRules = new Array(9).fill().map(() => new Set());
  
  // iterate through each cell on the board
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const curr = board[row][col];
      
      // some tricky math to get the index(0-8) of the 3x3 squares
      const mixedIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (curr === ".") continue  // ignore dots
      
      // if the current number already exists in the set, board is invalid
      const a = rowRules[row].has(curr);
      const b = colRules[col].has(curr);
      const c = mixedRules[mixedIdx].has(curr);
      if (a || b || c) return false;
      
      // add the number to the appropriate set
      rowRules[row].add(curr);
      colRules[col].add(curr);
      mixedRules[mixedIdx].add(curr);
    }
  }
  
  // all checks out
  return true;
};