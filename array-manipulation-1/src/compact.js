/* exported compact */
function compact(array) {
  var array1 = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      array1.push(array[i]);
    }
  }
  return array1;
}

// reading the compact test, it seems that
// I need to go through each index
// and not add it if it is any of false, null
// NaN, 0, undefined, empty string
// I need to return truthful elements
// I need to exclude all falsy elements

// I knew I needed to add all elements that were not falsy, but I was having so much trouble with
// determining how to find that
// This function took so long to do because even though I knew the condition that I wanted, I was
// unfamiliar with how to get the syntax for it
// After a lot of trial and error, I realized that the if statement condition would coerce whatever I put in
// This was the key as I was having trouble with how to separate NaN from alphas
