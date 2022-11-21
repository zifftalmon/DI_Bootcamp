const express = require('express');
const cors = require('cors')

const user = require('./script')

console.log(user);

const server = express()
server.use(cors())

server.listen(3000, () => {
    console.log('server running on port 3000');
})

server.use('/', express.static(__dirname + '/public'))

server.get('/home', (req,res) => {
    res.json(user)
})
