var createError = require('http-errors');
var express = require('express');
var path = require('path'); // 윈도우, unix 등의 호환 문제 ..
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 라우터 우선 순위는 선언 순이다 !! ( find index.html )
app.use(express.static(path.join(__dirname, 'fe','dist'))); // 프론트 엔드 개발용
app.use(express.static(path.join(__dirname, 'public'))); // 정적인 파일들

app.use('/api', require('./routes/api'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render({ sucess: false, msg: err.message });
});

/*
const pg = require('./playGround.js');
const mongoose = require('mongoose');
const cfg = require('./cfg/cfg');

if(!cfg){
  console.log('cfg.js file not exists');
  process.exit(1);
}

mongoose.connect(cfg.db.url,{ useNewUrlParser : true }, (err) => {
  if(err) return console.error(err);
  console.log('mongoose connected');
  pg.test.model();
});

*/

module.exports = app;
