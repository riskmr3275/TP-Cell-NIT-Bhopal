// ChartContainer.js
import React from 'react';

const ChartContainer = ({ children, title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      <div className="chart-area">{children}</div>
    </div>
  );
};

export default ChartContainer;
