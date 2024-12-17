import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx"; // Import xlsx for Excel functionality
import { Edit, DeleteIcon, Eye, Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "../../App.css";

// Applicant Modal Component
const ApplicantModal = ({ isOpen, onClose, applicants, onExport }) => {
  const [showAll, setShowAll] = useState(false);

  if (!isOpen) return null;

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-[100%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Applicants</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✖
          </button>
        </div>

        {applicants.length > 0 ? (
          <div className="max-h-[400px] overflow-y-auto">
            <ul className="space-y-4">
              {applicants.slice(0, showAll ? applicants.length : 5).map((applicant, index) => (
                <li key={index} className="flex items-center gap-4 p-2 bg-gray-100 rounded-md">
                  <img
                    src={applicant.photo_url || "https://via.placeholder.com/50"} // Adjusted to use `photo_url`
                    alt={applicant.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{applicant.name}</h3>
                    <p className="text-sm text-gray-600">{applicant.email}</p>
                    <p className="text-sm text-gray-600">{applicant.user_id}</p>
                    <p className="text-sm text-gray-600">Branch:MCA</p>

                  </div>
                </li>
              ))}
            </ul>
            {!showAll && applicants.length > 5 && (
              <button
                onClick={handleToggleShowAll}
                className="text-blue-500 mt-2"
              >
                Show more
              </button>
            )}
          </div>
        ) : (
          <p>No applicants available.</p>
        )}

        <button
          onClick={onExport}
          className="mb-4 bg-blue-950 text-white py-2 px-4 mt-5 rounded hover:bg-blue-700"
        >
          Export to Excel
        </button>
      </div>
    </div>
  );
};

// Job Posting Component
const JobPosting = ({
  title,
  description,
  postedDate,
  deadline,
  onViewApplicants,
}) => {
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
        <button
          onClick={onViewApplicants}
          className="flex items-center border-2 border-gray-300 text-gray-700 p-2 px-4 rounded hover:bg-gray-100 gap-2"
        >
          <Eye size={16} /> View Applicants
        </button>
      </div>
    </div>
  );
};

// Main Job Postings List Component
const JobPostingsList = () => {
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [loadingSpinner, setLoadingSpinner] = useState(true);
  const { companyId } = useParams();
  const [jobPostings, setJobPostings] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentApplicants, setCurrentApplicants] = useState([]);

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/applications/applicationForCord",
          { company_id: companyId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setJobPostings(response.data.data);

        setTimeout(() => {
          setLoadingSpinner(false);
        }, 2000);
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobPostings();
  }, [companyId, token]);


  console.log("token:", token); 
  const handleViewApplicants = async (id) => {
    console.log("Job ID:", id);
    
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/applications/getAllAplicationsByJobId",
         { id: id } ,   
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Applicants:", response.data.data); 
      
      setCurrentApplicants(response.data.data); // Set the fetched applicants
      setIsModalOpen(true);
    } catch (err) {
      console.error("Error fetching applicants:", err);
    }
  };

  const handleExportToExcel = () => {
    if (currentApplicants.length === 0) {
      alert("No applicants to export.");
      return;
    }

    // Format the applicant data for Excel
    const data = currentApplicants.map((applicant, index) => ({
      "S.No": index + 1,
      Name: applicant.name,
      Email: applicant.email,
      Phone: applicant.phone || "N/A",  // You can include more fields as needed
      Department: applicant.department || "N/A",
    }));

    // Create a worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create a workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applicants");

    // Write the workbook to a file and trigger the download
    XLSX.writeFile(workbook, "Applicants.xlsx");
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex items-center w-full justify-center">
      {loadingSpinner ? (
        <div className="flex flex-col gap-3 items-center justify-between">
          <div className="loader1"></div>
          <div>Wait while loading...</div>
        </div>
      ) : (
        <div className="min-h-screen w-full bg-gray-100 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold mb-6">
              {jobPostings[0]?.company_name}
            </h1>
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
                  onViewApplicants={() => handleViewApplicants(job.job_id)}
                />
              ))}
            </div>
          )}
        </div>
      )}
      <ApplicantModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        applicants={currentApplicants}
        onExport={handleExportToExcel} // Pass the export handler
      />
    </div>
  );
};

export default JobPostingsList;
