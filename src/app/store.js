import { configureStore } from "@reduxjs/toolkit";
import basicReducer from "./features/basicSlice";
import todoReducer from "./features/todoSlice";
import omdbapiReducer from "./client-app/omdbapiSlice";
import jpReducer from "./client-app/jpSlice";
import fksapiReducer from "./client-app/fksapiSlice";
import siskoReducer from "./client-app/siskoSlice";
import newsapiReducer from "./client-app/newsapiSlice";
import authReducer from "./features/authSlice";
import editReducer from "./features/editSlice";
import kamusReducer from "./features/kamusSlice";
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
    edit: editReducer,
    kamus: kamusReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
