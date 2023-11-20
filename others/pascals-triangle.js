// version 1
// add 0 at the end
// add 0 at the front
// plus this two array

var generate = function (numRows) {
  let first = [1];
  let triangle = [];
  triangle.push(first);

  if (numRows === 1) return triangle;

  while (numRows > 1) {
    let lastNumArr = triangle[triangle.length - 1];
    let arrTimes10 = [...lastNumArr, 0];
    let arrPlus = [0, ...lastNumArr];
    let newNumArr = [];

    for (let i = 0; i < arrTimes10.length; i++) {
      newNumArr.push(arrTimes10[i] + arrPlus[i]);
    }

    triangle.push(newNumArr);
    numRows--;
  }

  return triangle;
};

// version 2
// add 0 both at the front & end
// add two pairs each time

var generate = function (numRows) {
  let first = [1];
  let triangle = [];
  triangle.push(first);

  if (numRows === 1) return triangle;

  while (numRows > 1) {
    let lastNumArr = triangle[triangle.length - 1];
    let addZerosArr = [0, ...lastNumArr, 0];
    let newNumArr = [];

    for (let i = 1; i < addZerosArr.length; i++) {
      newNumArr.push(addZerosArr[i - 1] + addZerosArr[i]);
    }

    triangle.push(newNumArr);
    numRows--;
  }

  return triangle;
};
