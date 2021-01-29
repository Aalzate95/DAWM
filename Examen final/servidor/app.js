var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
// Initialise the app
var app = express();
// Import routes
var matriculaRouter = require('./routes/matricula');

//corse 
var cors = require("cors");
app.use(cors());

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/matricula', matriculaRouter);

mongoose.connect('mongodb://localhost:27017/examen', {useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false,
useUnifiedTopology: true})
.then(() => console.log('DB connection successful!'))
.catch(err => {
  console.error.bind(console, 'MongoDB connection error:')
});

app.use('/', (req, res) => res.send('Hello World with Express'));

module.exports = app;