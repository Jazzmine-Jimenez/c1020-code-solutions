
var $popUp = document.querySelector('.pop-up');
var $background = document.querySelector('.background');

var $modalButton = document.querySelector('.modal-button');

$modalButton.addEventListener('click', function (event) {
  $popUp.className = 'pop-up opened';
  $background.className = 'on';
});

var $surveyButton = document.querySelector('.survey-button');

$surveyButton.addEventListener('click', function (event) {
  $popUp.className = 'pop-up';
  $background.className = 'background';
});
