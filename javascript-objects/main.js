var student = {
  firstName: 'Denny',
  lastName: 'Min',
  age: 23
};

student.livesInIrvine = true;
student.previousOccupation = 'customer service rep';
console.log('value of livesInIrvine: ' + student.livesInIrvine);
console.log('value of previousOccupation: ' + student.previousOccupation);

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ' + fullName);
console.log('value of student: ', student);

var vehicle = {
  make: 'honda',
  model: 'civic',
  year: '2020'
};

vehicle['color'] = 'dark gray';
vehicle['isConvertible'] = false;
console.log('value of color is: ' + vehicle['color']);
console.log('value of isConvertible is: ' + ['vehicle.isConvertible']);
console.log('vehicle object properties and values: ', vehicle);

var pet = {
  name: 'Pepe Min',
  type: 'American-Eskimo'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
