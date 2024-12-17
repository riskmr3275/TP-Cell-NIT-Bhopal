import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const ResumeUpload = () => {
  const [resumes, setResumes] = useState([
    { title: 'User123', date: '19.Jul.2024 01:00 AM' },
    { title: 'Finalresume1', date: '03.Sep.2024 15:23 PM' },
    { title: 'Placmentresum2', date: '04.Sep.2024 05:35 AM' },
  ]);

  const handleDelete = (index) => {
    setResumes(resumes.filter((_, i) => i !== index));
  };
const { user } = useSelector((state) => state.profile);
  return (
    <div className="p-4 w-full bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 bg-blue-400 p-4 text-white rounded-md shadow-xl">Welcome {user.name}</h1>
      
      {/* Upload Additional Resume Section */}
      <div className="border-2 border-blue-300 p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">UPLOAD ADDITIONAL RESUME</h2>
        
        <div className="mb-4">
          <label className="block mb-2">Resume Title</label>
          <input
            type="text"
            placeholder="Enter Resume Title"
            className="w-full border border-gray-300 p-2"
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Resume URL/Link (Like Google Drive/Github)</label>
          <input
            type="text"
            placeholder="Enter Resume URL"
            className="w-full border border-gray-300 p-2"
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Resume (Optional) <span className="text-red-500">(Only PDF & must be less than 2MB)</span></label>
          <input
            type="file"
            accept=".pdf"
            className="w-full border border-gray-300 p-2"
          />
        </div>
        
        <button className="bg-blue-950 text-white px-4 py-2">Upload Resume</button>
      </div>
      
      {/* Additional Resumes Section */}
      <div className="border-2 border-blue-600 p-4">
        <h2 className="text-xl font-semibold mb-2">ADDITIONAL RESUMES</h2>
        <p className="text-red-500 mb-4">
          Removing the resume from the drive/portal will result in the company losing access to it.
        </p>
        
        <table className="w-full text-left">
          <tbody>
            {resumes.map((resume, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{resume.title}</td>
                <td className="p-2 text-blue-500">
                  <a href="#" className="mr-4">View PDF</a>
                  <a href="#">View Link</a>
                </td>
                <td className="p-2">{resume.date}</td>
                <td className=" text-white font-semibold text-center bg-red-600 rounded-md">
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResumeUpload;
