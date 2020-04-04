let person = {
  firstname: "Pankaj",
  lastname: "Goyal",
};

printFullname = function (city, state) {
  console.log(this.firstname, this.lastname, city, state);
};

printFullname.call(person, "Bangalore", "Karnataka");

let sportsPerson = {
  firstname: "Sachin",
  lastname: "Tendulkar",
};

printFullname.call(sportsPerson, "Mumbai", "Maharashtra");
