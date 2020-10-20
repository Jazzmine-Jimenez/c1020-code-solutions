//Function 1:
function convertMinutesToSeconds(minutes){
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log("Minutes to Seconds:",convertMinutesToSecondsResult);

//Function 2:
function greet(name){
  var greeting = "Hey, " + name;
  return greeting;
}

var greetResult = greet("Rufus");
console.log("Greeting:", greetResult);

//Function 3:
function getArea(width, height){
  var area = width * height;
  return area;
}

console.log("Area:", getArea(17,42));

//Function 4:
function getFirstName(person){
  var last = person.lastName;
  return last;
}

console.log("Last Name:", getFirstName({firstName:"Jazzmine", lastName:"Jimenez"}));

//Function 5:
function getLastElement(array){
  var lastElement = array[array.length - 1];
  return lastElement;
}

console.log("Last Element:", getLastElement(["Tazz", "Aurora", "Rufus"]))
