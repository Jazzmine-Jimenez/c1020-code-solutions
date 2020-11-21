/* exported findIndex */

function findIndex(array, value){
  for(var i = 0; i < array.length; i++){
    var index;
    if (array[i] === value){
      index = i;
      break;
    }
    else{
      var index = -1;
    }
  }
  return index;
}
