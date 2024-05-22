import { createSlice } from "@reduxjs/toolkit";

const kamusSlice = createSlice({
  name: "kamus",
  initialState: {
    queryObject: {},
    queryObjectString: "",
    querySortObj: {},
    querySortString: "",
    queryResult: "",
  },
  reducers: {
    setQueryObject(state, action) {
      state.queryObject = { ...state.queryObject, ...action.payload };
      let result = Object.entries(state.queryObject)
        .map((item) => item.join("="))
        .join("&");
      state.queryObjectString = result;
    },
    setQueryResult(state) {
      state.queryResult = state.queryObjectString;
    },
    setQuerySortObj(state, action) {
      state.querySortObj = { ...state.querySortObj, ...action.payload };
      let result = Object.values(state.querySortObj)
        .filter((item) => item !== "")
        .join(" ");
      if (result === "") result = "name";
      state.querySortString = result;
    },
  },
});

export const { setQueryObject, setQueryResult, setQuerySortObj } = kamusSlice.actions;
export default kamusSlice.reducer;
