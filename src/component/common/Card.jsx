// Card.js
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className} w-full`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }) => {
  return (
    <div className={`p-4 border-b ${className} bg-blue-300 text-white`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return (
    <div className={`p-4 ${className} w-full`}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className }) => {
  return (
    <h2 className={`text-lg font-semibold ${className}`}>
      {children}
    </h2>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Title = CardTitle;

export default Card;
