/* exported chunk */
function chunk(array, size) {
  var main = [];
  var sub = [];
  if (size < array.length) {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < size && i + j < array.length; j++) {
        sub.push(array[i + j]);
      }
      main.push(sub);
      i = i + size - 1;
      sub = [];
    }
  } else {
    return array;
  }
  return main;
}

// i will be sending back an array with x number of arrays inside of it, so i first start with an empty array and build up
// the first thing that i want to account for is that the size of the array is not longer than the actual array
// i will be adding a smaller list to my main list and i need to be able to keep track of how big that small list is, and my place in the original array as well
// while i add to the smaller list, i need to know when to cut it off, and then start another small list
// i keep adding small lists until i am out of elements to add to the list
