// this is not working properly. This will substitute only one argument. it works for partial function application
// function curry(fn, ...args) {
//     return (..._args) => {
//         return fn(...args, ..._args);
//     }
// }

// this works fine. This will return a curry function depends on the number of args that we pass
var curry = (fn, ...args) =>
  (fn.length <= args.length) ?
    fn(...args) :
    (...more) => curry(fn, ...args, ...more);

function volume(a, b, c) {
    return a * b * c;
}

const curried = curry(volume, 10);
console.log(curried(20)(30));

console.log("length --> " + volume.length);

function mytest(...a) {
    console.log(a);
}

var input1 = [1, 2];
var input2 = [3, 4];
mytest(...input1, ...input2);

// https://wsvincent.com/javascript-currying/
