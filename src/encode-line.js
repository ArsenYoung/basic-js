const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    let count = 1;
    let checkLetter = str[i];
    while (checkLetter === str[i + 1]) {
      i += 1;
      count++;
    }

    if (count === 1) {
      result = result + str[i];
    } else {
      result = result + count + checkLetter;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
