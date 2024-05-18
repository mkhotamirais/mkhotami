import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (body) => ({ url: `/user/signin`, method: "PATCH", body }),
      invalidatesTags: ["User"],
    }),
    signup: builder.mutation({
      query: (body) => ({ url: `/user/signup`, method: "POST", body }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
    }),
    getMe: builder.query({
      query: () => `/user/me`,
      transformResponse: (res) => res.data,
      providesTags: ["User"],
    }),
    updateMe: builder.mutation({
      query: (body) => ({ url: `/user/me`, method: "PATCH", body }),
      invalidatesTags: ["User"],
    }),
    deleteMe: builder.mutation({
      query: () => ({ url: `/user/me`, method: "DELETE" }),
      invalidatesTags: ["User"],
    }),
    signout: builder.mutation({
      query: () => ({ url: `/user/signout`, method: "PATCH" }),
      invalidatesTags: ["User"],
    }),
    getUsers: builder.query({
      query: () => `/user`,
      transformResponse: (res) => res.data,
      providesTags: ["User"],
    }),
    getUserById: builder.query({
      query: (id) => `/user/${id}`,
      transformResponse: (res) => res.data,
      providesTags: ["User"],
    }),
    postUser: builder.mutation({
      query: (body) => ({ url: `/user`, method: "POST", body }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
    }),
    updateUser: builder.mutation({
      query: (body) => ({ url: `/user/${body?.id}`, method: "PATCH", body }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({ url: `/user/${id}`, method: "DELETE" }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
  useGetMeQuery,
  useUpdateMeMutation,
  useDeleteMeMutation,
  useSignoutMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
  usePostUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApiSlice;
