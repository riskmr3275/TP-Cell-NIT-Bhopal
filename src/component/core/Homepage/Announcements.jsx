import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Announcements1() {
  return (
    <section className="bg-gradient-to-r from-white-50 to-blue-50 p-8 shadow-lg rounded-2xl mt-8 w-full lg:w-2/4">
      {/* Announcement Section Header */}
      <div className="flex items-center mb-6">
        <div className="text-white p-4 rounded-lg mr-4">
          <span className="text-2xl font-bold">📢</span>
        </div>
        <h1 className="text-4xl font-serif text-gray-800">Announcements</h1>
      </div>

      {/* Announcement Description */}
      <p className="text-lg text-gray-600 mb-6">
        Stay updated on the latest news, events, and updates from the Training
        and Placement Cell. Check out our latest announcements to stay informed.
      </p>

      {/* Action Buttons */}
      <div className="space-x-4">
        <button className="bg-blue-950  text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition duration-300 sm:flex-col">
          View Announcements
        </button>
        <button className="bg-blue-950 m-4 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition duration-300">
          Upcoming Events
        </button>
      </div>
    </section>
  );
}

// Quick Links Component
const QuickLinks = () => (
  <div className="bg-gradient-to-r p-8 shadow-lg rounded-2xl mt-8 w-full lg:w-1/3">
    <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
    <ul className="space-y-2">
      <li>
        <div className="flex flex-row items-center">
          <FaChevronRight className="w-4 h-4 mr-2" />
          <a
            href="https://www.manit.ac.in/sites/default/files/documents/Placement%20Process.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-950 hover:underline"
          >
            Placement Procedure
          </a>
        </div>
      </li>
      <li>
        <div className="flex flex-row items-center">
          <FaChevronRight className="w-4 h-4 mr-2" />
          <a
            href="https://www.manit.ac.in/campus-day"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-950 hover:underline"
          >
            Recruitment Guideline
          </a>
        </div>
      </li>
      <li>
        <div className="flex flex-row items-center">
          <FaChevronRight className="w-4 h-4 mr-2" />
          <a
            href="https://www.manit.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-950 hover:underline"
          >
            Training Shedule
          </a>
        </div>
      </li>
      
      <li>
        <div className="flex flex-row items-center mt-2">
          <FaChevronRight className="w-4 h-4 mr-2" />
          <a
            href="https://www.manit.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-950 hover:underline"
          >
            MANIT Official website
          </a>
        </div>
      </li>
    </ul>
  </div>
);

const Announcements = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 w-full">
      {/* Left: Announcements Section */}
      <Announcements1 />

      {/* Right: Quick Links */}
      <QuickLinks />
    </div>
  );
};

export default Announcements;
