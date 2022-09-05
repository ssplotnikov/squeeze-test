import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import qs from 'qs';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://79.143.31.216/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log('file: AuthServices.js ~ line 10 ~ token', token);
      if (token) {
        headers.set('authorization', `bearer ${token}`);
      }
      headers.set('accept', 'application/json');
      headers.set('content-type', 'application/x-www-form-urlencoded');
      return headers;
    },
  }),
  endpoints: (build) => ({
    registration: build.mutation({
      query: ({ username, password }) => ({
        url: `register?username=${username}&password=${password}`,
        method: 'POST',
      }),
    }),
    login: build.mutation({
      query: (patch) => ({
        url: `login`,
        method: 'POST',
        body: qs.stringify(patch),
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation } = authApi;
