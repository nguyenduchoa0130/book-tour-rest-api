require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// Features
const auth = require('./features/auth');
const tours = require('./features/tours');
const hotels = require('./features/hotels');
const admin = require('./features/admin');
const error = require('./features/error');

const app = express();

// use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('common'));

// mount routes
app.use('/api/auth', auth);
app.use('/api/tours', tours);
app.use('/api/hotels', hotels);
app.use('/api/admin', admin);
app.use(error);

module.exports = app;

