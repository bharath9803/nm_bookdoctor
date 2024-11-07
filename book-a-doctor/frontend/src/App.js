import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import DoctorList from './components/DoctorList';
import BookingForm from './components/BookingForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorList />} />
        <Route path="/booking/:id" element={<BookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
