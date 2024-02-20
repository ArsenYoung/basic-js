const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  direct
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(direct = true) {
      this.direct = direct;
  }
  encrypt(string, key) {
      if ((arguments.length !== 2) || (typeof string !== 'string') || (typeof key !== 'string')) {
          throw new Error("Incorrect arguments!");
      }

      if (string === '') {
          return string;
      }

      let upperString = string.toUpperCase();
      let upperKey = key.toUpperCase();
      let encryptedString = [];

      for (let i = 0, k = 0; i < upperString.length; i++) {
          if (k === upperKey.length) {
              k = 0;
          }

          if (this.alphabet.includes(upperString[i])) {
              let newLetterIndex = (this.alphabet.indexOf(upperString[i]) + this.alphabet.indexOf(upperKey[k])) % 26;
              encryptedString.push(this.alphabet[newLetterIndex]);
              k++;
          } else {
              encryptedString.push(upperString[i]);
          }
      }

      return this.returnResult(encryptedString);
  }
  decrypt(string, key) {
      if ((arguments.length !== 2) || (typeof string !== 'string') || (typeof key !== 'string')) {
          throw new Error("Incorrect arguments!");
      }

      if (string === '') {
          return string;
      }

      let upperString = string.toUpperCase();
      let upperKey = key.toUpperCase();
      let decryptedString = [];

      for (let i = 0, k = 0; i < upperString.length; i++) {
          if (k === upperKey.length) {
              k = 0;
          }

          if (this.alphabet.includes(upperString[i])) {
              let newLetterIndex = this.alphabet.indexOf(upperString[i]) - (this.alphabet.indexOf(upperKey[k])) % 26;
              if (newLetterIndex < 0) {
                  newLetterIndex += this.alphabet.length;
              }
              decryptedString.push(this.alphabet[newLetterIndex]);
              k++;
          } else {
              decryptedString.push(upperString[i]);
          }
      }

      return this.returnResult(decryptedString);
  }
  returnResult(string) {
      if (this.direct)
          return string.join('');
      else
          return string.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
