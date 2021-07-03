/* exported getValues */
function getValues(object) {
  var array = [];
  for (var knees in object) {
    array.push(object[knees]);
  }
  return array;
}

// I need to create a list
// I need to build up the list
// I need to access specific values of the original list that I am trying to copy from
// once I am able to go through each one that I want, I can add them individually to my created list
// I will return my new list
