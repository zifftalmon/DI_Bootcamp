const express = require('express');

const cors = require('cors');

const server = express();

server.use(cors());

server.get('/:Id', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

server.listen(3000, () => {
    console.log("server running on port 3000");
})