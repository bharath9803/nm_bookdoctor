import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  // Fetch doctors data when the component mounts
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctors'); // Use full URL
        console.log("Fetched Doctors:", response.data); // Log the fetched data
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []); // Empty dependency array ensures this runs once on mount

  const handleBooking = (id) => {
    // Navigate to booking page with the doctor's ID
    navigate(`/booking/${id}`);
  };

  return (
    <div className="container">
      <h2>Available Doctors</h2>
      {doctors.length === 0 ? (
        <p>No doctors available.</p>
      ) : (
        <ul>
          {doctors.map(doctor => (
            <li key={doctor._id}>
              <h3>{doctor.name}</h3>
              <p>Specialization: {doctor.specialization}</p>
              <p>Location: {doctor.location}</p>
              <p>Availability: {doctor.availability}</p>
              <button onClick={() => handleBooking(doctor._id)}>Book Appointment</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DoctorList;
