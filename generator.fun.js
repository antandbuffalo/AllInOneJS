function * getGenerator() {
    console.log("line 1");
    var input1 = yield "a " + input1;
    console.log("line 2: " + input1);
    yield "b " + input1;
}

var generator = getGenerator("0");
var result = generator.next("1");
console.log(result);
result = generator.next("2");
console.log(result);
result = generator.next("3");
console.log(result);