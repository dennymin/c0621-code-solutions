/* exported takeRight */
function takeRight(array, count) {
  var rray = [];
  if (count < array.length) {
    for (var i = array.length - count; i < array.length; i++) {
      rray.push(array[i]);
    }
  } else {
    return array;
  }
  return rray;
}

// return new array, so create new one
// need to start at a certain spot on the list
// add starting from that certain spot
// need to account for longer counts than lists
// return what i have added
