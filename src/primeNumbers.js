/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function (from, to) {
    const result = [];

    for (let num = from; num <= to && num <= highestNumber; num++) {
      if (boo(num)) {
        result.push(num);
      }
    }

    return result;
  };

  function boo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
};
