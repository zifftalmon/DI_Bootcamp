const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host:'lucky.db.elephantsql.com',
        port:5432,
        user:'vgantisc',
        password:'HoTd4xzhK6hF80glCsC5WzTPO1tOyCFG',
        database:'vgantisc'
    }
});

db('products')
// .delete
.select('*')
.from('products')
.then(res => {
    console.log(res);
})

