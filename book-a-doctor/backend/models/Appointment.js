const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    user: { type: String, required: true }, // Assuming user info is stored as string, can be modified as needed
    date: { type: Date, required: true },
    time: { type: String, required: true }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
