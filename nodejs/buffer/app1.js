//var buffer = new ArrayBuffer(12);
var buffer = new Buffer(12);
var view = new Int32Array(buffer);
view[0] = 1;
view[1] = 10;
view [2] = 100;
console.log(view);