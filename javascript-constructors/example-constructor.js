function ExampleConstructor() {}
console.log('value of prototype property of function ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype property of function ExampleConstructor:', typeof ExampleConstructor.prototype);
var newVar = new ExampleConstructor();
console.log('newVar value:', newVar);
var results = newVar instanceof ExampleConstructor;
console.log('result of results:', results);
