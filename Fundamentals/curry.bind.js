// Currying is a transformation of functions that translates
// a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// Currying doesn’t call a function. It just transforms it.

let multiply = function (x, y) {
  console.log(x * y);
};

// bind creates a copy of multiply method
// multiplyByTwo method is currying
let multiplyByTwo = multiply.bind(this, 2);

// Execute
multiplyByTwo(5); // logs 10 in console.

// bind creates a copy of multiply method
let multiplyByThree = multiply.bind(this, 3);

// Execute
multiplyByThree(10); // logs 30 in console.
