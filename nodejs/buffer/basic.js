// Buffer is a node js library. But require is not required here
// Node made it available globally
var buffer = new Buffer('hello');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer[0]);
// this will replace the first two letters of hello with jb -> jbello
buffer.write('jb');
console.log(buffer.toString());