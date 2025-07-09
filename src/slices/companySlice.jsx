import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const companySlice = createSlice({
  name: "company",
  initialState: initialState,
  reducers: {
    setCompanyData(state, value) {
      state.companyData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setCompanyData, setLoading, setToken } = companySlice.actions;

export default companySlice.reducer;



// Slice:-
    // In the context of React, specifically when using Redux Toolkit, a "slice" refers to a
    // portion of the Redux state and the associated logic to handle that state. A slice typically
    // includes a piece of state, the reducers to update that state, and the actions that can be
    // dispatched to trigger those reducers.
    

    // Key Components of a Slice
    // State: The initial state for this slice of the Redux store.
    // Reducers: Functions that specify how the state changes in response to actions.
    // Actions: Automatically generated action creators based on the reducers.