var $circleIcon = document.querySelectorAll('.circle-icon');
var $charImg = document.querySelector('.character-img');

var data = {
  position: 0,
  images: ['images/025.png',
    'images/001.png',
    'images/039.png',
    'images/004.png',
    'images/007.png'
  ]
};

// setInterval(switchImage, 2000);

function switchImage() {
  if (data.position === 4) {
    $circleIcon[data.position].className = 'far fa-circle circle-icon';
    data.position = 0;
    $charImg.setAttribute('src', data.images[data.position]);
    $circleIcon[data.position].className = 'fas fa-circle circle-icon';
  } else {
    data.position++;
    $charImg.setAttribute('src', data.images[data.position]);
    $circleIcon[data.position - 1].className = 'far fa-circle circle-icon';
    $circleIcon[data.position].className = 'fas fa-circle circle-icon';
  }

}

// Clicking on Buttons
document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;

  if (event.target === $circleIcon[0]) {
    $circleIcon[data.position].className = 'far fa-circle circle-icon';
    data.position = 4;
    switchImage();
  } else if (event.target === $circleIcon[1]) {
    $circleIcon[data.position].className = 'far fa-circle circle-icon';
    data.position = 0;
    switchImage();
  } else if (event.target === $circleIcon[2]) {
    $circleIcon[data.position].className = 'far fa-circle circle-icon';
    data.position = 1;
    switchImage();
  } else if (event.target === $circleIcon[3]) {
    $circleIcon[data.position].className = 'far fa-circle circle-icon';
    data.position = 2;
    switchImage();
  } else if (event.target === $circleIcon[4]) {
    $circleIcon[data.position].className = 'far fa-circle circle-icon';
    data.position = 3;
    switchImage();
  }
});

// Clicking on Arrows
document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;

  var $leftArrow = document.querySelector('.arrow-left');
  var $rightArrow = document.querySelector('.arrow-right');

  if (event.target === $leftArrow) {
    console.log(data.position);
    leftArrow(data.position);
    // if (data.position === 0) {
    //   $circleIcon[data.position].className = 'far fa-circle circle-icon';
    //   $circleIcon[4].className = 'fas fa-circle circle-icon';
    //   data.position = 3;
    //   switchImage();

    // } else if (data.position === 1) {
    //   $circleIcon[data.position].className = 'far fa-circle circle-icon';
    //   $circleIcon[data.position - 1].className = 'fas fa-circle circle-icon';
    //   data.position = 4;
    //   switchImage();

    // } else {
    //   $circleIcon[data.position].className = 'far fa-circle circle-icon';
    //   $circleIcon[data.position - 1].className = 'fas fa-circle circle-icon';
    //   data.position = data.position - 2;
    //   switchImage();
    // }
  }
  if (event.target === $rightArrow) {
    if (data.position === 4) {
      $circleIcon[data.position].className = 'far fa-circle circle-icon';
      $circleIcon[0].className = 'fas fa-circle circle-icon';
      data.position = 4;
      switchImage();
    } else {
      $circleIcon[data.position].className = 'far fa-circle circle-icon';
      $circleIcon[data.position + 1].className = 'fas fa-circle circle-icon';
      switchImage();
    }
  }
});

function leftArrow(position) {
  if (position === 0) {
    console.log('inside position 0 conditional');
    $circleIcon[0].className = 'far fa-circle circle-icon';
    $circleIcon[4].className = 'fas fa-circle circle-icon';
    position = 4;
    switchImage();
  }
  // else if (position === 1) {
  //   console.log('inside position 1 conditional');
  //   console.log(position);
  //   $circleIcon[position].className = 'far fa-circle circle-icon';
  //   $circleIcon[position - 1].className = 'fas fa-circle circle-icon';
  //   position = 0;
  //   switchImage();
  // }
  // else {
  //   $circleIcon[position].className = 'far fa-circle circle-icon';
  //   $circleIcon[position - 1].className = 'fas fa-circle circle-icon';
  //   data.position = position - 2;
  //   switchImage();
  // }
}
