import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipesSlice";
import favSlice from "./favSlice";

const store = configureStore({
  reducer: {
    recipe: recipesSlice,
    fav: favSlice,
  },
});

export default store;
