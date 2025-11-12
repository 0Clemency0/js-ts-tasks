/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  let current = object;
  while (current !== null) {
    for (let key of Object.getOwnPropertyNames(current)) {
      if (key === prop) {
        return true;
      }
    }
    current = Object.getPrototypeOf(current);
  }

  return false;
};
