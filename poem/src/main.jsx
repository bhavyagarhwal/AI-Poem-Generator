import React, { useState, useEffect } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Loading from './Loading'; // Import the updated Loading component
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Ensure this is imported if you use global styles

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Simulate fade-in animation
    const fadeInTimer = setTimeout(() => {
      setShowLoader(true);
    }, 1000); // Duration of the fade-in animation

    // Simulate loading delay
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Duration to show the loader

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  return isLoading ? (showLoader ? <Loading /> : <div className="fade-in">Loading...</div>) : <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
