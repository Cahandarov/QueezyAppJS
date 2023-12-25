import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./components/ui/SideMenu";
import RigthComponent from "./components/ui/RigthComponent";
import Login from "./components/LogIn/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "./components/Mobile/mobileSlice";
import { getQuizzesThunk } from "./components/QuizLibary/quizzesSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuizzesThunk());
  }, [dispatch]);
  const getQuizzesStatus = useSelector(
    (state) => state.quizzes.GetQuizzes_status
  );
  const showSideBar = useSelector((state) => state.mobile.showSidebar);
  const isLogined = useSelector((state) => state.login.isLogined);
  const isRegistered = useSelector((state) => state.login.isRegistered);
  function handleMobileMenu() {
    if (showSideBar) {
      dispatch(setShowSidebar(false));
    }
  }
  if (getQuizzesStatus === "loading") {
    return <p>Loading...</p>;
  }
  return (
    <Router>
      {isLogined && isRegistered ? (
        <div
          className="container flex w-full max-h-fit min-h-[1190px]"
          onClick={() => handleMobileMenu()}
        >
          <SideMenu />
          <RigthComponent />
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
