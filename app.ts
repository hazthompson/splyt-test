var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(logger('dev'));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/api', indexRouter);

// All other GET requests not handled before will return our React app
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
