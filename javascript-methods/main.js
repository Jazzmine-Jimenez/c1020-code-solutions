//Math Objects
var num1 = 1;
var num2 = 45;
var num3 = -5;

var maximumValue = Math.max(num1, num2, num3)
console.log("Largest Number:", maximumValue );

var heroes = ["Batman", "Superwoman", "Spiderman"];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log("Random Index:", randomIndex);
var randomHero = heroes[randomIndex];
console.log("Random Hero:", randomHero);

//Array Methods
var library = [
  {
    title: "The Lorax",
    author: "Dr. Seuss"
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins"
  }
]

var lastBook = library.pop();
console.log("Last Book:", lastBook);

var firstBook = library.shift();
console.log("First Book:", firstBook);


var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}

library.push(js);
library.unshift(css);
library.slice(1, 1);

console.log("Library:", library);

//String Methods
fullName = "Jazzmine Jimenez"
var firstAndLastName = fullName.split(" ");
console.log(firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log("First Name:", sayMyName);
