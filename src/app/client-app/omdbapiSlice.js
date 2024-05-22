import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const omdbapiUrl = `https://www.omdbapi.com/?apikey=99773434`;

export const getMovies = createAsyncThunk("omdbapi/getMovies", async (paramObj, { rejectWithValue }) => {
  try {
    let param;
    param = { s: "spongebob", ...paramObj };
    if (param.s === null || param.s === "") param.s = "spongebob";
    const paramString = Object.entries(param)
      .map((item) => item.join("="))
      .join("&");
    const res = await axios.get(`${omdbapiUrl}&${paramString}`);
    return res.data.Search;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error?.response?.message || error?.message || error);
  }
});

export const getMovieByImdb = createAsyncThunk("omdbapi/getMovieByImdb", async (i, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${omdbapiUrl}&i=${i}`);
    return res.data;
  } catch (error) {
    rejectWithValue(error?.response?.message || error?.message);
  }
});

const omdbapiSlice = createSlice({
  name: "omdbapi",
  initialState: {
    data: null,
    status: "idle",
    error: null,
    dataImdb: null,
    statusImdb: "idle",
    errorImdb: null,
    params: {},
    s: "",
    type: "",
    y: "",
    plot: "",
  },
  reducers: {
    reset(state) {
      state.params = {};
      state.s = "";
      state.type = "";
      state.y = "";
      state.plot = "";
    },
    setParams(state, action) {
      state.params = { ...state.params, ...action.payload };
    },
    emptyDataImdb(state) {
      state.dataImdb = null;
    },
    setS(state, action) {
      state.s = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setY(state, action) {
      state.y = action.payload;
    },
    setPlot(state, action) {
      state.plot = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getMovieByImdb.pending, (state) => {
        state.statusImdb = "loading";
      })
      .addCase(getMovieByImdb.fulfilled, (state, action) => {
        state.statusImdb = "succeeded";
        state.dataImdb = action.payload;
      })
      .addCase(getMovieByImdb.rejected, (state, action) => {
        state.statusImdb = "failed";
        state.errorImdb = action.payload;
      });
  },
});

export const { setParams, emptyDataImdb, setS, setY, setType, setPlot, reset } = omdbapiSlice.actions;

export default omdbapiSlice.reducer;
