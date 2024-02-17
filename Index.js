const http = require('node:http');
const hostname = '127.0.0.1';
var fs = require('fs');
var index = fs.readFileSync('index.js');
const port = 3000;
const express = require('express');
const app = express();
app.use((req,res,next) => {
  console.log('first express');

});


const server = http.createServer(() => {
  const url=req.url;

}

);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});


