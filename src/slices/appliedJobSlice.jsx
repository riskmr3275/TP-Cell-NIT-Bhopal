import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appliedJobData: [],
  loading: false,
  error: null, // Added error state
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const appliedJobSlice = createSlice({
  name: "appliedJob",
  initialState,
  reducers: {
    setAppliedJobData(state, action) {
      state.appliedJobData = action.payload;
      state.error = null; // Clear error when data is set
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) { // Added setError reducer
      state.error = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload)); // Persist token in localStorage
    },
  },
});

export const { setAppliedJobData, setLoading, setError, setToken } = appliedJobSlice.actions;

export default appliedJobSlice.reducer;
