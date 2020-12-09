/* eslint-disable no-unused-vars */
function zip(first, second) {
  var mainArray = [];
  for (var i = 0; i < first.length && i < second.length; i++) {
    var tempArray = [];
    tempArray.push(first[i]);
    tempArray.push(second[i]);
    mainArray.push(tempArray);
  }
  return mainArray;
}
