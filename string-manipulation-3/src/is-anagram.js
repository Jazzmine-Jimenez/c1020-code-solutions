/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  var newFirst = firstString.replaceAll(' ', '');
  var newSecond = secondString.replaceAll(' ', '');

  if (newFirst.length !== newSecond.length) return false;

  for (var i = 0; i < newFirst.length; i++) {
    var statement = newFirst.includes(newSecond[i]);
    if (statement === false) return statement;
  }
  return statement;
}
