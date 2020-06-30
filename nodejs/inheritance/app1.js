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
    this.firstname = 'something';
}

util.inherits(Employee, Student);
let emp = new Employee();
emp.fullname();
emp.appendName();

