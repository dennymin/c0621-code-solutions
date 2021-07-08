// if a mistake is made, the text turns red and is underlined
// when the mistake is corrected, we move onto the next letter with normal font
var $spanElements = document.querySelectorAll('span');
var textString = '';
for (var i = 0; i < $spanElements.length; i++) {
  textString += $spanElements[i].textContent;
}
var lineIndex = 0;
$spanElements[lineIndex].className = 'current';
var $statsInfo = document.querySelector('.statistics');
var totalInputs = 0;

function compare(event) {
  if (lineIndex === $spanElements.length) {
    $statsInfo.className = 'statistics';
    var accuracy = lineIndex / totalInputs;
    $statsInfo.textContent = 'Accuracy: ' + accuracy * 100 + '%';
    return;
  }
  if (lineIndex <= $spanElements.length) {
    if (event.key === textString[lineIndex]) {
      $spanElements[lineIndex].className = 'correct';
      totalInputs++;
      lineIndex++;
      if (lineIndex <= $spanElements.length) {
        $spanElements[lineIndex].className = 'current';
      }
    } else if (event.key !== textString[lineIndex]) {
      $spanElements[lineIndex].className = 'incorrect current';
      totalInputs++;
    }
  }
}
document.addEventListener('keydown', compare);
