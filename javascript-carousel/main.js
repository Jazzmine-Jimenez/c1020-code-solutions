var intervalID = setInterval(switchImage, 2000);
var $circle = document.querySelectorAll('.circle-icon');
var $charImg = document.querySelector('.characterImg');

var data = {
  position: 0,
  images: ['images/025.png',
    'images/001.png',
    'images/039.png',
    'images/004.png',
    'images/007.png'
  ]
};

function switchImage() {
  if (data.position === 0) {
    $charImg.setAttribute('src', data.images[data.position]);
    $circle[0].className = 'fas fa-circle circle-icon';
    $circle[4].className = 'far fa-circle circle-icon';

  } else if (data.position === 4) {
    $charImg.setAttribute('src', data.images[data.position]);
    $circle[4].className = 'fas fa-circle circle-icon';
    $circle[3].className = 'far fa-circle circle-icon';
    data.position = 0;
  } else {
    $charImg.setAttribute('src', data.images[data.position]);
    $circle[data.position].className = 'fas fa-circle circle-icon';
    $circle[data.position - 1].className = 'far fa-circle circle-icon';
    data.position++;
  }

  console.log('positions:', data.position);
}

document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;

  if (event.target === $circle[0]) {
    console.log('circle 0');
    console.log('position:', data.position);
    clearInterval(intervalID);
    $charImg.setAttribute('src', data.images[0]);
    $circle[0].className = 'fas fa-circle circle-icon';
    data.position = 0;

    $circle[1].className = 'far fa-circle circle-icon';
    $circle[2].className = 'far fa-circle circle-icon';
    $circle[3].className = 'far fa-circle circle-icon';
    $circle[4].className = 'far fa-circle circle-icon';

    // setInterval(switchImage, 2000);
  }

  if (event.target === $circle[1]) {
    data.position = 1;
    console.log('circle 1');
    console.log('position:', data.position);
    clearInterval(intervalID);
    $charImg.setAttribute('src', data.images[1]);
    $circle[1].className = 'fas fa-circle circle-icon';

    $circle[0].className = 'far fa-circle circle-icon';
    $circle[2].className = 'far fa-circle circle-icon';
    $circle[3].className = 'far fa-circle circle-icon';
    $circle[4].className = 'far fa-circle circle-icon';

    // setInterval(switchImage, 2000);
  }

  if (event.target === $circle[2]) {
    data.position = 2;
    console.log('circle 2');
    console.log('position:', data.position);
    clearInterval(intervalID);
    $charImg.setAttribute('src', data.images[2]);
    $circle[2].className = 'fas fa-circle circle-icon';

    $circle[0].className = 'far fa-circle circle-icon';
    $circle[1].className = 'far fa-circle circle-icon';
    $circle[3].className = 'far fa-circle circle-icon';
    $circle[4].className = 'far fa-circle circle-icon';

    // setInterval(switchImage, 2000);
  }

  if (event.target === $circle[3]) {
    data.position = 3;
    console.log('circle 3');
    console.log('position:', data.position);
    clearInterval(intervalID);
    $charImg.setAttribute('src', data.images[3]);
    $circle[3].className = 'fas fa-circle circle-icon';

    $circle[0].className = 'far fa-circle circle-icon';
    $circle[1].className = 'far fa-circle circle-icon';
    $circle[2].className = 'far fa-circle circle-icon';
    $circle[4].className = 'far fa-circle circle-icon';

    // setInterval(switchImage, 2000);
  }

  if (event.target === $circle[4]) {
    data.position = 4;
    console.log('circle 4');
    console.log('position:', data.position);
    clearInterval(intervalID);
    $charImg.setAttribute('src', data.images[4]);
    $circle[4].className = 'fas fa-circle circle-icon';

    $circle[0].className = 'far fa-circle circle-icon';
    $circle[1].className = 'far fa-circle circle-icon';
    $circle[2].className = 'far fa-circle circle-icon';
    $circle[3].className = 'far fa-circle circle-icon';

    // setInterval(switchImage, 2000);
  }

});

document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;

  var $leftArrow = document.querySelector('.arrow-left');
  // var $rightArrow = document.querySelector('.arrow-right');

  if (event.target === $leftArrow) {

    if (data.position === 0) {
      data.position = 4;
      $circle[4].className = 'fas fa-circle circle-icon';
      console.log('position after switch:', data.position);
      clearInterval(intervalID);
      $charImg.setAttribute('src', data.images[4]);
      $circle[0].className = 'far fa-circle circle-icon';

      // setInterval(switchImage, 2000);

      console.log('clicked while on position 0');
    }

    if (data.position === 1) {
      data.position = 0;
      console.log('position after switch:', data.position);
      clearInterval(intervalID);
      $charImg.setAttribute('src', data.images[0]);
      $circle[1].className = 'far fa-circle circle-icon';
      $circle[0].className = 'fas fa-circle circle-icon';

      // setInterval(switchImage, 2000);
      console.log('clicked while on position 1');
    }

    if (data.position === 2) {
      data.position = 1;
      console.log('position after switch:', data.position);
      clearInterval(intervalID);
      $charImg.setAttribute('src', data.images[1]);
      $circle[2].className = 'far fa-circle circle-icon';
      $circle[1].className = 'fas fa-circle circle-icon';

      // setInterval(switchImage, 2000);
      console.log('clicked while on position 2');
    }

    if (data.position === 3) {
      data.position = 2;
      console.log('position after switch:', data.position);
      clearInterval(intervalID);
      $charImg.setAttribute('src', data.images[2]);
      $circle[3].className = 'far fa-circle circle-icon';
      $circle[2].className = 'fas fa-circle circle-icon';

      // setInterval(switchImage, 2000);
      console.log('clicked while on position 3');
    }

    if (data.position === 4) {
      data.position = 3;
      console.log('position after switch:', data.position);
      clearInterval(intervalID);
      $charImg.setAttribute('src', data.images[4]);
      $circle[4].className = 'far fa-circle circle-icon';
      $circle[3].className = 'fas fa-circle circle-icon';

      // setInterval(switchImage, 2000);
      console.log('clicked while on position 4');
    }
  }

  // if (event.target === $rightArrow) {
  //   $circle[data.position].className = 'far fa-circle circle-icon';
  //   $circle[data.position + 1].className = 'fas fa-circle circle-icon';
  // }

});
