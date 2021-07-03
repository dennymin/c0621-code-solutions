/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } if (i === secondIndex) {
      newString += string[firstIndex];
    } if (i !== firstIndex && i !== secondIndex) {
      newString += string[i];
    }
  }
  return newString;
}

// since i will be returning a new string, i should probably create an empty string
// i need to add each letter to the new string
// however, once i get to the specific index, it needs to swap with the other index
// i then need to return my new string
