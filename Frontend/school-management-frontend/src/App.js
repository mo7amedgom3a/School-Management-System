import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterStudent from './pages/RegisterStudent';
import Navbar from './components/Navbar';
import DashboardLayout from './components/DashboardLayout';

function App() {
  return (
 <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/student" element={<RegisterStudent />} />
        <Route path="/student/dashboard" element={<DashboardLayout />} />
      </Routes>
 </>

   
  );
}

export default App;
