/* exported toObject */
function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

// so i will need to return an object
// i will be given a list (array)
// i will need to turn the first item into a key
// i will need to turn the second item into the corresponding value for that key
// first I will create an empty object that will be filled with the things that I need to send
// the first part of the array will be the key of my object, so I need to set that
// the second part of the array will be the value so I need to set that as well
// once I have those things set, I can send the whole object with the new keyvalue that I created
