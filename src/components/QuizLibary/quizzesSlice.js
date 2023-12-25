import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  quizzes: [],
  GetQuizzes_status: "idle",
  newQuiz: "",
  AddQuiz_status: "idle",
};

async function getQuizData() {
  try {
    const response = await axios.get("http://localhost:3000/quizData");
    // console.log(response.data.categories);
    console.log("Categories:", response && response.data.categories);
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return null;
  }
}

export const getQuizzesThunk = createAsyncThunk("quiz/fetchData", async () => {
  const quizzes = await getQuizData();
  return quizzes;
});

async function addQuiz(newQuiz) {
  try {
    const response = await axios.post(
      "http://localhost:3000/quizData",
      newQuiz
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting quiz data:", error);
    return null;
  }
}

export const postNewQuizThunk = createAsyncThunk(
  "quiz/postData",
  async (newQuiz) => {
    const quizzes = await addQuiz(newQuiz);
    return quizzes;
  }
);

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setAddQuiz(state, action) {
      const newQuiz = action.payload;
      state.quizzes = [...state.quizzes, ...newQuiz];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getQuizzesThunk.pending, (state) => {
        state.GetQuizzes_status = "loading";
      })
      .addCase(getQuizzesThunk.fulfilled, (state, action) => {
        state.GetQuizzes_status = "succeeded";
        state.quizzes = action.payload;
      })
      .addCase(getQuizzesThunk.rejected, (state) => {
        state.GetQuizzes_status = "failed";
      });
  },
});
export const { setAddQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
