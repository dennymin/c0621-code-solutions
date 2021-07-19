/* exported calculator */
var calculator = {
  add: function (x, y) {
    return (x + y);
  },
  subtract: function (x, y) {
    return (x - y);
  },
  multiply: function (x, y) {
    return (x * y);
  },
  divide: function (x, y) {
    return (x / y);
  },
  square: function (x) {
    return (x * x);
  },
  sumAll: function (numbers) {
    var total = 0;
    for (var numbersIndex = 0; numbersIndex < numbers.length; numbersIndex++) {
      total = calculator.add(total, numbers[numbersIndex]);
    }
    return total;
  },
  getAverage: function (numbers) {
    var average = calculator.divide(calculator.sumAll(numbers), numbers.length);
    return average;
  }
};
