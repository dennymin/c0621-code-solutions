/* exported reverseWord */
function reverseWord(word) {
  var drow = '';
  for (var i = 1; i <= word.length; i++) {
    drow = drow + word[word.length - i];
  }
  return drow;
}

// since strings cannot be changed, I knew I would need to add parts of the word to
// the string that I was going to send back
// I wanted to start with an empty string first
// I knew that as I was creating my new string, I would have to parse backwards through
// the old string so I sent up a forloop to do exactly that
// by the time I got to the end of my word, I was able to construct the new string
// return it
