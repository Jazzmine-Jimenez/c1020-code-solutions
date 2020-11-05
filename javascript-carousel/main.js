var intervalID = setInterval(switchImage, 2000);
var images = ['images/001.png', 'images/039.png', 'images/004.png', 'images/007.png', 'images/025.png'];
var $circle = document.querySelectorAll('.circle-icon');
var $charImg = document.querySelector('.characterImg');
var position = 0;

function switchImage() {
  $charImg.setAttribute('src', images[position]);
  if (position === 0) { var _class = 'first'; }
  if (position === 1) { _class = 'second'; }
  if (position === 2) { _class = 'third'; }
  if (position === 3) { _class = 'fourth'; }
  if (position === 4) { _class = 'fifth'; }

  if (position < images.length - 1) {
    $circle[position].className = 'far fa-circle circle-icon ' + _class;
    $circle[position + 1].className = 'fas fa-circle circle-icon ';
    position++;
  } else {
    position = 0;
    $circle[4].className = 'far fa-circle circle-icon fourth';
    $circle[position].className = 'fas fa-circle circle-icon' + _class;
  }
  clearInterval(intervalID);
}

var $circle0 = document.querySelector('.first');
var $circle1 = document.querySelector('.second');
var $circle2 = document.querySelector('.third');
var $circle3 = document.querySelector('.fourth');
var $circle4 = document.querySelector('.fifth');

document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;

  if (event.target === $circle0) {
    position = 4;
    $charImg.setAttribute('src', images[position]);

    $circle0.className = 'fas fa-circle circle-icon first';
    $circle1.className = 'far fa-circle circle-icon second';
    $circle2.className = 'far fa-circle circle-icon third';
    $circle3.className = 'far fa-circle circle-icon fourth';
    $circle4.className = 'far fa-circle circle-icon fifth';
  }

  if (event.target === $circle1) {
    position = 0;
    $charImg.setAttribute('src', images[position]);
    $circle0.className = 'far fa-circle circle-icon first';
    $circle1.className = 'fas fa-circle circle-icon second';
    $circle2.className = 'far fa-circle circle-icon third';
    $circle3.className = 'far fa-circle circle-icon fourth';
    $circle4.className = 'far fa-circle circle-icon fifth';
  }

  if (event.target === $circle2) {
    position = 1;
    $charImg.setAttribute('src', images[position]);

    $circle0.className = 'far fa-circle circle-icon first';
    $circle1.className = 'far fa-circle circle-icon second';
    $circle2.className = 'fas fa-circle circle-icon third';
    $circle3.className = 'far fa-circle circle-icon fourth';
    $circle4.className = 'far fa-circle circle-icon fifth';
  }

  if (event.target === $circle3) {
    position = 2;
    $charImg.setAttribute('src', images[position]);

    $circle0.className = 'far fa-circle circle-icon first';
    $circle1.className = 'far fa-circle circle-icon second';
    $circle2.className = 'far fa-circle circle-icon third';
    $circle3.className = 'fas fa-circle circle-icon fourth';
    $circle4.className = 'far fa-circle circle-icon fifth';
  }

  if (event.target === $circle4) {
    position = 3;
    $charImg.setAttribute('src', images[position]);

    $circle0.className = 'far fa-circle circle-icon first';
    $circle1.className = 'far fa-circle circle-icon second';
    $circle2.className = 'far fa-circle circle-icon third';
    $circle3.className = 'far fa-circle circle-icon fourth';
    $circle4.className = 'fas fa-circle circle-icon fifth';
  }
});

document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;

  var $leftArrow = document.querySelector('.arrow-left');
  var $rightArrow = document.querySelector('.arrow-right');

  if (event.target === $leftArrow) {

    if (images[0]) {
      $charImg.setAttribute('src', images[0]);
      $circle0.className = 'far fa-circle circle-icon';
      $circle4.className = 'fas fa-circle circle-icon';
    }

    // if (event.target === $circle1) {
    //   $charImg.setAttribute('src', images[1]);
    //   $circle1.className = 'far fa-circle circle-icon';
    //   $circle0.className = 'fas fa-circle circle-icon';
    // }

    // if (event.target === $circle2) {
    //   $circle[2].className = 'far fa-circle circle-icon';
    //   $circle[1].className = 'fas fa-circle circle-icon';
    // }

    // $circle[position].className = 'far fa-circle circle-icon';
    // $circle[position - 1].className = 'fas fa-circle circle-icon';

    // if (position === 1) $charImg.setAttribute('src', images[4]);
    // else $charImg.setAttribute('src', images[position - 1]);

    // if (position === 2) $charImg.setAttribute('src', images[1]);
    // else $charImg.setAttribute('src', images[position - 1]);

  }

  if (event.target === $rightArrow) {
    $circle[position].className = 'far fa-circle circle-icon';
    $circle[position + 1].className = 'fas fa-circle circle-icon';
  }

});
