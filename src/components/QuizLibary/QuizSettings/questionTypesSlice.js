import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionType: "Multiple Answer",
};

const questionTypesSlice = createSlice({
  name: "questionType",
  initialState,
  reducers: {
    setQuestionType(state, action) {
      state.questionType = action.payload;
    },
  },
});
export const { setQuestionType } = questionTypesSlice.actions;
export default questionTypesSlice.reducer;
