import React, { useState } from 'react';

const HelpDeskComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNumber: '',
    queryType: 'general',
    message: '',
    attachment: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'attachment') {
      setFormData({
        ...formData,
        attachment: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add an API call here to send formData to a server
    setSubmitted(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <h1 className="text-3xl font-bold mb-6 text-center bg-blue-400 p-4 rounded-md shadow-xl text-white">Training & Placement Help Desk</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} className=" mx-auto bg-white p-6 rounded-lg ">
          <h2 className="text-2xl font-semibold mb-4 " >Submit your Query</h2>
          
          <div className="mb-4 max-w-3xl">
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4 max-w-3xl">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your roll number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Query Type</label>
            <select
              name="queryType"
              value={formData.queryType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="general">General Query</option>
              <option value="placement">Placement Related</option>
              <option value="internship">Internship Related</option>
              <option value="technical">Technical Issue</option>
              <option value="resume">Resume Assistance</option>
              <option value="companyQuery">Company Specific Query</option>
              <option value="exam">Placement Exam Queries</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Describe your query in detail"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Attach File (Optional)</label>
            <input
              type="file"
              name="attachment"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              accept=".pdf,.doc,.docx"
            />
            <small className="text-gray-500">You can attach your resume or related documents (PDF, DOC).</small>
          </div>

          <button
            type="submit"
            className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Submit Query
          </button>
        </form>
      ) : (
        <div className="max-w-xl mx-auto bg-green-100 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Thank you for your query!</h2>
          <p className="mb-4">
            Our Training & Placement team will review your query and get back to you via email. Please keep an eye on your inbox.
          </p>
          <button
            className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-800"
            onClick={() => setSubmitted(false)}
          >
            Submit Another Query
          </button>
        </div>
      )}
    </div>
  );
};

export default HelpDeskComponent;
