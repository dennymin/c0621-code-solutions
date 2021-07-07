var $modal = document.querySelector('.option-screen');
var $buttonBlue = document.querySelector('.blue');
var $buttonRed = document.querySelector('.red');
function turnOn(event) {
  $modal.className = 'modal';
}

function turnOff(event) {
  $modal.className = 'modal-hidden';
}

$buttonBlue.addEventListener('click', turnOn);
$buttonRed.addEventListener('click', turnOff);
