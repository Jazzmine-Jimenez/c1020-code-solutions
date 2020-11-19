/* eslint-disable no-unused-vars */
function reverseWords(string) {
  var wordsArray = string.split(' ');
  var newString = '';
  for (var i = 0; i < wordsArray.length; i++) {
    var tempString = '';
    for (var n = wordsArray[i].length - 1; n >= 0; n--) {
      tempString = tempString + wordsArray[i][n];
    }
    newString = newString + ' ' + tempString;
  }
  return newString.trimStart();
}
