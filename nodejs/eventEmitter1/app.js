const Emitter = require('./emitter');
const emtr = new Emitter();

this.myName = 'balaji';

emtr.on('greet', function(data) {
    console.log('first emit - normal function : ', data, this.myName);
});

emtr.on('greet', (data) => {
    console.log('second greet - arrow : ', data, this.myName);
});

console.log('Hello emitter');

emtr.emit('greet', 'Hello');

//emtr.emitUsingCall('greet', 'Using call');