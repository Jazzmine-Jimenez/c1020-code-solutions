/* eslint-disable no-unused-vars */

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    }
    continue;
  }
  return newArray;
}
