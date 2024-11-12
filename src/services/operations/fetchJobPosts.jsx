import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../slices/appliedJobSlice";
import { setJobData } from "../../slices/jobSlices";
import { setAppliedJobData } from "../../slices/appliedJobSlice";
import { apiConnector } from "../apiconnector";
import { jobpost } from "../api";
import { useSelector } from "react-redux";

const { GETALLJOBPOST_API, APLLYJOB_API, GETALLJOBAPPLIED_API, DELETEJOB_API } =
  jobpost;

export function fetchJobPosts(navigate, token) {
  return async (dispatch) => {
    // const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      // Fetch job posts using API connector
      const response = await apiConnector(
        "GET",
        GETALLJOBPOST_API,
        { token: token },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log("Job API Response:", response);

      // Check for valid response
      if (response?.data?.success) {
        dispatch(setJobData(response.data.data)); // Set job data in redux state
        // toast.success("Job Post Fetched Successfully");

        // localStorage.setItem("job", JSON.stringify(response.data.data));
      } else {
        throw new Error(response?.data?.message || "Failed to fetch job posts");
      }
    } catch (error) {
      console.error("Fetch Job Posts Error:", error.message);

      if (error.response?.status === 401) {
        toast.error("Unauthorized! Please log in again.");
        navigate("/login"); // Navigate to login if unauthorized
      } else {
        toast.error("Failed to Fetch Job Posts");
      }
    } finally {
      dispatch(setLoading(false)); // Always set loading to false after the API call
      // toast.dismiss(toastId); // Dismiss the loading toast
    }
  };
}

export function ApllyJob(navigate, job_id, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    console.log("Apply Job", APLLYJOB_API);

    try {
      // Fetch job posts using API connector
      const response = await apiConnector(
        "POST",
        APLLYJOB_API,
        { job_id, token: token },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log("Job API Response:", response);

      // Check for valid response
      if (response?.data?.success) {
        toast.success(response.data.message);
      } else {
        throw new Error(
          response?.data?.message || "You have already applied for this job"
        );
      }
    } catch (error) {
      console.error("Fetch Job Posts Error:", error.message);

      if (error.response?.status === 401) {
        toast.error(error.response.data.message);
        navigate("/dashboard/recentjob"); // Navigate to login if unauthorized
      } else {
        toast.error("You have already applied for this job");
      }
    } finally {
      dispatch(setLoading(false)); // Always set loading to false after the API call
      toast.dismiss(toastId); // Dismiss the loading toast
    }
  };
}

export function getAllAppliedJob(navigate, token) {
  return async (dispatch) => {
    // const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      // Fetch job posts using API connector
      const response = await apiConnector(
        "GET",
        GETALLJOBAPPLIED_API,
        null, // Assuming you're not sending any request body
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log("Job API Response:", response);

      // Check for valid response
      if (response?.data?.success) {
        dispatch(setAppliedJobData(response.data.rows)); // Set job data in redux state
        // toast.success("Applied Job Posts Fetched Successfully");

        // Optional: If the response contains a new token, update it in localStorage
        if (response.data?.token) {
        }
      } else {
        throw new Error(
          response?.data?.message || "Failed to get job applications."
        );
      }
    } catch (error) {
      console.error("Fetch Job Posts Error:", error.message);
      dispatch(setError(error.message)); // Dispatch error message to Redux

      // Handle unauthorized access
      if (error.response?.status === 401) {
        toast.error("Unauthorized! Please log in again.");
        navigate("/login"); // Navigate to login if unauthorized
      } else {
        toast.error(
          "Failed to Fetch Job Posts: " + (error.message || "Unknown error")
        );
      }
    } finally {
      dispatch(setLoading(false)); // Always set loading to false after the API call
      // toast.dismiss(toastId); // Dismiss the loading toast
    }
  };
}

export function widthDrawApplication(navigate, application_id, token) {
  return async (dispatch) => {
    // const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      // Fetch job posts using API connector
      const response = await apiConnector(
        "DELETE",
        DELETEJOB_API,
        { application_id: application_id }, // Assuming you're not sending any request body
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log("Job API Response:", response);

      // Check for valid response
      if (response?.data?.success) {
        navigate("/dashboard/recentjob");
        navigate("/dashboard/appliedjob");
        toast.success(" Withdraw Successfully");
      } else {
        throw new Error(
          response?.data?.message || "Failed to get job applications."
        );
      }
    } catch (error) {
      console.error("Fetch Job Posts Error:", error.message);
      dispatch(setError(error.message)); // Dispatch error message to Redux

      // Handle unauthorized access
      if (error.response?.status === 401) {
        toast.error("Unauthorized! Please log in again.");
        navigate("/login"); // Navigate to login if unauthorized
      } else {
        toast.error(
          "Failed to Fetch Job Posts: " + (error.message || "Unknown error")
        );
      }
    } finally {
      dispatch(setLoading(false)); // Always set loading to false after the API call
      // toast.dismiss(toastId); // Dismiss the loading toast
    }
  };
}
