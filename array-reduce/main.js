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

console.log(numbers.reduce(sum));
console.log(numbers.reduce(product));
console.log(account.reduce(balance, 0));
console.log(traits.reduce(composite, {}));

// const balance = (prev, curr) => {
//   let value = 0;
//   if (prev.type === 'deposit' && curr.type === 'deposit') {
//     value = prev.amount + curr.amount;
//     if (value > 0) {
//       return { type: 'deposit', amount: value };
//     } else {
//       return { type: 'withdraw', amount: value };
//     }
//   } else if (prev.type === 'withdrawal' && curr.type === 'deposit') {
//     value = -prev.amount + curr.amount;
//     if (value > 0) {
//       return { type: 'deposit', amount: value };
//     } else {
//       return { type: 'withdraw', amount: value };
//     }
//   } else if (prev.type === 'withdrawal' && curr.type === 'withdrawal') {
//     value = -prev.amount + -curr.amount;
//     if (value > 0) {
//       return { type: 'deposit', amount: value };
//     } else {
//       return { type: 'withdraw', amount: value };
//     }
//   } else if (prev.type === 'deposit' && curr.type === 'withdrawal') {
//     value = prev.amount + -curr.amount;
//     if (value > 0) {
//       return { type: 'deposit', amount: value };
//     } else {
//       return { type: 'withdraw', amount: value };
//     }
//   }
// };
