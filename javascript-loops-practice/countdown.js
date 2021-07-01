/* exported countdown */
function countdown(number) {
  if (number === 0) {
    return [0];
  } else {
    var newNumber = countdown(number - 1);
    newNumber.unshift(number);
  }
  return newNumber;
  /* var array = [];
  while (number >= 0) {
    array.push(number);
    number--;
  }
  return array; */
}
