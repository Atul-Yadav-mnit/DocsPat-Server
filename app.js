var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const doctorsRouter = require('./routes/doctorsRouter');
const departmentsRouter = require('./routes/departmentsRouter');
const testimonialsRouter = require('./routes/testimonialsRouter');
const appointmentsRouter = require('./routes/appointmentsRouter');
const patientsRouter = require('./routes/patientsRouter');
const slotsRouter = require('./routes/slotsRouter')

// DB connection 
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

var app = express();

app.use(cors())
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/doctors',doctorsRouter);
app.use('/departments',departmentsRouter);
app.use('/testimonials',testimonialsRouter);
app.use('/appointments',appointmentsRouter);
app.use('/patients',patientsRouter);
app.use('/slots',slotsRouter)
app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;
