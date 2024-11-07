import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [doctorId, setDoctorId] = useState('');
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors data
  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/doctors'); // Ensure this URL is correct
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = { doctor: doctorId, user: userName, date, time };
    
    try {
      await axios.post('http://localhost:5000/api/bookings', appointmentData); // Adjust URL if needed
      alert('Appointment booked successfully!');
    } catch (error) {
      console.error(error);
      alert('Error booking appointment.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      <select 
        value={doctorId} 
        onChange={(e) => setDoctorId(e.target.value)} 
        required
      >
        <option value="">Select a Doctor</option>
        {doctors.map(doctor => (
          <option key={doctor._id} value={doctor._id}>
            {doctor.name}
          </option>
        ))}
      </select>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} 
        required 
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />
      <input 
        type="time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required 
      />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default BookingForm;
