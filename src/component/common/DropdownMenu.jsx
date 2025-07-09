// DropdownMenu.js
import React from 'react';

const DropdownMenu = ({ children }) => {
  return (
    <div className="relative inline-block text-left">
      {children}
    </div>
  );
};

const DropdownMenuTrigger = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const DropdownMenuContent = ({ children, visible }) => {
  return (
    visible && (
      <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {children}
        </div>
      </div>
    )
  );
};

const DropdownMenuItem = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;

export default DropdownMenu;
