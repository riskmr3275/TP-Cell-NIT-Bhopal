
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Importing icons
import { Mail, Phone, ChevronRight, Calendar } from 'react-feather';

// Event Card Component
const EventCard = ({ title, date, description }) => (
    <div className="bg-slate-100 shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="flex items-center text-sm text-gray-500 mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        {date}
      </p>
      <p className="mb-4">{description}</p>
      <button className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Learn More</button>
    </div>
  );
  
  // Upcoming Events Component
  const UpcomingEvents = () => (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard
          title="Maffick 2024"
          date="August 19-22, 2024"
          description="Annual culture event with over 50 companies participating."
        />
        <EventCard
          title="Mock Interview Session"
          date="July 5, 2024"
          description="Practice your interview skills with industry experts."
        />
        <EventCard
          title="Tech Talk: AI in Industry"
          date="June 20, 2024"
          description="Learn about the latest AI trends from leading professionals."
        />
      </div>
    </section>
  );

  export default UpcomingEvents;