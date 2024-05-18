import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mkhotami-server.vercel.app",
    // baseUrl: "http://localhost:3000",
    credentials: "include",
  }),
  tagTypes: ["User", "Category", "Tag", "Product"],
  endpoints: () => ({}),
});
