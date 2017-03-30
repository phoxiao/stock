var mysql = require('mysql');
var connecntion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'passw0rd',
    database: 'stock'
})

module.exports = connecntion;