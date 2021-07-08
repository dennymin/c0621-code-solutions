/* exported capitalizeWord */
function capitalizeWord(word) {
  var cap = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    cap += word[i].toLowerCase();
  }
  if (cap === 'Javascript') {
    return 'JavaScript';
  }
  return cap;
}

// I am returning a new word, so i want to make a space for that
// I will have to examine every letter of the original word
// i will make the first letter capital and all the other ones lowercase
// i will return my new word
// for the special case of javascript, i will compare it to the correct form
// if it matches the correct form, i will send it
// if not, i will edit it so that it does have the correct form
