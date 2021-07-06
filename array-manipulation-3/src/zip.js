/* exported zip */
function zip(first, second) {
  var zipped = [];
  var zippedLength = first.length;
  if (first.length > second.length) {
    zippedLength = second.length;
  }

  for (var i = 0; i < zippedLength; i++) {
    var tempList = [];
    tempList.push(first[i]);
    tempList.push(second[i]);
    zipped.push(tempList);
  }

  return zipped;
}

// I am returning a new array so I need to start with an empty one
// i have to define how large the array is first which will be dictated by the shorter of the two arrays
// once i have the length of my array defined, i can start matching the parts of the list together
// i will put each of them in a box, and then put that in my new array
