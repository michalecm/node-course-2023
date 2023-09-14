// const http = require('https')
// const fs = require('fs')
// const url = require('url')

// const options = {
//     key: fs.readFileSync('localhost-key.pem'),
//     cert: fs.readFileSync('localhost.pem')
// }

// const port = 4000;

// const server = http.createServer(options, (req, res) => {
//     console.time('start req');
//     const { query } = url.parse(req.url, true);
//     const date = query.year + " " + query.month;
//     console.trace();
//     console.group("Grouppp")
//     console.log('%s', 'this string')
//     console.groupEnd();
//     res.statusCode = 202;
//     //res.setHeader('Content-Type', 'text/html');
//     const thinss = {
//         apples: 4,
//         oranges: 1,
//         pies: 3
//     };
//     console.error('%cErr', 'color:red;')
//     console.warn('%cWarn', 'color: orange;')
//     console.table(thinss)
//     //res.end(`<h2>${date}</h2>`)
//     console.timeEnd('start req')
//     const error = new Error("this error")
//     console.log('%s %s %s', error.message, error.name, error.stack)
//     //throw errors and handle them somewhere further up the stack trace
//     //process.on('uncaughtException, (reason, promise)=>{}) is used to handle errors that didn't get caught that bubbled up so app doesnt crash
//     //callbacks, promises (then, catch), event emitters
//     //operational errors (unavoidable, try/catch and promises)
//     fs.readFile('page.html', (err, data) => {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);

//         return res.end()
//     })

//     //fs open with flag to r/w and creates new file, appendfile to append
// })

// server.listen(port, () => {
//     console.log(`Server running on ${[port]}`);
// })