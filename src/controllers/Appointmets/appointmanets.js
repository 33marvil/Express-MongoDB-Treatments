const mongoose = require('mongoose');
const Appointment = require('../../models/Appointment');

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
                            type: 'User Found',
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
                                type: 'User created',
                                data: data
                            })
                            .status(200)
                    })
                    .catch(err => {
                        console.log(`caugth error: ${err}`);
                        return res.status(500).json(err);
                    })
            },
}
