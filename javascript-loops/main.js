/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

 function getNumbersToTen(){
   var numbers = [];
   var currentNumber = 1;

   while(currentNumber - 1 < 10){
     numbers[currentNumber - 1] = currentNumber ;
    currentNumber = currentNumber + 1;
   }
   return numbers;
 }

 function getEvenNumbersToTwenty(){
   var evenNumbers = [];
   var currentNumber = 2;


   while(currentNumber <= 20){
    evenNumbers.push(currentNumber)
    currentNumber += 2

   }
   return evenNumbers;
 }

 function repeatWord(word, times){
   var count = 1;
   var repeated = " ";

   while(count <= times){
    repeated = repeated + " " + word;
    count++;
   }
   return repeated;
 }

function logEachCharacter(string){
  for(var i = 0; i < string.length; i++){
    console.log(string[i]);
  }
}

function doubleAll(numbers){
  var double = [];
  for(var i = 0; i < numbers.length; i++){
    double[i] = numbers[i] * 2;
  }
  return double;
}

function getKeys(object){
  var keys = [];

  var i = 0;
  for(var prop in object){
    keys.push(prop);
    i++;
  }
  return keys;
}

function getValues(object){
  var values = [];

  var i = 0;
  for(var key in object){
    values.push(object[key]);
    i++
  }
  return values;
}
