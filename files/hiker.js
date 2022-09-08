'use strict';

function closestToZero(listOfNumbers) {
  
  const minValue = Math.min(...listOfNumbers.map(number => Math.abs(number)));
  
  return minValue;
}

module.exports = closestToZero;
