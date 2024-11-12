import React from 'react';

const RecruiterInfoPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-20">
      {/* Header Section */}
      <header className="text-center mb-12">
      
        <p className="text-4xl  text-gray-600 mt-4 font-semibold">
          Empowering students with diverse skills and industry-ready education
        </p>
      </header>

      {/* Skills Section */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Key Skills of Our Students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'JavaScript & Frameworks',
            'Full-Stack Development',
            'Data Structures & Algorithms',
            'UI/UX Design',
            'Machine Learning',
            'Database Management',
            'Cloud Computing',
            'DevOps',
            'Project Management',
          ].map((skill) => (
            <div
              key={skill}
              className="bg-blue-100 text-blue-800 rounded-lg p-4 text-center font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Education and Programs Section */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Our Educational Programs
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our college offers an array of programs that blend theoretical
          knowledge with hands-on experience. We emphasize skills that meet
          modern industry demands through our updated curriculum and real-world
          projects.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Computer Science & Engineering</li>
          <li>Information Technology</li>
          <li>Electronics & Communication Engineering</li>
          <li>Mechanical Engineering</li>
          <li>Civil Engineering</li>
          <li>Electrical Engineering</li>
          <li>Architecture & Planning</li>
          <li>Management & Business Studies</li>
          <li>Data Science & Analytics</li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Our Achievements
        </h2>
        <p className="text-gray-600 mb-4">
          Over the years, our students and faculty have achieved remarkable
          milestones that showcase our commitment to excellence and innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            '100+ Industry Partnerships',
            '200+ Successful Placements in 2023',
            'Ranked among Top Engineering Colleges',
            'State-of-the-Art Labs and Facilities',
            'Active Alumni Network',
            'Annual Hackathons and Competitions',
          ].map((achievement) => (
            <div
              key={achievement}
              className="bg-blue-100 text-blue-800 rounded-lg p-4 text-center font-medium"
            >
              {achievement}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Ready to Collaborate?
        </h2>
        <p className="text-gray-600 mb-6">
          Let’s work together to create outstanding internship and placement
          opportunities. Join us in shaping the future of the industry!
        </p>
        <button className="bg-blue-900 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
          Contact Us for Partnership
        </button>
      </section>
    </div>
  );
};

export default RecruiterInfoPage;