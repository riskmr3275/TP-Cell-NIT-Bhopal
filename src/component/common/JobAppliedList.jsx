import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllAppliedJob,
  widthDrawApplication,
} from "../../services/operations/fetchJobPosts";
import { set } from "react-hook-form";

const JobAppliedList = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const {
    appliedJobData: jobs = [],
    loading,
    error,
  } = useSelector((state) => state.appliedJob);

  useEffect(() => {
    dispatch(getAllAppliedJob(navigate, token));
  }, [dispatch, navigate, token,count]);

 
    const handleOnClick = (application_id) => {
      dispatch(widthDrawApplication(navigate, application_id, token));
      setCount(count+1);
    };
 

  console.log("Jobs:", jobs); // Debugging line

  return (
    <div className="flex w-full bg-gray-100">
      <div className="bg-gray-100 p-6 rounded-lg shadow-2xl w-full ">
        <h1 className="text-2xl font-bold p-4 text-white mb-4 shadow-2xl bg-blue-400 rounded-xl">
          Your Applied Applications
        </h1>

        {loading ? (
          <p className="text-gray-900">Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error.message}</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-500">No applications found.</p>
        ) : (
          <ul className="space-y-4 ">
            {jobs.map((job) => (
              <li
                key={job.application_id}
                className="bg-gray-100 p-4 border rounded-lg flex justify-between items-center w-full shadow-md"
              >
                <div >
                  <h2 className="font-semibold text-lg text-gray-800">
                    {job.job_title}
                  </h2>
                  <p className="text-gray-600">{job.company}</p>
                  <p className="text-gray-500 text-sm">
                    Applied on:{" "}
                    {new Date(job.application_post_date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    onClick={() => handleOnClick(job.application_id)}
                  >
                    Withdraw 
                  </button>
                  <button className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                    View Application
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobAppliedList;
