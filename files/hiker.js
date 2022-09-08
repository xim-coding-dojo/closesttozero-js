'use strict';

function closestToZero(listOfNumbers) {
  const positiveNumberArray = listOfNumbers.map(number => Math.abs(number));
  
  const minValue = Math.min(...positiveNumberArray);
  
  return listOfNumbers[positiveNumberArray.indexOf(minValue)];
}

module.exports = closestToZero;
