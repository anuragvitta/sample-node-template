const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: 'root',
    password: 'root'
});

module.exports = connection;