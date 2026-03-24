const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello karthik yours CI/CD Pipeline Project");
  res.end();
});

server.listen(3000);
