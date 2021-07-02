/* exported capitalize */
function capitalize(word) {
  var newWord = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord = newWord + word[i].toLowerCase();
  }
  return newWord;
}

// i will be returning a new word
// my thought process is to first identify the first letter and then capitalize it
// my next thought is to parse through the rest of the word and to return those as lowercase
// it is important to make sure that my for loop starts after the first letter because we already have that one
// lastly, I need to return the new word that I make
