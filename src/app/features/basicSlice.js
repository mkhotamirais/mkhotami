import { createSlice } from "@reduxjs/toolkit";

const basicSlice = createSlice({
  name: "basic",
  initialState: {
    dark: JSON.parse(localStorage.getItem("mkhotamiVercelDark")) || false,
    openNav: false,
    openSidebar: false,
    openBubble: false,
  },
  reducers: {
    toggleDark(state) {
      state.dark = !state.dark;
      localStorage.setItem("mkhotamiVercelDark", JSON.stringify(state.dark));
    },
    removeDark(state) {
      state.dark = false;
      localStorage.setItem("mkhotamiVercelDark", JSON.stringify(state.dark));
    },
    toggleOpenNav(state) {
      state.openNav = !state.openNav;
    },
    removeOpenNav(state) {
      state.openNav = false;
    },
    toggleOpenSidebar(state) {
      state.openSidebar = !state.openSidebar;
    },
    removeOpenSidebar(state) {
      state.openSidebar = false;
    },
    toggleOpenBubble(state) {
      state.openBubble = !state.openBubble;
    },
    removeOpenBubble(state) {
      state.openBubble = false;
    },
  },
});

export const {
  toggleDark,
  removeDark,
  toggleOpenNav,
  removeOpenNav,
  toggleOpenSidebar,
  removeOpenSidebar,
  toggleOpenBubble,
  removeOpenBubble,
} = basicSlice.actions;
export default basicSlice.reducer;
