var onOrOff = true;
var $lightSwitch = document.querySelector('button');
$lightSwitch.textContent = 'is my sole purpose to turn lights on?';
var $background = document.querySelector('.background');

function lightAction(event) {
  if (onOrOff === false) {
    $lightSwitch.className = 'lightbulb lightbulb-dark';
    $background.className = 'background background-dark';
    $lightSwitch.textContent = 'is my sole purpose to turn lights on?';
    onOrOff = true;
  } else if (onOrOff === true) {
    $lightSwitch.className = 'lightbulb lightbulb-light';
    $background.className = 'background background-light';
    $lightSwitch.textContent = 'of course';
    onOrOff = false;
  }
}

$lightSwitch.addEventListener('click', lightAction);
