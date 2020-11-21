/* exported filterOutStrings */

function filterOutStrings(values){

  var onlyNums = [];

  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      onlyNums.push(values[i]);
    }
    else {
      continue;
    }
  }
  return onlyNums;
}
