/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  var stop = string.length - length;
  var newString = string.substring(string.length, stop);
  return newString;
}
