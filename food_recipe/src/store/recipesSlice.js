import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const recipesSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    getting: (state, action) => {
      console.log(action);
      console.log(action.payload);
      console.log("i got called");
      state.list.unshift(action.payload.data.recipes);
    },
  },
});

export const { getting } = recipesSlice.actions;

export default recipesSlice.reducer;
