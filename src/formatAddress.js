/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function () {
  return function (address = {}) {
    const keys = ['street', 'house', 'apartment', 'city', 'postalCode', 'country'];
    let result = '';

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      result += address[key] !== undefined ? address[key] : '';
      if (i < keys.length - 1) {
        result += ', ';
      }
    }

    return result;
  };
};
