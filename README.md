
# HealthBuddy - Buddy System

HealthBuddy is a health and fitness platform that helps users track their fitness journey with personalized plans. The Buddy System feature allows users to pair with a workout buddy and communicate with them through a built-in chat interface. This component is designed to promote accountability and motivation between workout partners.

## Features

- **Buddy Cards**: Displays user fitness level and exercise progress.
- **Progress Bars**: Visual progress bars that show how many exercises each buddy has completed.
- **Chat with Buddy**: A built-in chat system where users can message their workout buddy.
- **Responsive Design**: The layout adapts to different screen sizes (mobile and desktop).
- **Interactive UI**: Hover effects, smooth transitions, and engaging animations for a better user experience.

## Tech Stack

- **ReactJS**: Frontend framework for building the UI.
- **TailwindCSS**: Utility-first CSS framework for fast and responsive styling.
- **JavaScript**: Core logic and interactivity.
  
## Getting Started

Follow the steps below to get the project running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/healthbuddy-buddy-system.git
   cd healthbuddy-buddy-system
Install dependencies

If you're using npm:

```bash
npm install
```

Or if you're using yarn:

```bash
yarn install
```

Run the app

To start the development server, run:

```bash
npm start
```
Or if you're using yarn:

```bash
yarn start
```

The app will be running at http://localhost:3000/ by default.

Usage
On the homepage, you’ll find the Buddy System section.
Users can see their buddy’s fitness level and progress using the buddy cards.
Press the "Chat with Buddy" button to open a chat window where you can message your buddy.

## Project Structure

```plaintext
src/
  ├── components/
  │   ├── Header.js              # Header component with navigation and search bar
  │   ├── WelcomeSection.js       # Welcome section with a banner and introduction
  │   ├── Questionnaire.js        # Questionnaire to gather user information
  │   ├── Roadmap.js              # Interactive calendar to display user's fitness roadmap
  │   ├── BuddySystem.js          # Buddy System feature with chat functionality
  │   ├── ExerciseSection.js      # Section displaying detailed exercise routines
  │   ├── NutritionSection.js     # Section displaying daily nutrition plans
  │   └── Footer.js               # Footer component with links and contact information
  ├── App.js                     # Main application component managing state and routing
  ├── index.css                  # Main styles configuration with TailwindCSS
  └── index.js                   # Application entry point
```
# Screenshots
![image](https://github.com/user-attachments/assets/f5e5b874-400f-4d24-8321-18c4eca477e1)

![image](https://github.com/user-attachments/assets/cc54c3fb-5443-4521-97c8-42978cd1e26f)

![image](https://github.com/user-attachments/assets/4c69e5bd-6ac9-40c0-be4f-1c1b84d651ae)



## Contributing

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-name`).
3.  Make your changes and commit them (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature-name`).
5.  Create a new Pull Request.
