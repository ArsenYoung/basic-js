const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  if (members.length === 0) {
    return false;
  }

  let dreamTeamArr = [];

  for (let name of members) {
    if (typeof name !== 'string') {
      continue;
    }

    dreamTeamArr.push(name.trim().charAt(0).toUpperCase());
  }
  console.log(dreamTeamArr);

  return dreamTeamArr.sort().join('');
}

module.exports = {
  createDreamTeam
};
