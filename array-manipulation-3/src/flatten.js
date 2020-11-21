/* eslint-disable no-unused-vars */
function flatten(array) {
  var tempArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var n = 0; n < array[i].length; n++) {
        tempArray.push(array[i][n]);
      }
    } else {
      tempArray.push(array[i]);
    }
  }
  return tempArray;
}
