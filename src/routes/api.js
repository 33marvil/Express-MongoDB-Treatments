// router configuration
const services = require('../../config/services');


// Injection services as dependencies
const container = require('../../container/container')(services);// container recibe el service como injection

const { Router } = require('express');
const app = Router();

// const Company = require('../models/Company');
// const Job = require('../models/Job');

const Treatment = require('../models/Treatment');

// 
app.get('/', container.get('mainController'));




module.exports = app;