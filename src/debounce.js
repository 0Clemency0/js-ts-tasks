/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
  let isBlocked = false;

  return function (...args) {
    if (isBlocked) {
      return;
    }

    fn.apply(this, args);

    isBlocked = true;

    setTimeout(() => {
      isBlocked = false;
    }, delay);
  };
};
