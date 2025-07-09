import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AttachmentForm = () => {
  const [documentTitle, setDocumentTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const {user}=useSelector((state)=>state.profile);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    alert('Document uploaded');
  };

  return (
    <div className="min-h-screen bg-gray-100  w-full">
   

      {/* Main Content */}
      <div className="flex-1 p-10 w-full">
        {/* Header */}
        <header className="bg-blue-400 rounded-md shadow-xl  py-4 px-6 mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white b">Welcome {user.name}</h1>
          
        </header>

        {/* Add Attachment Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-purple-700 mb-6">Add Attachment</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700" >Type</label>
              <select
                className="mt-1 block w-full  border rounded-md p-2 max-w-max px-8 bg-gray-50border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                required
              >
                <option value="" disabled>Select Title</option>
                <option value="document">Document</option>
                <option value="image">Image</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Document Title</label>
              <input
                type="text"
                value={documentTitle}
                onChange={(e) => setDocumentTitle(e.target.value)}
                className="mt-1 w-52   border rounded-md p-2 max-w-min px-8 bg-gray-50border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                placeholder="Enter Document Title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Document ( JPG & JPEG Only )</label>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".jpg,.jpeg"
                className="mt-1 block w-full  border rounded-md p-2 max-w-max  bg-gray-50border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Upload Document
              </button>
            </div>
          </form>
        </div>

        {/* Attachments Section */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Attachments</h3>
          {/* Example attachment list */}
          <ul className="space-y-2">
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center">
              <span className="text-gray-700">Document1.jpg</span>
              <a href="#" className="text-purple-600 hover:text-purple-800">Download</a>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center">
              <span className="text-gray-700">Document2.jpg</span>
              <a href="#" className="text-purple-600 hover:text-purple-800">Download</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttachmentForm;
