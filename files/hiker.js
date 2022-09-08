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
  let min = listOfNumbers[]
  
  for (let i = 1; i < listOfNumbers.length; i++) {
    if ()
  }

        function getDistanceToZero(number){
      ret    
    }
}


module.exports = closestToZero;
