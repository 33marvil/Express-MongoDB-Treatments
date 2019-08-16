const mongoose = require('mongoose');

const Appointment = require('../../models/Appointment');
const Treatment = require('../../models/Treatment');

const controller = {
    index: (req, res) => {
        Appointment
            .find()
            .exec()
            .then(data => {
                res
                    .json({
                        type: 'Reading data',
                        data: data
                    })
                    .status(200)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        Appointment
            .findById(req.params.id)
            .then(data => {
                res
                    .json({
                        type: 'Appointment Found',
                         data: data
                    })
                    .status(200)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
    },
    create: (req, res) => {
        const newAppointment = new Appointment({
            _id: mongoose.Schema.Types.ObjectId,
            description: { type: String },
            listOfTreatments: { type: String },
            appointments: { type: String }
        });
            newAppointment
                .save()
                .then(data => {
                    res
                        .json({
                            type: 'new Appointment created',
                            data: data
                        })
                        .status(200)
                })
                .catch(err => {
                    console.log(`caugth error: ${err}`);
                    return res.status(500).json(err);
                })
    },
    // GET ALL appointments by treatmentId.
    find: (req, res) => {
        // console.log(req.params);
        Appointment
            .find({ treatment: req.params.id })
            .exec()
            .then(data => {
                res
                    .json({
                        type: 'Appointments Found',
                        data: data
                    })
                    .status(200)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
    }            
}


module.exports = controller;