const express = require('express');
const app = express();
const logger3 = require('morgan');

function logger(req, res, next) {
  console.log('i am logger');
  next();
}

function logger2(req, res, next) {
  console.log('i am logger2');
  next();
}

app.use(logger);
app.use(logger2);
app.use(logger3('dev'));

app.listen(3000, function () {
  console.log('server is running');
});