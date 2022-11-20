const main = require('./main.js')

const b = 5;

const c = b + main.largeNumber;

const http = require('http');

const host = 'localhost'

const port = 3000

const requestListener = function (req,res) {
    res.setHeader('Content-Type', 'text/html')
    res.writeHead(200);
    res.end(`<html><body><p>My module is: ${c}</p><h1>hi there at the frond end</h1></body></html>`)
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
})

const newHost = 'localhost'

const newPort = 8080

const newRequestListener = function (req,res) {
    res.setHeader('content-Type', 'text/html')
    res.writeHead(200);
    res.end(`<html><body><p>The date and time are currently: ${main.dateAndTime()}</p></body></html>`)
}

const newServer = http.createServer(newRequestListener);
newServer.listen(newPort,newHost, () => {
    console.log(`newServer is running on http://${newHost}:${newPort}`);
})
