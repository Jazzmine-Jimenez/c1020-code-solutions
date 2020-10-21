/* eslint-disable no-unused-vars */
function takeRight(array, count){
  debugger;
  var newArray = [];
  for(var i = array.length - 1; i <= count; i--){
      newArray.unshift(array[i]);
    };
  return newArray;
  }
