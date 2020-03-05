const express = require('express');
const app = express();
const connection = require('./db/connect');
const routes = require('./routes/user')
require('dotenv').config()
app.use('/user', routes)
connection.connect();
app.listen('3000', () => {
    console.log('app listening on port 3000');
});