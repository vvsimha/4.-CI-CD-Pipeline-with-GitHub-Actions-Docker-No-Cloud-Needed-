const http = require('http');

const server = http.createServer((req, res) => {
  res.end("CI/CD Pipeline Running Successfully!");
});

server.listen(3000, () => console.log("App running on port 3000"));
module.exports = server;
