import { apiSlice } from "./apiSlice";

export const tagApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query({
      query: () => `/api/tag`,
      transformResponse: (res) => res.data,
      providesTags: ["Tag"],
    }),
    getTagById: builder.query({
      query: (id) => `/api/tag/${id}`,
      transformResponse: (res) => res.data,
      providesTags: ["Tag"],
    }),
    postTag: builder.mutation({
      query: (body) => ({ url: `/api/tag`, method: "POST", body }),
      invalidatesTags: (result, error, arg) => [{ type: "Tag", id: arg.id }],
    }),
    updateTag: builder.mutation({
      query: (body) => ({ url: `/api/tag/${body?.id}`, method: "PATCH", body }),
      invalidatesTags: ["Tag"],
    }),
    deleteTag: builder.mutation({
      query: (id) => ({ url: `/api/tag/${id}`, method: "DELETE" }),
      invalidatesTags: ["Tag"],
    }),
  }),
});

export const { useGetTagsQuery, useGetTagByIdQuery, usePostTagMutation, useUpdateTagMutation, useDeleteTagMutation } =
  tagApiSlice;
