const mysql=require('mysql')

const db= mysql.createPool({
    host:'localhost',
    port:13306,
    user:'root',
    password:'123456sje',
    database:'my_db_01'
})

module.exports=db