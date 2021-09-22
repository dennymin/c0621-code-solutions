/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  } else {
    const first = queue.dequeue();
    const second = queue.peek();
    if (second === undefined) {
      return first;
    }
    if (first === second) {
      queue.enqueue(queue.dequeue());
      return second;
    }
    if (first < second) {
      queue.enqueue(queue.dequeue());
      return first;
    } else {
      queue.enqueue(first);
      return queue.dequeue();
    }
  }
}
