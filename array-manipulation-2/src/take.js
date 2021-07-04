/* exported take */
function take(array, count) {
  var newArray = [];
  if (count < array.length) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  } else {
    return array;
  }
  return newArray;
}
// i need to send a certain amount of elements from the array to my new one
// i need a new space for my new array
// if the count is longer than the array length, i can just send the array
// if not, i can add each element one by one until i hit the count number
// i can then send my new array
