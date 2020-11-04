/* eslint-disable no-unused-vars */
// function chunk(array, size) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     var numOfCycles = 0;
//     // while (numOfCycles < 0) {
//     //   newArray[numOfCycles] = array[i];
//     //   i++;
//     // }
//     // numOfCycles++;
//   }
//   return newArray;
// }

function chunk(array, size) {
  var newArray = [];
  var rotation = 0;
  for (var i = 0; i < array.length; i++) {
    var tempArray = [];
    if (size > rotation) {
      tempArray.push(array[i]);
      rotation++;
    }
    if (rotation === 2) {
      rotation = 0;
      continue;
    }
    newArray.push(tempArray);
  }
  return newArray;
}
