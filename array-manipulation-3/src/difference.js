/* exported difference */
function difference(first, second) {
  var differences = [];
  for (var i1 = 0; i1 < first.length; i1++) {
    var toSendOrNotToSend = true;
    for (var i2 = 0; i2 < second.length; i2++) {
      if (first[i1] === second[i2]) {
        toSendOrNotToSend = false;
      }
    }
    if (toSendOrNotToSend === true) {
      differences.push(first[i1]);
    }
  }
  for (var j1 = 0; j1 < second.length; j1++) {
    var toSendOrNotToSend2 = true;
    for (var j2 = 0; j2 < first.length; j2++) {
      if (second[j1] === first[j2]) {
        toSendOrNotToSend2 = false;
      }
    }
    if (toSendOrNotToSend2 === true) {
      differences.push(second[j1]);
    }
  }
  return differences;
}

// i am returning a new array so i need an empty one to start with
// i am checking the first list first, and then the second one
// i need to check the individual items of the first list to the individual items of the second list, and then vice versa
// if something matches, then i do not send it
// if it is not found in the other list, then i add it to my new list
// i do this twice, once for each list
