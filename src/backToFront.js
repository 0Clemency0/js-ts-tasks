/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */

module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (symbolsCount === 0 || symbolsCount > str.length) {
    return str;
  }
  // const symbol = str.slice(-1 * symbolsCount)

  let part = '';
  let i = str.length - symbolsCount;
  while (i < str.length) {
    part = part + str[i];
    i = i + 1;
  }

  let result = part + str + part;
  return result;
};
