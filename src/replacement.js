/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num < 0) {
      num = -num;
    }

    let length = num.toString().length;

    if (length === 1) {
      result.push(1);
    } else if (length === 2) {
      result.push(2);
    } else if (length === 3) {
      result.push(3);
    } else {
      result.push(4);
    }
  }

  return result;
};
