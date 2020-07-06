function Person() {
    this.firstname = 'ant';
    this.lastname = 'buffalo';
    this.fullname = function() {
        console.log(`${this.firstname} ${this.lastname}`);
        return `${this.firstname} ${this.lastname}`;
    }
}
Person.prototype.greet = function() {
    console.log(`Hello ${this.fullname()}`);
}

const student = new Person();
student.greet();

// using class
class Animal {
    constructor() {
        this.firstname = 'ant';
        this.lastname = 'buffalo';
        this.fullname = function() {
            console.log(`${this.firstname} ${this.lastname}`);
            return `${this.firstname} ${this.lastname}`;
        }
    }
    greet() {
        console.log(`Animal Hello ${this.fullname()}`);
    }
}

const dog = new Animal();
dog.greet();
console.log(dog.__proto__.__proto__);