'use strict';

const closestToZero = require('./hiker');

describe('Testing the close to zero function', () => {
  it('get the closest value for 2 positive value', () => {
    
    expect(closestToZero([2,1])).toEqual(1);
  });
  it('get the closest value for 3 positive value', () => {
    
    expect(closestToZero([7,2,9])).toEqual(2);
  });
 
  fit('get the closest value for 2 positive value and 1 negative value', () => {
    
    expect(closestToZero([-7,2,9])).toEqual(2);
  });
  
  it('get the closest value for 2 positive value and 1 negative value', () => {
    
    expect(closestToZero([-7,-2,9])).toEqual(-2);
  });
  
  it('get the closest value for 2 positive value and 1 negative value with a tie', () => {
    
    expect(closestToZero([-7,-2,2])).toEqual(2);
  });
});
