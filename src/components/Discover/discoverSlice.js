import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discoverMainPage: true,
  quizDetailsPage: false,
  quizPlayPage: false,
  selectedQuiz: null,
  endOfQuizModule: false,
  reviewAnswerModule: false,
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
    setEndOfQuizModule(state, action) {
      state.endOfQuizModule = action.payload;
    },
    setReviewAnswerModule(state, action) {
      state.reviewAnswerModule = action.payload;
    },
  },
});
export const {
  setDiscoverMainPage,
  setQuizDetailsPage,
  setQuizPlayPage,
  setSelectedQuiz,
  setEndOfQuizModule,
  setReviewAnswerModule,
} = createDiscoverSlice.actions;
export default createDiscoverSlice.reducer;
