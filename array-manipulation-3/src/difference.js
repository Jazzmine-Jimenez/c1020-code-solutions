/* eslint-disable no-unused-vars */
function difference(first, last) {
  const newArray = [];
  for (let n = 0; n < first.length; n++) {
    if (!last.includes(first[n])) {
      newArray.push(first[n]);
    }
  }
  for (let i = 0; i < last.length; i++) {
    if (!first.includes(last[i])) {
      newArray.push(last[i]);
    }
  }
  return newArray;
}
