import React from "react";

const trainingPrograms = [
  { title: "JavaScript Mastery", description: "Master the fundamentals of JavaScript and advance your skills with ES6+ features, asynchronous programming, and frameworks.", date: "November 20, 2024" },
  { title: "React for Beginners", description: "Dive into React and learn how to build interactive UIs with components, hooks, state management, and more.", date: "December 1, 2024" },
  { title: "Node.js Crash Course", description: "Get hands-on experience with Node.js for backend development, including Express, database integration, and building RESTful APIs.", date: "December 10, 2024" },
  { title: "Web Development Bootcamp", description: "A complete bootcamp covering full-stack web development, including HTML, CSS, JavaScript, Node.js, and more.", date: "January 5, 2025" },

  // New Programs
  { title: "Advanced React", description: "Go beyond the basics and dive into advanced topics like Redux, server-side rendering, and testing in React.", date: "February 15, 2025" },
  { title: "Python for Data Science", description: "Learn Python for data science, including libraries like Pandas, NumPy, and Matplotlib, and get hands-on with real-world datasets.", date: "March 10, 2025" },
  { title: "Machine Learning Fundamentals", description: "Explore the fundamentals of machine learning, including supervised and unsupervised learning, with practical Python exercises.", date: "March 25, 2025" },
  { title: "Full Stack Developer Bootcamp", description: "Learn full-stack development using the MERN stack (MongoDB, Express, React, Node.js), and build scalable web applications.", date: "April 10, 2025" },
  { title: "Cloud Computing with AWS", description: "Learn how to deploy and manage applications on AWS, with a focus on EC2, S3, and Lambda services.", date: "April 25, 2025" },
  { title: "UI/UX Design Masterclass", description: "Master UI/UX design principles and tools like Figma and Adobe XD to create user-friendly and visually appealing interfaces.", date: "May 5, 2025" },
  { title: "Blockchain Development", description: "Learn about blockchain technology and how to develop decentralized applications using Ethereum and smart contracts.", date: "May 20, 2025" },
  { title: "Cybersecurity Fundamentals", description: "Understand the core principles of cybersecurity, including encryption, ethical hacking, and network security.", date: "June 10, 2025" },
 
];
const TrainingAndDevelopmentPage = () => {
    return (
      <div className="bg-gradient-to-r p-8 font-sans">
        {/* Page Header */}
        <div className="text-blue-950 py-12 text-center rounded-lg ">
          <h1 className="text-4xl font-extrabold">Training & Development Opportunities</h1>
          <p className="text-xl mt-4">Enhance your skills with our curated training programs designed to take you to the next level.</p>
        </div>
  
        {/* Training Programs Section */}
        <section className="mt-12 px-8 py-6">
          <h2 className="text-3xl font-semibold text-blue-950 mb-6">Upcoming Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className=" p-6 rounded-2xl shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                <h3 className="text-2xl font-semibold text-blue-950">{program.title}</h3>
                <p className="text-gray-700 mt-3">{program.description}</p>
                <p className="text-gray-500 mt-4">Date: <span className="font-bold">{program.date}</span></p>
                <div className="mt-6">
                  <button className="bg-blue-950 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200 transform hover:scale-105">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
};

export default TrainingAndDevelopmentPage;