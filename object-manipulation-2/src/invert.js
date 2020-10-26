/* eslint-disable no-unused-vars */
function invert(source) {
  var newObject = {};
  for (var sourceKey in source) {
    newObject[source[sourceKey]] = sourceKey;
  }
  return newObject;
}
