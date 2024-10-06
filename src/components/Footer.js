import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex justify-between">
        <p>&copy; 2024 HealthBuddy. All Rights Reserved.</p>
        <ul className="flex space-x-4">
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
