/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
      counter++;
    }
  }
  return counter;
}

// i need to return a number
// i will need to count how many vowels so I will probably have a counter
// i need to parse through the string and then increase my counter whenever a vowel is encountered
// i will return the counter after i have parsed through the string
