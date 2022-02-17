const express = require('express');

const pistaRoute = require('./routes/pistaRoute');

const app = express();

app.use(express.urlencoded({
  extended: false,
}));

app.use(express.json());

// Created routes

app.use('/', pistaRoute);

module.exports = app;