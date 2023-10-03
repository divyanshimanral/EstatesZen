// propertySlice.js
import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "properties",
  initialState: [],
  reducers: {
    setProperties: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProperties } = propertySlice.actions;
export default propertySlice.reducer;
