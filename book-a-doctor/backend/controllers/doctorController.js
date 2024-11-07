// controllers/doctorController.js

const Doctor = require('../models/Doctor');

// Get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a doctor by ID
exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new doctor
exports.createDoctor = async (req, res) => {
    const doctor = new Doctor({
        name: req.body.name,
        specialization: req.body.specialization,
        location: req.body.location,
        availability: req.body.availability,
    });

    try {
        const newDoctor = await doctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a doctor
exports.updateDoctor = async (req, res) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDoctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a doctor
exports.deleteDoctor = async (req, res) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!deletedDoctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json({ message: 'Doctor deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
