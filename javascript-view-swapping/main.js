var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabSwap);

function tabSwap(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tabElements.length; i++) {
    if (event.target === $tabElements[i]) {
      event.target.className = 'tab active';
    } else {
      $tabElements[i].className = 'tab';
    }
  }
  var $activeView = event.target.getAttribute('data-view');
  for (var j = 0; j < $viewElements.length; j++) {
    if ($viewElements[j].getAttribute('data-view') === $activeView) {
      $viewElements[j].className = 'view';
    } else {
      $viewElements[j].className = 'view hidden';
    }
  }
}
