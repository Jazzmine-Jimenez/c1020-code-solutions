const letters = document.querySelectorAll('span');
let index = 0;

document.addEventListener('keydown', event => {
  if (index >= letters.length) return;

  if ((letters[index].textContent).toLowerCase() === event.key) {
    if (index !== 0) {
      letters[index - 1].className = 'clicked';
    }
    letters[index].className = 'current-letter';
    letters[index + 1].className = 'clicked';
    letters[index + 1].className = 'next-letter';
    index++;
  } else {
    letters[index].className = 'wrong-letter';
  }
});
