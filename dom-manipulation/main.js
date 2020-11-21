var numberOfClicks = 0;
var $hotButton = document.querySelector(".hot-button");
var $clickCount = document.querySelector(".click-count");

function countingClicks(event) {
  numberOfClicks += 1;
  $clickCount.textContent = "Clicks:" + numberOfClicks;
  var temp;
  if(numberOfClicks < 4){
    temp = "cold";
  }
  else if (numberOfClicks < 7){
    temp = "cool";
  }
  else if (numberOfClicks < 10) {
    temp = "tepid";
  }
  else if (numberOfClicks < 10) {
    temp = "warm";
  }
  else if (numberOfClicks < 10) {
    temp = "hot";
  }
  else{
    temp = "nuclear";
  }

  $hotButton.className = "hot-button " + temp;
};

$hotButton.addEventListener("click", countingClicks);
