import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./components/ui/SideMenu";
import RigthComponent from "./components/ui/RigthComponent";
import Login from "./components/LogIn/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "./components/Mobile/mobileSlice";
import { getQuizzesThunk } from "./components/QuizLibary/quizzesSlice";
import { useEffect } from "react";
import { setLogoutModal } from "./components/ui/uiSlice";
import Loader from "./components/ui/Loader";

function App() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  useEffect(() => {
    dispatch(getQuizzesThunk());
  }, [quizzes.length]);
  const getQuizzesStatus = useSelector(
    (state) => state.quizzes.GetQuizzes_status
  );
  const showSideBar = useSelector((state) => state.mobile.showSidebar);
  const isLogined = useSelector((state) => state.login.isLogined);
  const isRegistered = useSelector((state) => state.login.isRegistered);
  const sideBarPage = useSelector((state) => state.ui.sideBarPage);
  const rigthComponentPage = useSelector(
    (state) => state.ui.rigthComponentPage
  );

  function handleMobileMenu() {
    if (showSideBar) {
      dispatch(setShowSidebar(false));
    }
  }
  if (getQuizzesStatus === "loading") {
    return <Loader />;
  }

  function handleContainerClick() {
    handleMobileMenu();
    dispatch(setLogoutModal(false));
  }

  return (
    <Router>
      {isLogined && isRegistered ? (
        <div
          className={`container flex w-full max-h-fit ${
            sideBarPage ? "min-h-[1190px]" : ""
          }`}
          onClick={() => handleContainerClick()}
        >
          {sideBarPage && <SideMenu />}
          {rigthComponentPage && <RigthComponent />}
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
