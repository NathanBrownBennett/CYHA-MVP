import React, { useState } from 'react';
import WelcomeBanner from './components/WelcomeBanner';
import SignInRegister from './components/SignInAndRegister';
import QuickTour from './components/QuickTour';
import './App.css'; // Global styles

function App() {
  const [theme, setTheme] = useState('light'); // Toggle between 'light' and 'dark'

  // Define the handleSignIn function to be called on successful sign-in
  const handleSignIn = (userCredential) => {
    alert('Logged in successfully!');
    // Additional sign-in logic here
  };

  // Define the handleRegister function to be called on successful registration
  const handleRegister = (userCredential) => {
    alert('Account successfully created!');
    // Additional registration logic here
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <WelcomeBanner />
      <SignInRegister onSignIn={handleSignIn} onRegister={handleRegister} />
      { <QuickTour /> }
    </div>
  );
}

export default App;
