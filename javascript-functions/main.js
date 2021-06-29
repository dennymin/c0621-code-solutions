function convertsMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('how many seconds are in five minutes?: ', convertsMinutesToSeconds(5));

function greet(name) {
  return 'HELLO YOU BEAUTIFUL SOUL NAMED ' + name;
}
console.log('Hi my name is Beavis. ' + greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('The area of rectangle with dimensions 17 and 42 is: ', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
var denny = { firstName: 'Denny', lastName: 'Min' };
console.log('The first name of this person is: ', getFirstName(denny));

function getLastElement(array) {
  return array[array.length - 1];
}
var howManyWaysCanISpellCody = ['Cody', 'codee', 'codie', 'kodee', 'kody'];
console.log('The last element of this array is: ', getLastElement(howManyWaysCanISpellCody));
