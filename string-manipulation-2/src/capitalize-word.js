/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  var endOfWord = word.substring(1, word.length);
  endOfWord = endOfWord.toLowerCase();
  var firstLetter = word[0].toUpperCase();
  var newWord = firstLetter + endOfWord;

  return newWord;
}
