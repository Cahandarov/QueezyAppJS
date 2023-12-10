import SignUpMain from "./SignUpMain";
import SignUpAddEmail from "./SignUpAddEmail";
import SignUpAddPassword from "./SignUpAddPassword";
import SignUpAddNameAndSurname from "./SignUpAddNameAndSurname";
import SignUpAddCountry from "./SignUpAddCountry";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { MyContext } from "./SignUpContext";

export default function SignUp() {
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
