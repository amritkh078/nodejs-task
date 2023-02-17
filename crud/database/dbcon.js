// dbcon using mysql
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'user',
});


module.exports = db;