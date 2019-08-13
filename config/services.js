// services configuration

const homeControllerFactory = require('../src/controllers/homeController');
// require lisDataController
const listDataControllerFactory = require('../src/controllers/listDataController');
const listDataByIdControllerFactory = require('../src/controllers/listDataByIdController');
const updateDataControllerFactory = require('../src/controllers/updateDataController');
const deleteDataControllerFactory = require('../src/controllers/deleteDataController');
const createDataControllerFactory = require('../src/controllers/createDataController');




// require getData services
const getDataFactory = require('../services/getData');

const services = {
    mainController: (container) => homeControllerFactory(),
    getData: (container, data) => {
        return getDataFactory(data);
    },
    listDataController: (container, data) => {
        const getData = container.get('getData', data);
        return listDataControllerFactory(getData);
    },
    // Get id companies
    listDataByIdController: (container, data) => {
        const getData = container.get('getData', data);
        return listDataByIdControllerFactory(getData);
    },
    // Update id companies
    updateDataController: (container, data) => {
        const getData = container.get('getData', data);
        return updateDataControllerFactory(getData);
    },
    // Delete id companies
    deleteDataController: (container, data) => {
        const getData = container.get('getData', data);
        return deleteDataControllerFactory(getData);
    },
    // Create id 
    createDataController: (container, data) => {
        const getData = container.get('getData', data);
        return createDataControllerFactory(getData);
    },
};


module.exports = services;