const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numb => numb * 2;
const pricey = price => { return `$${price.toFixed(2)}`; };
const upped = lang => { return lang.toUpperCase(); };
const firsts = lang => { return lang[0]; };

const doubledNumbs = numbers.map(doubled);
const priced = numbers.map(pricey);
const uppers = languages.map(upped);
const firstLets = languages.map(firsts);

console.log(doubledNumbs);
console.log(priced);
console.log(uppers);
console.log(firstLets);
