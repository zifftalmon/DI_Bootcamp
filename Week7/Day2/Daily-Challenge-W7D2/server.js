const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.listen(5000, () => {
    console.log('server running on port 5000');
})

app.get('/aboutMe/:hobby', (req,res) => {
    const {hobby} = req.params;
    if(hobby.match('[0-9]')||hobby.match(true)) {
        return res.status(404).json({msg:'not a hobby'})
    }
    res.json(hobby)
})

app.get('/pic', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/form', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/form.html'))
})

app.post('/formData', (req,res) => {
    res.send(`${req.body.userEmail} sent you a message: ${req.body.userMessage}`);
})

