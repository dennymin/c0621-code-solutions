/* exported flatten */
function flatten(array) {
  var flattened = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        flattened.push(array[i][j]);
      }
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened;
}

// i am returning a new array so i need to start with an empty one
// essentially i am working with a list of lists
// all i need to do is go through the main list and go through each sublist on that main list
// once i reach a sublist, i add each part of that list to my new list
// i then move onto the next sublist
// once i have finished going through all the sublists, this will mean that the main list will have been finished
// i can then send my new list
