/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
*/

function isUnderFive(number){
  if (number < 5){
    console.log("True");
  }
  else{
    console.log("False");
  }
}

function isEven(number){
  if(number % 2 === 0){
    console.log("True");
  }
  else{
    console.log("False");
  }

}

function startsWithJ(string){
  if (string[0] === "J" ) {
    console.log("True");
  }
  else {
    console.log("False");
  }

}

function isOldEnoughToDrink(person){
  if (person.age >= 21) {
    console.log("True");
  }
  else {
    console.log("False");
  }
}

function isOldEnoughToDrive(person){
  if (person.age >= 16) {
    console.log("True");
  }
  else {
    console.log("False");
  }
}

function isOldEnoughToDrinkAndDrive(person){
  if (person.name === " ") {
    console.log("True");
  }
  else {
    console.log("False");
  }
}

function categorizeAcidity(pH){
  if (pH > 0 && pH < 14) {
    if(pH < 7){
      console.log("acid");
    }
    if(pH > 7){
      console.log("base")
    }
  }
  else {
    console.log("Invalid pH level");
  }
}

function introduceWarnerBro(name){
  if(name === "yakko" || name === "wakko"){
    console.log("We're the warner brothers!")
  }
  if(name === "dot"){
    console.log("I'm cute~")
  }
  else{
    console.log("Goodnigh everybody")
  }
}
