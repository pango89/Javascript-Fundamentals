let person = {
  firstname: "Pankaj",
  lastname: "Goyal",
};

printFullname = function (city, state) {
  console.log(this.firstname, this.lastname, city, state);
};

printFullname.apply(person, ["Bangalore", "Karnataka"]);

let sportsPerson = {
  firstname: "Sachin",
  lastname: "Tendulkar",
};

printFullname.apply(sportsPerson, ["Mumbai", "Maharashtra"]);

// call method accepts comma separated parameters whereas apply accepts one array of parameters as their second arg
