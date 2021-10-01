const functions = require("firebase-functions");
const app = require("./src/config/express");

exports.app = functions.https.onRequest(app);

