import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchJobPosts } from "../services/operations/fetchJobPosts";
import JobCard from "../component/common/JobCard";

const RecentJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector((state) => state.auth); 
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(25);

  const { jobData, totalJobs } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJobPosts(navigate,token));
  }, [dispatch, navigate, currentPage]);

  const totalPages = Math.ceil(totalJobs / jobsPerPage);
console.log('jobDTA',jobData);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex w-full bg-gray-100 mt-5 ">
      <div className="w-full p-4">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search now"
            className="border rounded-lg p-2 w-1/3"
          />
          <div className="flex space-x-4">
            <p className="font-semibold">Offer:</p>
            <p>10</p>
            <p className="font-semibold">Eligible:</p>
            <p>10</p>
            <p className="font-semibold">Applied:</p>
            <p>9</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <tbody className="flex flex-col gap-2 bg-gray-300">
              {jobData && jobData.length > 0 ? (
                jobData.map((job, idx) => (
                  <JobCard key={idx} job={job} />
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No job posts available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p>
            Showing {currentPage * jobsPerPage - jobsPerPage + 1} to{" "}
            {Math.min(currentPage * jobsPerPage, totalJobs)} of {totalJobs} entries
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"} rounded`}
            >
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              {currentPage}
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"} rounded`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentJob;
