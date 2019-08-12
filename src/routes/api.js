// router configuration
const services = require('../../config/services');

// Injection services as dependencies
const container = require('../../container/container')(services);// container recibe el service como injection

const { Router } = require('express');
const app = Router();

// testing model User
const User = require('../models/User');
const Treatment = require('../models/Treatment');
const Appointment = require('../models/Appointment');


app.get('/', container.get('mainController'));

// Testing Endpoint User
app.post('/users', container.get('createDataController', User));
app.get('/users', container.get('listDataController', User));
app.get('/users/:id', container.get('listDataByIdController', User));
app.put('/users/:id', container.get('updateDataController', User));


// Testing Endpoint Treatments
app.post('/treatments', container.get('createDataController', Treatment , Appointment));
app.get('/treatments', container.get('listDataController', Treatment));
app.get('/treatments/:id', container.get('listDataByIdController', Treatment));


module.exports = app;