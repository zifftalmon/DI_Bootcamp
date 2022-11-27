const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log('run on port 3000');
})

app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res) => {
//     res.send()
// })