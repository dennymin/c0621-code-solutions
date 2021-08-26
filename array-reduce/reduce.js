function reduce(array, reducer, initialValue) {
  // debugger;
  let returningVal = null;
  if (!initialValue && initialValue !== 0) {
    returningVal = array[0];
    for (let i = 1; i < array.length; i++) {
      returningVal = reducer(returningVal, array[i]);
    }
  } else {
    returningVal = initialValue;
    for (let i = 0; i < array.length; i++) {
      returningVal = reducer(returningVal, array[i]);
    }
  }
  return returningVal;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (prev, curr) => {
  return prev + curr;
};
const product = (prev, curr) => {
  return prev * curr;
};
const balance = (prev, curr) => {
  if (curr.type === 'deposit') {
    return prev + curr.amount;
  } else if (curr.type === 'withdrawal') {
    return prev - curr.amount;
  }
};
const composite = (prev, curr) => { return Object.assign(prev, curr); };
console.log(reduce(numbers, sum));
console.log(reduce(numbers, product));
console.log(reduce(account, balance, 0));
console.log(reduce(traits, composite, {}));
