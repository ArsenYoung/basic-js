const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  maxDepth = 0
  calculateDepth(arr) {
      if (!Array.isArray(arr)) {
          return 0;
      } else {
          let depth = 1;
          for (let item of arr) {
              depth = Math.max(depth, 1 + this.calculateDepth(item));
          }
          if (depth > this.maxDepth) {
              this.maxDepth = depth;
          }
          return depth;
      }
  }
}

module.exports = {
  DepthCalculator
};
