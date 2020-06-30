const Emitter = require('events');
const util = require('util');
function CustomEmitter() {
    this.greeting = 'Hello';
}
util.inherits(CustomEmitter, Emitter);

const customEmtr1 = new CustomEmitter();

customEmtr1.on('greet', () => {
    console.log('Someone greeted');
});

customEmtr1.emit('greet');
