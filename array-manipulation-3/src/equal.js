/* exported equal */
function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first[j] !== second[j]) {
      return false;
    }
  }
  return true;
}

// i am returning a true or false value
// i need to compare the first and second arrays to see if they are equal
// i need to examine and compare each array index for index
// i need to account for differing sizes of ararys
// i can account for that by doing two loops where i compare the first to the second and then the second to the first
// if at any point theres a discrepancy, i can immediately decide that they are not equal
// if i am able to go through both lists with everything matching, i will automatically know that it is good
