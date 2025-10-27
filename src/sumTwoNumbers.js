/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const first = String(firstNumber).replace(/\s+/g, '');
  const second = String(secondNumber).replace(/\s+/g, '');

  // Загуглил это, не знал как убрать все пробелы из строки
  // А trim  удаляет только в начале и в конце
  // "fnArguments": ["    -5    ", "   -    10"],
  //   "expected": -15
  // В аргументе много пробелов поэтому trim не раб

  return Number(first) + Number(second);
};
