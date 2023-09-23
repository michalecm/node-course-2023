class EventEmitter {
    constructor() {
        this.listeners = {}
    }

    addListener(eventName, fn){
        this.on(eventName, fn);
    }

    on(eventName, fn){
        if(!this.listeners[eventName]){
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(fn);
    }

    removeListener(eventName, fn){
        this.off(eventName, fn);
    }

    off(eventName, fn){
        if (this.listeners[eventName]) {
            this.listeners[eventName] = this.listeners[eventName].filter(
              (listener) => listener !== fn
            );
        }
    }

    once(eventName, fn){
        const onceWrapper = (...args) => {
            fn(...args);
            this.off(eventName, onceWrapper);
          };
        this.on(eventName, onceWrapper);
    }

    emit(eventName, ...args){
        if (this.listeners[eventName]) {
            this.listeners[eventName].forEach((listener) => {
                listener(...args);
            });
        }
    }

    listenerCount(eventName){
        return this.listeners[eventName] ? this.listeners[eventName].length : 0;
    }

    rawListeners(eventName){
        return this.listeners[eventName] || [];
    }
}

module.exports = EventEmitter;