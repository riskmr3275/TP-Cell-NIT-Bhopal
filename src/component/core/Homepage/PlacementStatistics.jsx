import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PlacementStatistics = () => {
  const placementData = {
    labels: ['Placement Rate', 'Internship Rate', 'Highest Package (LPA)', 'Average Package (LPA)'],
    datasets: [
      {
        label: 'MANIT Bhopal Placement Stats',
        data: [85, 70, 82, 15.6], // Sample data
        backgroundColor: ['#4F46E5', '#3B82F6', '#1D4ED8', '#6366F1'],
      },
    ],
  };

  const options = {
    responsive: true, // Make the chart responsive to window size
    maintainAspectRatio: false, // Allow custom height and width
    plugins: {
      legend: {
        display: false, // Hide legend if not needed
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          MANIT Bhopal Placement & Internship Statistics 2023
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          An overview of our recent placement and internship success.
        </p>
      </header>
      <section className="bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Placement Statistics
        </h2>
        <div style={{ position: 'relative', height: '500px', width: '100%' }}> {/* Increased height */}
          <Bar data={placementData} options={options} />
        </div>
      </section>
    </div>
  );
};

export default PlacementStatistics;

