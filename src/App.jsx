import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CryptoTable from './components/CryptoTable';
import { startSimulation } from './utils/simulateSocket';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    startSimulation(dispatch);
  }, [dispatch]); 
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">Real-Time Crypto Tracker</h1>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <CryptoTable />
    </div>
  );
}

export default App;
