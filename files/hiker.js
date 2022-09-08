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

function closestToZero2(listOfNumbers) {
  let min = listOfNumbers[0];
  
  let getDistanceToZero = function getDistanceToZero(number){
      return Math.abs(number);
  };
  
  for (let i = 1; i < listOfNumbers.length; i++) {
    if (getDistanceToZero(listOfNumbers[i])<getDistanceToZero(min)){      
        min = listOfNumbers[i];
    }else if(getDistanceToZero(listOfNumbers[i])==getDistanceToZero(min)){
      if(listOfNumbers[i]>min){
        min = listOfNumbers[i];
      }
    }
  }

  return min;  
}

function closestToZero(listOfNumbers){
  const minValue = array1
     .map(originalValue => {
       return {originalValue:originalValue, distance:Math.abs(originalValue)}
     })
     .reduce(
      (previousValue, currentValue) => {
        if(previousValue.distance > currentValue.distance) {
           return currentValue;
        }
        else if(previousValue.distance == currentValue.distance && currentValue.originalValue > previousValue.originalValue) {
            return currentValue
        }
        else {
          return previousValue
        }
      }
    );
       
    return minValue.originalValue;
}

module.exports = closestToZero;
