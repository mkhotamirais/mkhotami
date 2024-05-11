import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const jpUrl = `https://jsonplaceholder.typicode.com`;

export const getUsers = createAsyncThunk("jp/getUsers", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${jpUrl}/users`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error?.response?.message || error?.message || error);
  }
});

export const getPosts = createAsyncThunk("jp/getPosts", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${jpUrl}/posts`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error?.response?.message || error?.message || error);
  }
});

const jpSlice = createSlice({
  name: "jp",
  initialState: {
    dataPosts: null,
    statusPosts: "idle",
    errorPosts: null,
    dataUsers: null,
    statusUsers: "idle",
    errorUsers: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.statusPosts = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.statusPosts = "succeeded";
        state.dataPosts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.statusPosts = "failed";
        state.errorPosts = action.payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.statusUsers = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.statusUsers = "succeeded";
        state.dataUsers = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.statusUsers = "failed";
        state.errorUsers = action.payload;
      });
  },
});

export default jpSlice.reducer;
