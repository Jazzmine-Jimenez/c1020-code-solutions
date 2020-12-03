const letters = document.querySelectorAll('span');

document.addEventListener('keydown', event => {
  if (letters[0]) {
    if (event.key === 'h') {
      letters[0].className = 'clicked current-letter';
    } else {
      letters[0].className = 'clicked wrong-letter';
    }
  }

  // if (event.key === 'h') {
  //   letters[i].className = 'clicked current-letter';
  // }
  // if (event.key === 'h') {
  //   letters[0].className = 'clicked current-letter';
  // } else if (event.key === 'e') {
  //   letters[0].className = 'clicked';
  //   letters[1].className = 'clicked current-letter';
  // } else if (event.key === 'l') {
  //   if (letters[2].className !== 'clicked current-letter') {
  //     letters[1].className = 'clicked';
  //     letters[2].className = 'clicked current-letter';
  //   } else {
  //     letters[2].className = 'clicked';
  //     letters[3].className = 'clicked current-letter';
  //   }
  // } else if (event.key === 'o') {
  //   letters[3].className = 'clicked';
  //   letters[4].className = 'clicked current-letter';
  // }

});
