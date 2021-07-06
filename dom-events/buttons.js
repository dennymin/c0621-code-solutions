function handleClick(event) {
  console.log('button clicked');
  console.log('the event is: ', event);
  console.log('the event target is: ', event.target);
}
var $button = document.querySelector('.click-button');
$button.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('the event is: ', event);
  console.log('the event target is: ', event.target);
}
var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('the event is: ', event);
  console.log('the event target is: ', event.target);
}
var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
