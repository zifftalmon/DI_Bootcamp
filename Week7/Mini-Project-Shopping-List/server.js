const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.set('view engine','ejs');

app.use(cors());
app.use('/', express.static(__dirname+'/public'));

app.listen(process.env.PORT||8080, () => {
    console.log(`run on port ${process.env.PORT}`);
})

app.get('/form', (req,res) => {
    res.render('index')
})

app.post('/form', (req,res) => {
    res.render('cart')
})




// app.get('/form', (req,res) => {
//     res.send('/public')
// })
