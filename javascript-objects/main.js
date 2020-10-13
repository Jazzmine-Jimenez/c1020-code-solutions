/* eslint-disable no-console, no-unused-vars, dot-notation */

// Student Object
var student = {
  firstName: "Jazzmine",
  lastName: "Jimenez",
  age: 26
};

var fullName = student.firstName + " " + student.lastName;
console.log("Full Name:", fullName);

student.livesInIrvine = false;

student.previousOccupation = "High school math teacher";
console.log("Lives in Irvine:", student.livesInIrvine);
console.log("Previous Occupation:", student.previousOccupation);

//Vehicle Object
var vehicle = {
  make: "Hyundai",
  model: "Elantra",
  year: 2019
};

vehicle['color'] = "silver";
vehicle['isConvertible'] = false;
console.log("Color:", vehicle.color);
console.log("Convertible:", vehicle.isConvertible);
console.log(vehicle);

//Pet Object

var pet = {
  name: "Tazz",
  type: "Dog"
}

delete pet.name;
delete pet.type;
console.log(pet);
