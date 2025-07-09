import { ClipboardCheck } from "lucide-react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApllyJob } from "../../services/operations/fetchJobPosts";

const JobCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsChecked(false); // Reset checkbox state
  };

  const handleSubmitApplication = () => {
    if (!isChecked) {
      alert("Please confirm that the details above are correct.");
      return;
    }

    dispatch(ApllyJob(navigate, job.job_id, token));
    handleCloseModal(); // Close modal after submission
  };

  return (
    <>
      <div className="flex justify-center items-center bg-gray-300 w-full">
        <div className="w-full bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1 ">
                {job.job_title}
              </h2>
              <p className="text-md text-blue-600 mb-1">{job.company_name}</p>
            </div>
            <div className="flex flex-col items-end text-center gap-2">
              <p className="text-sm text-gray-600 mb-1 font-semibold border-2 p-2">Location: {job.location}</p>
              <button
                className="w-max px-4 py-2 bg-blue-950 text-white text-sm rounded font-semibold hover:bg-blue-900 transition duration-300"
                onClick={handleApplyNowClick}
              >
                Easy Apply
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">Coodinator: {job.name}</p>
          <p className="text-sm text-gray-600 mb-1">Salary: {job.salary} P/M</p>
          <p className="text-sm text-gray-700 mb-2">{job.job_description}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-full">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[60%]">
            <h2 className="text-xl font-bold text-white bg-blue-950 p-4 rounded-t-xl mb-4">
              Verify Details
            </h2>

            {/* Job Details Card */}
            <div className="bg-white p-3 rounded-lg shadow-xl mb-4">
              <h3 className="text-lg text-gray-700 mb-1 font-extrabold">
                Job Information
              </h3>
              <p className="text-md font-bold text-gray-600 ">Title: {job.job_title}</p>
              <p className="text-md font-bold text-gray-600 ">Industry: {job.industry}</p>
              <p className="text-md font-bold text-gray-600 ">Company: {job.company_name}</p>
              <p className="text-md font-bold text-gray-600 ">Location: {job.location}</p>
              <p className="text-md font-bold text-gray-600 ">Salary: {job.salary} P/M</p>
              <p className="text-sm text-gray-600">Description: {job.job_description}</p>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white p-3 rounded-lg shadow-xl mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                Eligibility
              </h3>
              <p className="text-sm text-gray-600">
                Experience: {job.eligibility.experience}
              </p>
              <p className="text-sm text-gray-600">Degree: {job.eligibility.degree}</p>
              <p className="text-sm text-gray-600">
                Skills: {job.eligibility.skills.join(", ")}
              </p>
            </div>

            {/* Application Info Card */}
            <div className="bg-white p-3 rounded-lg shadow-xl mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                Application Information
              </h3>
              <p className="text-sm text-gray-600">
                Application Deadline: {new Date(job.application_deadline).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                Post Date: {new Date(job.application_post_date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">TPR Coordinator: {job.name}</p>
              <p className="text-sm text-gray-600">Department: {job.department}</p>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white p-3 rounded-lg shadow-xl mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                Contact Information
              </h3>
              <p className="text-sm text-gray-600">Email: {job.email}</p>
              <p className="text-sm text-gray-600">
                Company Website:
                <a
                  href={job.company_website}
                  className="text-blue-600 hover:underline cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {job.company_website}
                </a>
              </p>
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mr-2 "
              />
              <label className="text-sm text-gray-600">
                I confirm that the details above are correct.
              </label>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                className="px-3 py-1 bg-red-600 font-semibold text-white text-sm rounded hover:bg-gray-500 transition duration-300"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 bg-blue-950 text-white text-sm rounded hover:bg-blue-900 transition duration-300"
                onClick={handleSubmitApplication}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobCard;
