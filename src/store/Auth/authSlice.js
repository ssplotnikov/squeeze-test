import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  token_type: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, access_token, token_type } = action.payload;
      state.user = user;
      state.token = access_token;
      state.token_type = token_type;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.token_type = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
