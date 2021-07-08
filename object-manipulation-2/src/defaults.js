/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}

// the target object will have added properties from the source object
// i will have to examine the properties of the source object
// i need to avoid updating any properties of target that already exist
// to do that, i need to compare the individual properties of target to source
