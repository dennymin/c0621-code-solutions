/* exported truncate */
function truncate(length, string) {
  var cut = '';
  if (length < string.length) {
    for (var i = 0; i < length; i++) {
      cut += string[i];
    }
  } else {
    for (var j = 0; j < string.length; j++) {
      cut += string[j];
    }
  }
  cut += '...';
  return cut;
}

// i want to return a new string so i will probably want to start froms cratch first
// i am only adding a certain amount of letters, so i will need to identify each letter that i want to add
// i will stop after a certain number of letters so i need to make sure i am counting
// once i have all the letters from the original string that i want, i can add whatever it is that i want to add
// i return the new word

// I did not think to account for lengths that are longer than the strings
// if the length is longer than the string, than i will have to find a way to account for that
// i can do this with an if statement that will go down one path versus another depending on the length of length
