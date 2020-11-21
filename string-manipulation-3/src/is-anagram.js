/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  var newFirst = firstString.replaceAll(' ', '');
  var newSecond = secondString.replaceAll(' ', '');

  if (newFirst.length !== newSecond.length) return false;

  var first = splitSort(newFirst);
  var second = splitSort(newSecond);

  if (first !== second) {
    return false;
  } else {
    return true;
  }
}

function splitSort(word) {
  var newArray = word.split('');
  newArray = newArray.sort();
  var tempString = '';
  for (var i = 0; i < newArray.length; i++) {
    tempString = tempString + newArray[i];
  }
  return tempString;
}
