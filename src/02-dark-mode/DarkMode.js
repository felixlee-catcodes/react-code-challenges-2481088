import { useState } from "react";

export default function DarkMode() {
  // create state for tracking dark mode setting using useState
  // set to false to so page initially loads in light mode
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`page ${darkMode && "dark-mode"}`}>
      {/* 
      - add click-event listeners to each button 
      - pass through a function that changes the state of the darkMode setting
      */}
      <button className='dark-mode-button' onClick={() => setDarkMode(true)}>
        Dark Mode
      </button>
      <button className='light-mode-button' onClick={() => setDarkMode(false)}>
        Light Mode
      </button>
    </div>
  );
}
