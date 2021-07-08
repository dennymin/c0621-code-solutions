/* exported reverseWords */
function reverseWords(string) {
  function reverseString(individualWord) {
    var reversedString = '';
    for (var i = individualWord.length - 1; i >= 0; i--) {
      reversedString += individualWord[i];
    }
    return reversedString;
  }
  var wordList = '';
  var tempWord = '';
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      tempWord += string[j];
    } if (string[j] === ' ') {
      var individualReversedWord = reverseString(tempWord);
      individualReversedWord += ' ';
      wordList += individualReversedWord;
      tempWord = '';
    }
  }
  wordList += reverseString(tempWord);

  return wordList;
}

// i have to reverse the characters of a string
// however, i am actually reversing just the individual words and not the whole string
// i am returning a new string, so probably need to start with an empty one
// essentially, i need to move forward along a list, realize that when i hit a specific spot on the list, reverse what i have, add it to my own list, and then clear what i have so far
// i need to include capital letters and spaces
// obviously, at the end, there is not going to be a space for me to identify whatever it is as a new word
// so i just reverse that word and send it over to the final list
