var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {

  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < $tabElements.length; i++) {

    if ($tabElements[i] === event.target) {
      $tabElements[i].className = 'tab active';
    } else {
      $tabElements[i].className = 'tab';
    }
  }

  var viewName = event.target.getAttribute('data-view');

  for (var x = 0; x < $viewElements.length; x++) {
    if ($viewElements[x].getAttribute('data-view') === viewName) {
      $viewElements[x].className = 'view';
    } else {
      $viewElements[x].className = 'view hidden';
    }
  }
});
