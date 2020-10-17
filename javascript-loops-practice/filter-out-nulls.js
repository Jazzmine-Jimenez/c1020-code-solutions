/* exported filterOutNulls */

function filterOutNulls(values){
  var onlyNums = [];

  for (var i = 0; i < values.length; i++){
    if (values[i] !== null){
      onlyNums.push(values[i]);
    }
  }
  return onlyNums;
}
