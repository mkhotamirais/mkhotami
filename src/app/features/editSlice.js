import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
  name: "edit",
  initialState: {
    isEditCat: null,
    isEditTag: null,
  },
  reducers: {
    setIsEditCat(state, action) {
      state.isEditCat = action.payload;
    },
    setIsEditTag(state, action) {
      state.isEditTag = action.payload;
    },
  },
});

export const { setIsEditCat, setIsEditTag } = editSlice.actions;
export default editSlice.reducer;
