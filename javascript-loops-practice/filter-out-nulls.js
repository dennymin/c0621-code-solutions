/* exported filterOutNulls */
function filterOutNulls(values) {
  for (var i = 0; i < values.length; i++) {
    if (values[i] === null) {
      values.splice(i, 1);
      i--;
    }
  }
  return values;
}
