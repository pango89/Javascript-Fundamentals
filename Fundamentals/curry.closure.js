// Currying is a transformation of functions that translates
// a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// Currying doesn’t call a function. It just transforms it.

// Closure Example
// When a new function is retuned like here inside multiply function;
// the function will still have access to variable x even after it has been returned
let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo = multiply(2);

// Execute
multiplyByTwo(5); // logs 10 in console.

let multiplyByThree = multiply(3);

// Execute
multiplyByThree(10); // logs 30 in console.
