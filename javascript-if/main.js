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
  var statement = number < 5
    return statement;
}

function isEven(number){
  var statment = number % 2 === 0
  return statment;
}

function startsWithJ(string){
  var statement = string[0] === "J"
  return statement;
}

function isOldEnoughToDrink(person){
  var statement = person.age >= 21
  return statement;
}

function isOldEnoughToDrive(person){
  var statement = person.age >= 16
  return statement;
}

function isOldEnoughToDrinkAndDrive(person){
  return false;
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
