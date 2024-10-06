import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-lg p-4 flex justify-between items-center">
      <div className="logo text-2xl font-bold">HealthBuddy</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#good-food">Good Food</a></li>
          <li><a href="#healthy">Healthy</a></li>
          <li><a href="#exercise">Exercise</a></li>
        </ul>
      </nav>
      <div>
        <input 
          type="text" 
          placeholder="Search..." 
          className="border rounded-md p-2" 
        />
      </div>
    </header>
  );
};

export default Header;
