import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { jobpost, settingsEndpoints } from "../api";
import { setLoading } from "../../slices/profileSlice";

const { CHANGE_PASSWORD_API, UPDATE_DISPLAY_PICTURE_API } = settingsEndpoints;

export async function changePassword(formData, token) {
  const toastId = toast.loading("Loading...");
  try {
    formData.token = token;
    formData.confirmNewPassword = formData.newPassword;

    const response = await apiConnector("POST", CHANGE_PASSWORD_API, formData, {
      Authorization: `Bearer ${token}`,
    });
    console.log("CHANGE_PASSWORD_API API RESPONSE:", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Password Changed Successfully");
  } catch (error) {
    console.log("CHANGE_PASSWORD_API API ERROR:", error);
    toast.error(error.response?.data?.error || "Failed to change password");
  } finally {
    toast.dismiss(toastId);
  }
}

export const uploadProfileImage = (imageData, token, navigate) => async (dispatch) => {
  try {
    console.log("Formdata from profile change",imageData[0],token)
    const response = await apiConnector("PUT",
      settingsEndpoints.UPDATE_DISPLAY_PICTURE_API,
      imageData,
      {
        Authorization: `Bearer ${token}`,
      });

    if (response.data.success) {
      toast.success("Profile photo updated");
      navigate("/dashboard/profile"); // or wherever you want
    }
  } catch (error) {
    console.error("Image Upload Failed:", error);
    toast.error("Failed to upload image");
  }
};

