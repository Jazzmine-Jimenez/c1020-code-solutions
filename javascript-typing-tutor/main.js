const letters = document.querySelectorAll('span');

document.addEventListener('keydown', key => {
  console.log(letters[0]);

  if (letters[0] === event.target) {
    console.log('clicked H');
  }
});
