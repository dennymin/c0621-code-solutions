/* exported initial */
function initial(array) {
  var face = [];
  for (var i = 0; i < (array.length - 1); i++) {
    face.push(array[i]);
  }
  return face;
}

// this will be the same concept as tail, but just not looping to the last one
