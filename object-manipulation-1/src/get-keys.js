/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (var bees in object) {
    array.push(bees);
  }
  return array;
}

// I need to return a list
// first, I need an empty list so that I can build upon it
// next, I need to go through the list I am trying to obtain items from
// the challenge will be to access the inner parts of this list
// i then need to return my list that I have created
