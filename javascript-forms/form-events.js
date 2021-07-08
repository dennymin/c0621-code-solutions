function handleFocus(event) {
  console.log('event \'focus\' was fired');
  console.log('event target name: ', event.target.name);
}

function handleBlur(event) {
  console.log('event \'blur\' was fired');
  console.log('event target name: ', event.target.name);
}

function handleInput(event) {
  console.log('event target name: ', event.target.name);
  console.log('event target value: ', event.target.value);
}

var $name = document.forms[0].elements[0];
var $email = document.forms[0].elements[1];
var $message = document.forms[0].elements[2];

$name.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
