const fs = require('fs');

const res = fs.readFileSync('test.txt');
console.log(res);

const express = require('express')
const app = express()
console.log('express running on 3300');
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3300)