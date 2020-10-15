/* eslint-disable no-console */
var width = 5;
var height = 7;

var area = width * height;
console.log("Area:" , area);
console.log("Type:", typeof area);

var bill = 200;
var payment = 210;
var change = payment - bill;
console.log("Change:", change);
console.log("Type:", typeof change);

var quizzes = 72;
var midterm = 81;
var final = 85;
var grade = (quizzes + midterm + final) / 3
console.log("Grade:", area);
console.log("Type:", typeof grade);

var firstName = "Jazzmine";
var lastName = "Jimenez";
var fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);
console.log("Type:", typeof fullName);

var pH = 10;
var isAcidic = pH < 7;
console.log("Acidic:", isAcidic);
console.log("Type:", typeof isAcidic);

var headCount = 25;
var isSparta = (headCount === 300);
console.log("Sparta?:", isSparta);
console.log("Type:", typeof isSparta);

var motto = fullName;
motto = motto + " is the GOAT";
console.log("Motto:", motto);
console.log("Type:", typeof motto);
