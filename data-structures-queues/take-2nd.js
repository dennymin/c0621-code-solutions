/* exported take2nd */

function take2nd(queue) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  } else {
    queue.enqueue(queue.dequeue());
    return queue.dequeue();
  }
}
