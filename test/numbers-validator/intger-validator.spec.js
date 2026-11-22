const { expect } = require('chai');
const { describe, it } = require('mocha');
const NumbersValidator = require('../../app/numbers-validator');

describe('Is number integer', () => {
  it('should return true if number is integer', () => {
    const validator = new NumbersValidator();
    expect(validator.isInteger(4)).to.equal(true);
  });
  it('should return false if number is not integer', () => {
    const validator = new NumbersValidator();
    expect(validator.isInteger(4.5)).to.equal(false);
  });
  it('should return true if number is negative integer', () => {
    const validator = new NumbersValidator();
    expect(validator.isInteger(-4)).to.equal(true);
  });
  it('should throw an error if input is not a number', () => {
    const validator = new NumbersValidator();
    expect(() => validator.isInteger('not a number')).to.throw(Error);
  });
});
