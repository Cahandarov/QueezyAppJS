import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizPlayStatus: "ready",
  //ready, playing, ended
  index: 0,
  liveQuizzes: [],
  runningTime: 0,
  answer: null,
  gainedPoints: 0,
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
    setLiveQuizzes(state, action) {
      state.liveQuizzes = action.payload;
    },
    setRunningTime(state, action) {
      state.runningTime = action.payload;
    },
    setAnswer(state, action) {
      state.answer = action.payload;
    },
    setGainedPoints(state, action) {
      state.gainedPoints = action.payload;
    },
  },
});
export const {
  setQuizPlayStatus,
  setChangeQuizIndex,
  setLiveQuizzes,
  setRunningTime,
  setAnswer,
  setGainedPoints,
} = quizPlaySlice.actions;
export default quizPlaySlice.reducer;
