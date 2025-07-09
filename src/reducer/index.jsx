import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlices"
import jobReducer from "../slices/jobSlices"
import applidJobReducer from "../slices/appliedJobSlice"
import jobPostedSliceReducer from "../slices/jobPostedSlice"
import profileReducer from "../slices/profileSlice"
import companyReducer from "../slices/companySlice"
import JobPostingsList from "../component/Cordinator/JobPostingsList"
 

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  job: jobReducer,
  appliedJob: applidJobReducer,
  jobPosted: jobPostedSliceReducer,
  company:companyReducer
})

export default rootReducer