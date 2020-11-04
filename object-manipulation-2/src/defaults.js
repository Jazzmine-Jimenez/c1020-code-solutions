/* eslint-disable no-unused-vars */
function defaults(target, source) {
  debugger;
  var storingObject = {};
  for (var sourceKey in source) {
    for (var targetKey in target) {
      // swap for loops
      if (targetKey !== sourceKey) {
        var value = source[sourceKey];
        storingObject[sourceKey] = value;
        continue;
      }

      if (targetKey === sourceKey) {
        var key = sourceKey;
        value = target[sourceKey];
        console.log(key);
        console.log(value);

        target.property = value;

        console.log(target);
      }
    }
  }
  if (targetKey === undefined) {
    for (sourceKey in source) {
      value = source[sourceKey];
      target[sourceKey] = value;
    }
  }
  return target;
}
