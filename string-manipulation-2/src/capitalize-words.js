/* exported capitalizeWords */
function capitalizeWords(string) {
  var current = '';
  var corrected = '';
  var final = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      corrected += current[0].toUpperCase();
      for (var j = 1; j < current.length; j++) {
        corrected += current[j].toLowerCase();
      }
      corrected += ' ';
      final += corrected;
      corrected = '';
      current = '';
    } else {
      current += string[i];
    }
  }
  corrected += current[0].toUpperCase();
  for (var k = 1; k < current.length; k++) {
    corrected += current[k].toLowerCase();
  }
  final += corrected;
  return final;
}

// i am returning a new string, so i will have to create a new empty string
// i need to identify what makes a new word
// once i am able to distinguish what defines a new word, i have to add that word to my new string
// i may actually have to create another empty string in which to put a newer string
// this is so that i can convert the first letter to capital and the rest to lowercase
// I then have to add the last part since there is no space afterwards to distinguish new words
// i return my new new string
