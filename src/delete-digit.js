const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let possibleNumbers = [];
  let stringInitialNumber = n.toString();
  
  for (let i = 0; i < stringInitialNumber.length; i += 1) {
    let newNumberStr = stringInitialNumber.slice(0, i) + stringInitialNumber.slice(i + 1, stringInitialNumber.length);
    possibleNumbers.push(parseInt(newNumberStr));
  }

  return possibleNumbers.reduce((accum, item) => {
    if (item > accum) {
      accum = item;
    }
    return accum;
  });
}

module.exports = {
  deleteDigit
};
