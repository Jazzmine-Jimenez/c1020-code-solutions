var $h1 = document.querySelector('h1');

var intervalID = setInterval(decreaseNum, 2000);

function decreaseNum() {
  var num = $h1.textContent;
  num--;
  $h1.textContent = num;

  if (num === 0) {
    $h1.textContent = '~Earth Beeeeloooww Us~';
    clearInterval(intervalID);
  }
}
