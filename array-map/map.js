function map(array, transform) {
  const outputArr = [];
  for (let i = 0; i < array.length; i++) {
    outputArr.push(transform(array[i]));
  }
  return outputArr;
}
