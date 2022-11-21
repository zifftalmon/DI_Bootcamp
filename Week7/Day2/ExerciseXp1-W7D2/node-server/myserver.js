const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>This is my first Response</h1><h1>this is my second response</h1><p>this is my third response</p></body></html>')
    res.end();
});
server.listen(5000);
console.log('web server at port 5000 is running');