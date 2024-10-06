import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="bg-blue-100 p-8 text-center">
      <h1 className="text-4xl font-bold">Welcome to HealthBuddy</h1>
      <p className="mt-4 text-lg">Your personalized health and fitness journey begins here!</p>
      <p className="mt-2 font-semibold">Get Fit. Eat Right. Live Well.</p>
      
      {/* Adjust image styling */}
      <img 
        src="img2.png" 
        alt="Healthy Living" 
        className="mt-6 mx-auto w-40 h-40 rounded-full object-cover bg-blue-100 border-4 border-blue-100" 
      />
    </section>
  );
};

export default WelcomeSection;
