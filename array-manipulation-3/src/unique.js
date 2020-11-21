/* eslint-disable no-unused-vars */
function unique(array) {
  var tempArray = array;
  for (var i = 0; i < array.length; i++) {
    for (var n = tempArray.length - 1; n >= 0; n--) {
      if (array[i] === tempArray[n]) {
        if (i !== n) {
          tempArray.splice(n, 1);
        }
      }
    }
  }
  return tempArray;
}
