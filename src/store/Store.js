import { configureStore } from "@reduxjs/toolkit";
import { propertyApi } from "../utils/api";
import propertyReducer from "./propertySlice";

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertyApi.middleware),
});

export default store;
