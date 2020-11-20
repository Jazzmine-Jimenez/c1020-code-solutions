/* eslint-disable no-unused-vars */
function titleCase(title) {
  var tempArray = title.split(' ');
  var updatedString = '';
  var holder;
  for (var i = 0; i < tempArray.length; i++) {
    var semicolonIndex = tempArray[i].indexOf(':');
    var dashIndex = tempArray[i].indexOf('-');
    if (i === 0 && tempArray[i].toLowerCase() !== 'javascript:') {
      var endOfWord = tempArray[i].substring(1, tempArray[i].length);
      var firstLetter = tempArray[i][0].toUpperCase();
      var newWord = firstLetter + endOfWord;
      updatedString = updatedString + ' ' + newWord;
    } else if (tempArray[i] === holder) {
      endOfWord = tempArray[i].substring(1, tempArray[i].length);
      firstLetter = tempArray[i][0].toUpperCase();
      newWord = firstLetter + endOfWord;
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
      if (semicolonIndex !== -1) {
        holder = tempArray[i + 1];
      }
    } else if (tempArray[i].length > 3 && i !== 0) {
      if (dashIndex !== -1) {
        firstLetter = tempArray[i][0].toUpperCase();
        var letterAfterDash = tempArray[i][dashIndex + 1].toUpperCase();
        var firstHalf = tempArray[i].substring(1, dashIndex + 1);
        var secondHalf = tempArray[i].substring(dashIndex + 2, tempArray.length + 1);
        newWord = firstLetter + firstHalf + letterAfterDash + secondHalf;
        updatedString = updatedString + ' ' + newWord;
      } else {
        endOfWord = tempArray[i].substring(1, tempArray[i].length);
        firstLetter = tempArray[i][0].toUpperCase();
        newWord = firstLetter + endOfWord;
        updatedString = updatedString + ' ' + newWord;
      }
    }
  }
  return updatedString.trimStart();
}
