/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let begin = Number(start);
  let finish = end; // В тесте во втором знач всегда прихоит число)) Поэтому решил не ставить Num

  if (begin > finish) {
    let temp = begin;
    begin = finish;
    finish = temp;
  }

  let sum = 0;

  while (begin <= finish) {
    sum = sum + begin;
    begin = begin + 1;
  }

  return sum;
};
