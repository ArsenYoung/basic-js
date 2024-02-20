const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let resultMatrix = [];
  for (let i = 0; i < n; i++) {
      let subArr = [];
      for (let j = 0; j < m; j++) {
          subArr.push(0);
      }
      resultMatrix.push(subArr);
  }

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (matrix[i][j] === true) {
              resultMatrix[i][j] = 1;
          } else {
              if (i === 0 && j === 0) {
                  if (matrix[i + 1][j] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i + 1][j + 1] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i][j + 1] === true) {
                      resultMatrix[i][j]++;
                  }
              } else if (i === n - 1 && j === m - 1) {
                  if (matrix[i - 1][j] === true) {
                      resultMatrix[i][j]++;
                  } 
                  
                  if (matrix[i - 1][j - 1] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i][j] === true) {
                      resultMatrix[i][j]++;
                  }
              } else if (i === 0 && j === m - 1) {
                  if (matrix[i][j - 1] === true) {
                      resultMatrix[i][j]++;
                  } 
                  
                  if (matrix[i + 1][j - 1] === true) {
                      resultMatrix[i][j]++;
                  } 
                  
                  if (matrix[i + 1][j] === true) {
                      resultMatrix[i][j]++;
                  }
              } else if (i === n - 1 && j === 0) {
                  if (matrix[i - 1][j] === true) {
                      resultMatrix[i][j]++;
                  } 
                  
                  if (matrix[i - 1][j + 1] === true) {
                      resultMatrix[i][j]++;
                  } 
                  
                  if (matrix[i][j + 1] === true) {
                      resultMatrix[i][j]++;
                  }
              } else if (i === 0 && j > 0) {
                  if (matrix[i][j - 1] === true) {
                      resultMatrix[i][j]++;
                  } 
                  
                  if (matrix[i][j + 1] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i + 1][j - 1] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i + 1][j] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i + 1][j + 1] === true) {
                      resultMatrix[i][j]++;
                  }
              } else if (i > 0 && j === 0) {
                  if (matrix[i - 1][j] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i - 1][j + 1] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i][j + 1] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i + 1][j + 1] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i + 1][j] === true) {
                      resultMatrix[i][j]++;
                  }
              } else if (i > 0 && j > 0) {
                  if (matrix[i - 1][j] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i - 1][j + 1] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i - 1][j - 1] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i][j + 1] === true) {
                      resultMatrix[i][j]++;
                  }
                  
                  if (matrix[i][j - 1] === true) {
                      resultMatrix[i][j]++;
                  }
              }
          }
      }
  }

  return resultMatrix;
}

module.exports = {
  minesweeper
};
