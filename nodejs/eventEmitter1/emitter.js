function Emitter() {
    this.events = {};
    this.myName = 'JB';
}
Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type, data) {
    this.events[type].forEach(listener => {
        listener(data);
    });
}

Emitter.prototype.emitUsingCall = function(type, data) {
    this.events[type].forEach(listener => {
        listener.call(this, data);
    });
}

module.exports = Emitter;