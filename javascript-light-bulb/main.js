$circleButton = document.querySelector(".circle", )
$background = document.querySelector(".container")

$circleButton.addEventListener("click", change);

function change(event){
  var statusOfButton = $circleButton.className;
  var statusOfBackground = $background.className;

  if (statusOfButton === "circle on"){
    statusOfButton = "circle off";
    statusOfBackground = "container off";
  }
  else{
    statusOfButton = "circle on";
    statusOfBackground = "container on";
  }
$circleButton.className = statusOfButton;
$background.className = statusOfBackground;
}
