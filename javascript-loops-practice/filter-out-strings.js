/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (Number.isInteger(values[i])) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
