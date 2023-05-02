import { useState } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    //uses a backticks & a JS expression to dynamically change the element's class name
    <div className={`page ${darkMode && "dark-mode"}`}>
      <button className='dark-mode-button' onClick={() => setDarkMode(true)}>
        Dark Mode
      </button>
      <button className='light-mode-button' onClick={() => setDarkMode(false)}>
        Light Mode
      </button>
    </div>
  );
}
