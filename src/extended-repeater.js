const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultArr = [];
  let additionArr = [];
  let sep;
  let addSep;

  if (!options.separator) {
    sep = '+';
  } else {
    sep = options.separator;
  }

  if (!options.additionSeparator) {
    addSep = '|';
  } else if (options.additionSeparator === null) {
    addSep = 'null';
  } else {
    addSep = options.additionSeparator;
  }

  if (!Number.isFinite(options.additionRepeatTimes) && !Number.isFinite(options.repeatTimes)) {
    return str + options.addition;
  }

  let additionRepeatTimes;
  if (!options.additionRepeatTimes && addSep) {
    additionRepeatTimes = 1;
  } else {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  for (let i = 0; i < additionRepeatTimes; i += 1) {
    if (options.addition === null) {
      additionArr.push('null');
      continue;
    }
    additionArr.push(options.addition);
  }

  let additionFull;

  additionFull = additionArr.join(addSep);
  

  for (let i = 0; i < options.repeatTimes; i += 1) {
    resultArr.push(str + additionFull);
  }

  return resultArr.join(sep);
}

module.exports = {
  repeater
};
