/* eslint-disable no-unused-vars */
function isVowel(character){
  debugger;
  var vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for(var i = 0; i < vowel.length; i++){
    if (character.includes(vowel[i])){
      return true;
    };
  }
  return false;
}
