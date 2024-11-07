const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.createAppointment);
router.get('/', bookingController.getAllAppointments);
router.get('/:id', bookingController.getAppointmentById);
router.patch('/:id', bookingController.updateAppointment);
router.delete('/:id', bookingController.deleteAppointment);

module.exports = router;
