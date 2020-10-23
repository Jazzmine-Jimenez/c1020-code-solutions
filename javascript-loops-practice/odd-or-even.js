/* exported oddOrEven */

function oddOrEven(numbers){
  debugger;
  var value = [];
  for (var i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
      value.push("even");
    }
    else{
      value.push("odd");
    }
  }
  return value;
}
