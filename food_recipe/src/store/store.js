import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipesSlice";

const store = configureStore({
  reducer: {
    recipe: recipesSlice,
  },
});

export default store;
