import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setToogleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setToogleLoading } = loadingSlice.actions;

export default loadingSlice;
