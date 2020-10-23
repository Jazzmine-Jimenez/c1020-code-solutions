/* exported getStudentNames */

function getStudentNames(students){
  var firstNames = [];

  for(var key in students){
    firstNames.push(students[key].name);
  }
  return firstNames;
}
