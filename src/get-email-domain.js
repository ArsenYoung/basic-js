const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let indexOfLastAt = 0;
  let result = '';

  while (email.indexOf('@', indexOfLastAt) !== -1) {
    indexOfLastAt = email.indexOf('@', indexOfLastAt) + 1;
  }

  result = email.slice(indexOfLastAt);

  for (let i = 0; i < result.length; i += 1) {
    if (result[i] === '.') {
      result = result.slice(i + 1);
    } else {
      break;
    }
  }

  return result;
}

module.exports = {
  getEmailDomain
};
