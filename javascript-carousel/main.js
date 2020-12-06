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

// setInterval(rotate, 2000);

// Clicking on Buttons
// document.addEventListener('click', function (event) {
//   if (event.target.tagName !== 'I') return;

//   if (event.target === $circleIcon[0]) {
//     $circleIcon[data.position].className = 'far fa-circle circle-icon';
//     data.position = 4;
//     rotate(data.position);
//   } else if (event.target === $circleIcon[1]) {
//     $circleIcon[data.position].className = 'far fa-circle circle-icon';
//     data.position = 0;
//     rotate(data.position);
//   } else if (event.target === $circleIcon[2]) {
//     $circleIcon[data.position].className = 'far fa-circle circle-icon';
//     data.position = 1;
//     rotate();
//   } else if (event.target === $circleIcon[3]) {
//     $circleIcon[data.position].className = 'far fa-circle circle-icon';
//     data.position = 2;
//     rotate();
//   } else if (event.target === $circleIcon[4]) {
//     $circleIcon[data.position].className = 'far fa-circle circle-icon';
//     data.position = 3;
//     rotate();
//   }
// });

// Clicking on Arrows
document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;

  var $leftArrow = document.querySelector('.arrow-left');
  // var $rightArrow = document.querySelector('.arrow-right');

  if (event.target === $leftArrow) {
    switchLeft();
  }

//   if (event.target === $rightArrow) {
//     if (data.position === 4) {
//       $circleIcon[data.position].className = 'far fa-circle circle-icon';
//       $circleIcon[0].className = 'fas fa-circle circle-icon';
//       data.position = 4;
//       // switch();
//     } else {
//       $circleIcon[data.position].className = 'far fa-circle circle-icon';
//       $circleIcon[data.position + 1].className = 'fas fa-circle circle-icon';
//       // switch();
//     }
//   }
});

function rotate() {
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

function switchLeft() {
  if (data.position === 0) {
    $circleIcon[0].className = 'far fa-circle circle-icon';
    $circleIcon[4].className = 'fas fa-circle circle-icon';
    data.position = 4;
    $charImg.setAttribute('src', data.images[data.position]);
  } else {
    $circleIcon[data.position].className = 'far fa-circle circle-icon';
    data.position--;
    $circleIcon[data.position].className = 'fas fa-circle circle-icon';
    $charImg.setAttribute('src', data.images[data.position]);
  }
}
