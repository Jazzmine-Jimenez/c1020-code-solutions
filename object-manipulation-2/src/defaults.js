/* eslint-disable no-unused-vars */
function defaults(target, source) {
  for (var targetKey in target) {
    for (var sourceKey in source) {
      if (targetKey !== sourceKey) {
        target[sourceKey] = source[sourceKey];
      }
    }
  }
}
