var isOn = true;

$circleButton = document.querySelector(".circle")
$background = document.querySelector(".container")

$circleButton.addEventListener("click", change);

function change(event){
  isOn = !isOn;
  if (isOn){
    $circleButton.className = "circle on";
    $background.className = "container on";
  }
  else{
    $circleButton.className = "circle off";
    $background.className = "container off";
  }
}
