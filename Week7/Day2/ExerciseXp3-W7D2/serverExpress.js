const { application } = require('express');
const express = require('express')

const server = express();

server.listen(3000, () => {
    console.log('server running on por 3000');
})

server.get('/', (req, res) => res.send('<h1>this is an html tag</h1>'))