const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    description: { type: String },
    listOfTreatments: { type: Array, "default": [] },
    // Entity relationship Model ** one to many **
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // Entity Relationship Model ** many to one **
    // incrementar if appointment is call in 1++
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment'}],
});

module.exports = mongoose.model('Treatment', Schema);