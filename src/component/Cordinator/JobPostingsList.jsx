import React, { useState, useEffect } from "react";
import { Edit, DeleteIcon, Eye, Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "../../App.css";
// Simple Spinner component (you can customize this or use a library like react-spinners)
 

const JobPosting = ({ title, description, postedDate, deadline }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-2 w-full">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="text-sm text-gray-500 mb-4">
        <p>Posted: {postedDate}</p>
        <p>Deadline: {deadline}</p>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center border-2 border-gray-300 text-gray-700 p-2 px-4 rounded hover:bg-gray-100 gap-2">
          <Edit size={16} /> Edit
        </button>
        <button className="flex items-center border-2 border-gray-300 text-white font-semibold bg-red-600 p-2 px-4 rounded hover:bg-red-500 gap-2">
          <DeleteIcon size={16} /> Delete
        </button>
        <button className="flex items-center border-2 border-gray-300 text-gray-700 p-2 px-4 rounded hover:bg-gray-100 gap-2">
          <Eye size={16} /> View Applicants
        </button>
      </div>
    </div>
  );
};

const JobPostingsList = () => {
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true); // State to show loading
  const [loadingSpinner, setLoadingSpinner] = useState(true); // State to control 5 seconds spinner
  const { companyId } = useParams(); // Get companyId from URL
  const [jobPostings, setJobPostings] = useState([]); // State to hold job postings
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to fetch job postings using Axios
    const fetchJobPostings = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/applications/applicationForCord", // Replace with your API endpoint
          {
            company_id: companyId, // Send companyId in the request body
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Replace with actual token
              "Content-Type": "application/json",
            },
          }
        );

        setJobPostings(response.data.data); // Assuming API returns jobs array in response.data.jobs

        // Add a delay of 5 seconds before stopping the spinner
        setTimeout(() => {
          setLoadingSpinner(false);
        }, 2000);
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchJobPostings();
  }, [companyId, token]);
console.log("wjebfke",jobPostings);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex  items-center w-full justify-center">
      {loadingSpinner ? (
        <div className="flex flex-col gap-3 items-center justify-between">
          <div className="loader1"></div>
          <div>Wait while loading...</div>
        </div>
      ) : (
        <div className="min-h-screen w-full bg-gray-100 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold mb-6">{jobPostings[0]?.company_name}</h1>
            <button className="bg-blue-950 text-white py-2 px-6 rounded hover:bg-blue-800 flex items-center gap-2">
              <Plus /> Add Opening
            </button>
          </div>
          {jobPostings.length === 0 ? (
            <div className="text-black flex justify-between items-center">
              You do not have any Openings yet for this company, click the
              button above right to add a new opening.
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {jobPostings.map((job, index) => (
                <JobPosting
                  key={index}
                  title={job.job_title}
                  description={job.job_description}
                  postedDate={job.created_at}
                  deadline={job.application_deadline}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobPostingsList;
