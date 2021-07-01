/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  var newWord = '';
  for (var i = 0; i < words.length; i++) {
    newWord = words[i] + suffix;
    newArray.push(newWord);
  }
  return newArray;
}
