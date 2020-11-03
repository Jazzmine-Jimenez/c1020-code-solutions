/* eslint-disable no-unused-vars */
function defaults(target, source) {
  debugger;
  for (var targetKey in target) {
    for (var sourceKey in source) {

      if (targetKey !== sourceKey) {
        var value = source[sourceKey];
        target[sourceKey] = value;
      }
      if (targetKey === sourceKey) {
        var key = sourceKey;
        value = target[sourceKey];
        console.log(key);
        console.log(value);

        target.property = value;

        console.log(target);
        break;
      }
    }
    if()
  }
  if (targetKey === undefined) {
    for (sourceKey in source) {
      value = source[sourceKey];
      target[sourceKey] = value;
    }
  }
}
