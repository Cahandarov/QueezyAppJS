import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createQuizModal: false,
  createQuizSecondModal: false,
  setQuestionsPage: false,
};

const createQuizSlice = createSlice({
  name: "addQuiz",
  initialState,
  reducers: {
    setCreateQuizModal(state, action) {
      state.createQuizModal = action.payload;
    },
    setCreateQuizSecondModal(state, action) {
      state.createQuizSecondModal = action.payload;
    },
    setSetQuestionsPage(state, action) {
      state.setQuestionsPage = action.payload;
    },
  },
});
export const {
  setCreateQuizModal,
  setCreateQuizSecondModal,
  setSetQuestionsPage,
} = createQuizSlice.actions;
export default createQuizSlice.reducer;
