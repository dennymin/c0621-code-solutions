/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }
  let first = queue.dequeue();
  let second = queue.peek();
  if (typeof second === 'undefined') {
    return first;
  }
  let cycling = false;
  while (cycling === false) {
    if (first <= second) {
      cycling = true;
      return first;
    } else {
      queue.enqueue(first);
      first = queue.dequeue();
      second = queue.peek();
    }
  }
}
