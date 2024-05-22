import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://fakestoreapi.com";

export const getFakeProducts = createAsyncThunk("product/getFakeProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${url}/products`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data?.message || error?.message || error);
  }
});

export const getFakeProductById = createAsyncThunk("product/getFakeProductById", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${url}/products/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data?.message || error?.message || error);
  }
});

const fksapiSlice = createSlice({
  name: "fakestoreapi",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    dataId: null,
    statusId: "idle",
    errorId: null,
  },
  reducers: {
    emptyDataId(state) {
      state.dataId = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getFakeProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFakeProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getFakeProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getFakeProductById.pending, (state) => {
        state.statusId = "loading";
      })
      .addCase(getFakeProductById.fulfilled, (state, action) => {
        state.statusId = "succeeded";
        state.dataId = action.payload;
      })
      .addCase(getFakeProductById.rejected, (state, action) => {
        state.statusId = "failed";
        state.errorId = action.payload;
      });
  },
});

export const { emptyDataId } = fksapiSlice.actions;
export default fksapiSlice.reducer;
