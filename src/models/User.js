const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String},
    email: {type: String, validate: [validatePresenceOf, "email require)"], index: {unique: true} }
});

module.exports = mongoose.model('User', Schema);