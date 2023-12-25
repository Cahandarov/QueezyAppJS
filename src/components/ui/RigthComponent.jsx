import { Routes, Route } from "react-router-dom";
import { MenuData } from "./MenuData";
import Login from "../LogIn/Login";
import SignUp from "../LogIn/SignUp/SignUp";
import ResetPassword from "../LogIn/Reset/ResetPassword";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function RigthComponent() {
  return (
    <div className="flex flex-col h-full w-full lg:w-[81.67%] lg:h-full">
      <Routes>
        {MenuData.map((e, index) => (
          <Route path={e.path} element={e.component} key={index} />
        ))}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
