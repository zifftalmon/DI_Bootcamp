const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

// app.get('/aboutMe/:hobby', (req,res) => {
//     if (typeof req.params.hobby === typeof "2") {
//         res.status(404).json({msg:'not a hobby'})
//     }
//     res.send(`${req.params.hobby}`)
// })


app.use(express.static('public'));

app.listen(5000, () => {
    console.log('server running on port 5000');
})
