import { configureStore } from "@reduxjs/toolkit";
import basicReducer from "./features/basicSlice";
import todoReducer from "./features/todoSlice";
import omdbapiReducer from "./public-api/omdbapiSlice";
import jpReducer from "./public-api/jpSlice";
import fksapiReducer from "./public-api/fksapiSlice";
import siskoReducer from "./public-api/siskoSlice";
import newsapiReducer from "./public-api/newsapiSlice";
import authReducer from "./features/authSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    basic: basicReducer,
    todo: todoReducer,
    omdbapi: omdbapiReducer,
    jp: jpReducer,
    fksapi: fksapiReducer,
    sisko: siskoReducer,
    newsapi: newsapiReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
