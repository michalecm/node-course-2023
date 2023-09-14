const { EventEmitter } = require('events')
const childProcess = require('child_process')
const fs = require('fs')

function emitStats() {
    let count = 0;
    let msInterval = 100;
    const task = 'ps -A -o %cpu,%mem,comm | sort -nr | head -n 1';
    const emitter = new EventEmitter();
    emitter.on('result', (result) => {
        console.clear();
        console.log(result)
    })

    const interval = setInterval(() => {
    
        childProcess.exec(task, (err, stdout, stderr) => {
            emitter.emit('result', stdout);

            if(count % 5000 === 0){
                fs.open('activityMonitor.log', 'a', (err, fileDescriptor) => {
                    fs.appendFile(fileDescriptor, stdout, (err) => {
                        console.error("There was an error appending to file!")
                    })
                    fs.close(fileDescriptor)
                })
            }
        })

        if(count === 15000) clearInterval(interval);
        count += msInterval;
    }, msInterval)
}

emitStats();