import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { format } from "date-fns";
const url = "https://newsapi.org/v2";
const apiKey = "9c6131f2202d4dafb822bc76564f80c4";
const date = format(new Date() - 60 * 24 * 24 * 1000, "yyyy-mm-dd");

export const getNews = createAsyncThunk("news/getNews", async (data, { rejectWithValue }) => {
  try {
    let top, query;
    if (!data?.top || data?.top === null || data?.top === "") top = "everything";
    else top = data?.top;
    if (!data?.queryObj?.q || data?.queryObj?.q === null || data?.queryObj?.q === "")
      query = { q: "tesla", ...data?.queryObj };
    else query = { q: data?.queryOj?.q, ...data?.queryObj };
    const queryString = Object.entries(query)
      .map((item) => item.join("="))
      .join("&");
    const response = await axios.get(`${url}/${top}?${queryString}&from=${date}&pageSize=10&apiKey=${apiKey}`);
    return response?.data?.articles;
  } catch (error) {
    return rejectWithValue(error?.response?.data?.message || error?.message || error);
  }
});

const newsapiSlice = createSlice({
  name: "newsapi",
  initialState: {
    status: "idle",
    data: null,
    error: null,
    top: "",
    query: {},
    q: "",
  },
  reducers: {
    setTop(state, action) {
      state.top = action.payload;
    },
    setQuery(state, action) {
      state.query = { ...state.query, ...action.payload };
    },
    setQ(state, action) {
      state.q = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setTop, setQuery, setQ } = newsapiSlice.actions;
export default newsapiSlice.reducer;
