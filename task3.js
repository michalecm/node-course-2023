const csvtojson = require('csvtojson')
const fs = require('fs')

const csvReadStream = fs.createReadStream('./csvDir/books.csv')
const txtOutputStream = fs.createWriteStream('./csvDir/books.txt')

csvtojson({ noheader: false })
    .fromStream(csvReadStream)
    .subscribe((jsonObj) => {
        txtOutputStream.write(JSON.stringify(jsonObj) + '\n')
    })
    .on('done', () => txtOutputStream.end())
    .on('error', (err) => console.log(err))