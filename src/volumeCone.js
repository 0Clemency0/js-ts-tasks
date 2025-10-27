/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  // V = (1/3) * π * r^2 * h

  return Math.round((1 / 3) * Math.PI * r * r * h * 100) / 100;

  // Тест просит укруглить до сотых
  throw new Error('Not implemented');
};
