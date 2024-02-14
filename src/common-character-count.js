const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;

  let minStr;
  let maxStr;

  const checkedLetters = [];

  if (s1.length > s2.length) {
    minStr = s2;
    maxStr = s1;
  } else {
    minStr = s1;
    maxStr = s2;
  }

  for (let i = 0; i < minStr.length; i += 1) {
    let countS1 = 0;
    let countS2 = 0;
    let startIndex = 0;

    if (checkedLetters.includes(minStr[i])) {
      continue;
    }

    do {
      startIndex = maxStr.indexOf(minStr[i], startIndex);
      if (startIndex !== -1) {
        countS2 += 1;
        startIndex += 1;
      }
    } while (startIndex !== -1);

    do {
      startIndex = minStr.indexOf(minStr[i], startIndex);
      if (startIndex !== -1) {
        countS1 += 1;
        startIndex += 1;
      }
    } while (startIndex !== -1);

    if (countS1 >= countS2) {
      count += countS2;
    } else {
      count += countS1;
    }

    checkedLetters.push(minStr[i]);
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
