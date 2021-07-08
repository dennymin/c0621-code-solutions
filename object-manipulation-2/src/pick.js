/* exported pick */
function pick(sources, keys) {
  var newObj = {};
  for (var i in sources) {
    for (var j = 0; j < keys.length; j++) {
      if (keys[j] === i && sources[i] !== undefined) {
        newObj[i] = sources[keys[j]];
      }
    }
  }
  return newObj;
}

// i am returning another object, so i should probably generate a new object to build from
// i will have to examine every property in sources
// once the property in sources matches what is in keys, i attach it to my new object
// i have to remember that keys is an array so i will need to also sift through the array in the appropriate manner and to not include a key that is undefined
// i return the new object
