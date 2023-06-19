require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// Features
const auth = require('./features/auth');
const tour = require('./features/tour');
const error = require('./features/error');

const app = express();

// use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('common'));

// mount routes
app.use('/api/auth', auth);
app.use('/api/tour', tour);
app.use('/api/admin', tour);
app.use(error);

module.exports = app;

