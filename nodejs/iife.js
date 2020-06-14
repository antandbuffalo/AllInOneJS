// function statement
function greet() {
    console.log("this is a function statement");
}

var firstname = "jb";
// this is a function expression. which means you can do call this
// expression - means, you can produce values from them. eg: 1 + 2
(function() {
    var firstname = 'jb inside fun';
    console.log(`this is IIFE ${firstname}`);
})();

console.log(`outside ${firstname}`);
