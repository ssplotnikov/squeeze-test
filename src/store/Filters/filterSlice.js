import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: [],
  offset: 0,
  limit: 5,
};
export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.sort = [...action.payload];
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
  },
});

export const { setFilters, setSortPrice, setSortTime, resetFilters } =
  filtersSlice.actions;
export default filtersSlice;
