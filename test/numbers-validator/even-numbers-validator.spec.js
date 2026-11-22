const { expect } = require('chai');
const { describe, it } = require('mocha');
const NumbersValidator = require('../../app/numbers-validator');

describe('Are numbers even in array', () => {
  it('should return true if all numbers are even', () => {
    const validator = new NumbersValidator();
    expect(validator.getEvenNumbersFromArray([2, 4, 6])).to.deep.equal([2, 4, 6]);
  });

  it('should return false if not all numbers are even', () => {
    const validator = new NumbersValidator();
    expect(validator.getEvenNumbersFromArray([2, 3, 6])).to.deep.equal([2, 6]);
  });

  it('should throw an error if input is not an array of numbers', () => {
    const validator = new NumbersValidator();
    expect(() => validator.getEvenNumbersFromArray([2, '3', 6])).to.throw(Error);
  });
});
