'use strict';

function closestToZero(listOfNumbers) {
  
  return Math.min(...listOfNumbers.map(number => Math.abs(number)));
}

module.exports = closestToZero;
