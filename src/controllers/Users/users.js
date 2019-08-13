const mongoose = require('mongoose');
const User = require('../../models/User');

const controller = {
    index: (req, res) => {
        User
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
        User
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
        const newUser = new User({
            _id: mongoose.Schema.Types.ObjectId,
            name: { type: String },
            email: { type: String, index: { unique: true } }
        });
        newUser
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
        User
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