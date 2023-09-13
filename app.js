var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let bodyParser = require('body-parser');

// var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.json());

let carsRouter = require('./routes/carsRoute');

app.use('/', indexRouter);
app.use('/', carsRouter);


module.exports = app;
