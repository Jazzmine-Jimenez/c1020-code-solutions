function getRangeReport(start, end) {
  var data = {};

  var total = 0;
  var totalStart = start;
  while (totalStart <= end) {
    total = total + totalStart;
    totalStart++;
  }
  data.total = total;

  var tempStart = start;
  var oddArray = [];
  var evenArray = [];
  while (tempStart <= end) {
    if ((tempStart % 2) === 1) oddArray.push(tempStart);
    if ((tempStart % 2) === 0) evenArray.push(tempStart);
    tempStart++;
  }
  data.odds = oddArray;
  data.even = evenArray;

  var rangeArray = [];
  var rangeStart = start;
  while (rangeStart <= end) {
    rangeArray.push(rangeStart);
    rangeStart++;
  }
  data.range = rangeArray;

  var average = total / rangeArray.length;
  data.average = average;

  return data;
}
