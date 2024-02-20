const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return names;
  }
  
  let checkedFiles = [];
  checkedFiles.push(names[0]);

  for (let i = 1; i < names.length; i++) {
      if (checkedFiles.includes(names[i])) {
          let number = getFileNumber(checkedFiles, names[i]);
          checkedFiles.push(`${names[i]}(${number})`);
      } else {
          checkedFiles.push(names[i]);
      }
  }

  return checkedFiles;
}

function getFileNumber(arr, fileName) {
  let number = 1;
  let changedFileName = `${fileName}(${number})`;
  while (arr.includes(changedFileName)) {
      number++;
      changedFileName = `${fileName}(${number})`;
  }

  return number;
}

module.exports = {
  renameFiles
};
