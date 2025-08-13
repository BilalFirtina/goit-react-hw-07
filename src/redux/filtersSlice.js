import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
// Selectors
export const selectFilters = (state) => state.filters.name;
export default filtersSlice.reducer;
