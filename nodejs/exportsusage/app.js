//let greet = require('./greet');

let student = {
    name: {
        firstname: 'jeyabalaji',
        lastname: 'tm'
    }
}

function testRef(name) {
    console.log(name);
    name.firstname = 'new name';
    console.log(student.name);
    console.log(name);
}

testRef(student.name);

