
var $popUp = document.querySelector(".pop-up-container");
var $background = document.querySelector(".container")

var $modalButton = document.querySelector(".modal-button")

$modalButton.addEventListener("click", function(event){
  $popUp.className = "pop-up-container opened";
  $background.className = "container open";
  });


var $surveyButton = document.querySelector(".survey-button")
$surveyButton.addEventListener("click", function(event){
  $popUp.className = "pop-up-container";
  $background.className = "container";
});
