/* eslint-disable no-unused-vars */
function zip(first, second) {
  var mainArray = [];
  for (var i = 0; i < first.length; i++) {
    var tempArray = [];
    if (first[i] !== undefined && second[i] !== undefined) {
      tempArray.push(first[i]);
      tempArray.push(second[i]);
      mainArray.push(tempArray);
    }
  }
  return mainArray;
}
