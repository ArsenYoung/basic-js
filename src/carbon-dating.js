const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!(typeof sampleActivity === 'string')) {
    return false;
  }

  const finalActivity = parseFloat(sampleActivity);

  if (!(typeof finalActivity === 'number')) {
    return false;
  }

  if (Number.isNaN(finalActivity)) {
    return false;
  }

  if (finalActivity === 0) {
    return false;
  }

  const decay = Math.log(2) / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / finalActivity) / decay;
  
  if (Number.isNaN(age) || age < 0) {
    return false;
  }
  
  return Math.ceil(age);
}

module.exports = {
  dateSample
};
