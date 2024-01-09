import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizLibraryMainPage: true,
  createQuizModal: false,
  createQuizSecondModal: false,
  setQuestionsPage: false,
  setQuestionsLastPage: false,
  questionType: "Multiple Answer",
};

const createQuizSlice = createSlice({
  name: "addQuiz",
  initialState,
  reducers: {
    setQuizLibraryMainPage(state, action) {
      state.quizLibraryMainPage = action.payload;
    },
    setCreateQuizModal(state, action) {
      state.createQuizModal = action.payload;
    },
    setCreateQuizSecondModal(state, action) {
      state.createQuizSecondModal = action.payload;
    },
    setSetQuestionsPage(state, action) {
      state.setQuestionsPage = action.payload;
    },
    setSetQuestionsLastPage(state, action) {
      state.setQuestionsLastPage = action.payload;
    },
    setQuestionType(state, action) {
      state.questionType = action.payload;
    },
  },
});
export const {
  setQuizLibraryMainPage,
  setCreateQuizModal,
  setCreateQuizSecondModal,
  setSetQuestionsPage,
  setSetQuestionsLastPage,
  setQuestionType,
} = createQuizSlice.actions;
export default createQuizSlice.reducer;
