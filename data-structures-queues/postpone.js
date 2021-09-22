/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() === 'undefined') {
    return null;
  } else {
    queue.enqueue(queue.dequeue());
  }
}
