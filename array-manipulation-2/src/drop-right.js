/* eslint-disable no-unused-vars */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
