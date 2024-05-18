import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mkhotami-server.vercel.app/api",
    // baseUrl: "/api",
    credentials: "include",
  }),
  tagTypes: ["User", "Category", "Tag", "Product"],
  endpoints: () => ({}),
});
