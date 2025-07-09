import React from 'react';
import { Link } from 'react-router-dom';

const InterviewTips = () => {
  // Array of interview tips
  const tips = [
    "Use Keywords: Match the job description keywords exactly.",
    "Simple Formatting: Avoid complex layouts, tables, and graphics.",
    "Standard Fonts: Use common fonts like Arial, Times New Roman, or Calibri.",
    "Section Headings: Use standard headings like 'Experience,' 'Education,' and 'Skills.'",
    "Consistent Formatting: Ensure consistent use of bullet points, dates, and headings.",
    "Save as PDF: Ensure your resume is saved in PDF format for compatibility.",
    "Avoid Headers and Footers: ATS systems might not read text in headers/footers.",
    "Contact Information: Include your full name, phone number, and email address.",
    "Professional Language: Use clear, professional language without abbreviations.",
    "Relevant Information: Focus on relevant experience and skills for the job."
  ];

  // Array of relevant technologies, skills, and keywords from job descriptions
  const keywords = [
    'Node.js', 'React.js', 'NoSQL', 'SQL', 'UI/UX', 'Typescript', 'Kubernetes', 'AWS', 'CI/CD', 
    'Python', 'Django', 'Flask', 'Microservices', 'GraphQL', 'Redis', 'Java', 'Spring Boot',
    'Docker', 'Kafka', 'TDD', 'Agile', 'Git', 'REST APIs', 'CloudWatch', 'Terraform', 'FastAPI',
    'S3', 'MongoDB', 'GraphQL', 'Serverless', 'OAuth', 'WebSockets', 'Vue.js', 'Tailwind CSS',
    'Kafka', 'Selenium', 'Redis', 'Kubernetes', 'Linux', 'Jenkins', 'CI/CD'
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Resume Tips</h1>

      {/* Tips and Buttons Section */}
      <div className="flex flex-col md:flex-row md:space-x-4 w-full max-w-4xl">
        {/* Tips Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-10 w-full md:w-3/4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top 10 Resume Tips </h2>
          <ul className="space-y-4 list-disc list-inside">
            {tips.map((tip, index) => (
              <li key={index} className="text-lg text-gray-700">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col space-y-2 md:w-1/4">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
            Download Resume Template
          </button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
            View Sample Resumes
          </button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
            Customize Your Resume
          </button>
          <a 
            href="https://enhancv.com/resources/resume-checker/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
            Check ATS Score
          </a>

          {/* Additional Resume Template Links */}
          <a 
            href="/resume-template-1" 
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
            Resume Template 1
          </a>
          <a 
            href="/resume-template-2" 
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
            Resume Template 2
          </a>
          <a 
            href="/resume-template-3" 
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
            Resume Template 3
          </a>
        </div>
      </div>

      {/* Keywords Section */}
      <div className="bg-blue-50 shadow-lg rounded-lg p-8 max-w-4xl w-full mb-10">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Important Keywords to Include</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {keywords.map((keyword, index) => (
            <span key={index} className="bg-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm font-semibold">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Project Description Section */}
      <div className="bg-gray-200 shadow-lg rounded-lg p-8 max-w-4xl w-full mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Description</h2>
        <p className="text-lg text-gray-700">
          The ATS booster project is designed to enhance the visibility of key skills and expertise in your resume when processed by Applicant Tracking Systems (ATS). The specified text, keywords, or areas of expertise are added to the PDF in a font size of 1 and in white color, rendering them invisible to the human eye but detectable by ATS algorithms. This hidden text is strategically placed at the top left corner of the first page of the PDF. Users can verify the added keywords, technologies, skills, or statements from job descriptions by using the search or find function in any PDF reader. This approach helps improve the chances of your resume getting noticed by the ATS, thereby increasing your opportunities for landing the desired job.
        </p>
      </div>

      {/* Additional TP Cell Buttons */}
      <div className="space-x-4">
        <Link to="/training-resources" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300">
          Training Resources
        </Link>
        <Link to="/placement-opportunities" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300">
          Placement Opportunities
        </Link>
        <Link to="/resume-review" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300">
          Schedule Resume Review
        </Link>
      </div>
    </div>
  );
};

export default InterviewTips;
