import React from 'react';
import { Link } from 'react-router-dom';

import { SchoolIcon } from './Icons';
import '../assets/css/Home.css';
import '../assets/css/nav.css';
const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b nav">
      <Link to="/" className="flex items-center justify-center">
        <SchoolIcon className="h-6 w-6" />
        <span className="text-xl font-bold ml-2 nav">School Management</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link to="/login" className="text-sm font-medium hover:underline underline-offset-4">
          Login
        </Link>
        <Link to="/register/student" className="text-sm font-medium hover:underline underline-offset-4">
          Register as Student
        </Link>
        <Link to="/register/teacher" className="text-sm font-medium hover:underline underline-offset-4">
          Register as Teacher
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
