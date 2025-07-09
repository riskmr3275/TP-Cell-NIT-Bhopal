import React, { useState } from "react";
import Sidebar from "../component/common/Sidebar";
// Updated Company schedule with logos, descriptions, and times
const companySchedule = [
  {
    date: "17/09/2024",
    company: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Example_Logo.svg/50px-Example_Logo.svg.png",
    description: "A leading technology solutions provider.",
    time: "10:00 AM",
  },
  {
    date: "18/09/2024",
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    description: "Creative design agency specializing in branding.",
    time: "12:00 PM",
  },
  {
    date: "19/09/2024",
    company: "DataSystems",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Example_Logo3.svg/50px-Example_Logo3.svg.png",
    description: "Experts in data analysis and systems architecture.",
    time: "2:00 PM",
  },
  {
    date: "20/09/2024",
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Example_Logo4.svg/50px-Example_Logo4.svg.png",
    description: "Innovative AI-driven products and services.",
    time: "11:00 AM",
  },
  {
    date: "21/09/2024",
    company: "InnovateTech",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Example_Logo5.svg/50px-Example_Logo5.svg.png",
    description: "Cutting-edge technology innovations.",
    time: "1:00 PM",
  },
  {
    date: "22/09/2024",
    company: "BrightWave",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Example_Logo6.svg/50px-Example_Logo6.svg.png",
    description: "Renewable energy solutions provider.",
    time: "3:00 PM",
  },
  {
    date: "20/08/2024",
    company: "NextGenTech",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Example_Logo7.svg/50px-Example_Logo7.svg.png",
    description: "Leaders in future tech innovations.",
    time: "9:30 AM",
  },
  {
    date: "23/08/2024",
    company: "GreenEnergy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Example_Logo8.svg/50px-Example_Logo8.svg.png",
    description: "Pioneers in green and sustainable energy solutions.",
    time: "10:00 AM",
  },
  {
    date: "27/08/2024",
    company: "SmartSolutions",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Example_Logo9.svg/50px-Example_Logo9.svg.png",
    description: "Advanced IoT and smart devices solutions.",
    time: "1:30 PM",
  },
];

// List of months with the number of days in each
const months = [
  { name: "January", days: 31 },
  { name: "February", days: 29 }, // Leap year 2024
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 },
];

// Helper to check if a date has a company scheduled
const getCompanyOnDate = (day, month, year) => {
  const formattedDay = `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${year}`;
  return companySchedule.find((item) => item.date === formattedDay);
};

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // Start with the current month
  const [selectedCompany, setSelectedCompany] = useState(null); // For modal

  // Navigation functions for previous and next month
  const previousMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
  };
  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
  };

  const closeModal = () => {
    setSelectedCompany(null);
  };

  return (
 
       
      <div className="min-h-screen bg-gray-100 text-gray-900 py-10 w-full">
        <div className="container mx-auto px-4">
          <h1
            className="text-3xl font-bold text-center mb-6 bg-blue-400 p-4 text-white rounded-md shadow-xl"
          >
            2024 Company Visit Calendar
          </h1>

          <div className="relative overflow-hidden">
            {/* Navigation Arrows */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-4 rounded-full hover:bg-blue-600 hover:text-white transition-all"
              onClick={previousMonth}
              style={{ fontSize: "1.75rem" }}
            >
              ←
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-4 rounded-full hover:bg-blue-600 hover:text-white transition-all"
              onClick={nextMonth}
              style={{ fontSize: "1.75rem" }}
            >
              →
            </button>

            {/* Calendar for current month */}
            <div className="flex overflow-x-auto py-4">
              <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-4xl font-semibold mb-6 text-center text-blue-700">
                  {months[currentMonth].name}
                </h2>
                <div className="grid grid-cols-7 gap-2 bg-white text-gray-900 rounded-lg p-6 shadow-lg">
                  {/* Days of the Week */}
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="font-bold text-lg text-center text-blue-600"
                      >
                        {day}
                      </div>
                    )
                  )}

                  {/* Days with company highlights */}
                  {Array.from(
                    { length: months[currentMonth].days },
                    (_, dayIndex) => {
                      const day = dayIndex + 1;
                      const company = getCompanyOnDate(
                        day,
                        currentMonth + 1,
                        2024
                      );
                      return (
                        <div
                          key={dayIndex}
                          className="border border-gray-300 p-5 rounded-lg relative text-center bg-blue-50 hover:bg-blue-200 hover:shadow-md transition cursor-pointer"
                          style={{ fontSize: "1.125rem" }}
                          onClick={() => company && setSelectedCompany(company)} // Open modal on click
                        >
                          <div className="text-gray-900 font-semibold">
                            {day}
                          </div>
                          {company && (
                            <div
                              className="mt-3 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded shadow-lg w-full truncate"
                              style={{ fontSize: "1rem" }}
                            >
                              {company.company}
                            </div>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* Modal for company details */}
            {selectedCompany && (
              <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-xl relative w-11/12 max-w-md transform transition-all scale-100">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition"
                    onClick={closeModal}
                  >
                    &times;
                  </button>
                  <div className="flex flex-col items-center">
                    <img
                      src={selectedCompany.logo}
                      alt={`${selectedCompany.company} Logo`}
                      className="w-16 h-16 mb-4 rounded-full border-2 border-blue-500"
                    />
                    <h3 className="text-2xl font-bold text-center mb-3 text-blue-700">
                      {selectedCompany.company}
                    </h3>
                    <p className="text-center text-gray-600 mb-4 text-lg">
                      {selectedCompany.description}
                    </p>
                    <p className="text-center text-gray-500 font-semibold text-lg">
                      Time: {selectedCompany.time}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    
  );
}
