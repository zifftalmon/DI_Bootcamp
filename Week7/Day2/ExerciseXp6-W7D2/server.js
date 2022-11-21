const express = require('express');

const cors = require('cors');

const server = express();

server.use(cors());

server.use(express.static(__dirname + '/public'));

server.get('/', (req,res) => {

})

server.listen(3000, () => console.log('server running on port 3000'));