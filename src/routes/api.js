// router configuration
const services = require('../../config/services');

// Injection services as dependencies
const container = require('../../container/container')(services);// container recibe el service como injection

const { Router } = require('express');
const app = Router();

// testing model User, Appointments, Treatments
const User = require('../models/User');
const Treatments = require('../controllers/Treatments/treatments');
const Treatment = require('../models/Treatment'); 
    // console.log(Treatments);
const Appointment = require('../models/Appointment');


app.get('/', container.get('mainController'));

// Testing Endpoint User
app.post('/users', container.get('createDataController', User));
app.get('/users', container.get('listDataController', User));
app.get('/users/:id', container.get('listDataByIdController', User));
app.put('/users/:id', container.get('updateDataController', User));


// Testing Endpoint Treatments
app.post('/treatments', Treatments.create);
app.get('/treatments', container.get('listDataController', Treatment));
app.get('/treatments/:id', container.get('listDataByIdController', Treatment));

// GET http://localhost:3000/api/v1/treatments/5c4e2bedc9e7a87bb403d54b/appointments
// get all appointments byId treatments

// GET ALL treatments byID User
app.get('/users/:id/treatments', Treatments.find);


module.exports = app;