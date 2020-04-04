let person = {
  firstname: "Pankaj",
  lastname: "Goyal",
};

let printFullname = function (city, state) {
  console.log(this.firstname, this.lastname, city, state);
};

// bind is used to bind a function to an abject
// It returns a copy of the function
let printFullNameCopy = printFullname.bind(person, "Bangalore");

// Execute the function
printFullNameCopy("Karnataka");

// Look at the params; params are passed at bind and function invokation time both
// Parameters passed with bind will come before the params passed in function invocation
// We will see this when we implement polyfill for bind
