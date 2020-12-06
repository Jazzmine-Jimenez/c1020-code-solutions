/* eslint-disable no-unused-vars */
function intersection(first, second) {
  const newArray = [];
  for (let n = 0; n < first.length; n++) {
    if (second.includes(first[n])) {
      newArray.push(first[n]);
    }
  }
  return newArray;
}
