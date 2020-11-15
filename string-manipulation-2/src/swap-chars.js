/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString = newString + string[secondIndex];
    } if (i === secondIndex) {
      newString = newString + string[firstIndex];
    } if (i !== firstIndex && i !== secondIndex) {
      newString = newString + string[i];
    }
  }
  return newString;
}
