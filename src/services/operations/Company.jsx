import { toast } from "react-hot-toast";
import { setCompanyData, setLoading } from "../../slices/companySlice";
import { apiConnector } from "../apiconnector";
import { useSelector } from "react-redux";
import { companyEndpoints } from "../api";
const { GET_ALLCOMPANYLSIT_API,ADD_COMPANYLIST_API} = companyEndpoints;

export function getCompanyList(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        GET_ALLCOMPANYLSIT_API,
        { token: token },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      // console.log("COMPANY API RESPONSE............", response);
      console.log("Hello ",response.data.result);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      // toast.success("Company Data FEtch Successfully");
      dispatch(setCompanyData(response.data.result));
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error.message);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}



export function addCompany(formData, navigate,token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const {companyName, industry, website, address, description}=formData;
      console.log("Print",formData);
      
      const response = await apiConnector(
        "POST",
        ADD_COMPANYLIST_API,
        { token: token,  company_name:companyName, industry, website, address, company_description:description },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      // console.log("COMPANY API RESPONSE............", response);
      console.log("Hwllo forom add company",response.data.result);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Company Added");
      dispatch(setCompanyData(response.data.result));
    } catch (error) {
      console.log("Company Addd API ERROR............", error);
      toast.error(error.message);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}