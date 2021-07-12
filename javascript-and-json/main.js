var bookStuff = [
  {
    isbn: 12345,
    title: 'fake book',
    author: 'joe mcgee'
  },
  {
    isbn: 1111,
    title: 'real book',
    author: 'real man'
  },
  {
    isbn: 54321,
    title: 'real fake book',
    author: 'gee macjoe'
  }
];

console.log('bookStuff: ', bookStuff);
console.log('typeof: ', typeof bookStuff);

var jsonString1 = JSON.stringify(bookStuff);
console.log('result of stringify', jsonString1);
console.log('typeof: ', typeof jsonString1);

var jsonString2 = '{"Number id":10000,"String name":"Denny"}';
console.log('result of jsonString2: ', jsonString2);
console.log('typoeof: ', typeof jsonString2);

var jsonString3 = JSON.parse(jsonString2);
console.log('result of parse', jsonString3);
console.log('typeof: ', typeof jsonString3);
