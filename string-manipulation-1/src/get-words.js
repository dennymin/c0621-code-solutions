/* exported getWords */
function getWords(string) {
  var array = [];
  var word = '';
  if (string === '') {
    return [];
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      word = word + string[i];
    } if (string[i] === ' ') {
      array.push(word);
      word = '';
    }
  }
  array.push(word);
  return array;
}

// I will be getting a string
// from this string, I need to be able identify which are words and which are not
// This string will have a specific structure so it will be helpful
// first, I need somewhere to store my new words
// I will need to parse through the string and while I examine every letter, add
// it to a space so I can see what I want to add
// once I encounter a space, I want to add the word and not the space to my array
// since the last word will not have a space at the end, I will attach it regardless
// I will return my new array

// I realized that after running my code, the
