/* exported invert */
function invert(source) {
  var newObj = {};
  for (var keys in source) {
    newObj[source[keys]] = keys;
  }
  return newObj;
}

// i need to flip the source so that the keys become values and the values become keys
// i need to create a new object first with which to work with
// as i go through the original object, i will be adding to the new object
// what i am adding to the new object is the flipped key value
// i have to make sure that the new object key is the original object value
// and that the new object value is the corresponding key of the original object
// return the new object
