const http = require('node:http');
const hostname = '0.0.0.0';
var fs = require('fs');
var index = fs.readFileSync('index.js');
const port = 3000;


const server = http.createServer(() => {
  const url=req.url;

}

);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});