import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t pp">
      <p className="text-xs text-muted-foreground ">&copy; 2024 School Management. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6 pp">
        <Link to="/terms" className="text-xs hover:underline underline-offset-4">
          Terms of Service
        </Link>
        <Link to="/privacy" className="text-xs hover:underline underline-offset-4">
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
