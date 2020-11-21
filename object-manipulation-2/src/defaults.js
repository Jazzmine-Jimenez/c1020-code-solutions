/* eslint-disable no-unused-vars */
function defaults(target, source) {
  for (var sourceKey in source) {
    for (var targetKey in target) {
      continue;
    }
  }
  if (targetKey !== sourceKey) {
    target[sourceKey] = source[sourceKey];
  }
  if (targetKey === undefined) {
    for (sourceKey in source) {
      var value = source[sourceKey];
      target[sourceKey] = value;
    }
  }
}
