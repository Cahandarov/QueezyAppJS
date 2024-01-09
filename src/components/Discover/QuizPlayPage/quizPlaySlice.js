import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizPlayStatus: "ready",
  index: 0,
};

const quizPlaySlice = createSlice({
  name: "quizPlay",
  initialState,
  reducers: {
    setQuizPlayStatus(state, action) {
      state.quizPlayStatus = action.payload;
    },
    setChangeQuizIndex(state, action) {
      state.index = action.payload;
    },
  },
});
export const { setQuizPlayStatus, setChangeQuizIndex } = quizPlaySlice.actions;
export default quizPlaySlice.reducer;
