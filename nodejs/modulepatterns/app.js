let greet = require('./greet1');
greet();

let greet2 = require('./greet2');
greet2.greet();

let greet2a = require('./greet2').greet;
greet2a();

let greet3 = require('./greet3');
greet3.greet();

let Greeter = require('./greet4');
let greet4 = new Greeter();
greet4.greet();

greet4.greeting = 'modified Hello World';

let greet4b = new Greeter();
greet4b.greet();

// revieling module pattern. hiding the variables and exposing only the required functions
let greet5 = require('./greet5');
greet5.greet();

