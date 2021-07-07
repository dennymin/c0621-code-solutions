/* exported union */
function union(first, second) {
  var unionArray = [];
  for (var i = 0; i < first.length; i++) {
    var sendOrNot = true;
    for (var j = 0; j < unionArray.length; j++) {
      if (first[i] === unionArray[j]) {
        sendOrNot = false;
      }
    }
    if (sendOrNot === true) {
      unionArray.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    sendOrNot = true;
    for (var y = 0; y < unionArray.length; y++) {
      if (second[x] === unionArray[y]) {
        sendOrNot = false;
      }
    }
    if (sendOrNot === true) {
      unionArray.push(second[x]);
    }
  }
  return unionArray;
}

// i am returning a new array so i need to start with an empty one first
// i have to go through one list first and then the second
// when i go through one list, i have to make sure that the item i am about to add has not already been added to my list
// when i go through the second list, i really only have to make sure that the item i am examining has not been on my new list
