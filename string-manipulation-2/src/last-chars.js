/* exported lastChars */
function lastChars(length, string) {
  var last = '';
  if (length < string.length) {
    for (var i = string.length - length; i < string.length; i++) {
      last += string[i];
    }
  } else {
    return string;
  }
  return last;
}

// this is essentially the reverse of the last function
// i have to create a new string in which to add pieces of the original
// i have to account for length versus string.length
// i have to start at a specific spot which i can find with math
// i keep going until the end of the original string
// in the case where it is asking for more spaces than what is allotted, i can just return the original
// i need to return my new string
