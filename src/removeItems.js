/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  function isEqual(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!isEqual(a[i], b[i])) return false;
      }
      return true;
    }

    if (typeof a === 'object' && a !== null && b !== null) {
      let keysA = Object.keys(a);
      let keysB = Object.keys(b);
      if (keysA.length !== keysB.length) return false;
      for (let key of keysA) {
        if (!isEqual(a[key], b[key])) return false;
      }
      return true;
    }

    return a === b;
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isEqual(arr[i], value)) {
      result.push(arr[i]);
    }
  }

  return result;
};
