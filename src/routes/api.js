// router configuration
const services = require('../../config/services');

// Injection services as dependencies
const container = require('../../container/container')(services);// container recibe el service como injection

const { Router } = require('express');
const app = Router();

// testing model User
const User = require('../models/User');
const Treatment = require('../models/Treatment');

app.get('/', container.get('mainController'));

// Testing Schema User
app.post('/users', container.get('createDataController', User));
app.get('/users', container.get('listDataController', User));



// Testing Schema Treatment
// app.post('/treatments', container.get('createDataController', Treatment));

module.exports = app;