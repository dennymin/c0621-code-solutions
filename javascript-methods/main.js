var num = 6;
var bum = 7;
var mum = 8;
var maximumValue = Math.max(num, bum, mum);
console.log('The value of maximumValue is: ', maximumValue);
var heroes = ['spooderman', 'barnacle boy', 'paul park', 'tom hanks'];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log('A randomIndex results in: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero value is: ', randomHero);

var library = [
  { title: 'Hery Patter', author: 'LOL rowling' },
  { title: 'life of penguins', author: 'penguin man' }
];

var lastBook = library.pop();
console.log('The lastBook value is: ', lastBook);
var firstBook = library.shift();
console.log('The firstBook value is: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('My new library consists of: ', library);

var fullName = 'Denny Min';
var firstAndLastName = fullName.split(' ');
console.log('The value of firstAndLastName is: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName value is: ', sayMyName);
