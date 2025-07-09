import React from "react";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 p-8 shadow-lg rounded-2xl mt-8 max-w-8xl w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Resume Building</h3>
          <p className="text-lg mb-4">
            Access our resume-building resources to create a professional and
            impactful resume.
          </p>
          <div className="space-x-4">
            {/* Link to Resume Templates page */}
            <Link to="/resume-templates">
              <button className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
                Resume Templates
              </button>
            </Link>
            <Link to="/resume-tips">
              <button className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
                Resume Tips
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Interview Preparation</h3>
          <p className="text-lg mb-4">
            Explore our comprehensive interview preparation resources to ace
            your next interview.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
              Interview Tips
            </button>
            <button className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
              Practice Questions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
