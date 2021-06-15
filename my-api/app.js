const serverless = require('serverless-http');
const express = require('express');

const app = new express();

app.get('/', (req, res) => {
    res.send('hello there.. Dhanshree here')
});

module.exports.lambdaHandler = serverless(app);
