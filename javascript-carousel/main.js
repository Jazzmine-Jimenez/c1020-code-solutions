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
    data.position++;
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
}

document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;

  if (event.target === $circle[0]) {
    clearInterval(intervalID);
    $charImg.setAttribute('src', data.images[0]);
    $circle[0].className = 'fas fa-circle circle-icon first';
    data.position = 0;

    $circle[1].className = 'far fa-circle circle-icon';
    $circle[2].className = 'far fa-circle circle-icon';
    $circle[3].className = 'far fa-circle circle-icon';
    $circle[4].className = 'far fa-circle circle-icon';

    setInterval(switchImage, 2000);
  }

  if (event.target === $circle[1]) {
    clearInterval(intervalID);
    $charImg.setAttribute('src', data.images[1]);
    $circle[1].className = 'fas fa-circle circle-icon first';
    data.position = 1;

    $circle[0].className = 'far fa-circle circle-icon';
    $circle[2].className = 'far fa-circle circle-icon';
    $circle[3].className = 'far fa-circle circle-icon';
    $circle[4].className = 'far fa-circle circle-icon';

    setInterval(switchImage, 2000);
  }

  if (event.target === $circle[2]) {
    clearInterval(intervalID);
    $charImg.setAttribute('src', data.images[2]);
    $circle[2].className = 'fas fa-circle circle-icon first';
    data.position = 2;

    $circle[0].className = 'far fa-circle circle-icon';
    $circle[1].className = 'far fa-circle circle-icon';
    $circle[3].className = 'far fa-circle circle-icon';
    $circle[4].className = 'far fa-circle circle-icon';

    setInterval(switchImage, 2000);
  }

  if (event.target === $circle[3]) {
    clearInterval(intervalID);
    $charImg.setAttribute('src', data.images[3]);
    $circle[3].className = 'fas fa-circle circle-icon first';
    data.position = 3;

    $circle[0].className = 'far fa-circle circle-icon';
    $circle[1].className = 'far fa-circle circle-icon';
    $circle[2].className = 'far fa-circle circle-icon';
    $circle[4].className = 'far fa-circle circle-icon';

    setInterval(switchImage, 2000);
  }

  if (event.target === $circle[4]) {
    clearInterval(intervalID);
    $charImg.setAttribute('src', data.images[4]);
    $circle[4].className = 'fas fa-circle circle-icon first';
    data.position = 4;

    $circle[0].className = 'far fa-circle circle-icon';
    $circle[1].className = 'far fa-circle circle-icon';
    $circle[2].className = 'far fa-circle circle-icon';
    $circle[3].className = 'far fa-circle circle-icon';

    setInterval(switchImage, 2000);
  }

});

document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;

  var $leftArrow = document.querySelector('.arrow-left');
  var $rightArrow = document.querySelector('.arrow-right');

  if (event.target === $leftArrow) {

    console.log('position:', data.position);

    // if (data.position === 0) {
    //   clearInterval(intervalID);
    //   $charImg.setAttribute('src', data.images[4]);
    //   $circle[0].className = 'far fa-circle circle-icon';
    //   $circle[4].className = 'fas fa-circle circle-icon';
    //   data.position = 4;
    //   setInterval(switchImage, 2000);
    // }

    if (data.position === 1) {
      clearInterval(intervalID);
      $charImg.setAttribute('src', data.images[4]);
      $circle[1].className = 'far fa-circle circle-icon';
      $circle[4].className = 'fas fa-circle circle-icon';
      data.position = 1;
      setInterval(switchImage, 2000);
    }

    if (data.position === 2) {
      clearInterval(intervalID);
      $charImg.setAttribute('src', data.images[0]);
      $circle[1].className = 'far fa-circle circle-icon';
      $circle[0].className = 'fas fa-circle circle-icon';
      data.position = 1;
      setInterval(switchImage, 2000);
    }

    // if (event.target === $circle1) {
    //   $charImg.setAttribute('src', data.images[1]);
    //   $circle1.className = 'far fa-circle circle-icon';
    //   $circle0.className = 'fas fa-circle circle-icon';
    // }

    // if (event.target === $circle2) {
    //   $circle[2].className = 'far fa-circle circle-icon';
    //   $circle[1].className = 'fas fa-circle circle-icon';
    // }

    // $circle[data.position].className = 'far fa-circle circle-icon';
    // $circle[data.position - 1].className = 'fas fa-circle circle-icon';

    // if (data.position === 1) $charImg.setAttribute('src', data.images[4]);
    // else $charImg.setAttribute('src', data.images[data.position - 1]);

    // if (data.position === 2) $charImg.setAttribute('src', data.images[1]);
    // else $charImg.setAttribute('src', data.images[data.position - 1]);

  }

  if (event.target === $rightArrow) {
    $circle[data.position].className = 'far fa-circle circle-icon';
    $circle[data.position + 1].className = 'fas fa-circle circle-icon';
  }

});
