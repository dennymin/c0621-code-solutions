var $picturesList = document.querySelectorAll('.image-container > img');
var $pictureTrackerList = document.querySelectorAll('.picture-tracker > i');
var $pictureTracker = document.querySelector('.picture-tracker');
var $pLIndex = 0;

var $leftButton = document.querySelector('.fa-chevron-left');
var $rightButton = document.querySelector('.fa-chevron-right');

function reveal(elementDOM, circle) {
  elementDOM.className = '';
  circle.className = 'fas fa-circle';
}
function hide(elementDOM, circle) {
  elementDOM.className = 'hidden';
  circle.className = 'far fa-circle';
}

function leftButtonClick(event) {
  if ($pLIndex === 0) {
    hide($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
    $pLIndex = 4;
    reveal($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
  } else {
    hide($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
    $pLIndex--;
    reveal($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
  }
  clearInterval(timer);
  timer = setInterval(carouselTransition, 3000);
}

function rightButtonClick(event) {
  if ($pLIndex === 4) {
    hide($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
    $pLIndex = 0;
    reveal($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
  } else {
    hide($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
    $pLIndex++;
    reveal($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
  }
  clearInterval(timer);
  timer = setInterval(carouselTransition, 3000);
}

function carouselTransition() {
  if ($pLIndex === 4) {
    hide($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
    $pLIndex = 0;
    reveal($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
  } else {
    hide($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
    $pLIndex++;
    reveal($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
  }
}
var timer = setInterval(carouselTransition, 3000);

$leftButton.addEventListener('click', leftButtonClick);
$rightButton.addEventListener('click', rightButtonClick);

function directSwitch(event) {
  if (event.target && event.target.nodeName === 'I') {
    var targetPicNumber = event.target.getAttribute('value');
    hide($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
    $pLIndex = targetPicNumber;
    reveal($picturesList[$pLIndex], $pictureTrackerList[$pLIndex]);
    clearInterval(timer);
    timer = setInterval(carouselTransition, 3000);
  }
}

$pictureTracker.addEventListener('click', directSwitch);
