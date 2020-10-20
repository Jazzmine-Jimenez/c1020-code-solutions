/* eslint-disable no-unused-vars */
function capitalize(word) {
  var newWord = word.toLowerCase();
  var restOfWord =  newWord.substring(1, word.length);
  var firstLetter = word[0].toUpperCase();

  return firstLetter + restOfWord;
}
