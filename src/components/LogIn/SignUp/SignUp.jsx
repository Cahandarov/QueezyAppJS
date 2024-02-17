import SignUpMain from "./SignUpMain";
import SignUpAddEmail from "./SignUpAddEmail";
import SignUpAddPassword from "./SignUpAddPassword";
import SignUpAddNameAndSurname from "./SignUpAddNameAndSurname";
import SignUpAddCountry from "./SignUpAddCountry";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { MyContext } from "./SignUpContext";
import { format } from "date-fns";
import {
  postNewUserThunk,
  setAddUser,
  setLoginStatus,
  setRegisteredStatus,
  setSignUpStages,
} from "../userSlice";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      emailSignUp: "",
      passwordSignUp: "",
      countrySignUp: "",
      nameSignUp: "",
      surNameSignUp: "",
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);

      if (!formik) {
        return;
      }

      const newUser = {
        id: Date.now(),
        firstName: formik.values.nameSignUp,
        lastName: formik.values.surNameSignUp,
        email: formik.values.emailSignUp,
        password: formik.values.passwordSignUp,
        country: formik.values.countrySignUp,
        registerDate: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        lastChangeDateOfPassword: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        avatar: "",
        briefInfo: "",
        pointsTotal: [],
        favorites: [],
        badges: [],
        playedQuizzes: [],
        createdQuizzes: [],
      };
      dispatch(setAddUser(newUser));
      dispatch(postNewUserThunk(newUser));

      if (newUser) {
        localStorage.setItem("token", JSON.stringify(newUser));
        dispatch(setSignUpStages("idle"));
        dispatch(setRegisteredStatus(true));
        dispatch(setLoginStatus(true));
        navigate("/");
      } else {
        console.error("Entered user not found in userData");
      }
    },
  });

  const idle = useSelector(
    (state) => state.SignUpStages.SignUpStages === "idle"
  );
  const addEmail = useSelector(
    (state) => state.SignUpStages.SignUpStages === "addEmail"
  );
  const addPassword = useSelector(
    (state) => state.SignUpStages.SignUpStages === "addPassword"
  );
  const addCountry = useSelector(
    (state) => state.SignUpStages.SignUpStages === "addCountry"
  );
  const addNameAndSurname = useSelector(
    (state) => state.SignUpStages.SignUpStages === "addNameAndSurname"
  );

  return (
    <MyContext.Provider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full h-full lg:w-[50%] flex flex-col mx-auto items-center justify-center lg:items-start lg:justify-start  "
      >
        {idle ? (
          <SignUpMain />
        ) : addEmail ? (
          <SignUpAddEmail />
        ) : addPassword ? (
          <SignUpAddPassword />
        ) : addCountry ? (
          <SignUpAddCountry />
        ) : addNameAndSurname ? (
          <SignUpAddNameAndSurname />
        ) : (
          ""
        )}
      </form>
    </MyContext.Provider>
  );
}
