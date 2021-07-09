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
  if (lineIndex === $spanElements.length - 1 && event.key === textString[lineIndex]) {
    $spanElements[lineIndex].className = 'correct';
    // statistics portion
    $statsInfo.className = 'statistics';
    var accuracy = lineIndex / totalInputs;
    var accuracyInfo = document.createElement('h2');
    var accuracyInfoText = document.createTextNode('Accuracy: ' + accuracy * 100 + '%');
    $statsInfo.appendChild(accuracyInfo.appendChild(accuracyInfoText));
    $statsInfo.className = 'row statistics';
    // try again portion
    var tryAgain = document.createElement('div');
    var tryAgainQuestion = document.createElement('p');
    var tryAgainQuestionText = document.createTextNode('Try Again?');
    var tryAgainForm = document.createElement('form');
    var tryAgainButton = document.createElement('button');
    tryAgainButton.textContent = 'Yes';
    tryAgainQuestion.appendChild(tryAgainQuestionText);
    tryAgain.appendChild(tryAgainQuestion);
    tryAgainForm.appendChild(tryAgainButton);
    tryAgain.appendChild(tryAgainForm);
    tryAgainButton.className = 'choice-button';
    $statsInfo.appendChild(tryAgain);
    return;
  }
  if (lineIndex <= $spanElements.length) {
    if (event.key === textString[lineIndex]) {
      $spanElements[lineIndex].className = 'correct';
      totalInputs++;
      lineIndex++;
      if (lineIndex < $spanElements.length) {
        $spanElements[lineIndex].className = 'current';
      }
    } else if (event.key !== textString[lineIndex]) {
      $spanElements[lineIndex].className = 'incorrect current';
      totalInputs++;
    }
  }
}
document.addEventListener('keydown', compare);
