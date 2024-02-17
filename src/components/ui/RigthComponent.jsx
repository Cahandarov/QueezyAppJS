import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { MenuData } from "./MenuData";
import Login from "../LogIn/Login";
import SignUp from "../LogIn/SignUp/SignUp";
import ResetPassword from "../LogIn/Reset/ResetPassword";
import ErrorPage from "../ErrorPage/ErrorPage";
import Profile from "../Profile/Profile";
import Dashboard from "../Dashboard/Dashboard";
import Discover from "../Discover/Discover";
import QuizLibrary from "../QuizLibary/QuizLibrary";
import Settings from "../Settings/Settings";
import Leaderboard from "../LeaderBoard/Leaderboard";
import QuizDetails from "../Discover/QuizDetails";
import DiscoverMain from "../Discover/DiscoverMain";
import QuizPlayPage from "../Discover/QuizPlayPage/QuizPlayPage";
import QuizLibraryMain from "../QuizLibary/QuizLibraryMain/QuizLibraryMain";
import QuizSettings from "../QuizLibary/QuizSettings/QuizSettings";
// import { useLayoutEffect } from "react";

export default function RigthComponent() {
  // const navigate = useNavigate();
  // useLayoutEffect(() => {
  //   if (window.location.pathname !== "/") {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <div className="flex flex-col h-full w-full lg:w-[81.67%] lg:h-full">
      <Routes>
        {/* {MenuData.map((e, index) => (
          <Route path={e.path} element={e.component} key={index} />
        ))} */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/discover" element={<Discover />}>
          <Route index element={<Navigate replace to="discovermain" />} />
          <Route path="discovermain" element={<DiscoverMain />} />
          <Route path="quizDetails" element={<QuizDetails />} />
          <Route path="quizPlay" element={<QuizPlayPage />} />
        </Route>
        <Route path="/quizlibrary" element={<QuizLibrary />}>
          <Route index element={<Navigate replace to="quizlibrarymain" />} />
          <Route path="quizlibrarymain" element={<QuizLibraryMain />} />
          <Route path="quizsettings" element={<QuizSettings />} />
        </Route>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
