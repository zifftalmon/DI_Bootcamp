const express = require('express')
const cors = require('cors')
const path = require('path')
const Parser = require('rss-parser')
const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './public/pages'))
app.use(cors())

let parser = new Parser();

(async () => {
    let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
      console.log(feed.title);
    
      
    app.listen(5000, () => {
          console.log('run on port 5000');
        })
        
    app.get('/', (req,res) => {
        res.render('index', {
            data:feed.items
        })
    })
})();

