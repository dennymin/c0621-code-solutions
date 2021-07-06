/* exported tail */
function tail(array) {
  var tailBone = [];
  for (var i = 1; i < array.length; i++) {
    tailBone.push(array[i]);
  }
  return tailBone;
}

// I need to return everything that's not the first item in the element
// I cannot use my usual methods for this
// I can create a new empty array
// I can add new elements to that array using .push
// I can use a loop to loop after the first element of the original array
// return the new array that has the looped values there
