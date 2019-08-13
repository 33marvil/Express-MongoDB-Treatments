const mongoose = require('mongoose');

const Schema = new Schema({
    
    name: {type: String},
    phoneNumber: {type: Number},
    day: {type: String},
    // Entity relationship Model ** one to many **
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // Entity relationship Model ** one to many **
    treatment: { type: mongoose.Schema.Types.ObjectId, ref: 'Treatment'}
})

module.exports = mongoose.model('Appointment', Schema);