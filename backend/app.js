const express = require('express');
var cors = require('cors')

const pistaRoute = require('./routes/pistaRoute');

const app = express();

app.use(cors()); // Allows browser to use api

app.use(express.urlencoded({
  extended: false,
}));

app.use(express.json());

// Created routes

app.use('/', pistaRoute);

module.exports = app;