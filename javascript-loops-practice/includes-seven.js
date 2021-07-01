/* exported includesSeven */
function includesSeven(array) {
  var theTruth = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      theTruth = true;
    }
  }
  return theTruth;
}
