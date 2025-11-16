/**
 * Write a function which returns a function to replace forbidden words in string by * symbols
 * Array 'forbidden' is specifying the words you have to detect and replace by *
 * Amount of * symbols should be equal word length (words and spaces between them if there are many words)
 *
 * ATTENTION: There might be one or several symbols '\n' or '\\n'.
 * That's a special symbol declaring a new line and should stay in a final string.
 *
 * Example:
 * forbidden = ['ship', 'blow', 'blew up']
 * str = 'There once was a ship that put to sea\nThe name of the ship was the Billy of Tea\nThe winds blew up, her bow dipped down\nOh blow, my bully boys, blow (huh)'
 * str = 'There once was a **** that put to sea\nThe name of the **** was the Billy of Tea\nThe winds *******, her bow dipped down\nOh ****, my bully boys, **** (huh)'
 * @param {Array} forbidden
 * @returns {function}
 */
/**
 * Функция возвращает другую функцию, которая заменяет запрещённые слова и фразы в строке на символы '*'.
 * @param {Array} forbidden - массив запрещённых слов или фраз.
 * @returns {Function} - функция, принимающая строку и возвращающая цензурированную версию.
 */
module.exports.censorship = function censorship(forbidden) {
  return function (str) {
    let chars = str.split('');

    for (let i = 0; i < forbidden.length; i++) {
      const word = forbidden[i];
      const stars = '*'.repeat(word.length);

      for (let j = 0; j <= chars.length - word.length; j++) {
        let slice = '';
        for (let k = 0; k < word.length; k++) {
          slice += chars[j + k];
        }

        if (slice === word) {
          for (let k = 0; k < word.length; k++) {
            chars[j + k] = '*';
          }
        }
      }
    }
    return chars.join('');
  };
};
