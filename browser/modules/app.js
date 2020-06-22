import * as greeter from './greet.js';
console.log('app js', greeter.greet());

// This is not possible. It is read only. we cannot change it.
//greeter.greeting = 'Modified Hello';

//we can some kind of setter to change the variables
greeter.changeGreeting();

import greeter1 from './greet.js';
greeter1();

import { greet } from './greet.js';
greet();