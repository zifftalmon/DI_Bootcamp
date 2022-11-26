const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {db} = require('./data/products.js')

dotenv.config();
const app = express();
app.set('view engine','ejs');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(process.env.PORT||8080, () => {
    console.log(`run on port ${process.env.PORT}`);
})
app.use('/', express.static(__dirname+'/public'));

app.get('/form', (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/form/cart', (req,res) => {
    const {myProduct, myAmount} = req.body;
    console.log(req.body);
    db('products')
    .insert({
        product_name: myProduct,
        product_amount: myAmount
    })
    .returning('*')
    .then(rows => {
        res.json(rows)
        console.log(rows);
    })
    .catch(e => {
        res.status(404).json({msg:e.message})
    })
})

app.get('/form/cart', (req,res) => {
    const {product_name, product_amount} = req.body;
    db('products')
    .select (product_name, product_amount)
    .then(rows => {
        res.render('cart', {
            data:rows
        })
    })
    .catch(e => {
        res.status(404).json({mas:e.message})
    })
})

