/* exported isPalindromic */
function isPalindromic(string) {
  var gnirts = '';
  var trueString = '';
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      trueString += string[j];
    }
  }
  for (var i = trueString.length - 1; i >= 0; i--) {
    if (trueString[i] !== ' ') {
      gnirts += trueString[i];
    }
  }
  if (gnirts === trueString) {
    return true;
  } else {
    return false;
  }
}

// i only need to see if it is the same
// i will have to compare the string with itself but in reverse
// i need to generate the string itself in reverse
// i need to assign that reversed string to something else
// then i can compare if they are equal

// i did not know i had to account for spaces
// i will need to remove all spaces from the string before i make any comparisons
// once i have removed the spaces then i can start recording the reverse string of that new string and then compare the tow
