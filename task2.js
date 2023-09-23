const WithTime = require('./myClasses/WithTime')
const http = require('http')

const withTime = new WithTime();

withTime.on('begin', () => console.log('begin!'))
withTime.on('end', () => console.log('end!'))
withTime.execute(async () => fetch('http://jsonplaceholder.typicode.com/posts/1').then((res) => res.json()).catch(err => console.log(err)), 'myString')

console.log(withTime.rawListeners('end'));