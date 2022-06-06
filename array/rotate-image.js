// version 1
// not in-place solution

var rotate = function(matrix) {
  let ori = JSON.parse(JSON.stringify(matrix)); 
  for (let row = 0; row < ori.length; row++) {
    for (let col = 0; col < ori.length; col++) {
      matrix[col][ori.length - row - 1] = ori[row][col];
    }
  }
};

// version 2
// swap the num counter-clockwise

var rotate = function(matrix) {
  let left = 0;
  let right = matrix.length-1;

  while(left < right) {
    for (let i=0; i<right-left; i++) {
      let top = left;
      let bottom = right;

      // save the top left
      const topLeft = matrix[top][left+i];

      // move bottom left to top left
      matrix[top][left+i] = matrix[bottom-i][left];

      // move bottom right to bottom left 
      matrix[bottom-i][left] = matrix[bottom][right-i];

      // move top right to bottom right
      matrix[bottom][right-i] = matrix[top+i][right];

      // move top left to top right
      matrix[top+i][right] = topLeft;
    }
    right--;
    left++
  }
};


