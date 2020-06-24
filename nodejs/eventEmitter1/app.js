const Emitter = require('./emitter');
const emtr = new Emitter();

emtr.on('greet', (data) => {
    console.log('first emit', data);
});

emtr.on('greet', (data) => {
    console.log('second greet', data);
});

console.log('Hello emitter');

emtr.emit('greet', 'Hello JB');