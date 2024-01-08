import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [],
};

const favslice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action);
      console.log(action.payload);
      console.log("i got called in favslice");

      // Create a new state object instead of mutating the existing one
      //   return {
      //     ...state,
      //     all: [...state.all, action.payload],
      //   };
      state.all.push(action.payload);
    },
    remove: (state, action) => {
      console.log(action);
      console.log(action.payload);
      console.log("i got called in favslice remove");

      // Create a new state object instead of mutating the existing one
      //   return {
      //     ...state,
      //     all: [...state.all, action.payload],
      //   };
      // state.all.pop(action.payload);
      state.all = action.payload;
    },
  },
});

export const { add, remove } = favslice.actions;
export default favslice.reducer;
