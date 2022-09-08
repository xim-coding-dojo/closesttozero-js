'use strict';

const closestToZero = require('./hiker');

describe('Testing the close to zero function', () => {
  it('get the closest value for 2 positive value', () => {
    
    expect(closestToZero([1,2])).toEqual(1);
  });
  it('get the closest value for 3 positive value', () => {
    
    expect(closestToZero([7,2,9])).toEqual(2);
  });
});
