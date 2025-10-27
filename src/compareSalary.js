/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  minNumber = Math.min(firstSalary, secondSalary, thirdSalary);
  maxNumber = Math.max(firstSalary, secondSalary, thirdSalary);
  return maxNumber - minNumber;
  throw new Error('Not implemented');
};

/**
const salaries = [firstSalary, secondSalary, thirdSalary];


  for (let i = 0; i < salaries.length - 1; i++) {
    for (let j = 0; j < salaries.length - i - 1; j++) {
      if (salaries[j] > salaries[j + 1]) {
        const temp = salaries[j];
        salaries[j] = salaries[j + 1];
        salaries[j + 1] = temp;
      }
    }
  }

  return salaries[salaries.length - 1] - salaries[0];
}


*/
