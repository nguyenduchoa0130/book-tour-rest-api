require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

// use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('common'));
app.use(cookieParser(process.env.COOKIE_SECRET));

// mount routes
app.use('/api/auth', require('./features/auth'));
app.use('/api/tours', require('./features/tours'));
app.use('/api/hotels', require('./features/hotels'));
app.use('/api/roles', require('./features/roles'));
app.use('*', require('./features/not-found'));
app.use(require('./features/error'));

module.exports = app;
