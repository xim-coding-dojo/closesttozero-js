'use strict';

const closestToZero = require('./hiker');

describe('Testing the close to zero function', () => {
  it('get the closest value for positive value', () => {
    
    expect(closestToZero([1,2])).toEqual(1);
  });
});
