/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const uniqueArr = [];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let j;
    for (j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        break;
      }
    }

    if (j === uniqueArr.length) {
      uniqueArr.push(arr[i]);
      counter++;
    }
  }

  return counter;
};
