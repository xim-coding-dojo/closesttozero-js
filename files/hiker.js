'use strict';

function closestToZero(listOfNumbers) {
  const minValue = Math.min(...listOfNumbers);
  
  return minValue;
}

module.exports = closestToZero;
