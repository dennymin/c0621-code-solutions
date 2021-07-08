/* exported unique */
function unique(array) {
  var uniqueBabies = [];
  for (var i = 0; i < array.length; i++) {
    var uniqueOrNot = true;
    for (var uniqueBabiesIndex = 0; uniqueBabiesIndex < uniqueBabies.length; uniqueBabiesIndex++) {
      if (array[i] === uniqueBabies[uniqueBabiesIndex]) {
        uniqueOrNot = false;
      }
    }
    if (uniqueOrNot === true) {
      uniqueBabies.push(array[i]);
    }
  }
  return uniqueBabies;
}

// i will be returning a new array so i have to start with an empty one
// with the original list that i have, i need to item by item
// i somehow need to make a check to see if the item that i am about to add is already in the list
