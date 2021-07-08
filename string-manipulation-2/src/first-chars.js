/* exported firstChars */
function firstChars(length, string) {
  var shortened = '';
  if (length < string.length) {
    for (var i = 0; i < length; i++) {
      shortened += string[i];
    }
  } else {
    shortened = string;
  }
  return shortened;
}
// the idea will be similar to the truncate function except without the elipses
// basically i have to account for the fact that length could be longer than that of the string
// i think it would be best to decide at the start if length is longer than the string length or the other way around
// once i have that, i will have the length for which i need to loop through
// i can then return the word that i want
