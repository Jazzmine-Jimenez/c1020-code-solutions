/* eslint-disable no-unused-vars */
function chunk(array, size) {
  debugger;
  var newArray = [];
  var tempArray = [];
  var rotation = 0;
  for (var i = 0; i <= array.length; i++) {
    if (size > rotation) {
      tempArray.push(array[i]);
      rotation++;
      continue;
    } if (rotation === size & array.length % size === 0) {
      newArray.push(tempArray);
      rotation = 0;
      tempArray = [];
      tempArray.push(array[i]);
      rotation++;
      continue;
    }
    if (rotation === size & array.length % size === 1) {
      newArray.push(tempArray);
      rotation = 0;
      tempArray = [];
      tempArray.push(array[i]);
      rotation++;
      // if (rotation * size < array.length) {
      //   newArray.push(tempArray);
      // } something to tell it to push extra index into arrays
      continue;
    }
  }
  return newArray;
}
