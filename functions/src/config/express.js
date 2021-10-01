const express = require('express')
const path = require("path");
const helmet = require("helmet");
const compress = require("compression");
const cors = require("cors");
const methodOverride = require("method-override");
const app = express();

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));
app.use(compress());

// PUT | DELETE => In places where the client doesn't support it
app.use(methodOverride());

// Static assets directory setup
app.use(express.static(path.join(__dirname, "../public")));

app.use(helmet());
app.use(cors());

app.use('/api/v1', require('../api/routes'))
app.get('/', (req, res) => { res.status(200).send('Hey There!') })

module.exports = app
