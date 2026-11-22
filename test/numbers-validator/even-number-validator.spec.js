const { expect } = require('chai');
const { describe, it } = require('mocha');
const NumbersValidator = require('../../app/numbers-validator');

describe('Is number even', () => {
  it('should return true if number is even', () => {
    const validator = new NumbersValidator();
    expect(validator.isNumberEven(4)).to.equal(true);
  });
  it('should return false if number is odd', () => {
    const validator = new NumbersValidator();
    expect(validator.isNumberEven(3)).to.equal(false);
  });
  it('should return 0 if number is 0', () => {
    const validator = new NumbersValidator();
    expect(validator.isNumberEven(0)).to.equal(true);
  });
  it('should handle negative even numbers', () => {
    const validator = new NumbersValidator();
    expect(validator.isNumberEven(-4)).to.equal(true);
  });
  it('should handle non-number inputs', () => {
    const validator = new NumbersValidator();
    expect(() => validator.isNumberEven('not a number')).to.throw(Error);
  });
});
