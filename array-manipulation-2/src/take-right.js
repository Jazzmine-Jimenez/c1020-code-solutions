/* eslint-disable no-unused-vars */
function takeRight(array, count){
  debugger;
  var newArray = [];
  for (var i = 0; i < array.length; i++){
    if(i > (array.length - 1) - count){
      newArray.push(array[i]);
    }
  }
  return newArray;
  }
