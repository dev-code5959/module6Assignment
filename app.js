const express = require('express');
const app = new express();

const router = require('./src/Routes/api');


//configure the app

app.use(express.json());
app.use('/api', router);






module.exports = app;