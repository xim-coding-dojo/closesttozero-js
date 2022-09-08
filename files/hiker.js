'use strict';

function closestToZero(listOfNumbers) {
  const positiveNumberArray = listOfNumbers.map(number => Math.abs(number));
  
  const minValueWithoutSign = Math.min(...positiveNumberArray);
  const originalValue = listOfNumbers[positiveNumberArray.indexOf(minValueWithoutSign)];
  
  if(originalValue < 0 && listOfNumbers.indexOf(Math.abs(originalValue))>0) {
   return Math.abs(originalValue); 
  }
  else {
    return originalValue;
  }
  
}

module.exports = closestToZero;
