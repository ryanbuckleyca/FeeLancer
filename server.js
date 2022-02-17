const path = require('path')
require('dotenv').config();

const port = process?.env?.PORT || 9000;
const db = require('./models');
const express = require('express');
const app = express();

const devRoutes = require('./routes/devs');
const createError = require('http-errors');
const cors = require('cors');

if(process?.env?.NODE_ENV === 'development') {
  console.log('is dev')
  const logger = require('morgan');
  app.use(logger('dev'));
}

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api/devs", devRoutes);
app.use(express.static(__dirname + '/build'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

app.listen(port);
console.log(`listening on ${port}`);
