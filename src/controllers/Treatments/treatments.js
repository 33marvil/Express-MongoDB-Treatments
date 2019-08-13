const mongoose = require('mongoose');
const Treatment = require('../../models/Treatment');

const controller = {
    index: (req, res) => {
        Treatment
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
        Treatment
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
        const newTreatment = new Treatment({
            _id: mongoose.Schema.Types.ObjectId,
            description: { type: String },
            listOfTreatments: { type: String },
            appointments: {
                name: { type: String },
                phoneNumber: { type: Number },
                day: { type: String }
            }
        });
        newTreatment
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
    update: (req, res) => {
        Treatment
            .findByIdAndUpdate(req.params.id, { $set: req.body })
            .then(data => {
                res
                    .json({
                        type: 'User found Update',
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