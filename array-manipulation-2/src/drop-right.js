/* exported dropRight */
function dropRight(array, count) {
  var newAr = [];
  if (count < array.length) {
    for (var i = 0; i < array.length - count; i++) {
      newAr.push(array[i]);
    }
  } else {
    return array;
  }
  return newAr;
}

// returning new array, so create new one
// similar to last one but challenge is knowing when to stop looping
// need to consider when count is longer than array.length
// return the new array eventually
