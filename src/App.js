import React, { useState } from 'react';
import WelcomeBanner from './components/WelcomeBanner';
import SignInRegister from './components/SignInRegister';
import QuickTour from './components/QuickTour';
import './App.css'; // Global styles

function App() {
  const [theme, setTheme] = useState('light'); // Toggle between 'light' and 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <WelcomeBanner />
      <SignInRegister />
      <QuickTour />
    </div>
  );
}

export default App;
