/* eslint-disable no-unused-vars */

function getValues(object){
  var array = [];
  for (var keys in object) {
    array.push(object[keys]);
  }
  return array;
}
