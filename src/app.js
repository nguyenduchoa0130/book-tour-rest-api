require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

// use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', req.headers.origin);
  res.set('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  return next();
});
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.ALLOW_ORIGINS.split(','),
    credentials: true,
  }),
);
app.use(morgan('common'));

// mount routes
app.use('/api/auth', require('./features/auth'));
app.use('/api/tours', require('./features/tours'));
app.use('/api/users', require('./features/users'));
app.use('/api/roles', require('./features/roles'));
app.use('/api/payment', require('./features/payment'));
app.use('*', require('./features/not-found'));
app.use(require('./features/error'));

module.exports = app;
