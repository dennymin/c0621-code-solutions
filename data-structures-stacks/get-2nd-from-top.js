/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const placeholder = stack.pop();
  const returning = stack.peek();
  stack.push(placeholder);
  return returning;
}
