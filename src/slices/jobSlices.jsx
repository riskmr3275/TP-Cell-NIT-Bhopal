import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobData: {},
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobData(state, action) {
      state.jobData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setJobData, setLoading, setToken } = jobSlice.actions;

export default jobSlice.reducer;
