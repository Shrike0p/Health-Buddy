import React, { useState } from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import Questionnaire from './components/Questionnaire';
import Roadmap from './components/Roadmap';
import BuddySystem from './components/BuddySystem';
import Footer from './components/Footer';

const App = () => {
  // State to track if questionnaire is completed
  const [isQuestionnaireComplete, setIsQuestionnaireComplete] = useState(false);

  // Function to handle completion of the questionnaire
  const handleQuestionnaireCompletion = () => {
    setIsQuestionnaireComplete(true);
  };

  return (
    <div>
      <Header />
      <main>
        {!isQuestionnaireComplete ? (
          <>
            {/* Display Welcome Section and Questionnaire until completed */}
            <WelcomeSection />
            <Questionnaire onComplete={handleQuestionnaireCompletion} />
          </>
        ) : (
          <>
            {/* Display Roadmap and BuddySystem after questionnaire completion */}
            <Roadmap />
            <BuddySystem />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
