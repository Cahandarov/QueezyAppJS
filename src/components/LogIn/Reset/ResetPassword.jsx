import ResetAddEmail from "./ResetAddEmail";
import ResetAddAndConfirmPassword from "./ResetAddAndConfirmPassword";
import { useSelector } from "react-redux";

export default function ResetPassword() {
  const ResetEmail = useSelector(
    (state) => state.ResetPassword.ResetPasswordStages === "ResetEmail"
  );
  const ResetPassword = useSelector(
    (state) => state.ResetPassword.ResetPasswordStages === "ResetPassword"
  );
  return (
    <div className="flex flex-col mx-auto items-center justify-center lg:items-start lg:justify-start w-full h-full lg:w-[50%] ">
      {ResetEmail && <ResetAddEmail />}
      {ResetPassword && <ResetAddAndConfirmPassword />}
    </div>
  );
}
