/* exported omit */
function omit(sources, keys) {
  var newObj = {};
  var copyIt = true;
  for (var i in sources) {
    for (var j = 0; j < keys.length; j++) {
      if (i === keys[j]) {
        copyIt = false;
      }
    }
    if (copyIt === true) {
      newObj[i] = sources[i];
    }
    copyIt = true;
  }
  return newObj;
}

// i will return another object so i need to make an empty object to start with and will add to it
// i am choosing the property that is not included in keys
// basically, i have a list of what not to choose
// if a key on that list is found within sources, i need to exclude that key from the new object that i am sending
// send new object
