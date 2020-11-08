/* eslint-disable no-unused-vars */

function chunk(array, size) {
  var newArray = [];
  var tempArray = [];
  var rotation = 0;
  for (var i = 0; i < array.length; i++) {
    if (size > rotation) {
      tempArray.push(array[i]);
      rotation++;
      continue;
    } if (rotation === size) {
      newArray.push(tempArray);
      rotation = 0;
      tempArray = [];
      tempArray.push(array[i]);
      rotation++;
      continue;
    }
  }
  if (array.length === 0) {
    return newArray;
  } else {
    newArray.push(tempArray);
  }

  return newArray;
}
