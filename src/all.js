/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      reject(new TypeError('Argument must be an array'));
      return;
    }

    if (promisesArray.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(promisesArray.length);
    let completed = 0;

    promisesArray.forEach((p, index) => {
      Promise.resolve(p)
        .then(value => {
          results[index] = value;
          completed += 1;

          if (completed === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};
