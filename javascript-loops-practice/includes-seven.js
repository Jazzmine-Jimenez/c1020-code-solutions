/* exported includesSeven */

function includesSeven(array){
  var isItSeven = false;
  for(var i = 0; i < array.length; i++){
    if (array[i] === 7){
      isItSeven = true;
      break;
    }
    else{
      isItSeven = false;
    }
  }
  return isItSeven;
}
