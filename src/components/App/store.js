import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { getDataThunk } from '../LogIn/userDataSlice';
import languageReducer from "../ui/languageSlice";
import userReducer from "../LogIn/userSlice";
import userDataReducer from "../LogIn/userSlice";
import SignUpReducer from "../LogIn/userSlice";
import PasswordStagesReducer from "../LogIn/userSlice";
import ForgotPasswordReducer from "../LogIn/userSlice";
import newUserReducer from "../LogIn/userSlice";
import mobileReducer from "../Mobile/mobileSlice";
import createQuizReducer from "../QuizLibary/createQuizSlice";
import quizDataReducer from "../QuizLibary/quizzesSlice";
import discoverReducer from "../Discover/discoverSlice";
import dashboardReducer from "../Dashboard/dashboardSlice";
import uiReducer from "../ui/uiSlice";
import quizPlayReducer from "../Discover/QuizPlayPage/quizPlaySlice";
import settingsReducer from "../Settings/settingsSlice";
import favoritesReducer from "../QuizLibary/favoritesSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    login: userReducer,
    userData: userDataReducer,
    SignUpStages: SignUpReducer,
    ForgotPassword: ForgotPasswordReducer,
    ResetPassword: PasswordStagesReducer,
    AddUser: newUserReducer,
    mobile: mobileReducer,
    addQuiz: createQuizReducer,
    quizzes: quizDataReducer,
    discover: discoverReducer,
    dashboard: dashboardReducer,
    ui: uiReducer,
    quizPlay: quizPlayReducer,
    settings: settingsReducer,
    favorites: favoritesReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(getDataThunk),
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
