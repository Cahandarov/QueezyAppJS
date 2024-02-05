import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const createFavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites(state, action) {
      state.favorites = [...state, action.payload];
    },
  },
});
export const { setFavorites } = createFavoritesSlice.actions;
export default createFavoritesSlice.reducer;
