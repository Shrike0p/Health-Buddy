import React, { useState } from 'react';

const Questionnaire = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    height: '',
    weight: '',
    goal: '',
    activity: '',
  });

  const questions = [
    { question: "What is your height?", field: "height" },
    { question: "What is your weight?", field: "weight" },
    { question: "What is your fitness goal?", field: "goal" },
    { question: "What is your daily activity level?", field: "activity" },
  ];

  // Handle input changes
  const handleChange = (e) => {
    setAnswers({ ...answers, [questions[step].field]: e.target.value });
  };

  // Handle next question or completion
  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Call the onComplete function when all questions are answered
      onComplete();
    }
  };

  return (
    <section className="p-8 bg-gray-100">
      <div className="progress-bar bg-blue-400 h-2 w-full mb-4">
        <div className={`bg-green-500 h-2`} style={{ width: `${(step + 1) * 25}%` }} />
      </div>
      <div className="card bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">{questions[step].question}</h2>
        <input
          type="text"
          value={answers[questions[step].field]}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Enter your answer"
        />
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleNext}
          >
            {step < questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;
