const EventEmitter = require('./EventEmitter')

class WithTime extends EventEmitter {
    constructor(){
        super()
        this.on('begin', () => console.time('execute()'))
        this.on('end', () => console.timeEnd('execute()'))
    }
    
    async execute(asyncFunc, ...args) {
        this.emit('begin');
        console.log(await asyncFunc())
        console.log(...args)
        this.emit('end') 
    }
}

module.exports = WithTime;