const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let file, contentType;
  if (req.url === '/style.css') {
    file = './src/style.css';
    contentType = 'text/css';
  } else if (req.url === '/connections.js') {
    file = './connections.js';
    contentType = 'application/javascript';
  } else {
    file = './index.html';
    contentType = 'text/html';
  }
  fs.readFile(file, function(err, f) {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end(err.message);
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(f);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
