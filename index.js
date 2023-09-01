const repl = require('repl')

module.exports = function getRandomNumber() {
    return Math.random() * Number.MAX_SAFE_INTEGER
}

repl.start();
localStorage.on('exit', () => {
    console.log("Bye!")
    process.exit();
})