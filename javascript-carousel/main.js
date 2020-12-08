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

setInterval(rotateCarousel, 3000);

// Clicking on Buttons
document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;

  for (let i = 0; i < $circleIcon.length; i++) {
    if (event.target === $circleIcon[i]) {
      data.position = i;
    }
    ImageCircle(data.position);
  }
});

// Clicking on Arrows
document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;

  if (event.target.matches('.arrow-left')) {
    switchLeft();
  }

  if (event.target.matches('.arrow-right')) {
    rotateCarousel();
  }
});

function rotateCarousel() {
  if (data.position === 4) {
    data.position = 0;
    ImageCircle(data.position);
  } else {
    data.position++;
    ImageCircle(data.position);
  }
}

function switchLeft() {
  if (data.position === 0) {
    data.position = 4;
  } else {
    data.position--;
  }
  ImageCircle(data.position);
}

function ImageCircle(position) {
  $circleIcon[position].className = 'fas fa-circle circle-icon';
  $charImg.setAttribute('src', data.images[position]);
  for (let i = 0; i < $circleIcon.length; i++) {
    if (position !== i) {
      $circleIcon[i].className = 'far fa-circle circle-icon';
    }
  }
}
