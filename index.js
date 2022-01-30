/*const crypto = require('crypto');

const encryption = require("./encrypt");

let keya = crypto.createHash('md5').update('a').digest("hex");
let keyb = crypto.createHash('md5').update('b').digest("hex");

let tmp = encryption.encrypt("msg", keya)

console.log(tmp)
console.log(encryption.decrypt(tmp, keya))
console.log(encryption.decrypt(tmp, keyb))
*/

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('views'))
app.use('/bower_components', express.static('bower_components'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
