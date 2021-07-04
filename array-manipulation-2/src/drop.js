/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (count < array.length) {
    for (var i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else {
    return array;
  }
  return newArray;
}

// I am sending back another array, so i will need to make a new one from which to start
// like the previous function, i need to account for a count that is larger than the array length
// i need to start at a place that has bypassed the count
// i can do that by starting the index at the count
