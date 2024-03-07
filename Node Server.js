const http = require('node:http');
const hostname = '127.0.0.1';
var fs = require('fs');
var index = fs.readFileSync('Index.html');
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(index);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});