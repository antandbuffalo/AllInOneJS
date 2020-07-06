module.exports = class Greeter {
    constructor() {
        this.greeting = 'Hello';
    }
    greet() {
        console.log(`${ this.greeting } world`);
    }
}
// this is also works fine
// module.exports = Greeter;