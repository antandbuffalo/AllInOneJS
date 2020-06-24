function Emitter() {
    this.events = {};
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

module.exports = Emitter;