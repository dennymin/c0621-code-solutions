/* exported getLength */

function getLength(list) {
  let counter = 1;
  if (list.next === null) {
    return counter;
  }
  while (list.next !== null) {
    list = list.next;
    counter++;
  }
  return counter;
}
