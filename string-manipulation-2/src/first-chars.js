/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  var newString = string.substring(0, length);
  var tempArray = newString.split(' ');
  var updatedString = '';
  for (var i = 0; i < tempArray.length; i++) {
    if (tempArray[i] === tempArray[i].toUpperCase()) {
      var newWord = tempArray[i];
    } else if (tempArray[i] === 'LearningFuze') {
      newWord = tempArray[i];
    } else {
      var endOfWord = tempArray[i].substring(1, tempArray[i].length);
      endOfWord = endOfWord.toLowerCase();
      var firstLetter = tempArray[i][0].toUpperCase();
      newWord = firstLetter + endOfWord;
    }
    updatedString = updatedString + ' ' + newWord;
  }
  return updatedString.slice(1, updatedString.length);
}
