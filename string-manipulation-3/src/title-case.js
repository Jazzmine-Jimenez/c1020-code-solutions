/* eslint-disable no-unused-vars */
function titleCase(title) {
  var tempArray = title.split(' ');
  var updatedString = '';

  for (var i = 0; i < tempArray.length; i++) {
    var charIndex = tempArray[i].indexOf(':');
    // console.log('tempArray[i]:', tempArray[i]);
    if (i === 0) {
      var endOfWord = tempArray[i].substring(1, tempArray[i].length);
      var firstLetter = tempArray[i][0].toUpperCase();
      var newWord = firstLetter + endOfWord;
      updatedString = updatedString + ' ' + newWord;
    } else if (tempArray[i] === 'web') {
      updatedString = updatedString + ' Web';
    } else if (tempArray[i] === 'api') {
      updatedString = updatedString + ' API';
    } else if (tempArray[i].length <= 3 && i !== 0) {
      updatedString = updatedString + ' ' + tempArray[i];
    } else if (tempArray[i] === 'javascript' || tempArray[i] === 'Javascript' || tempArray[i] === 'JavaScript') {
      updatedString = updatedString + ' JavaScript';
    } else if (tempArray[i].length > 3 && i !== 0) {
      endOfWord = tempArray[i].substring(1, tempArray[i].length);
      firstLetter = tempArray[i][0].toUpperCase();
      newWord = firstLetter + endOfWord;
      updatedString = updatedString + ' ' + newWord;
    }
  }
  console.log(updatedString);
  return updatedString.trimStart();
}

// var endOfWord = tempArray[i].substring(1, tempArray[i].length);
// endOfWord = endOfWord.toLowerCase();
// var firstLetter = tempArray[i][0].toUpperCase();
// var newWord = firstLetter + endOfWord;
// updatedString = updatedString + ' ' + newWord;

// else if (charIndex !== -1) {
//   console.log('charIndex:', charIndex);
// }
