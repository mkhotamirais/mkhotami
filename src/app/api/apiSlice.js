import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mkhotami-server.vercel.app/api",
    // baseUrl: "http://localhost:3000/api",
    credentials: "include",
  }),
  tagTypes: ["User", "Kamus"],
  endpoints: () => ({}),
});
