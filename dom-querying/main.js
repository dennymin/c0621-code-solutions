console.log('hello, world');
console.log('querying the dom for element h1: ', document.querySelector('h1'));
console.dir(document.querySelector('h1'));
console.log('querying the dom for id explanation: ', document.querySelector('#explanation'));
console.dir(document.querySelector('#explanation'));
console.log('querying the dom for class: ', document.querySelector('.hint'));
console.dir(document.querySelector('.hint'));
console.log('querying the dom for all elements p and subsequent nodelist: ', document.querySelectorAll('p'));
console.log('querying the dom for all elements with class example-link and subsequent nodelist: ', document.querySelectorAll('.example-link'));
