import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const squeezeApi = createApi({
  reducerPath: 'squeezeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://79.143.31.216/',
    tagTypes: ['Squeeze'],
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      headers.set('accept', 'application/json');
      headers.set('Content-Type', 'application/x-www-form-urlencoded');
      return headers;
    },
  }),
  endpoints: (build) => ({
    getStatictics: build.query({
      query: ({ offset, limit, sort = '' }) =>
        `statistics?${sort}offset=${offset}&limit=${limit}`,
      providesTags: ['Squeeze'],
    }),

    createSqueeze: build.mutation({
      query: (link) => ({
        url: `squeeze?link=${link}`,
        method: 'POST',
      }),
      invalidatesTags: ['Squeeze'],
    }),
  }),
});

export const {
  useGetStaticticsQuery,
  useGetSortStaticticsQuery,
  useCreateSqueezeMutation,
} = squeezeApi;
