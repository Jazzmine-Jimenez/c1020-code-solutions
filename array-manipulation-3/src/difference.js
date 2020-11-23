/* eslint-disable no-unused-vars */
function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    var index = second.indexOf(first[i]);
    if (index === -1) {
      newArray.push(first[i]);
    }
    index = first.indexOf(second[i]);
    if (index === -1) {
      newArray.push(second[i]);
    }
  }
  console.log(newArray);
  return newArray;
}

// function difference(first, second) {
//   var newArray = [];
//   for (var i = 0; i < first.length; i++) {
//     var statement = second.includes(first[i]);
//     if (!statement) {
//       newArray.push(first[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }
