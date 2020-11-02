/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  sumAll: function (numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + numbers[i];
    }
    return total;
  },
  square: function (x) {
    return x * x;
  },
  getAverage: function (numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + numbers[i];
    }
    return total / numbers.length;
  }
};
