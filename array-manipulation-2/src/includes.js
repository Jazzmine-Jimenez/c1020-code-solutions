/* eslint-disable no-unused-vars */
function includes(array, value){
  debugger;
  for (var i = 0; i < array.length; i++){
    var statement = false;
    if (array[i] === value){
      var statement = true;
      break;
    }
    else if(array[i] == null){
      var statement = null;
      break;
    }
    else continue;
  }
  return statement;
}
