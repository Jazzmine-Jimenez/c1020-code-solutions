/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== key) continue;
      else {
        if (source[keys[i]] !== undefined) {
          newObj[keys[i]] = source[keys[i]];
          break;
        }
      }
    }
  }
  return newObj;
}
