// Button.jsx
import React from 'react';

const Button = ({ children, onClick, disabled = false }) => {
  // Define base styles
  const buttonStyles = `mt-4 flex items-center justify-center 
    px-4 py-2 bg-blue-950 text-white font-semibold rounded 
    transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}
  `;

  return (
    <button
      className={buttonStyles}
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; // Ensure this is a default export
