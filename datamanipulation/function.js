/**
 *
 * @param {number[]} numArr
 */
function sumOfInts(numArr) {
  return numArr.reduce((prev, current) => {
    let currentNumber = parseInt(current);
    currentNumber = parseInt(currentNumber);
    if (isNaN(currentNumber)) {
      currentNumber = 0;
    }
    return prev + currentNumber;
  }, 0);
}

console.log(sumOfInts([1, 2, 3]));
