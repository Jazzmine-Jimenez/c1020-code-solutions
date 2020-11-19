/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var reverseString = '';
  var tempString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    } else {
      tempString = tempString + string[i];
    }
  }
  for (var n = string.length - 1; n >= 0; n--) {
    if (string[n] === ' ') {
      continue;
    } else {
      reverseString = reverseString + string[n];
    }
  }
  if (tempString === reverseString) {
    return true;
  } else {
    return false;
  }
}
