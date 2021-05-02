const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/result-synx.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} //append
)

console.log('done with synchronous task')
console.log('starting next one')