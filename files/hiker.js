'use strict';

function closestToZero1(listOfNumbers) {
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

function closestToZero(listOfNumbers) {
  let min = listOfNumbers[0];
  
  let getDistanceToZero = function getDistanceToZero(number){
      return Math.abs(number);
  };
  
  for (let i = 1; i < listOfNumbers.length; i++) {
    if (getDistanceToZero(listOfNumbers[i])<getDistanceToZero(min)){
      min = listOfNumbers[i];
    }
  }

  return min;  
}


module.exports = closestToZero;
