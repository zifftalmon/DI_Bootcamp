const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == '/') {
        const user = {firstname: 'John',lastname: 'Doe'}
        res.setHeader('Content-Type', 'appliaction/json');
        res.end(JSON.stringify(user));
    } else {
        res.end("another page")
    }
});
server.listen(8080)
console.log('server running on port 8080');