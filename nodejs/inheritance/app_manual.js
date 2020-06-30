function Student() {
    this.firstName = 'ant';
    this.lastName = 'buffalo';
    this.appendName = function() {
        console.log(`${this.firstName} and ${this.lastName}`);
    }
}
Student.prototype.fullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
}

function Employee() {
    this.firstName = 'Employee';
}
Employee.prototype = new Student();

let emp = new Employee();
// console.log(emp.__proto__);

emp.appendName();
emp.fullName();

