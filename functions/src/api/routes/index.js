var express = require('express');
const app = express.Router();

app.use('/entries', require('./entries'))

module.exports = app;
