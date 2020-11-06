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
    } if (rotation === size) {
      console.log(tempArray);
      newArray.push(tempArray);
      console.log(newArray);
      rotation = 0;
      tempArray = [];
      tempArray.push(array[i]);
      rotation++;
      continue;
    }
  }
  console.log('tempArray:', tempArray);
  console.log('newArray:', newArray);
  return newArray;
}

//  {  // if else statement does not work
