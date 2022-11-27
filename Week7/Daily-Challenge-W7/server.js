const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const fs = require('fs')

dotenv.config();

const app = express();
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(__dirname + '/public'))

app.listen(process.env.PORT || 8080, () => {
    console.log(`run on port ${process.env.PORT||8080}`);
})

app.post('/login', (req,res) => {
    const {userName, password} = req.body
    let users = []
    try{
        const f = fs.readFileSync('./users')
        users = JSON.parse(f.toString())
    }
    catch(err) {
        console.log(err);
    }
    if(!isUserExist(users, userName)) {
        return res.json({msg:'username is not registered'})
    }

    const userData = users.find(user => {
        return user.username == userName
    })
    console.log(userData);

    const match = bcrypt.compareSync(password,userData.password)

    if (!match) {
        return res.json({msg: 'wrong password'})
    }
    res.json({msg:'login succesful'})
})

app.post('/register', (req,res) => {
    console.log(req.body);
    
    let users = [];
    
    try{
        const f = fs.readFileSync('./users')
        users = JSON.parse(f.toString())
    }
    catch(e) {
        console.log(e);
    }
    
    if(isPassExist(users, req.body.password) || isUserExist(users, req.body.username)) {
        return res.json({msg: 'username or password already'})
    } else {}

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt)
    
    req.body.password = hash
    users.push(req.body)
    
    fs.writeFile('./users', JSON.stringify(users), err => {
        if(err) {
            console.log(err);
        }
    })
        res.json({msg:'hello your account is now created!'})
})

const isPassExist = (arr, password) => {
    const filterUsers = arr.filter(user => {
        return user.password == password
    })
    return (filterUsers.length > 0) ? true : false
}

const isUserExist = (arr, userName) => {
    const filterUsers = arr.filter(user => {
        return user.username == userName
    })
    return (filterUsers.length > 0) ? true : false
}