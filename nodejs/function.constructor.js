function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    //this will take precedence over prototype
    // this.greet = function() {
    //     console.log(`internal greet ${this.firstname}`);
    // }
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
}

var person1 = new Person("j", "b");
person1.greet();

var person2 = new Person("hello", "greet");
person2.greet();

console.log(person1.__proto__ === person2.__proto__);

// this is just calling the function and not a function contructor. So the function returns undefined
// var person2 = Person("j", "b");
// console.log(person2.firstname);