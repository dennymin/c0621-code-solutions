/* exported isUpperCased */
function isUpperCased(word) {
  if (word !== word.toUpperCase()) {
    return false;
  } else {
    return true;
  }
}

// my thought process is that I will be returning a true or false value
// I can compare the word to itself as an upper cased version and then return it
