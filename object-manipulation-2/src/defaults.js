/* eslint-disable no-unused-vars */
function defaults(target, source) {
  debugger;
  for (var targetKey in target) {

    if (targetKey === undefined) {
      for (var sourceKey in source) {
        var value = source[sourceKey];
        target[sourceKey] = value;
      }
    }
    for (sourceKey in source) {
      if (targetKey !== sourceKey) {
        value = source[sourceKey];
        target[sourceKey] = value;
      }
      if (targetKey === sourceKey) {
        console.log('inside targetKey for statement');
        break;
      }

    }
  }
}

// last test need to be able to keep target key with original values. goes through targetkey for loop but does not more in
// properties in the sourceKey for loop
