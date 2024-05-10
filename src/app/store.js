import { configureStore } from "@reduxjs/toolkit";
import basicReducer from "./features/basicSlice";
import todoReducer from "./features/todoSlice";
import omdbapiReducer from "./public-api/omdbapiSlice";

export const store = configureStore({
  reducer: {
    basic: basicReducer,
    todo: todoReducer,
    omdbapi: omdbapiReducer,
  },
});
