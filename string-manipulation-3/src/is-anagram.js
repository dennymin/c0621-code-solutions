/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var string1 = '';
  var string2 = '';
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      string1 += firstString[i];
    }
  }
  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      string2 += secondString[j];
    }
  }
  var anagram = string2;

  for (var x = 0; x < string1.length; x++) {
    for (var y = 0; y < string2.length; y++) {
      if (string1[x] === string2[y]) {
        anagram = anagram.replace(string1[x], '');
        break;
      }
    }
  }

  if (anagram === '') {
    return true;
  } else {
    return false;
  }
}

// anagrams are essentially the same letters but not necessarily in the same order
// learning from my last function and reading through the examples, i also need to clear out any spaces it seems
// i am also returning a true or false value
// how do i check if all the characters in the second string are the same ones in the first string
// first i make the two new strings that removes all spaces
// i feel like there are not too many anagrams in daily life, so i would like to be skeptical about if the two words are anagrams
// i will need to focus on both words but eventually focus on a letter for each word
// as i cycle through one letter, i can cycle through the other word while fixated on the one letter
// if the letter matches, then i can report that the letter matches

// after running my code the first time, i realize that this will not account for repeated characters
// once i have used a character, i somehow need to make note of it
// strings are immutable and cannot be changed
// how do i make a note that a specific letter was found in the other word
// everytime i find a match,i can cross it off
// this way, i can know that it has been used already
// by the time i get to the end of the word, everything should be crossed off if it is an anagram

// after trying again, i realized i still did not account for repeated characters accurately enough
// i needed to exit out of the loop entirely so that if the letter came up again, i would not make another mark
