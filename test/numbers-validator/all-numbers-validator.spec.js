const { expect } = require('chai');
const { describe, it } = require('mocha');
const NumbersValidator = require('../../app/numbers-validator');

describe('Are all items numbers', () => {
  it('should return true if all items are numbers', () => {
    const validator = new NumbersValidator();
    expect(validator.isAllNumbers([1, 2, 3])).to.equal(true);
  });

  it('should return false if not all items are numbers', () => {
    const validator = new NumbersValidator();
    expect(validator.isAllNumbers([1, '2', 3])).to.equal(false);
  });

  it('should throw an error if input is not an array', () => {
    const validator = new NumbersValidator();
    expect(() => validator.isAllNumbers('not an array')).to.throw(Error);
  });
});
