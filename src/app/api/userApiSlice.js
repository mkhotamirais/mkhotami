import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/api/user`,
      transformResponse: (res) => res.data,
      providesTags: ["User"],
    }),
    getUserById: builder.query({
      query: (id) => `/api/user/${id}`,
      transformResponse: (res) => res.data,
      providesTags: ["User"],
    }),
    postUser: builder.mutation({
      query: (body) => ({ url: `/api/user`, method: "POST", body }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({ url: `/api/user/${id}`, method: "DELETE" }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, usePostUserMutation, useDeleteUserMutation } = userApiSlice;
