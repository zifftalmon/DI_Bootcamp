const express = require('express')
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(5000, () => {
    console.log('run on port 5000');
})

app.get('/api/hello', (req,res) => {
    res.json('hello from express')
})

app.post('/api/world', (req,res) => {
res.send(req.body)
console.log(req.body)
})
