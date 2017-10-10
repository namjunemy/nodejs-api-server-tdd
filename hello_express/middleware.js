const express = require('express');
const app = express();

function commonmw(req, res, next) {
  console.log('i am logger');
  next(new Error('error ouccered'));
}

function errormw(err, req, res, next) {
  console.log(err.message);
  next();
}

app.use(commonmw);
app.use(errormw);

app.listen(3000, function () {
  console.log('server is running');
});