import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discoverMainPage: true,
  quizDetailsPage: false,
  quizPlayPage: false,
  selectedQuiz: null,
};

const createDiscoverSlice = createSlice({
  name: "discover",
  initialState,
  reducers: {
    setDiscoverMainPage(state, action) {
      state.discoverMainPage = action.payload;
    },
    setQuizDetailsPage(state, action) {
      state.quizDetailsPage = action.payload;
    },
    setQuizPlayPage(state, action) {
      state.quizPlayPage = action.payload;
    },
    setSelectedQuiz(state, action) {
      state.selectedQuiz = action.payload;
    },
  },
});
export const {
  setDiscoverMainPage,
  setQuizDetailsPage,
  setQuizPlayPage,
  setSelectedQuiz,
} = createDiscoverSlice.actions;
export default createDiscoverSlice.reducer;
