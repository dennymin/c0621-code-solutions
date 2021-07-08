/* exported intersection */
function intersection(first, second) {
  var similarities = [];
  for (var i1 = 0; i1 < first.length; i1++) {
    var toSendOrNotToSend = false;
    for (var i2 = 0; i2 < second.length; i2++) {
      if (first[i1] === second[i2]) {
        toSendOrNotToSend = true;
      }
    }
    if (toSendOrNotToSend === true) {
      similarities.push(first[i1]);
    }
  }
  return similarities;
}

// this has a similar system to difference
// however, instead of finding differences we need to find where they are the same
