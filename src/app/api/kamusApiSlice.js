import { apiSlice } from "./apiSlice";

export const kamusApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getKamus: builder.query({
      query: (param) => `/kamus?${param}`,
      transformResponse: (res) => res.data,
      providesTags: ["Kamus"],
    }),
    getKamusById: builder.query({
      query: (id) => `/kamus/${id}`,
      transformResponse: (res) => res.data,
    }),
    postKamus: builder.mutation({
      query: (body) => ({ url: `/kamus`, method: "POST", body }),
      invalidatesTags: (result, error, arg) => [{ type: "Kamus", id: arg.id }],
    }),
    updateKamus: builder.mutation({
      query: (body) => ({ url: `/kamus/${body?.id}`, method: "PATCH", body }),
      invalidatesTags: ["Kamus"],
    }),
    deleteKamus: builder.mutation({
      query: (id) => ({ url: `/kamus/${id}`, method: "DELETE" }),
      invalidatesTags: ["Kamus"],
    }),
  }),
});

export const {
  useGetKamusQuery,
  useGetKamusByIdQuery,
  usePostKamusMutation,
  useUpdateKamusMutation,
  useDeleteKamusMutation,
} = kamusApiSlice;
