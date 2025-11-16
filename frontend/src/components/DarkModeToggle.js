// src/components/DarkModeToggle.js
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

function DarkModeToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
    >
      {isDark ? 'Sun' : 'Moon'}
    </button>
  );
}

export default DarkModeToggle;