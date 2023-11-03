import { createSlice } from "@reduxjs/toolkit";

function valueFromLocal() {
  return (
    JSON.parse(localStorage.getItem("data")) || {
      query: "features",
      page: 1,
      total: 0,
    }
  );
}
const imgSlice = createSlice({
  name: "img",
  initialState: valueFromLocal(),
  reducers: {
    updateQuery: (state, { payload }) => {
      state.query = payload;
      localStorage.setItem("data", JSON.stringify(state));
    },
    updateTotal: (state, { payload }) => {
      state.total = payload;
      localStorage.setItem("data", JSON.stringify(state));
    },
    updatePage: (state, { payload }) => {
      state.page = payload;
      localStorage.setItem("data", JSON.stringify(state));
    },
  },
});

export const { updateQuery, updateTotal, updatePage } = imgSlice.actions;
export default imgSlice.reducer;
