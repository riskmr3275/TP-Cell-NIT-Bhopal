import { toast } from "react-hot-toast";
import { setJobPosted, setLoading } from "../../slices/jobPostedSlice";
 
import { apiConnector } from "../apiconnector";
import { jobpost } from "../api";
 




export function addJob(jobForm,token,company_id) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...");
      dispatch(setLoading(true));
      try {
        
        const payload = {
          ...jobForm,
          token: token,
          company_id: company_id, // corrected: not company_id
        };
        console.log("Print from add job api", jobForm);

        const response = await apiConnector(
          "POST",
          jobpost.POSTJOB,
           payload,
          {
            Authorization: `Bearer ${token}`,
          }
        );
        // console.log("COMPANY API RESPONSE............", response);
        console.log("Hwllo forom add job",response.data.result);
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
        toast.success("Added Successful");
      } catch (error) {
        console.log("JOB Addd API ERROR............", error);
        toast.error(error.message);
      }
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    };
  }