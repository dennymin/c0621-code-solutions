/* exported ransomCase */
function ransomCase(string) {
  var sTrInG = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      sTrInG += string[i].toLowerCase();
    } else {
      sTrInG += string[i].toUpperCase();
    }
  }
  return sTrInG;
}

// i need to return a new string, so i will create a new one as an empty space
// the new word will be entirely the same except for the capital letters
// since this is a string, i won't actually be able to copy the string and then just capitalize every second letter
// as i create the new string, i will have to capitalize every other letter and lowercase the ones between
// i then return the new word
