import { createSlice } from "@reduxjs/toolkit";

const initialState = { libraries: [], error: false, loading: false };

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = false;
    },
    getBookSuccess: (state, { payload }) => {
      state.loading = false;
      state.libraries = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getBookSuccess, fetchFail } = bookSlice.actions;

export default bookSlice.reducer;
