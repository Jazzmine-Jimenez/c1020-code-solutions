/* exported filterOutNulls */

function filterOutNulls(values){
  var onlyNums = [];

  for (var i = 0; i < values.length; i++){
    if (typeof values[i] !== 'object'){
      onlyNums.push(values[i]);
    }
    else{
      continue;
    }
  }
  return onlyNums;
}
