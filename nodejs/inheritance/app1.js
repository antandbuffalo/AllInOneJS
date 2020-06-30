// nodejs inheritance links only prototypes
const util = require('util');
function Student() {
    this.firstname = 'ant';
    this.lastname = 'buffalo';
    this.appendName = function() {
        console.log(`${this.firstname} and ${this.lastname}`);
    }
}
Student.prototype.fullname = function() {
    console.log(`${this.firstname} ${this.lastname}`);
}

function Employee() {
    // this is same as calling super() in other programming languages.
    // this will append all the properties and methods of parent to the child
    Student.call(this);
    // Student.apply(this);
    this.firstname = 'something';
}

util.inherits(Employee, Student);
let emp = new Employee();
emp.fullname();
emp.appendName();

