function ExampleConstructor() {

}

console.log('prototype Property:', ExampleConstructor.prototype);
console.log('typeof prototype', typeof ExampleConstructor.prototype);

var anObject = new ExampleConstructor();
console.log(anObject);

var check = anObject instanceof ExampleConstructor;
console.log('Instance of:', check);
