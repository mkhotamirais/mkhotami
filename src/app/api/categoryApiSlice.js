import { apiSlice } from "./apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/api/category`,
      transformResponse: (res) => res.data,
      providesTags: ["Category"],
    }),
    getCategoryById: builder.query({
      query: (id) => `/api/category/${id}`,
      transformResponse: (res) => res.data,
      providesTags: ["Category"],
    }),
    postCategory: builder.mutation({
      query: (body) => ({ url: `/api/category`, method: "POST", body }),
      invalidatesTags: (result, error, arg) => [{ type: "Category", id: arg.id }],
    }),
    updateCategory: builder.mutation({
      query: (body) => ({ url: `/api/category/${body?.id}`, method: "PATCH", body }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({ url: `/api/category/${id}`, method: "DELETE" }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  usePostCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApiSlice;
