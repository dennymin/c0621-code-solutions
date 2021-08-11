const add = require('./add');
const divide = require('./divide');
const multiply = require('./multiply');
const subtract = require('./subtract');

const firstNumb = parseInt(process.argv[2]);
const operator = process.argv[3];
const secondNumb = parseInt(process.argv[4]);

if (isNaN(firstNumb) || isNaN(secondNumb)) {
  console.log('Use numbers please!');
} else if (operator === 'plus' || operator === 'minus' || operator === 'times' || operator === 'over') {
  if (operator === 'plus') {
    console.log('result: ', add(firstNumb, secondNumb));
  } else if (operator === 'minus') {
    console.log('result: ', subtract(firstNumb, secondNumb));
  } else if (operator === 'times') {
    console.log('result: ', multiply(firstNumb, secondNumb));
  } else if (operator === 'over') {
    console.log('result: ', divide(firstNumb, secondNumb));
  }
} else {
  console.log('Use correct operators: plus, minus, times, over');
}
