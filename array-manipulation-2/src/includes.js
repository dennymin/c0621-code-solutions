/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// i will be returning a true or false value
// as soon as i find the value it is done
// if not, then i return false
