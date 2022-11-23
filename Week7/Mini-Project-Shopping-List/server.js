const exp = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();
const app = exp();
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
})

app.get('/products', (req,res) => {
    res.send('hello')
})
