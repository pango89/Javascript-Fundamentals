let person = {
  firstname: "Pankaj",
  lastname: "Goyal",
};

// First two params directly recieved from bind
// Last param recieved from function invocation.
let printFullname = function (city, state, country) {
  console.log(this.firstname, this.lastname, city, state, country);
};

let printFullNameCopy = printFullname.bind(person, "Bangalore", "Karnataka");

printFullNameCopy("India");

// Create your own mybind function
// Polyfill for bind function
Function.prototype.mybind = function (...args1) {
  let obj = this; // 'this' points to 'printFullname' function object from line number 27
  let params = args1.slice(1); // args1[0] is the person object

  return function (...args2) {
    obj.apply(args1[0], [...params, ...args2]);
  };
};

let printFullNameCopy_polyFill = printFullname.mybind(
  person,
  "Bangalore",
  "Karnataka"
);
printFullNameCopy_polyFill("India");
