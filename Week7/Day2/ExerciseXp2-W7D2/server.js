const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.setHeader('Content-Type', 'appliaction/json');
        res.write(JSON.stringify({firstname: 'John',lastname: 'Doe'}));
        res.end();
    } else {
        res.end("another page")
    }
});
server.listen(8080)
console.log('server running on port 8080');