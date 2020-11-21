/* eslint-disable no-unused-vars */
function compact(array){
  debugger;
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if (array[i] ){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
