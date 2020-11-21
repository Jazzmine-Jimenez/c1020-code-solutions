/* eslint-disable no-unused-vars */
function numVowels(string) {
  var newString = string.toLowerCase();
  var count = 0;
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] === 'a') count = count + 1;
    if (newString[i] === 'e') count = count + 1;
    if (newString[i] === 'i') count = count + 1;
    if (newString[i] === 'o') count = count + 1;
    if (newString[i] === 'u') count = count + 1;
  }
  return count;
}
