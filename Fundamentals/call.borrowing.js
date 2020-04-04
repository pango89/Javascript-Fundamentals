let person = {
  firstname: "Pankaj",
  lastname: "Goyal",

  printFullname: function () {
    console.log(this.firstname, this.lastname);
  },
};

person.printFullname();

let sportsPerson = {
  firstname: "Sachin",
  lastname: "Tendulkar",
};

// Function Borrowing
person.printFullname.call(sportsPerson);
