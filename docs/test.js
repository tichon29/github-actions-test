const fs = require('fs');
const path = require('path');
const walk = require('walk');


const dir_path = path.resolve(__dirname, 'node_modules');

const walker = walk.walk(dir_path, {followLinks:false});

const res = fs.readFileSync('test.txt');
console.log(res);

const express = require('express')
const app = express()
console.log('express running on 3300');
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
//app.listen(3300)
