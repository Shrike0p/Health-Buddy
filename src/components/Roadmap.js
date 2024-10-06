import React, { useState } from 'react';

const Roadmap = () => {
  // Complete sample data for October (for all 31 days)
  const octoberData = {
    1: {
      exercise: "Pushups, Squats",
      nutrition: "Oats, Salad",
    },
    2: {
      exercise: "Planks, Jumping Jacks",
      nutrition: "Eggs, Avocado Toast",
    },
    3: {
      exercise: "Running, Lunges",
      nutrition: "Chicken Salad, Smoothie",
    },
    4: {
      exercise: "Bicep Curls, Deadlifts",
      nutrition: "Grilled Chicken, Quinoa",
    },
    5: {
      exercise: "Yoga, Stretching",
      nutrition: "Vegetable Stir-fry",
    },
    6: {
      exercise: "Cardio, HIIT",
      nutrition: "Smoothie, Almonds",
    },
    7: {
      exercise: "Leg Press, Lunges",
      nutrition: "Fish Tacos, Salad",
    },
    8: {
      exercise: "Bench Press, Pull-ups",
      nutrition: "Pasta, Chicken",
    },
    // Continue adding exercises and meals for all days of October
    9: {
      exercise: "Burpees, Planks",
      nutrition: "Avocado Toast, Protein Shake",
    },
    10: {
      exercise: "Cycling, Jump Rope",
      nutrition: "Egg Whites, Green Juice",
    },
    // Add up to October 31
    31: {
      exercise: "Rest Day",
      nutrition: "Eat Healthy",
    },
  };

  // State to track hovered day
  const [hoveredDay, setHoveredDay] = useState(null);

  // Generate days for October (1-31)
  const daysInOctober = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Personalized Roadmap for October</h2>

      {/* Render Weekdays */}
      <div className="grid grid-cols-7 gap-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(weekday => (
          <div key={weekday} className="text-center font-bold">{weekday}</div>
        ))}
      </div>

      {/* Render Day Cells for October */}
      <div className="calendar-grid grid grid-cols-7 gap-4 mt-4">
        {daysInOctober.map(day => (
          <div
            key={day}
            className="relative bg-white p-4 shadow-md rounded-lg text-center cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredDay(day)}
            onMouseLeave={() => setHoveredDay(null)}
          >
            <h3 className="text-lg font-semibold">Oct {day}</h3>

            {/* Tooltip/Popup on hover */}
            {hoveredDay === day && (
              <div className="absolute top-0 left-0 mt-12 w-48 p-4 bg-gray-200 text-gray-900 rounded shadow-lg z-10">
                <h4 className="font-bold">Day {day} Plan</h4>
                <p><strong>Exercise:</strong> {octoberData[day]?.exercise || "Rest Day"}</p>
                <p><strong>Nutrition:</strong> {octoberData[day]?.nutrition || "Eat Healthy"}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
