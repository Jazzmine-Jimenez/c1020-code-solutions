/* eslint-disable no-unused-vars */
function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key) break;
      else continue;
    }
    if (keys[i] !== key) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
