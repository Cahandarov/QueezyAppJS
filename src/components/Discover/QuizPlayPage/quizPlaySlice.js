import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizPlayStatus: "ready",
  //ready, playing, ended
  index: 0,
  liveQuizzes: [],
  playedQuizz: {},
  runningTime: 0,
  answer: null,
  gainedPointsForQuestion: 0,
  gainedPoints: 0,
  numberOfCorrectAnswers: 0,
  numberOfIncorrectAnswers: 0,
  numberOfSkippedQuestions: 0,
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
    setGainedPointsForQuestion(state, action) {
      state.gainedPointsForQuestion = action.payload;
    },
    setNumberOfCorrectAnswers(state, action) {
      state.numberOfCorrectAnswers = action.payload;
    },
    setNumberOfIncorrectAnswers(state, action) {
      state.numberOfIncorrectAnswers = action.payload;
    },
    setNumberOfSkippedQuestions(state, action) {
      state.numberOfSkippedQuestions = action.payload;
    },
    setPlayedQuizz(state, action) {
      state.playedQuizz = action.payload;
    },
  },
});
export const {
  setQuizPlayStatus,
  setChangeQuizIndex,
  setLiveQuizzes,
  setRunningTime,
  setAnswer,
  setGainedPointsForQuestion,
  setGainedPoints,
  setNumberOfCorrectAnswers,
  setNumberOfIncorrectAnswers,
  setNumberOfSkippedQuestions,
  setPlayedQuizz,
} = quizPlaySlice.actions;
export default quizPlaySlice.reducer;
