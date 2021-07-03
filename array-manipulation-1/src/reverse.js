/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// reverse order
// first i want to create an empty string to occupy it with new elements
// as i go down the list of the original list, i need to create segments of my
// my new list
// this will involve a forloop that is able to go down the original array
// and then simultaneously add to my new list
