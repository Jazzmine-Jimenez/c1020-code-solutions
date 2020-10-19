/* eslint-disable no-unused-vars */
function capitalize(word){
  var newWord = word.toLowerCase();
  var firstLetter = newWord[0].toUpperCase();

  var restOfWord = "";
  restOfWord = newWord.substring(1, newWord.length);
  var finalWord = firstLetter + restOfWord;
  return finalWord;
}
