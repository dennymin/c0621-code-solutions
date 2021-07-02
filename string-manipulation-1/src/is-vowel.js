/* exported isVowel */
function isVowel(character) {
  var char = character.toLowerCase();
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}

// first, I want to make sure that no matter what is inputted, I will be able to
// distinguish that it is a vowel, regardless of upper or lower case so I will convert
// it to lower case right away
// then I will compare it to the vowels to see if it is one of them
