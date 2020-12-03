const letters = document.querySelectorAll('span');

document.addEventListener('keydown', event => {

  for (let i = 0; i < letters.length; i++){
    if (letters[i]) {
      if ((letters[0].textContent).toLowerCase() === event.key) {
      letters[0].className = 'clicked current-letter';
      }else if ((letters[0].textContent).toLowerCase() !== event.key) {
      letters[0].className = 'wrong-letter';
    }
  }


  // if ((letters[0].textContent).toLowerCase() === event.key) {
  //   letters[0].className = 'clicked current-letter';
  // } else if ((letters[0].textContent).toLowerCase() !== event.key) {
  //   letters[0].className = 'wrong-letter';
  // } else if (letters[1].textContent === event.key) {
  //   letters[1].className = 'clicked current-letter';
  // } else if (letters[1].textContent !== event.key) {
  //   letters[1].className = 'wrong-letter';
  // }

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
