import { createSlice } from "@reduxjs/toolkit";
import { eng } from "./languageData";

const initialState = {
  language: "eng",
  languageArray: [eng],
};

const createLanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setLanguageArray(state, action) {
      state.languageArray = action.payload;
    },
  },
});
export const { setLanguage, setLanguageArray } = createLanguageSlice.actions;
export default createLanguageSlice.reducer;
