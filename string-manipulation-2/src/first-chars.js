/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  var newString = string.substring(0, length);
  var tempArray = newString.split(' ');
  var updatedString = '';
  for (var i = 0; i < tempArray.length; i++) {
    var endOfWord = tempArray[i].substring(1, tempArray[i].length);
    endOfWord = endOfWord.toLowerCase();
    var firstLetter = tempArray[i][0].toUpperCase();
    var newWord = firstLetter + endOfWord;
    updatedString = updatedString + ' ' + newWord;
  }
  return updatedString.slice(1, updatedString.length);
}

// need to get HTML to stay uppercase
// handle an empty string
// special exception for LearningFuze??
