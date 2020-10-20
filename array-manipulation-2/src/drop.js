/* eslint-disable no-unused-vars */
function drop(array,count){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if(i >= count){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
