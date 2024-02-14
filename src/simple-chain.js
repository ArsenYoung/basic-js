const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainValues: [],
  getLength() {
    if (this.chainValues !== null)
      return this.chainValues.length;
  },
  addLink(value) {
    let valueToAdd = '';
    if (value === null)
      valueToAdd = 'null';
    else if (value === undefined) {
      valueToAdd = 'undefined';
    } else {
      valueToAdd = value.toString();
    }
    if (this.chainValues !== null) {
      this.chainValues.push(`( ${valueToAdd} )`);
    }

    return this;
  },
  removeLink(position) {
      if (this.chainValues === null) {
        return this;
      }

      if (position > this.chainValues.length) {
        this.chainValues = [];
        throw new Error("You can\'t remove incorrect link!");
      }

      if (typeof position !== 'number') {
        this.chainValues = [];
        throw new Error("You can\'t remove incorrect link!");
      }

      if (position <= 0) {
        this.chainValues = [];
        throw new Error("You can\'t remove incorrect link!");
      }

      if (this.chainValues !== null)
        this.chainValues.splice(position - 1, 1);
    
      return this;
},
  reverseChain() {
    if (this.chainValues != null && this.chainValues.length > 1) {
      this.chainValues.reverse();
    }
    return this;
  },
  finishChain() {
    if (this.chainValues === null) {
      return this;
    }
    let result = this.chainValues.join('~~');
    this.chainValues = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
