/* eslint-disable no-unused-vars */
function union(first, second) {
  const newArray = [];
  for (let n = 0; n < first.length; n++) {
    if (second.includes(first[n])) {
      newArray.push(first[n]);
    } else {
      newArray.push(first[n]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
