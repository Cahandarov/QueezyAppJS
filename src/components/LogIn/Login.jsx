import LoginRigth from "./LoginRigth";
import LoginMain from "./LoginMain";
import { useDispatch, useSelector } from "react-redux";
import { getDataThunk } from "./userSlice";
import { useEffect } from "react";
import SignUp from "./SignUp/SignUp";
import ResetPassword from "./Reset/ResetPassword";

export default function Login() {
  const status = useSelector((state) => state.login.status);
  const isForgotPassword = useSelector(
    (state) => state.ResetPassword.isForgotPassword
  );
  const isRegistered = useSelector((state) => state.login.isRegistered);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(getDataThunk());
    }
  }, [dispatch, status]);
  return (
    <div className="w-full max-h-max h-full sm:min-h-screen flex flex-col items-center gap-6 py-6 lg:flex-row md:10 lg:pl-20 xl:pl-[8.56rem] lg:items-start lg:justify-between bg-[#EFEEFC]">
      {isForgotPassword ? (
        <ResetPassword />
      ) : isRegistered ? (
        <LoginMain />
      ) : (
        <SignUp />
      )}
      <LoginRigth />
    </div>
  );
}
