var library = [
  {
    isbn: '9780547951942',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '9781781100486',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling'
  },
  {
    isbn: '1782701842',
    title: "Alice's Adventures In Wonderland",
    author: 'Lewis Carroll'
  }
];

console.log('libray:', library);
console.log('Type of:', typeof library);

var jsonString = JSON.stringify(library);
console.log('stringify:', jsonString);
console.log('Type of:', typeof jsonString);

var aStudent = '{ "NumberId":123456 , "Name":"Jazzmine Jimenez" }';

console.log('jsonString:', aStudent);
console.log('Type of:', typeof aStudent);

var jsObject = JSON.parse(aStudent);
console.log('jsObject:', jsObject);
console.log('Type of:', typeof jsObject);
