/* eslint-disable no-unused-vars */
function titleCase(title) {
  var semicolonIndex = title.indexOf(':');

  if (semicolonIndex !== -1) {
    var tempArray = title.split(': ');
    var mainTitle = capitalizeWord(tempArray[0]);
    var subTitle = capitalizeWord(tempArray[1]);
    tempArray = mainTitle + ': ' + subTitle;
    tempArray = tempArray.split(' ');

  } else {
    tempArray = title.split(' ');
  }

  var updatedString = '';
  var holder;
  for (var i = 0; i < tempArray.length; i++) {
    if (i === 0 && tempArray[i].toLowerCase() !== 'javascript:') {
      var newWord = capitalizeWord(tempArray[i]);
      updatedString = updatedString + ' ' + newWord;
    } else if (tempArray[i] === holder) {
      newWord = capitalizeWord(tempArray[i]);
      updatedString = updatedString + ' ' + newWord;
    } else if (tempArray[i] === 'web') {
      updatedString = updatedString + ' Web';
    } else if (tempArray[i] === 'api') {
      updatedString = updatedString + ' API';
    } else if (tempArray[i].length <= 3 && i !== 0) {
      updatedString = updatedString + ' ' + tempArray[i];
    } else if (tempArray[i].toLowerCase() === 'javascript') {
      updatedString = updatedString + ' JavaScript';
    } else if (tempArray[i].toLowerCase() === 'javascript:') {
      updatedString = updatedString + ' JavaScript:';
    } else if (tempArray[i].length > 3 && i !== 0) {
      newWord = capitalizeWord(tempArray[i]);
      updatedString = updatedString + ' ' + newWord;
    } else {
      newWord = capitalizeWord(tempArray[i]);
      updatedString = updatedString + ' ' + newWord;
    }
  }
  return updatedString.trimStart();
}

function capitalizeWord(word) {
  var dashIndex = word.indexOf('-');
  if (dashIndex !== -1) {
    var firstLetter = word[0].toUpperCase();
    var letterAfterDash = word[dashIndex + 1].toUpperCase();
    var firstHalf = word.substring(1, dashIndex + 1);
    var secondHalf = word.substring(dashIndex + 2, word.length + 1);
    var newWord = firstLetter + firstHalf + letterAfterDash + secondHalf;
  } else {
    firstLetter = word[0].toUpperCase();
    var endOfWord = word.substring(1, word.length);
    newWord = firstLetter + endOfWord;
  }
  return newWord;
}
