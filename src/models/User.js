const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String},
    email: {type: String, required: true, unique: true },
    phoneNumber: {type: String}
});

module.exports = mongoose.model('User', Schema);